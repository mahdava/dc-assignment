"use client";

import Icon, { IconProps } from "@/components/atoms/Icon";
import React, { ReactNode } from "react";
import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./utils";

export interface ButtonProps extends RACButtonProps {
  colorScheme?: "primary" | "secondary" | "destructive";
  variant?: "contained" | "outlined";
  size?: "small" | "medium";
  icon?: IconProps;
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
  children?: ReactNode;
}

const button = tv({
  extend: focusRing,
  base: "inline-flex items-center justify-center rounded-lg border transition cursor-pointer",
  variants: {
    colorScheme: {
      primary: "",
      secondary: "",
      destructive: "",
    },
    variant: {
      contained: "",
      outlined: "bg-transparent",
    },
    size: {
      small: "px-2 py-1 text-sm font-medium",
      medium: "px-4 py-2 text-base leading-none font-medium",
    },
    disabled: {
      true: "cursor-not-allowed",
    },
    hovered: {
      true: "",
    },
    pressed: {
      true: "",
    },
    focused: {
      true: "",
    },
  },
  compoundVariants: [
    // Primary, contained
    {
      colorScheme: "primary",
      variant: "contained",
      class:
        "bg-btn-primary border-btn-primary text-btn-primary-foreground disabled:bg-btn-disabled disabled:text-btn-disabled-foreground disabled:border-btn-disabled",
    },
    {
      colorScheme: "primary",
      variant: "contained",
      hovered: true,
      class: "bg-btn-primary-dark border-btn-primary-dark",
    },
    {
      colorScheme: "primary",
      variant: "contained",
      pressed: true,
      class: "bg-btn-primary-dark border-btn-primary-dark",
    },

    // Primary, outlined
    {
      colorScheme: "primary",
      variant: "outlined",
      class:
        "border-btn-primary text-btn-primary disabled:border-btn-disabled disabled:text-btn-disabled-foreground",
    },
    {
      colorScheme: "primary",
      variant: "outlined",
      hovered: true,
      class:
        "bg-btn-primary-outlined text-btn-primary-dark text-btn-primary-dark",
    },
    {
      colorScheme: "primary",
      variant: "outlined",
      pressed: true,
      class:
        "bg-btn-primary-outlined text-btn-primary-dark text-btn-primary-dark",
    },

    // Secondary, contained
    {
      colorScheme: "secondary",
      variant: "contained",
      class:
        "bg-btn-secondary border-btn-secondary text-btn-secondary-foreground disabled:bg-btn-disabled disabled:text-btn-disabled-foreground disabled:border-btn-disabled",
    },
    {
      colorScheme: "secondary",
      variant: "contained",
      hovered: true,
      class:
        "bg-btn-secondary-dark border-btn-secondary-dark text-btn-secondary-foreground",
    },
    {
      colorScheme: "secondary",
      variant: "contained",
      pressed: true,
      class:
        "bg-btn-secondary-dark border-btn-secondary-dark text-btn-secondary-foreground",
    },

    // Secondary, outlined
    {
      colorScheme: "secondary",
      variant: "outlined",
      class:
        "border-btn-secondary-outlined text-btn-secondary-outlined-foreground disabled:text-btn-disabled-foreground disabled:border-btn-disabled",
    },
    {
      colorScheme: "secondary",
      variant: "outlined",
      hovered: true,
      class: "border-btn-secondary-outlined-dark",
    },
    {
      colorScheme: "secondary",
      variant: "outlined",
      pressed: true,
      class: "border-btn-secondary-outlined-dark",
    },

    // Destructive, contained
    // Missing from the original Figma file, however needed in most cases
    {
      colorScheme: "destructive",
      variant: "contained",
      class: "bg-red-700 text-white border-transparent",
    },
    {
      colorScheme: "destructive",
      variant: "contained",
      hovered: true,
      class: "hover:bg-red-800",
    },
    {
      colorScheme: "destructive",
      variant: "contained",
      pressed: true,
      class: "pressed:bg-red-900",
    },

    // Destructive, outlined
    {
      colorScheme: "destructive",
      variant: "outlined",
      class: "border-red-700 text-red-700",
    },
    {
      colorScheme: "destructive",
      variant: "outlined",
      hovered: true,
      class: "hover:bg-red-50",
    },
    {
      colorScheme: "destructive",
      variant: "outlined",
      pressed: true,
      class: "pressed:bg-red-100",
    },
  ],
  defaultVariants: {
    colorScheme: "primary",
    variant: "contained",
    size: "medium",
    disabled: false,
  },
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      colorScheme = "primary",
      variant = "contained",
      size = "medium",
      icon,
      iconPosition = "left",
      iconOnly = false,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const iconMarginFromText = () => {
      if (size === "small") {
        return iconPosition === "left" ? "mr-1" : "ml-1";
      }
      if (size === "medium") {
        return iconPosition === "left" ? "mr-2" : "ml-2";
      }
    };

    const iconOnlyMargin = () => {
      if (size === "small") {
        return "-mx-1";
      }
      if (size === "medium") {
        return "-mx-2";
      }
    };

    return (
      <RACButton
        {...props}
        ref={ref}
        className={composeRenderProps(
          className,
          (
            cn,
            { isHovered, isPressed, isFocused, isFocusVisible, isDisabled },
          ) =>
            button({
              colorScheme,
              variant,
              size,
              hovered: isHovered,
              pressed: isPressed,
              focused: isFocused,
              isFocusVisible: isFocusVisible,
              disabled: isDisabled,
              className: cn,
            }),
        )}
      >
        {icon ? (
          iconOnly ? (
            <>
              <Icon {...icon} aria-hidden="true" className={iconOnlyMargin()} />
              {children && <span className="sr-only">{children}</span>}
            </>
          ) : (
            <>
              {iconPosition === "left" && (
                <Icon {...icon} className={iconMarginFromText()} />
              )}
              {children}
              {iconPosition === "right" && (
                <Icon {...icon} className={iconMarginFromText()} />
              )}
            </>
          )
        ) : (
          children
        )}
      </RACButton>
    );
  },
);

Button.displayName = "Button";
