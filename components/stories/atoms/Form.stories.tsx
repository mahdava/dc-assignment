// components/atoms/Form.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Form, FormProps } from "@/components/atoms/Form";
import { Label } from "@/components/atoms/Field";
import { Input } from "@/components/atoms/Field";
import { Button } from "@/components/atoms/Button";

export default {
  title: "Atoms/Form",
  component: Form,
  argTypes: {
    className: { control: "text" },
  },
} as Meta<FormProps>;

const Template: StoryFn<FormProps> = (args) => (
  <Form {...args} onSubmit={(e) => e.preventDefault()}>
    <div className="space-y-2">
      <Label htmlFor="demo">Demo Field</Label>
      <Input id="demo" placeholder="Type something…" />
    </div>
    <Button type="submit">Submit</Button>
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  className: "",
};

export const CustomGap = Template.bind({});
CustomGap.args = {
  className: "gap-8 bg-gray-50 p-4 rounded",
};
