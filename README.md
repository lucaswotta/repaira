# 🔧 Repaira

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SteinHQ](https://img.shields.io/badge/SteinHQ-00C853?style=for-the-badge&logo=google-sheets&logoColor=white)

**Site de Assistência Técnica**

</div>

---

## 📋 Sobre o Projeto

Projeto desenvolvido para a disciplina de **PPadrões Web para No Code e Low Code** do curso de **Inteligência Artificial e Automação Digital** na **UNIFECAF + Rocketseat** 🚀.

O **Repaira** é uma Landing Page de alta conversão para assistência técnica delivery. O sistema resolve o problema de **confiança e conveniência** no reparo de eletrônicos, integrando um formulário de orçamento com validação avançada diretamente a uma planilha de gestão via API.

---

## ✨ Funcionalidades

A aplicação foi projetada com foco em **Mobile-First** e **Acessibilidade (WCAG)**:

| Componente | Função | Diferencial Técnico |
|:---:|:---|:---|
| **Formulário** | **Validação em Tempo Real** | Regex para WhatsApp, limites de caracteres e upload controlado (Max 5MB) |
| **Integração** | **Google Sheets API** | Conexão sem backend (Serverless) usando SteinHQ para persistência de dados |
| **Interface** | **UX Premium** | Design responsivo com Tailwind, Glassmorphism e Gatilhos Mentais (Urgência/Prova Social) |
| **Acessibilidade** | **Inclusão** | Navegação por teclado, ARIA Labels e contraste otimizado para leitores de tela |

---

## 🎯 Aplicação de Padrões Web

O projeto demonstra domínio técnico na customização de interfaces e lógica:

### 🛡️ Validação & Segurança
- **Máscara Automática**: O campo WhatsApp formata automaticamente `(11) 99999-9999` enquanto o usuário digita.
- **Sanitização**: Prevenção de envio de arquivos maliciosos ou pesados no frontend.
- **Feedback Visual**: Estados de erro (vermelho) e sucesso (modal de confirmação) claros.

### ♿ Acessibilidade (A11y)
- **Semântica HTML5**: Uso correto de `<main>`, `<section>`, `<header>` e `<label>`.
- **ARIA Attributes**: `aria-label` em botões de ícone e `aria-hidden` em elementos decorativos.
- **Foco Gerenciado**: Garantia de que modais e menus sejam navegáveis por teclado.

---

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** (v18+)
- **NPM** ou **Yarn**

### Instalação

```bash
# Clone o repositório
git clone https://github.com/lucaswotta/repaira.git

# Acesse a pasta
cd repaira

# Instale as dependências
npm install
```

### Configuração da API (SteinHQ)

O projeto utiliza o **SteinHQ** para transformar o Google Sheets em uma API REST.
1. A url da API está definida em `components/QuoteForm.tsx`.
2. O payload segue a estrutura da planilha: `nome`, `whatsapp`, `dispositivo`, `modelo`, `problema`, `fotos`, `data`.

### Rodando Localmente

```bash
npm run dev
```

O projeto rodará em `http://localhost:5173`.

---

## 🏗️ Arquitetura

```
graph TD
    A[👤 Cliente com Defeito] -->|Acessa Landing Page| B(📱 Interface Responsiva)
    B -->|Preenche Orçamento| C{⚙️ Validação TypeScript}
    C -->|❌ Erro| D[Mensagem de Feedback]
    C -->|✅ Sucesso| E[🔄 Fetch API (SteinHQ)]
    E -->|POST Request| F[📝 Google Sheets]
    F -->|Notificação| G[👨‍🔧 Técnico Recebe Pedido]
```

---

## 🔧 Tecnologias Utilizadas

### Frontend
- **React 19**: Biblioteca para interfaces reativas.
- **TypeScript**: Tipagem estática para robustez do código.
- **Tailwind CSS**: Estilização utility-first para design rápido e responsivo.
- **Lucide React**: Ícones leves e customizáveis.

### Integração
- **Fetch API**: Comunicação assíncrona nativa do browser.
- **SteinHQ**: Gateway JSON para Google Sheets.

---

## 👨‍💻 Autor

**Lucas Wotta**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lucaswotta)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/lucaswotta)

---

## 📄 Licença

Projeto desenvolvido para a disciplina de **Padrões Web para No Code e Low Code** na **UNIFECAF + Rocketseat**.
