import { Story, Meta } from '@storybook/react';
import { GeneralInformation, GeneralInformationProps } from './general-information';

export default {
  component: GeneralInformation,
  title: 'GeneralInformation',
} as Meta;

const Template: Story<GeneralInformationProps> = (args) => <GeneralInformation {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
