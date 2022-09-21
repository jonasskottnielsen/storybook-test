import Button from '../components/Button';

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		handleClick: { action: "handleClick" }
	}
}
const Template = args => <Button {...args} />

export const Red = Template.bind({});
Red.args = {
	backgroundColor: 'red',
	label: "Press Me!",
	size: "md"
}

export const Green = Template.bind({});
Green.args = {
	backgroundColor: 'green',
	label: "Press Me!",
	size: "md"
}

export const Blue = Template.bind({});
Blue.args = {
	backgroundColor: 'blue',
	label: "Press Me!",
	size: "md"
}

export const Yelllow = Template.bind({});
Yelllow.args = {
	backgroundColor: 'yellow',
	label: "Press Me!",
	size: "md"
}

export const Small = Template.bind({});
Small.args = {
	backgroundColor: 'red',
	label: "Press Me!",
	size: "sm"
}

export const Large = Template.bind({});
Large.args = {
	backgroundColor: 'red',
	label: "Press Me!",
	size: "lg"
}
