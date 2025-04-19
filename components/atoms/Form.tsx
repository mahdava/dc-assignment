"use client";

import React from "react";
import {
  Form as RACForm,
  FormProps as RACFormProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface FormProps extends RACFormProps {}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, ...props }, ref) => (
    <RACForm
      {...props}
      ref={ref}
      className={twMerge("flex flex-col gap-4", className)}
    />
  ),
);

Form.displayName = "Form";
