import { Container, ListItem, ListItemAvatar } from '@mui/material';
import React from 'react';
import {
  AvatarStyled,
  GradientBackground,
  ListDivider,
  ListItemTextStyled,
  ListStyle,
  SectionTitle,
} from './_advantages.styled';

const Advantages = () => {
  const advantagesList = [
    {
      icon: 'twf-woman',
      title: 'Diversidade',
      description: 'São mais de 5.000 profissionais esperando por você!',
    },
    {
      icon: 'twf-certificate',
      title: 'Confiabilidade',
      description: 'Todos os profissionais são verificados',
    },
    {
      icon: 'twf-search-2',
      title: 'Rastreabilidade',
      description: 'Você podee acessar todo o histórico do(a) profissional',
    },
    {
      icon: 'twf-frame-broken',
      title: 'Segurança',
      description: 'Seguro sobre qualquer possível dano',
    },
    {
      icon: 'twf-payment',
      title: 'Controle',
      description:
        'O pagamento é realizado somente quando o(a) profissional está na sua casa',
    },
    {
      icon: 'twf-broom-bucket',
      title: 'Experiência',
      description: 'Mais de 50.000 diárias realizadas',
    },
  ];
  return (
    <GradientBackground>
      <Container>
        <SectionTitle>Por que usar o E-diarista?</SectionTitle>
        <ListStyle>
          {advantagesList.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {index !== 0 && <ListDivider />}
                <ListItem>
                  <ListItemAvatar>
                    <AvatarStyled>
                      <i className={item.icon} />
                    </AvatarStyled>
                  </ListItemAvatar>
                  <ListItemTextStyled
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItem>
              </React.Fragment>
            );
          })}
        </ListStyle>
      </Container>
    </GradientBackground>
  );
};

export default Advantages;
