import React from 'react';

import GoldText from './GoldText';


export default {
  component: GoldText,
  title: 'GoldText',
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <GoldText {...args}  />;

export const Default = Template.bind({});
Default.args = {
  text:"Gold",
  style:{ fontSize: "clamp(3em, 18vw, 15rem)"}
};

