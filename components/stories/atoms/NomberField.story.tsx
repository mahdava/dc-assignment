// components/atoms/NumberField.stories.tsx
import { NumberField, NumberFieldProps } from "@/components/atoms/NumberField";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Atoms/NumberField",
  component: NumberField,
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    errorMessage: { control: "text" },
    minValue: { control: { type: "number", min: 0 } },
    maxValue: { control: { type: "number", min: 0 } },
    step: { control: { type: "number", min: 1 } },
    defaultValue: { control: { type: "number" } },
    onChange: { action: "changed" },
  },
} as Meta<NumberFieldProps>;

const Template: StoryFn<NumberFieldProps> = (args) => {
  const [value, setValue] = useState<number>(args.defaultValue ?? 0);
  return (
    <NumberField
      {...args}
      value={value}
      onChange={(v: number) => {
        setValue(v);
        args.onChange?.(v);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Size (GB)",
  defaultValue: 10,
  minValue: 0,
  maxValue: 100,
  step: 1,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  description: "Choose a value between 0 and 100 GB",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errorMessage: "Invalid size: must be between 0 and 100",
};

export const LargeStep = Template.bind({});
LargeStep.args = {
  ...Default.args,
  step: 10,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};
