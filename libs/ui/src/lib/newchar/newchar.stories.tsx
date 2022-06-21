import { Story, Meta } from '@storybook/react';
import { NewChar } from './newchar';

export default {
  component: NewChar,
  title: 'NewChar',
} as Meta;

const Template: Story = (args) => <NewChar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
