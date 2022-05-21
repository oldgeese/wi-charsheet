import { Story, Meta } from '@storybook/react';
import { Spells, SpellsProps } from './spells';

export default {
  component: Spells,
  title: 'Spells',
} as Meta;

const Template: Story<SpellsProps> = (args) => <Spells {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
