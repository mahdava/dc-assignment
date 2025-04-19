import { FieldError, FieldErrorProps } from "@/components/atoms/Field";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/FieldError",
  component: FieldError,
  argTypes: {
    className: { control: false },
  },
} as Meta<FieldErrorProps>;

const Template: StoryFn<FieldErrorProps> = (args) => (
  <FieldError {...args}>This field is required.</FieldError>
);

export const Default = Template.bind({});
Default.args = {
  children: "Name is required",
};
