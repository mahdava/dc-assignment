// "Borrowed" with love from https://github.com/zaichaopan/react-aria-components-tailwind-starter/blob/master/src/slider.tsx

import {
  Slider as RACSlider,
  SliderProps as RACSliderProps,
  SliderTrack as RACSliderTrack,
  SliderRenderProps,
  SliderThumb,
  composeRenderProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { composeTailwindRenderProps } from "./utils";

export { SliderOutput } from "react-aria-components";

export interface SliderProps<T> extends RACSliderProps<T> {
  label?: string;
  thumbLabels?: string[];
}

export function Slider<T extends number | number[]>(props: SliderProps<T>) {
  return (
    <RACSlider
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-2 data-[orientation=horizontal]:min-w-64 data-[orientation=vertical]:items-center",
      )}
    />
  );
}

const trackStyle = [
  "absolute rounded-full",
  "group-data-[orientation=horizontal]:h-1.5",
  "group-data-[orientation=horizontal]:w-full",
  "group-data-[orientation=vertical]:top-1/2",
  "group-data-[orientation=vertical]:left-1/2",
  "group-data-[orientation=vertical]:h-full",
  "group-data-[orientation=vertical]:w-[6px]",
  "group-data-disabled:opacity-50",
];

export function SliderTrack({ thumbLabels }: { thumbLabels?: string[] }) {
  return (
    <RACSliderTrack className="group relative flex w-full items-center data-[orientation=horizontal]:h-7 data-[orientation=vertical]:h-44 data-[orientation=vertical]:w-7">
      {({ state, orientation }) => {
        return (
          <>
            <div
              className={twMerge(
                "bg-zinc-200 group-data-[orientation=vertical]:-translate-x-1/2 group-data-[orientation=vertical]:-translate-y-1/2",
                trackStyle,
              )}
            />
            <div
              className={twMerge("bg-slider-fill", trackStyle)}
              style={getTrackHighlightStyle(state, orientation)}
            />
            {state.values.map((_, i) => (
              <SliderThumb
                key={i}
                index={i}
                aria-label={thumbLabels?.[i]}
                className={composeRenderProps(
                  "",
                  (className, { isFocusVisible, isDragging, isDisabled }) =>
                    twMerge(
                      "border-white size-6 rounded-full border-2 bg-slider-thumb shadow-xl cursor-pointer outline-slider-thumb/16 hover:outline-8 hover:outline-ring",
                      "group-data-[orientation=horizontal]:top-1/2 group-data-[orientation=vertical]:left-1/2",
                      isDragging && ["border-2"],
                      isDisabled && "cursor-not-allowed bg-disabled",
                      isFocusVisible && [
                        "outline-slider-thumb/16",
                        "outline-8",
                        "outline-ring",
                      ],
                      className,
                    ),
                )}
              />
            ))}
          </>
        );
      }}
    </RACSliderTrack>
  );
}

function getTrackHighlightStyle(
  state: SliderRenderProps["state"],
  orientation: SliderRenderProps["orientation"],
) {
  const hasTwoThumbs = state.values.length == 2;
  const highlightPercentage = hasTwoThumbs
    ? (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 + "%"
    : state.getThumbPercent(0) * 100 + "%";
  const highlightStartPosition = hasTwoThumbs
    ? state.getThumbPercent(0) * 100 + "%"
    : "0";

  return orientation === "horizontal"
    ? {
        width: highlightPercentage,
        left: highlightStartPosition,
      }
    : {
        height: highlightPercentage,
        bottom: highlightStartPosition,
        top: "auto",
        transform: "translate(-50%,0px)",
      };
}
