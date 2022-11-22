import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserInformation from './UserInformation';

export default {
  title: 'data-display/UserInformation',
  component: UserInformation,
} as ComponentMeta<typeof UserInformation>;

const Template: ComponentStory<typeof UserInformation> = (args) => (
  <UserInformation {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: 'Tales de Carvalho',
  picture: 'https://github.com/tales-fsa.png',
  rating: 5,
  description: 'Web Developer',
  isRating: true,
};
