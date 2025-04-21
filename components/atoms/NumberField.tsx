"use client";

import { Button } from "@/components/atoms/Button";
import React from "react";
import {
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, FieldGroup, Input, Label } from "./Field";
import { composeTailwindRenderProps } from "./utils";

export interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false: "",
      true: "",
    },
    isInvalid: {
      true: "border-red-600",
    },
    isDisabled: {
      true: "border-input-disabled text-input-disabled-foreground",
    },
  },
});

export const NumberField = React.forwardRef<HTMLDivElement, NumberFieldProps>(
  ({ label, description, errorMessage, className, ...props }, ref) => (
    <AriaNumberField
      {...props}
      ref={ref}
      className={composeTailwindRenderProps(
        className,
        "group flex flex-col gap-1",
      )}
    >
      {label && <Label>{label}</Label>}

      <FieldGroup className="inline-block h-6.5 rounded-sm max-w-26 border-input-brd hover:border-input-brd-dark disabled:border-input-disabled disabled:bg-disabled disabled:text-input-disabled-foreground">
        {(renderProps) => (
          <>
            <div
              className={fieldBorderStyles({
                ...renderProps,
                class: "flex items-center justify-between -mt-1 px-0.5",
              })}
            >
              <Button
                slot="decrement"
                colorScheme="secondary"
                size="small"
                iconOnly
                icon={{ name: "minus" }}
                className="rounded-sm w-5 h-5 disabled:rounded-sm"
              ></Button>

              <Input className="max-w-[60px] text-center ring-0 bg-transparent disabled:bg-input-disabled" />

              <Button
                slot="increment"
                colorScheme="secondary"
                size="small"
                iconOnly
                icon={{ name: "plus" }}
                className="rounded-sm w-5 h-5 disabled:rounded-sm"
              ></Button>
            </div>
          </>
        )}
      </FieldGroup>

      {description && <Description>{description}</Description>}
      {errorMessage && <FieldError>{errorMessage}</FieldError>}
    </AriaNumberField>
  ),
);
NumberField.displayName = "NumberField";
