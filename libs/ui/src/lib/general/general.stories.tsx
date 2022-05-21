import { Story, Meta } from '@storybook/react';
import { General, GeneralProps } from './general';

export default {
  component: General,
  title: 'General',
} as Meta;

const Template: Story<GeneralProps> = (args) => <General {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
