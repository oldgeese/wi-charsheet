import { Story, Meta } from '@storybook/react';
import { Charsheet, CharsheetProps } from './charsheet';

export default {
  component: Charsheet,
  title: 'Charsheet',
} as Meta;

const Template: Story<CharsheetProps> = (args) => <Charsheet {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
