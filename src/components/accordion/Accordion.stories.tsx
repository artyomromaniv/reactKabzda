import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const callback = action("Accordion mode changed")

export const MenuCollapsedMode = () => <Accordion collapsed={true} onChange={callback} titleValue={"Menu"} />
export const MenuUnCollapsedMode = () => <Accordion collapsed={false} onChange={callback} titleValue={"Menu"} />

export const UsersCollapsedMode = () => <Accordion collapsed={true} onChange={callback} titleValue={"Users"} />
export const UsersUnCollapsedMode = () => <Accordion collapsed={false} onChange={callback} titleValue={"Users"} />


export const ModeChanging = () => {
    const [value,setValue] = useState(false)
    return <Accordion collapsed={value} onChange={()=>setValue(!value)} titleValue={"Users"} />
}
