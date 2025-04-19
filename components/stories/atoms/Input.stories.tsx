import { Input, InputProps } from "@/components/atoms/Field";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    className: { control: false },
    onChange: { action: "changed" },
    value: { control: "text" },
  },
} as Meta<InputProps>;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  value: "",
  placeholder: "Type here…",
};

export const Filled = Template.bind({});
Filled.args = {
  value: "Hello world",
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "",
  disabled: true,
  placeholder: "Disabled",
};
