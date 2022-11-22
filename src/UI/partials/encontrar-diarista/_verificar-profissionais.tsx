import { Button, CircularProgress, Container, Typography } from '@mui/material';
import useVerificarProfissionais from 'data/hooks/pages/useVerificarProfissionais.page';
import React, { PropsWithChildren } from 'react';
import PageTitle from 'UI/components/data-display/PageTitle/PageTitle';
import UserInformation from 'UI/components/data-display/UserInformation/UserInformation';
import SafeEnvironment from 'UI/components/feedback/SafeEvironment/SafeEnvironment';
import TextFieldMask from 'UI/components/inputs/TextFieldMask/TextFieldMask';
import {
  FormElementContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from './_verificar-profissionais.styled';

const VerificarProfissionais: React.FC<PropsWithChildren> = () => {
  const {
    cep,
    setCep,
    cepValido,
    error,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
    buscarProfissionais,
  } = useVerificarProfissionais();
  return (
    <>
      <SafeEnvironment />
      <PageTitle
        title='Conheça os profissionais'
        subtitle='Preencha seu endereço e veja todos os profissionais da sua localidade'
      />
      <Container sx={{ mb: 10 }}>
        <FormElementContainer>
          <TextFieldMask
            mask='99.999-999'
            label='Digite seu CEP'
            value={cep}
            onChange={(event) => setCep(event.target.value)}
            fullWidth
          />

          {error && <Typography color='error'>Cep não encontrado</Typography>}

          <Button
            variant='contained'
            color='secondary'
            disabled={!cepValido || carregando}
            sx={{ width: '220px' }}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementContainer>

        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((diarista, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={diarista.nome_completo}
                      picture={diarista.foto_usuario ?? ''}
                      rating={diarista.reputacao ?? 0}
                      description={diarista.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>
              <Container sx={{ textAlign: 'center' }}>
                {diaristasRestantes > 0 && (
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    sx={{ mt: 5 }}
                  >
                    ...e mais {diaristasRestantes}
                    {diaristasRestantes > 1
                      ? ' profissionais atendem. '
                      : ' profissional atende. '}
                  </Typography>
                )}

                <Button variant='contained' color='secondary' sx={{ mt: 5 }}>
                  Contratar um(a) profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align='center' color='textPrimary'>
              Ainda não temos nenhum(a) diarista na sua região.
            </Typography>
          ))}
      </Container>
    </>
  );
};

export default VerificarProfissionais;
