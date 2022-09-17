import * as React from 'react';
import Heading from '../components/Heading';

export default {
    title: "Components/Heading",
    component: Heading,
    argTypes: {
        children: { control: "text"}
    }
};

export function Default(args){
    return <Heading {...args} />
} 
export function H2(args){
    return <Heading {...args} />
} 

Default.args = {
    children: "Heading (default)"
}