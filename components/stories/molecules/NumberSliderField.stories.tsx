import {
  NumberSliderField,
  NumberSliderFieldProps,
} from "@/components/molecules/NumberSliderField";
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Molecules/NumberSliderField",
  component: NumberSliderField,
  argTypes: {
    onChange: { action: "onChange" },
  },
} as Meta<typeof NumberSliderField>;

const Template: StoryFn<NumberSliderFieldProps> = (args) => {
  const [value, setValue] = useState<number>(
    args.value !== undefined
      ? (args.value as number)
      : (args.defaultValue ?? 0),
  );

  const handleChange = (newValue: number) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };

  return (
    <div style={{ width: 300 }}>
      <NumberSliderField {...args} value={value} onChange={handleChange} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Amount",
  defaultValue: 50,
  minValue: 0,
  maxValue: 100,
  step: 1,
};

export const Controlled = Template.bind({});
Controlled.args = {
  label: "Controlled",
  value: 25,
  minValue: 0,
  maxValue: 100,
  step: 5,
};

export const CustomThumbLabel = Template.bind({});
CustomThumbLabel.args = {
  label: "Volume",
  defaultValue: 30,
  minValue: 0,
  maxValue: 60,
  step: 10,
  thumbLabels: ["Low", "Mid", "High"],
};
