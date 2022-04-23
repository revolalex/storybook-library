import React from 'react';

import OrderButton from './OrderButton';


export default {
  component: OrderButton,
  title: 'Buttons/OrderButton',
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <OrderButton {...args}  />;

export const Default = Template.bind({});
Default.args = {

};

