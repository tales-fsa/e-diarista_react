import { ApiLinksInterface } from './ApiLinksInterface';

export interface UserInterface {
  id?: number;
  password_comfirmation?: string;
  new_password?: string;
  tipo_usuario: UserType;
  password?: string;
  last_login?: string;
  nome_completo: string;
  cpf: string;
  nascimento: string | Date;
  email: string;
  foto_usuario?: string;
  foto_documento?: string;
  telefone?: string;
  reputacao?: number;
  chave_pix: string;
  token?: {
    access: string;
    refresh: string;
  };
  links?: ApiLinksInterface[];
}

export interface UserShortInforrmationInterface {
  nome_completo: string;
  foto_usuario?: string;
  reputacao?: number;
  cidade: string;
}

export interface BuscaCepResponse {
  diaristas: UserShortInforrmationInterface[];
  quantidade_diaristas: number;
}

export enum UserType {
  Cliente = 1,
  Diarista = 2,
}
