import React from 'react';
import DesignButton from './DesignButton';

export default {
  component: DesignButton,
  title: 'Buttons/DesignButton',
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        
        <Story />
      </div>
    ),
  ],
};

const Template = args => <DesignButton {...args}  />;

export const Default = Template.bind({});
Default.args = {

};

