import React from 'react';

import NeonButton from './NeonButton';


export default {
  component: NeonButton,
  title: 'Buttons/NeonButton',
  decorators: [
    (Story) => (
      <div style={{ background:'linear-gradient(#141e30, #243b55)', width:"100vw", height:"100vh"}}>
        <Story />
      </div>
    ),
  ],
};



const Template = args => <NeonButton {...args}  />;

export const Default = Template.bind({});
Default.args = {
    style:{margin : '10%'},
    text: 'Sign-In',
};

