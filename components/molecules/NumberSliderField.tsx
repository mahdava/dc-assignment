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
  numberFieldClassName?: string;
  sliderClassName?: string;
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
      numberFieldClassName,
      sliderClassName,
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
      <div ref={ref} className="flex flex-row items-end gap-2">
        <div>
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
            {...(numberFieldClassName && { className: numberFieldClassName })}
          />
        </div>
        <div className="px-2">
          <Slider
            value={currentValue}
            onChange={handleChange}
            minValue={minValue}
            maxValue={maxValue}
            step={step}
            aria-label={label}
            {...(sliderClassName && { className: sliderClassName })}
          >
            <SliderTrack thumbLabels={thumbLabels} />
          </Slider>
        </div>
      </div>
    );
  },
);
NumberSliderField.displayName = "NumberSliderField";
