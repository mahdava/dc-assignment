"use client";

import { Button } from "@/components/atoms/Button";
import React from "react";
import {
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
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

      <FieldGroup className="h-8 max-w-28">
        {(renderProps) => (
          <>
            <div
              className={fieldBorderStyles({
                ...renderProps,
                class: "flex items-center px-1",
              })}
            >
              <Button
                slot="decrement"
                colorScheme="secondary"
                size="small"
                iconOnly
                icon={{ name: "minus" }}
                className="rounded-sm w-5 h-5"
              ></Button>

              <Input className="max-w-[60px] py-4 text-center" />

              <Button
                slot="increment"
                colorScheme="secondary"
                size="small"
                iconOnly
                icon={{ name: "plus" }}
                className="rounded-sm w-5 h-5"
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
