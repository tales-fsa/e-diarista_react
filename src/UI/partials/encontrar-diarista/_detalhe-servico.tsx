import { Button, Container, Divider, Tooltip, Typography } from '@mui/material';
import { ServicoInterface } from 'data/@types/ServicoInterface';
import React, { PropsWithChildren } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import ItemCounter from 'UI/components/inputs/ItemCounter/ItemCounter';
import ToogleButtonGroup, {
  ToogleButton,
} from 'UI/components/inputs/ToggleButtonGroup/ToggleButtonGroup';
import { AddressForm } from 'UI/components/inputs/UserForm/UserForm';
import { ItemsContainer } from './_detalhe-servico.styled';
import TextFieldMask from 'UI/components/inputs/TextFieldMask/TextFieldMask';
import TextField from 'UI/components/inputs/TextField/TextField';
import { FormValues } from 'data/@types/forms/FormValue';

interface DetalheServicoProps {
  servicos: ServicoInterface[];
  comodos?: number;
  podemosAtender?: boolean;
}

export const houseParts = [
  {
    singular: 'Cozinha',
    plural: 'Cozinhas',
    name: 'quantidade_cozinhas',
  },
  {
    singular: 'Sala',
    plural: 'Salas',
    name: 'quantidade_salas',
  },
  {
    singular: 'Banheiro',
    plural: 'Banheiros',
    name: 'quantidade_banheiros',
  },
  {
    singular: 'Quarto',
    plural: 'Quartos',
    name: 'quantidade_quartos',
  },
  {
    singular: 'Quintal',
    plural: 'Quintais',
    name: 'quantidade_quintais',
  },
  {
    singular: 'Outros',
    plural: 'Outros',
    name: 'quantidade_outros',
  },
];

const DetalheServico: React.FC<DetalheServicoProps> = ({
  servicos = [],
  comodos = 0,
  podemosAtender,
}) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <div>
      <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
        Qual tipo de limpeza você precisa?
      </Typography>
      <Controller
        name={'faxina.servico'}
        defaultValue={servicos[0]?.id}
        control={control}
        render={({ field }) => (
          <ToogleButtonGroup
            exclusive
            value={field.value}
            onChange={(_event, value) =>
              field.onChange(value ?? servicos[0]?.id)
            }
          >
            {servicos.map((servico) => (
              <ToogleButton key={servico.id} value={servico.id}>
                <i className={servico.icone ?? 'twf-cleaning-1'} />
                {servico.nome}
              </ToogleButton>
            ))}
          </ToogleButtonGroup>
        )}
      />
      <Divider sx={{ my: 5 }} />
      <Typography sx={{ fontWeight: 'bold', mb: 2 }}>
        Qual o tamanho da sua casa?
      </Typography>
      <ItemsContainer>
        {houseParts.map((item) => (
          <Controller
            key={item.name}
            name={`faxina.${item.name}` as any}
            defaultValue={0}
            control={control}
            render={({ field }) => (
              <ItemCounter
                label={item.singular}
                plural={item.plural}
                counter={field.value as number}
                onInc={() => field.onChange((field.value as number) + 1)}
                onDec={() =>
                  field.onChange(Math.max(0, (field.value as number) - 1))
                }
              />
            )}
          />
        ))}
      </ItemsContainer>
      <Divider sx={{ my: 5 }} />
      <Typography sx={{ fontWeight: 'bold', mb: 2 }}>
        Qual data você gostaria de receber o/a diarista?
      </Typography>
      <ItemsContainer>
        <Controller
          name={'faxina.data_atendimento'}
          defaultValue={''}
          control={control}
          render={({ field: { ref, ...inputProps } }) => (
            <TextFieldMask
              {...inputProps}
              inputRef={ref}
              mask={'99/99/9999'}
              label={'Data'}
              error={errors?.faxina?.data_atendimento != undefined}
              helperText={errors?.faxina?.data_atendimento?.message}
            />
          )}
        />
        <Controller
          name={'faxina.hora_inicio'}
          defaultValue={'00:00'}
          control={control}
          render={({ field: { ref, ...inputProps } }) => (
            <TextFieldMask
              {...inputProps}
              inputRef={ref}
              mask={'99:99'}
              label={'Hora Início'}
              error={errors?.faxina?.hora_inicio != undefined}
              helperText={errors?.faxina?.hora_inicio?.message}
            />
          )}
        />
        <Controller
          name={'faxina.hora_termino'}
          defaultValue={''}
          control={control}
          render={({ field: { ref, ...inputProps } }) => (
            <Tooltip title={'Campo Automático'}>
              <div>
                <TextFieldMask
                  {...inputProps}
                  inputProps={{ readOnly: true, disable: 'true' }}
                  inputRef={ref}
                  mask={'99:99'}
                  label={'Hora Término'}
                  error={errors?.faxina?.hora_termino != undefined}
                  helperText={errors?.faxina?.hora_termino?.message}
                  fullWidth
                />
              </div>
            </Tooltip>
          )}
        />
      </ItemsContainer>
      <Divider sx={{ my: 5 }} />
      <Typography sx={{ fontWeight: 'bold', pb: 2 }}>Observações</Typography>
      <TextField
        label={'Quer acrescentar algum detalhe?'}
        {...register('faxina.observacoes')}
        required={false}
        fullWidth
        multiline
      />
      <Divider sx={{ my: 5 }} />
      <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
        Qual endereço será realizada a limpeza?
      </Typography>
      <AddressForm />
      {!podemosAtender && (
        <Typography color={'error'} align={'center'} sx={{ pb: 2 }}>
          Infelizmente ainda não atendemos na sua região
        </Typography>
      )}
      <Container sx={{ textAlign: 'right' }}>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={comodos === 0 || !podemosAtender}
        >
          Ir para identificação
        </Button>
      </Container>
    </div>
  );
};

export default DetalheServico;
