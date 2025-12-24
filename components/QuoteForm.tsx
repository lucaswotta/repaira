import React, { useState, useRef } from 'react';
import { Upload, Send, CheckCircle2, X, Loader2, MessageCircle } from 'lucide-react';
import { DeviceType, RepairRequest } from '../types';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<RepairRequest>({
    name: '',
    contact: '',
    deviceType: DeviceType.SMARTPHONE,
    deviceModel: '',
    description: '',
    attachment: []
  });

  // Estado para armazenar erros de validação
  const [errors, setErrors] = useState<Partial<Record<keyof RepairRequest, string>>>({});
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * Função de validação dos campos
   */
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RepairRequest, string>> = {};
    let isValid = true;

    // Nome: Min 3 chars
    if (!formData.name.trim()) {
      newErrors.name = 'O nome é obrigatório.';
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'O nome deve ter pelo menos 3 caracteres.';
      isValid = false;
    }

    // WhatsApp: Formato (XX) XXXXX-XXXX
    const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    const cleanPhone = formData.contact.replace(/\D/g, '');
    if (!formData.contact.trim()) {
      newErrors.contact = 'O WhatsApp é obrigatório para contato.';
      isValid = false;
    } else if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      newErrors.contact = 'Dígite um número válido com DDD. Ex: (11) 99999-9999';
      isValid = false;
    }

    // Modelo: Min 2 chars
    if (!formData.deviceModel.trim()) {
      newErrors.deviceModel = 'O modelo é obrigatório.';
      isValid = false;
    } else if (formData.deviceModel.trim().length < 2) {
      newErrors.deviceModel = 'Digite o modelo completo. Ex: iPhone 11';
      isValid = false;
    }

    // Descrição: Min 10 chars
    if (!formData.description.trim()) {
      newErrors.description = 'Descreva o problema.';
      isValid = false;
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Descreva com mais detalhes (mínimo 10 caracteres).';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Tratamento específico para WhatsApp com Máscara
    if (name === 'contact') {
      let valueNumeric = value.replace(/\D/g, ''); // Remove tudo que não é dígito

      // Limita a 11 dígitos (DDD + 9 dígitos)
      if (valueNumeric.length > 11) {
        valueNumeric = valueNumeric.slice(0, 11);
      }

      // Aplica a máscara (XX) XXXXX-XXXX
      let formattedValue = valueNumeric;
      if (valueNumeric.length > 2) {
        formattedValue = `(${valueNumeric.slice(0, 2)}) ${valueNumeric.slice(2)}`;
      }
      if (valueNumeric.length > 7) {
        formattedValue = `(${valueNumeric.slice(0, 2)}) ${valueNumeric.slice(2, 7)}-${valueNumeric.slice(7)}`;
      }

      setFormData(prev => ({ ...prev, [name]: formattedValue }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []) as File[];
    if (files.length > 0) {

      // Validação: Quantidade
      if (formData.attachment.length + files.length > 2) {
        setFileError("Você só pode enviar até 2 fotos.");
        return;
      }

      // Validação: Tamanho (5MB)
      for (let file of files) {
        if (file.size > 5 * 1024 * 1024) {
          setFileError(`A foto ${file.name} excede o limite de 5MB.`);
          return;
        }
      }

      setFileError(null);
      setFormData(prev => ({ ...prev, attachment: [...prev.attachment, ...files] }));

      const newUrls = files.map(file => URL.createObjectURL(file));
      setPreviewUrls(prev => [...prev, ...newUrls]);
    }
  };

  /**
   * Remove uma foto específica
   */
  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachment: prev.attachment.filter((_, i) => i !== index)
    }));
    setPreviewUrls(prev => {
      // Revoke URL para liberar a memória
      URL.revokeObjectURL(prev[index]);
      return prev.filter((_, i) => i !== index);
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  /**
   * Envia os dados do formulário para a API SteinHQ (Google Sheets).
   */
  const handleOrcamento = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const sheetName = 'Página1';

      // Preparar nomes dos arquivos para a coluna 'fotos'
      const arquivos = formData.attachment.map(f => f.name).join(', ') || 'Sem fotos';

      const payload = {
        nome: formData.name,
        whatsapp: formData.contact,
        dispositivo: formData.deviceType,
        modelo: formData.deviceModel,
        problema: formData.description,
        fotos: arquivos,
        data: new Date().toLocaleString('pt-BR')
      };

      const response = await fetch(`https://api.steinhq.com/v1/storages/694b4109affba40a622ef3e3/${sheetName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([payload]) // SteinHQ expects an array of objects
      });

      if (response.ok) {
        setSubmitted(true);
        // O formulário será limpo quando o usuário clicar em "Nova solicitação" ou podemos limpar agora se preferir
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Erro API:', response.status, errorData);
        alert(`Erro ao enviar: ${response.status}. Verifique o console para mais detalhes.`);
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      alert('Erro de conexão. Verifique sua internet.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="quote" className="py-24 bg-gradient-to-br from-violet-600 to-indigo-700">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 shadow-2xl text-center animate-in zoom-in duration-300">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-4">Recebemos seu pedido!</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Obrigado, <strong>{formData.name}</strong>. Nossa equipe técnica já recebeu sua solicitação. Vamos analisar e te chamar no WhatsApp <strong>{formData.contact}</strong> em instantes.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  contact: '',
                  deviceType: DeviceType.SMARTPHONE,
                  deviceModel: '',
                  description: '',
                  attachment: []
                });
                setPreviewUrls([]);
                setFileError(null);
              }}
              className="text-violet-600 font-bold hover:text-violet-800 underline underline-offset-4"
            >
              Nova solicitação
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-24 bg-gradient-to-br from-violet-600 to-indigo-700 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3" aria-hidden="true"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 text-white">
          <h2 className="text-blue-200 font-bold tracking-wider uppercase text-sm mb-3">Orçamento Gratuito</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">Solicite sem compromisso</h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Prefere falar agora? <a href="https://wa.me/5511999999999" className="underline font-bold hover:text-green-300">Clique aqui para ir para o WhatsApp</a> ou preencha o formulário abaixo.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
          <form onSubmit={handleOrcamento} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Seu Nome</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  maxLength={60}
                  className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-medium text-slate-900 placeholder:text-slate-400`}
                  placeholder="Ex: Maria Oliveira"
                />
                <div className="flex justify-between mt-1">
                  {errors.name ? <p className="text-red-500 text-xs font-bold ml-1">{errors.name}</p> : <span></span>}
                  <span className="text-xs text-slate-400">{formData.name.length}/60</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">WhatsApp</label>
                <input
                  type="tel"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleInputChange}
                  maxLength={15}
                  className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.contact ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-medium text-slate-900 placeholder:text-slate-400`}
                  placeholder="Ex: (11) 99999-9999"
                />
                {errors.contact && <p className="text-red-500 text-xs mt-1 font-bold ml-1">{errors.contact}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Tipo de Dispositivo</label>
                <div className="relative">
                  <select
                    name="deviceType"
                    value={formData.deviceType}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-medium text-slate-900 appearance-none cursor-pointer"
                  >
                    {Object.values(DeviceType).map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Modelo do Aparelho</label>
                <input
                  type="text"
                  name="deviceModel"
                  required
                  value={formData.deviceModel}
                  onChange={handleInputChange}
                  maxLength={50}
                  className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.deviceModel ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-medium text-slate-900 placeholder:text-slate-400`}
                  placeholder="Ex: iPhone 17, Notebook Samsung..."
                />
                <div className="flex justify-between mt-1">
                  {errors.deviceModel ? <p className="text-red-500 text-xs font-bold ml-1">{errors.deviceModel}</p> : <span></span>}
                  <span className="text-xs text-slate-400">{formData.deviceModel.length}/50</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Descrição do Problema</label>
              <textarea
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                maxLength={500}
                className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.description ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition font-medium text-slate-900 placeholder:text-slate-400 resize-none`}
                placeholder="Ex: A tela trincou, bateria não carrega, notebook lento..."
              />
              <div className="flex justify-between mt-1">
                {errors.description ? <p className="text-red-500 text-xs font-bold ml-1">{errors.description}</p> : <span></span>}
                <span className="text-xs text-slate-400">{formData.description.length}/500</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Foto do Aparelho (Máx 2 fotos, 5MB cada)</label>

              <div className="space-y-3">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-2 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2">
                    <img src={url} alt={`Preview ${index}`} className="h-16 w-16 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">{formData.attachment[index]?.name}</p>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-xs text-red-500 font-medium hover:underline"
                      >
                        Remover foto
                      </button>
                    </div>
                  </div>
                ))}

                {formData.attachment.length < 2 && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all group ${fileError ? 'border-red-300 bg-red-50' : 'border-slate-300 hover:border-violet-500 hover:bg-violet-50'}`}
                  >
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white transition-colors">
                      <Upload className={`h-5 w-5 ${fileError ? 'text-red-400' : 'text-slate-400 group-hover:text-violet-500'}`} />
                    </div>
                    <p className="text-sm text-slate-600 font-medium">Toque para adicionar foto</p>
                    {fileError && <p className="text-red-500 text-xs mt-2 font-bold">{fileError}</p>}
                  </div>
                )}
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                multiple
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-slate-900 text-white font-bold text-lg rounded-xl hover:bg-violet-600 transition-all shadow-lg hover:shadow-violet-500/30 flex items-center justify-center gap-2 disabled:opacity-70 transform hover:-translate-y-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin h-6 w-6" />
                  Enviando...
                </>
              ) : (
                <>
                  Solicitar Orçamento <Send className="h-5 w-5" />
                </>
              )}
            </button>

            <a
              href="https://wa.me/5511999999999"
              className="block w-full py-3 px-6 text-center text-green-600 font-bold hover:bg-green-50 rounded-xl transition-colors border border-transparent hover:border-green-100"
            >
              <span className="flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Prefiro chamar no WhatsApp
              </span>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
