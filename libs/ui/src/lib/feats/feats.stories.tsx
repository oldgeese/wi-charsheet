import { Story, Meta } from '@storybook/react';
import { newFeats } from "@wi-charsheet/feats";
import { Feats, FeatsProps } from './feats';

export default {
  component: Feats,
  title: 'Feats',
} as Meta;

const Template: Story<FeatsProps> = (args) => <Feats {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  feats: newFeats()
};
