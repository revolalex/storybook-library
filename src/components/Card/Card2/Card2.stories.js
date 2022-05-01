import React from 'react';

import Card2 from './Card2';


export default {
  component: Card2,
  title: 'Card/Card2',
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = args => <Card2 {...args}  />;

export const Default = Template.bind({});
Default.args = {

};

