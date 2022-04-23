import React from 'react';
import CompleteOrderButton from './CompleteOrderButton';


export default {
  component: CompleteOrderButton,
  title: 'Buttons/CompleteOrderButton',
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <CompleteOrderButton {...args}  />;

export const Default = Template.bind({});
Default.args = {

};

