// components/atoms/Slider.stories.tsx
import { Slider, SliderProps } from "@/components/atoms/Slider";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
type UnionSliderProps = SliderProps<number | number[]>;

export default {
  title: "Atoms/Slider",
  component: Slider,
  argTypes: {
    label: { control: "text" },
    thumbLabels: { control: "object" },
    orientation: {
      control: { type: "inline-radio" },
      options: ["horizontal"],
    },
    minValue: { control: { type: "number" } },
    maxValue: { control: { type: "number" } },
    step: { control: { type: "number" } },
    defaultValue: { control: "object" },
    isDisabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
} as Meta<UnionSliderProps>;

// Single‐thumb slider template
const SingleTemplate: StoryFn<UnionSliderProps> = (args) => {
  const initial =
    typeof args.defaultValue === "number"
      ? args.defaultValue
      : (args.defaultValue?.[0] ?? 0);
  const [value, setValue] = useState<number | number[]>(initial);

  return (
    <Slider
      {...args}
      value={value}
      onChange={(v) => {
        // v can be number or number[]
        if (Array.isArray(v)) {
          const single = v[0] ?? 0;
          setValue(single);
        } else {
          setValue(v);
        }
        args.onChange?.(v);
      }}
    />
  );
};

export const Default = SingleTemplate.bind({});
Default.args = {
  label: "Size (GB)",
  thumbLabels: ["Size"],
  orientation: "horizontal",
  minValue: 0,
  maxValue: 100,
  step: 1,
  defaultValue: 50,
};

export const Disabled = SingleTemplate.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};

// Range (two‐thumb) slider template
const RangeTemplate: StoryFn<UnionSliderProps> = (args) => {
  const initial = Array.isArray(args.defaultValue)
    ? args.defaultValue
    : [args.minValue ?? 0, args.maxValue ?? 0];
  const [value, setValue] = useState<number | number[]>(initial);

  return (
    <Slider
      {...args}
      value={value}
      onChange={(v) => {
        setValue(v);
        args.onChange?.(v);
      }}
    />
  );
};

export const Range = RangeTemplate.bind({});
Range.args = {
  label: "Range",
  thumbLabels: ["Min", "Max"],
  orientation: "horizontal",
  minValue: 0,
  maxValue: 100,
  step: 5,
  defaultValue: [20, 80],
};
