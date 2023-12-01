import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserType } from 'data/@types/UserInteface';
import UserHeaderMenu from './UserHeaderMenu';

export default {
  title: 'navigation/UserHeaderMenu',
  component: UserHeaderMenu,
} as ComponentMeta<typeof UserHeaderMenu>;

const Template: ComponentStory<typeof UserHeaderMenu> = (args) => (
  <UserHeaderMenu {...args} />
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
  isMenuOpen: false,
};
