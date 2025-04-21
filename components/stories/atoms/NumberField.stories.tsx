import { NumberField, NumberFieldProps } from "@/components/atoms/NumberField";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/NumberField",
  component: NumberField,
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    errorMessage: { control: "text" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    defaultValue: { control: "number" },
    isDisabled: { control: "boolean" },
  },
} as Meta<NumberFieldProps>;

const Template: StoryFn<NumberFieldProps> = (args) => <NumberField {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: 1,
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: 1,
  isDisabled: true,
};
