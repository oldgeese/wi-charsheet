import { Story, Meta } from '@storybook/react';
import { newSkills } from "@wi-charsheet/skills";
import { Skills, SkillsProps } from './skills';

export default {
  component: Skills,
  title: 'Skills',
} as Meta;

const Template: Story<SkillsProps> = (args) => <Skills {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  skills: newSkills()
};
