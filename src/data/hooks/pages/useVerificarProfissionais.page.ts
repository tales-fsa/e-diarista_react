import {
  BuscaCepResponse,
  UserShortInforrmationInterface,
} from 'data/@types/UserInteface';
import { ApiService } from 'data/services/ApiService';
import { ValidationService } from 'data/services/ValidationService';
import { useMemo, useState } from 'react';

export default function useVerificarProfissionais() {
  const [cep, setCep] = useState(''),
    [error, setError] = useState(''),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiarista] = useState<UserShortInforrmationInterface[]>([]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]);

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setError('');
    try {
      const { data } = await ApiService.get<BuscaCepResponse>(
        `/api/diaristas/localidades?cep=${cep.replace(/\D/g, '')}`
      );

      setBuscaFeita(true);
      setDiarista(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
    } catch (error) {
      setError('Cep não encontrado');
    } finally {
      setCarregando(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    error,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
    buscarProfissionais,
  };
}
