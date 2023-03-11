import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserType } from 'data/@types/UserInteface';
import UserProfileAvatar from './UserProfileAvatar';

export default {
  title: 'data-display/UserProfileAvatar',
  component: UserProfileAvatar,
} as ComponentMeta<typeof UserProfileAvatar>;

const Template: ComponentStory<typeof UserProfileAvatar> = (args) => (
  <UserProfileAvatar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  user: {
    nome_completo: 'Tales de Carvalho',
    nascimento: '1979-05-27',
    cpf: '99999999999',
    email: 'tales43@gmail.com',
    foto_usuario: 'https://github.com/tales-fsa.png',
    telefone: '(75)99999-9999',
    tipo_usuario: UserType.Cliente,
    reputacao: 0,
    password: '',
    chave_pix: '',
  },
};
