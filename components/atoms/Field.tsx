"use client";

import React from "react";
import {
  Group,
  FieldError as RACFieldError,
  FieldErrorProps as RACFieldErrorProps,
  GroupProps as RACGroupProps,
  Input as RACInput,
  InputProps as RACInputProps,
  Label as RACLabel,
  LabelProps as RACLabelProps,
  TextProps as RACTextProps,
  Text,
  composeRenderProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { composeTailwindRenderProps, focusRing } from "./utils";

export interface LabelProps extends RACLabelProps {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <RACLabel
      {...props}
      ref={ref}
      className={twMerge(
        "text-sm text-gray-500 font-medium cursor-default w-fit",
        className,
      )}
    />
  ),
);
Label.displayName = "Label";

export interface TextProps extends RACTextProps {}

export const Description = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ className, ...props }, ref) => (
    <Text
      {...props}
      ref={ref}
      slot="description"
      className={twMerge("text-sm text-gray-600", className)}
    />
  ),
);
Description.displayName = "Description";

export interface FieldErrorProps extends RACFieldErrorProps {}
export const FieldError = React.forwardRef<HTMLDivElement, FieldErrorProps>(
  ({ className, ...props }, ref) => (
    <RACFieldError
      {...props}
      ref={ref}
      className={composeTailwindRenderProps(
        className,
        "text-sm text-red-600 forced-colors:text-[Mark]",
      )}
    />
  ),
);
FieldError.displayName = "FieldError";

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false: "border-gray-300 forced-colors:border-[ButtonBorder]",
      true: "border-gray-600 forced-colors:border-[Highlight]",
    },
    isInvalid: {
      true: "border-red-600 forced-colors:border-[Mark]",
    },
    isDisabled: {
      true: "border-gray-200 forced-colors:border-[GrayText]",
    },
  },
});

export const fieldGroupStyles = tv({
  extend: focusRing,
  base: "group flex items-center h-9 bg-white forced-colors:bg-[Field] border-2 rounded-lg overflow-hidden",
  variants: fieldBorderStyles.variants,
});

export interface GroupProps extends RACGroupProps {}
export const FieldGroup = React.forwardRef<HTMLDivElement, GroupProps>(
  ({ className, ...props }, ref) => (
    <Group
      {...props}
      ref={ref}
      className={composeRenderProps(className, (cn, renderProps) =>
        fieldGroupStyles({ ...renderProps, className: cn }),
      )}
    />
  ),
);
FieldGroup.displayName = "FieldGroup";

export interface InputProps extends RACInputProps {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <RACInput
      {...props}
      ref={ref}
      className={composeTailwindRenderProps(
        className,
        "px-2 py-1.5 flex-1 min-w-0 outline-0 bg-white text-sm text-gray-800 disabled:text-gray-200",
      )}
    />
  ),
);
Input.displayName = "Input";
