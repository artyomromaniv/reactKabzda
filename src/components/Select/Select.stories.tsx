import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select stories',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Select>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const WithValue = () => {
    const [value,setValue] = useState("2")
    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"}
            ]}/>
    </>
}

export const WithoutValue = () => {
    const [value,setValue] = useState(null)

    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"}
            ]}/>
   </>
}