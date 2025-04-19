import { FieldError, FieldGroup, Input, Label } from "@/components/atoms/Field"; // Adjust the import path as necessary
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
// you may need to adjust the import for Label & Input if they live in separate files

export default {
  title: "Atoms/FieldGroup",
  component: FieldGroup,
  argTypes: {
    isInvalid: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
} as Meta;

interface Args {
  isInvalid?: boolean;
  isDisabled?: boolean;
}

const Template: StoryFn<Args> = ({ isInvalid, isDisabled }) => {
  const [value, setValue] = useState("");
  return (
    <div className="space-y-2">
      <Label htmlFor="demo">Demo Field</Label>
      <FieldGroup isInvalid={isInvalid} isDisabled={isDisabled}>
        <Input
          id="demo"
          placeholder="Type here…"
          value={value}
          onChange={(e) => setValue((e.target as HTMLInputElement).value)}
          disabled={isDisabled}
        />
      </FieldGroup>
      {isInvalid && <FieldError>Invalid input</FieldError>}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithError = Template.bind({});
WithError.args = { isInvalid: true };

export const Disabled = Template.bind({});
Disabled.args = { isDisabled: true };
