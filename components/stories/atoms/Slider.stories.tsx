import { Slider, SliderProps, SliderTrack } from "@/components/atoms/Slider";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/Slider",
  component: Slider,
  subcomponents: { SliderTrack },
  argTypes: {
    label: { control: "text", description: "Slider label" },
    thumbLabels: { control: "object", description: "Labels for each thumb" },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation of the slider",
    },
    minValue: { control: "number", description: "Minimum value of the slider" },
    maxValue: { control: "number", description: "Maximum value of the slider" },
    step: { control: "number", description: "Increment step of the slider" },
    defaultValue: {
      control: "object",
      description: "Default value(s) of the thumb(s)",
    },
    isDisabled: {
      control: "boolean",
      description: "Whether the slider is disabled",
    },
    onChange: { action: "changed", description: "Change event handler" },
  },
} as Meta<SliderProps<number | number[]>>;

const Template: StoryFn<SliderProps<number | number[]>> = (args) => (
  <div
    style={{
      padding: "2rem",
      display: "flex",
      justifyContent: args.orientation === "vertical" ? "center" : "flex-start",
    }}
  >
    <Slider {...args}>
      <SliderTrack
        thumbLabels={
          Array.isArray(args.defaultValue) ? args.thumbLabels : undefined
        }
      />
    </Slider>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Volume",
  orientation: "horizontal",
  minValue: 0,
  maxValue: 100,
  step: 1,
  defaultValue: 50,
};

export const Range = Template.bind({});
Range.args = {
  label: "Select range",
  orientation: "horizontal",
  minValue: 0,
  maxValue: 100,
  step: 5,
  defaultValue: [20, 80],
  thumbLabels: ["Min", "Max"],
};

export const Vertical = Template.bind({});
Vertical.args = {
  label: "Brightness",
  orientation: "vertical",
  minValue: 0,
  maxValue: 10,
  step: 1,
  defaultValue: 5,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled slider",
  orientation: "horizontal",
  minValue: 0,
  maxValue: 100,
  step: 10,
  defaultValue: 30,
  isDisabled: true,
};
