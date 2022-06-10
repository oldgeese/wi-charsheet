import { Story, Meta } from '@storybook/react';
import { newCharacter } from '@wi-charsheet/character';
import { Dashboard, DashboardProps } from './dashboard';

export default {
  component: Dashboard,
  title: 'Dashboard',
} as Meta;

const Template: Story<DashboardProps> = (args) => <Dashboard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  characters: [newCharacter()]
};
