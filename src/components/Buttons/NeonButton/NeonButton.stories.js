import React from 'react';

import NeonButton from './NeonButton';


export default {
  component: NeonButton,
  title: 'Buttons/NeonButton',
  decorators: [
    (Story) => (
      <div style={{ backgroundColor:'black', width:"50vw", height:"50vh"}}>
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

