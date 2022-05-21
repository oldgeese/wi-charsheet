import { Story, Meta } from '@storybook/react';
import { Skills, SkillsProps } from './skills';

export default {
  component: Skills,
  title: 'Skills',
} as Meta;

const Template: Story<SkillsProps> = (args) => <Skills {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
