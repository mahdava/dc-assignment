"use client";

import React from "react";
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, Input, Label } from "./Field";
import { composeTailwindRenderProps, focusRing } from "./utils";

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false: "",
      true: "border-1 ring-1 ring-inset ring-input-brd-primary border-input-brd-primary text-foreground",
    },
    isInvalid: {
      true: "border-red-600",
    },
    isDisabled: {
      true: "border-input-disabled bg-input-disabled text-input-disabled-foreground",
    },
  },
});

const inputStyles = tv({
  extend: focusRing,
  base: "border-1 rounded-md border-input-brd hover:not-focus-within:border-input-brd-dark hover:focus-within:border-input-brd-primary hover:focus-within:text-foreground",
  variants: {
    isFocused: fieldBorderStyles.variants.isFocusWithin,
    isInvalid: fieldBorderStyles.variants.isInvalid,
    isDisabled: fieldBorderStyles.variants.isDisabled,
  },
});

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
}

function _TextFieldInner(
  { label, description, errorMessage, className, ...props }: TextFieldProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <AriaTextField
      {...props}
      ref={ref}
      className={composeTailwindRenderProps(className, "flex flex-col gap-1")}
    >
      {label && <Label>{label}</Label>}
      <Input className={inputStyles} />
      {description && <Description>{description}</Description>}
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </AriaTextField>
  );
}

export const TextField = React.forwardRef(_TextFieldInner);
TextField.displayName = "TextField";
