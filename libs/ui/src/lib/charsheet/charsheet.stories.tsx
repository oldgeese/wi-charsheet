import { Story, Meta } from '@storybook/react';
import { newCharacter } from '@wi-charsheet/character';
import { Charsheet, CharsheetProps } from './charsheet';

export default {
  component: Charsheet,
  title: 'Charsheet',
} as Meta;

const Template: Story<CharsheetProps> = (args) => <Charsheet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  character: newCharacter()
};
