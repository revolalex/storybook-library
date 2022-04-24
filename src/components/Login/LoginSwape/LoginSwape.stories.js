import React from 'react';
import LoginSwape from './LoginSwape';

export default {
  component: LoginSwape,
  title: 'Login/LoginSwape',
  decorators: [
    (Story) => (
      <div style={{ margin: 0, padding:0 }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <LoginSwape {...args}  />;

export const Default = Template.bind({});
Default.args = {

};

