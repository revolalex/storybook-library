import React from 'react';
import ScaleShadow from './ScaleShadow';
import './ScaleShadow.css';


export default {
    component: ScaleShadow,
    title: 'Animation/ScaleShadow',
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>

                <Story />
            </div>
        ),
    ],

};

const Template = args => <ScaleShadow {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Hello World',
    style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "darkturquoise",
        borderRadius: "5px",
        height: "100px",
        width: "100px",
        transition: "transform 400ms",
    }
};
