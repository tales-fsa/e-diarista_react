import { CidadeInterface } from 'data/@types/EnderecoInterface';
import { LocationService } from 'data/services/LocationService';
import { useEffect, useState } from 'react';
//import { CidadeInterface } from '../components/inputs/UserForm/forms/EnderecoInterface';

export default function useCities(estado: string): CidadeInterface[] {
  const [listaCidades, setListaCidades] = useState<CidadeInterface[]>([]);

  useEffect(() => {
    if (estado) {
      setListaCidades([]);
      LocationService.cidades(estado).then((listaCidades) => {
        listaCidades && setListaCidades(listaCidades);
      });
    }
  }, [estado]);

  return listaCidades;
}
