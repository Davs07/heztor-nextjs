import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2  whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default:
          "text-muted-foreground border border-border hover:bg-accent hover:text-main hover:border-accent",
        primary:
          "bg-card shadow-sm text-muted-foreground hover:bg-accent hover:text-main",
        secondary:
          " text-muted-foreground border border-border hover:bg-accent hover:text-main hover:border-accent",
        highlight:
          "bg-card shadow-sm text-muted-foreground hover:bg-card/80 hover:text-main hover:shadow-2xl hover:shadow-main",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:text-main",
        custom:
          "bg-card text-primary border border-primary hover:text-main hover:border-main",
        icon: "bg-transparent text-muted-foreground hover:bg-accent hover:text-primary",
        transparent:
          "hover:border-main border border-transparent hover:text-main",
        destructive: "text-red-500 hover:bg-destructive/10 ",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        free: "h-max w-max",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
