import { Story, Meta } from '@storybook/react';
import { newFeatures } from '@wi-charsheet/features';
import { Features, FeaturesProps } from './features';

export default {
  component: Features,
  title: 'Features',
} as Meta;

const Template: Story<FeaturesProps> = (args) => <Features {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  features: newFeatures()
};
