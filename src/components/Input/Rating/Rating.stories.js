import React from 'react';

import Rating from './Rating';


export default {
  component: Rating,
  title: 'Rating',
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <Rating {...args}  />;

export const Default = Template.bind({});
Default.args = {

};

