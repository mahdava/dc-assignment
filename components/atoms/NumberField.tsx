"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";
import {
  Button as AriaButton,
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  ButtonProps,
  ValidationResult,
} from "react-aria-components";
import {
  Description,
  FieldError,
  FieldGroup,
  Input,
  Label,
  fieldBorderStyles,
} from "./Field";
import { composeTailwindRenderProps } from "./utils";

export interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

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

      <FieldGroup>
        {(renderProps) => (
          <>
            <Input />
            <div
              className={fieldBorderStyles({
                ...renderProps,
                class: "flex flex-col border-s-2",
              })}
            >
              <StepperButton slot="increment">
                <ChevronUp aria-hidden className="w-4 h-4" />
              </StepperButton>

              <div
                className={fieldBorderStyles({
                  ...renderProps,
                  class: "border-b-2",
                })}
              />

              <StepperButton slot="decrement">
                <ChevronDown aria-hidden className="w-4 h-4" />
              </StepperButton>
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

export const StepperButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <AriaButton
      {...props}
      ref={ref}
      className={composeTailwindRenderProps(
        className,
        "px-0.5 cursor-default text-gray-500 pressed:bg-gray-100 group-disabled:text-gray-200 dark:text-zinc-400 dark:pressed:bg-zinc-800 dark:group-disabled:text-zinc-600 forced-colors:group-disabled:text-[GrayText]",
      )}
    />
  ),
);
StepperButton.displayName = "StepperButton";
