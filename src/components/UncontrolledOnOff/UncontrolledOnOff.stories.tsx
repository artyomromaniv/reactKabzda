import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import UncontrolledOnOff from "./UncontrolledOnOff";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UncontrolledOnOff>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;

const callback = action("On/Off changed")

export const OnMode = () => <UncontrolledOnOff  defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff  defaultOn={false} onChange={callback}/>
export const DefaultInputValue = () => <input defaultValue={'yo'} />
export const BugMode = () => <div>Unsync when change devaultValue when already rendered</div>