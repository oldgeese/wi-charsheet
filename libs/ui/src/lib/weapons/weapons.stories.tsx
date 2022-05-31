import { Meta, Story } from '@storybook/react';
import { newWeapons } from '@wi-charsheet/weapons';
import { Weapons, WeaponsProps } from './weapons';

export default {
  component: Weapons,
  title: 'Weapons',
} as Meta;

const Template: Story<WeaponsProps> = (args) => <Weapons {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  weapons: newWeapons()
};
