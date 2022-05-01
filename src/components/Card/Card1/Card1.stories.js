import React from 'react';

import Card1 from './Card1';


export default {
  component: Card1,
  title: 'Card/Card1',
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <Card1 {...args}  />;

export const Default = Template.bind({});
Default.args = {

};

