import { Story, Meta } from '@storybook/react';
import { Bonds, BondsProps } from './bonds';

export default {
  component: Bonds,
  title: 'Bonds',
} as Meta;

const Template: Story<BondsProps> = (args) => <Bonds {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
