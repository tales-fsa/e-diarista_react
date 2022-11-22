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
