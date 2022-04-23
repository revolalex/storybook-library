import React from 'react';
import SignInNeon from './SignInNeon';

export default {
  component: SignInNeon,
  title: 'SignInNeon',
  decorators: [
    (Story) => (
      <div style={{ margin: 0, padding:0 }}>
        <Story />
      </div>
    ),
  ],
};

const Template = args => <SignInNeon {...args}  />;

export const Default = Template.bind({});
Default.args = {

};

