import { Label, LabelProps } from "@/components/atoms/Field";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/Label",
  component: Label,
  argTypes: {
    className: { control: false },
  },
} as Meta<LabelProps>;

const Template: StoryFn<LabelProps> = (args) => (
  <Label {...args}>Your label</Label>
);

export const Default = Template.bind({});
Default.args = {
  children: "First Name",
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  children: "Email",
  className: "text-red-500 dark:text-red-300",
};
