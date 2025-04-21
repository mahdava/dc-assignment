// Icon.stories.tsx
import { Icon, IconName, IconProps } from "@/components/atoms/Icon";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: { type: "select" },
      options: ["plus", "minus", "trash"] as IconName[],
      description: "Which icon to render",
    },
    size: {
      control: { type: "number", min: 8, max: 128, step: 1 },
      description: "Width & height in px",
    },
    fill: {
      control: { type: "color" },
      description: "SVG fill color",
    },
  },
  args: {
    name: "plus",
    size: 24,
    fill: "currentColor",
  },
} as Meta<IconProps>;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const Playground = Template.bind({});
Playground.storyName = "Playground";

export const Plus = Template.bind({});
Plus.args = { name: "plus" };

export const Minus = Template.bind({});
Minus.args = { name: "minus" };

export const Trash = Template.bind({});
Trash.args = { name: "trash" };
