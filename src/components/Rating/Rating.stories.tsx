import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating stories',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyRating = () => <Rating value={0} onClick={action('clicked')}/>
export const Rating1 = () => <Rating value={1} onClick={action('clicked')}/>
export const Rating2 = () => <Rating value={2} onClick={action('clicked')}/>
export const Rating3 = () => <Rating value={3} onClick={action('clicked')}/>
export const Rating4 = () => <Rating value={4} onClick={action('clicked')}/>
export const Rating5 = () => <Rating value={5} onClick={action('clicked')}/>

export const RatingChanging = () => {
    const[rating,setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
}



// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };


// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Rating',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };