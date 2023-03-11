import { FormValues } from 'data/@types/forms/FormValue';
import { UserContext } from 'data/contexts/UserContext';
import useCities from 'data/hooks/pages/useCities';
import { LocationService } from 'data/services/LocationService';
import { useContext, useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

export default function useAddressForm() {
  const {
      register,
      control,
      watch,
      setValue,
      formState: { errors },
    } = useFormContext<FormValues>(),
    { userAddress } = useContext(UserContext).userState,
    [addressState, addressCity, addressCep] = watch([
      'endereco.estado',
      'endereco.cidade',
      'endereco.cep',
    ]),
    estados = LocationService.estados(),
    listaCidades = useCities(addressState),
    opcoesCidades = useMemo(
      () => listaCidades.map((item) => item.cidade),
      [listaCidades]
    );
  useEffect(() => {
    register('endereco.codigo_ibge');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const cidade = listaCidades.find((item) => item.cidade === addressCity);
    if (cidade) {
      setValue('endereco.codigo_ibge', cidade.codigo_ibge);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressCity]);

  useEffect(() => {
    const cep = (addressCep ?? '').replaceAll('_', '');
    if (cep.length === 10) {
      LocationService.cep(cep).then((newAddress) => {
        if (newAddress) {
          newAddress.uf && setValue('endereco.estado', newAddress.uf);
          newAddress.uf && setValue('endereco.cidade', newAddress.localidade);
          newAddress.uf && setValue('endereco.codigo_ibge', newAddress.ibge);
          newAddress.uf && setValue('endereco.bairro', newAddress.bairro);
          newAddress.uf &&
            setValue('endereco.logradouro', newAddress.logradouro);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressCep]);

  return {
    addressCep,
    addressCity,
    addressState,
    register,
    estados,
    opcoesCidades,
    control,
    errors,
    userAddress,
  };
}
