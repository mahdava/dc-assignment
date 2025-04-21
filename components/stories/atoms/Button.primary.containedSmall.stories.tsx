import { Button, ButtonProps } from "@/components/atoms/Button";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/Button/Primary/Contained (Small)",
  component: Button,
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ["primary"],
      description: "Color scheme of the button",
    },
    variant: {
      control: { type: "select" },
      options: ["contained"],
      description: "Style of the button",
    },
    size: {
      control: { type: "select" },
      options: ["small"],
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

export const ButtonPrimaryContainedSmallDefault = Template.bind({});
ButtonPrimaryContainedSmallDefault.args = {
  colorScheme: "primary",
  variant: "contained",
  size: "small",
  isDisabled: false,
  children: "Button",
};

export const ButtonPrimaryContainedSmallDisabled = Template.bind({});
ButtonPrimaryContainedSmallDisabled.args = {
  colorScheme: "primary",
  variant: "contained",
  size: "small",
  isDisabled: true,
  children: "Button",
};

export const ButtonPrimaryContainedSmallIconLeft = Template.bind({});
ButtonPrimaryContainedSmallIconLeft.args = {
  colorScheme: "primary",
  variant: "contained",
  size: "small",
  isDisabled: false,
  icon: { name: "plus", size: 16 },
  iconPosition: "left",
  children: "Button",
};

export const ButtonPrimaryContainedSmallIconRight = Template.bind({});
ButtonPrimaryContainedSmallIconRight.args = {
  colorScheme: "primary",
  variant: "contained",
  size: "small",
  isDisabled: false,
  icon: { name: "plus", size: 16 },
  iconPosition: "right",
  children: "Button",
};

export const ButtonPrimaryContainedSmallIconOnly = Template.bind({});
ButtonPrimaryContainedSmallIconOnly.args = {
  colorScheme: "primary",
  variant: "contained",
  size: "small",
  isDisabled: false,
  icon: { name: "plus", size: 16 },
  iconOnly: true,
  children: "Button",
};
