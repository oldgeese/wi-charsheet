import { Story, Meta } from '@storybook/react';
import { newAbilities } from '@wi-charsheet/abilities';
import { Abilities, AbilitiesProps } from './abilities';

export default {
  component: Abilities,
  title: 'Abilities',
} as Meta;

const Template: Story<AbilitiesProps> = (args) => <Abilities {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  abilities: newAbilities()
};
