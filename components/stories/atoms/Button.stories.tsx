import { Button, ButtonProps } from "@/components/atoms/Button";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ["primary", "secondary", "destructive"],
      description: "Color scheme of the button",
    },
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined"],
      description: "Style of the button",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
      description: "Size of the button",
    },
    icon: {
      control: { type: "object" },
      description: "Icon properties (name, size, fill)",
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "Position of the icon relative to text",
    },
    iconOnly: {
      control: { type: "boolean" },
      description: "Render icon-only button for screen readers",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    onPress: { action: "pressed" },
  },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Playground with default controls
export const Playground = Template.bind({});
Playground.args = {
  children: "Button",
};
