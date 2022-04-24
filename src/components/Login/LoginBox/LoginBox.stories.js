import React from 'react';
import LoginBox from './LoginBox';

export default {
  component: LoginBox,
  title: 'Login/LoginBox',
};

const Template = args => <LoginBox {...args}  />;

export const Default = Template.bind({});
Default.args = {

};

