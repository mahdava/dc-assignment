import { Button, ButtonProps } from "@/components/atoms/Button";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "destructive", "icon"],
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    onPress: { action: "pressed" },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Click me</Button>
);

// Primary (default)
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  isDisabled: false,
};

// Secondary
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  isDisabled: false,
};

// Destructive
export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  isDisabled: false,
};

// Icon (example with an emoji icon; replace with your actual icon)
export const Icon = Template.bind({});
Icon.args = {
  variant: "icon",
  children: "⭐",
  isDisabled: false,
};

// Disabled
export const Disabled = Template.bind({});
Disabled.args = {
  variant: "primary",
  isDisabled: true,
};
