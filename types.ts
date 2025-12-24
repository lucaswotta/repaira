export enum DeviceType {
  SMARTPHONE = 'Smartphone',
  NOTEBOOK = 'Notebook',
  DESKTOP = 'Computador',
  TABLET = 'Tablet',
  CONSOLE = 'Video Game',
  OTHER = 'Outro'
}

export interface RepairRequest {
  name: string;
  contact: string;
  deviceType: DeviceType;
  deviceModel: string;
  description: string;
  attachment: File[];
}

export interface AIAnalysisResult {
  diagnosis: string;
  complexity: string;
  estimatedTime: string;
  recommendation: string;
}