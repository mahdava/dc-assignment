// components/atoms/TextField.stories.tsx
import { TextField, TextFieldProps } from "@/components/atoms/TextField";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Atoms/TextField",
  component: TextField,
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    errorMessage: { control: "text" },
    isDisabled: { control: "boolean" },
    defaultValue: { control: "text" },
    onChange: { action: "changed" },
  },
} as Meta<TextFieldProps>;

const Template: StoryFn<TextFieldProps> = (args) => {
  const [value, setValue] = useState<string>(args.defaultValue ?? "");
  return (
    <TextField
      {...args}
      value={value}
      onChange={(v) => {
        const str = v as string;
        setValue(str);
        args.onChange?.(str);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Name",
  defaultValue: "",
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  description: "Enter your full name.",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errorMessage: "Name is required.",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
  defaultValue: "Jane Doe",
};
