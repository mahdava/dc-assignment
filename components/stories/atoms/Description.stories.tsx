import { Description, TextProps } from "@/components/atoms/Field";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/Description",
  component: Description,
  argTypes: {
    className: { control: false },
  },
} as Meta<TextProps>;

const Template: StoryFn<TextProps> = (args) => (
  <Description {...args}>Helpful hint text</Description>
);

export const Default = Template.bind({});
Default.args = {
  children: "Enter a value between 0 and 100.",
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: "This field is optional.",
  className: "italic text-gray-400",
};
