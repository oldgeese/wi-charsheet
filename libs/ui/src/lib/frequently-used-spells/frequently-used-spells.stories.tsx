import { Story, Meta } from '@storybook/react';
import {
  FrequentlyUsedSpells,
  FrequentlyUsedSpellsProps,
} from './frequently-used-spells';

export default {
  component: FrequentlyUsedSpells,
  title: 'FrequentlyUsedSpells',
} as Meta;

const Template: Story<FrequentlyUsedSpellsProps> = (args) => (
  <FrequentlyUsedSpells {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
