import { ApiLinksInterface } from './ApiLinksInterface';
import { UserInterface } from './UserInteface';

export interface DiariaInterface {
  id?: number;
  data_atendimento: string | Date;
  hora_inicio?: string;
  hora_termino?: string;
  tempo_atendimento: number;
  preco: number;
  status?: number;
  logradouro: string;
  bairro: string;
  complemento: string;
  cep: string;
  cidade: string;
  estado: string;
  numero: string;
  codigo_ibge?: number;

  quantidade_quartos: number;
  quantidade_salas: number;
  quantidade_cozinhas: number;
  quantidade_banheiros: number;
  quantidade_outros: number;
  quantidade_quintais: number;

  observacoes?: string;

  servico: number;
  nome_servico: string;
  links: ApiLinksInterface[];

  cliente?: UserInterface;
  diarista?: UserInterface;
}

export enum DiariaStatus {
  SEM_PAGAMENTO = 1,
  PAGO = 2,
  COMFIRMADO = 3,
  CONCLUIDO = 4,
  CANCELADO = 5,
  AVALIADO = 6,
  TRANSFERIDO = 7,
}

export type TextColor =
  | 'success'
  | 'error'
  | 'warning'
  | 'primary'
  | 'secondary';
