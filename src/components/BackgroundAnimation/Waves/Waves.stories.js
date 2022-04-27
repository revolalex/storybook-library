import React from 'react';
import Waves from './Waves';
import './Waves.css'

export default {
  component: Waves,
  title: 'BackgroundAnimation/Waves',
  decorators: [
    (Story) => (
        <div style={{ margin: '0', padding:'0' }}>

            <Story />
        </div>
    ),
],

};

const Template = args => <Waves {...args}  />;

export const Default = Template.bind({});
Default.args = {

};

