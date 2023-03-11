import { Button, Divider, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { PropsWithChildren } from 'react';
import { LoginForm } from 'UI/components/inputs/UserForm/forms/LoginForm';
import NewContactForm from 'UI/components/inputs/UserForm/forms/NewContactForm';
import {
  PictureForm,
  UserDataForm,
} from 'UI/components/inputs/UserForm/UserForm';
import { LoginButtonsContainer } from './_cadastro-cliente.styled';
//import { Component } from './_cadastro-cliente.styled';

const CadastroCliente: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div>
      <Typography sx={{ fontWeight: 'bold', pb: 2 }}>Dados Pessoais</Typography>
      <UserDataForm cadastro={true} />
      <Divider sx={{ mb: 5 }} />
      <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
        Hora do self! Envie uma foto segurando o documento
      </Typography>
      <PictureForm />
      <Typography sx={{ pb: 2, pt: 1 }} variant={'body2'}>
        Essa foto não será vista por ninguém
      </Typography>
      <Divider sx={{ mb: 5 }} />
      <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
        Dados de acesso
      </Typography>
      <NewContactForm />
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          color="primary"
          type="button"
          onClick={() => onBack()}
        >
          Voltar para detalhes da diária
        </Button>
        <Button variant="contained" color="secondary" type="submit">
          Ir para pagamento
        </Button>
      </Container>
    </div>
  );
};

export const LoginCliente: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div>
      <LoginForm />
      <LoginButtonsContainer>
        <Button
          variant="outlined"
          color="primary"
          type="button"
          onClick={() => onBack()}
        >
          Voltar para detalhes da diária
        </Button>
        <Button variant="contained" color="secondary" type="submit">
          Ir para pagamento
        </Button>
      </LoginButtonsContainer>
    </div>
  );
};

export default CadastroCliente;
