import { Button, ButtonProps } from "@/components/atoms/Button";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/Button/Secondary/Outlined",
  component: Button,
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ["secondary"],
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

export const ButtonSecondaryOutlinedDefault = Template.bind({});
ButtonSecondaryOutlinedDefault.args = {
  colorScheme: "secondary",
  variant: "outlined",
  size: "medium",
  isDisabled: false,
  children: "Button",
};

export const ButtonSecondaryOutlinedDisabled = Template.bind({});
ButtonSecondaryOutlinedDisabled.args = {
  colorScheme: "secondary",
  variant: "outlined",
  size: "medium",
  isDisabled: true,
  children: "Button",
};
