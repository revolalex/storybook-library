import React from 'react';

import DeleteButton from './DeleteButton';


export default {
  component: DeleteButton,
  title: 'Buttons/DeleteButton',
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <DeleteButton {...args}  />;

export const Default = Template.bind({});
Default.args = {

};

