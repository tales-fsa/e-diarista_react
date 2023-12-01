import React from 'react';
import { GetStaticProps } from 'next';
import MinhasDiarias from '@partials/diarias/_minhas-diarias';
import { DiariaProvider } from 'data/contexts/DiariaContext';
import { useRouter } from 'next/router';
import DetalheDiaria from '@partials/diarias/_detalhe-diaria';
//import {} from '@styles/pages/diarias.styled';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Diárias',
    },
  };
};

const Diarias: React.FC = () => {
  const router = useRouter();

  if (router.query.id) {
    return (
      <DiariaProvider>
        <DetalheDiaria id={router.query.id as string} />
      </DiariaProvider>
    );
  }

  return (
    <DiariaProvider>
      <MinhasDiarias />
    </DiariaProvider>
  );
};

export default Diarias;
