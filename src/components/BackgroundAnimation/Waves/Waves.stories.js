import React from 'react';
import Waves from './Waves';
import './Waves.css'

export default {
  component: Waves,
  title: 'BackgroundAnimation/Waves',

};

const Template = args => <Waves {...args}  />;

export const Default = Template.bind({});
Default.args = {

};

