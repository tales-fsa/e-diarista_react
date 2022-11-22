import React from 'react';
import { GetStaticProps } from 'next';
import VerificarProfissionais from '@partials/encontrar-diarista/_verificar-profissionais';
//import {} from '@styles/pages/encontrar-diarista.styled';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'EncontrarDiarista',
    },
  };
};

const EncontrarDiarista: React.FC = () => {
  return <VerificarProfissionais />;
};

export default EncontrarDiarista;
