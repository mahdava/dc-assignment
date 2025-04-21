import { Button, ButtonProps } from "@/components/atoms/Button";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/Button/Primary/Outlined",
  component: Button,
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ["primary"],
      description: "Color scheme of the button",
    },
    variant: {
      control: { type: "select" },
      options: ["outlined"],
      description: "Style of the button",
    },
    size: {
      control: { type: "select" },
      options: ["medium", "small"],
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

export const ButtonPrimaryOutlinedDefault = Template.bind({});
ButtonPrimaryOutlinedDefault.args = {
  colorScheme: "primary",
  variant: "outlined",
  size: "medium",
  isDisabled: false,
  children: "Button",
};

export const ButtonPrimaryOutlinedDisabled = Template.bind({});
ButtonPrimaryOutlinedDisabled.args = {
  colorScheme: "primary",
  variant: "outlined",
  size: "medium",
  isDisabled: true,
  children: "Button",
};
