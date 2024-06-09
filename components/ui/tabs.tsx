import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

// Define variantes para TabsList
const tabsListVariants = cva("inline-flex items-center justify-center  p-2  ", {
  variants: {
    variant: {
      default: "rounded-lg bg-card shadow text-muted-foreground",
      antd: "border-b border-gray-300 py-0",
      custom1: "rounded-lg bg-transparent shadow-none border",
      custom2: "rounded-lg bg-accent shadow-none p-1",
      custom3: "bg-accent shadow-none p-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
    VariantProps<typeof tabsListVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant }), className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

// Define variantes para TabsTrigger
const tabsTriggerVariants = cva(
  "inline-flex items-center min-w-24 justify-center  whitespace-nowrap px-3 py-1.5 text-sm text-muted-foreground  font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  data-[state=active]:text-primary",
  {
    variants: {
      variant: {
        default:
          " rounded-lg border-input ring-offset-background focus-visible:ring-ring data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:shadow-sm",
        antd: "px-4 py-2 border-b-2 border-transparent hover:text-blue-500 data-[state=active]:text-blue-600 data-[state=active]:border-blue-600",
        custom1:
          "rounded-lg   data-[state=active]:bg-card  data-[state=active]:shadow-sm",
        custom2:
          "rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm",
        custom3:
          "rounded-none border-b-8 border-transparent data-[state=active]:border-main",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof tabsTriggerVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant }), className)}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// Define variantes para TabsContent
const tabsContentVariants = cva(
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "focus-visible:ring-ring",
        antd: "",
        custom1: "",
        custom2: "",
        custom3: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> &
    VariantProps<typeof tabsContentVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(tabsContentVariants({ variant }), className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
