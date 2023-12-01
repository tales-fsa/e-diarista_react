import { DiariaInterface } from 'data/@types/DiariaInterface';
import { UserInterface } from 'data/@types/UserInteface';
import { DiariaContext } from 'data/contexts/DiariaContext';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { useContext, useEffect, useState } from 'react';

export default function useDetalhesDiaria(diariaId: string) {
  const {
      diariaState: { diarias },
    } = useContext(DiariaContext),
    [diaria, setDiaria] = useState({} as DiariaInterface),
    [cliente, setCliente] = useState({} as UserInterface),
    [diarista, setDiarista] = useState({} as UserInterface);

  useEffect(() => {
    if (diarias.length) {
      getDiaria(diarias, diariaId);
    }
  }, [diarias, diariaId]);

  async function getDiaria(diarias: DiariaInterface[], diariaId: string) {
    const diariaSelecionada = diarias.find(
      (diaria) => diaria.id === Number(diariaId)
    );

    if (diariaSelecionada) {
      ApiServiceHateoas(diariaSelecionada.links, 'self', async (request) => {
        const diariaCompleta = (await request<DiariaInterface>()).data;

        if (diariaCompleta) {
          setDiaria(diariaCompleta);
          diariaCompleta.diarista && setDiarista(diariaCompleta.diarista);
          diariaCompleta.cliente && setCliente(diariaCompleta.cliente);
        }
      });
    }
  }

  return {
    diaria,
    diarista,
    cliente,
  };
}
