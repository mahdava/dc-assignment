"use client";

import React, { useState } from "react";
import { NumberField, NumberFieldProps } from "../atoms/NumberField";
import { Slider, SliderTrack } from "../atoms/Slider";

export interface NumberSliderFieldProps
  extends Omit<NumberFieldProps, "value" | "defaultValue" | "onChange"> {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  minValue?: number;
  maxValue?: number;
  step?: number;
  thumbLabels?: string[];
}

export const NumberSliderField = React.forwardRef<
  HTMLDivElement,
  NumberSliderFieldProps
>(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      minValue = 0,
      maxValue = 100,
      step = 1,
      thumbLabels,
      label,
      description,
      errorMessage,
      ...otherProps
    },
    ref,
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<number>(
      defaultValue !== undefined ? defaultValue : minValue,
    );
    const currentValue = isControlled
      ? (controlledValue as number)
      : internalValue;

    const handleChange = (newValue: number) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    return (
      <div ref={ref} className="flex flex-col gap-4">
        <NumberField
          {...otherProps}
          label={label}
          description={description}
          errorMessage={errorMessage}
          value={currentValue}
          onChange={handleChange}
          minValue={minValue}
          maxValue={maxValue}
          step={step}
        />
        <Slider
          value={currentValue}
          onChange={handleChange}
          minValue={minValue}
          maxValue={maxValue}
          step={step}
          aria-label={label}
        >
          <SliderTrack thumbLabels={thumbLabels} />
        </Slider>
      </div>
    );
  },
);
NumberSliderField.displayName = "NumberSliderField";
