import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToggleButtonGroup, { ToogleButton } from './ToggleButtonGroup';

export default {
  title: 'inputs/ToggleButtonGroup',
  component: ToggleButtonGroup,
} as ComponentMeta<typeof ToggleButtonGroup>;

const Template: ComponentStory<typeof ToggleButtonGroup> = (args) => (
  <ToggleButtonGroup {...args}>
    <ToogleButton value={'1'}>
      <i className="twf-cleaning-1" /> Limpeza de rotina
    </ToogleButton>
    <ToogleButton value={'2'}>
      <i className="twf-cleaning-2" /> Limpeza pesada
    </ToogleButton>
    <ToogleButton value={'3'}>
      <i className="twf-cleaning-3" /> Limpeza pós obra
    </ToogleButton>
  </ToggleButtonGroup>
);

export const Default = Template.bind({});

Default.args = {
  value: '1',
};
