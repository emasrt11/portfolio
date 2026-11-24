import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/*
  Button, allineato al componente Button di Figma (nodo 6-50): stessi nomi e stessi stati.
  Varianti: primary (predefinita), secondary, outline, ghost. Taglie: sm 32, md 40, lg 48 px.
  Stati: Default, Hover (hover:), Pressed (active:), Focus (focus-visible:), Disabled (disabled:).
  Solo token semantici (vedi DESIGN-SYSTEM.md): nessun colore, raggio o misura scritti a mano.
*/

/** Base comune a Button e Icon Button: raggio radius/sm e anello di focus staccato di 2 px (come in Figma). */
export const controlBase =
  "inline-flex shrink-0 items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:text-disabled-foreground";

/** Colori delle quattro varianti nei cinque stati. */
export const controlVariant = {
  primary: "bg-action text-action-foreground hover:bg-action-hover active:bg-action-pressed disabled:bg-disabled",
  secondary: "bg-raised text-foreground hover:bg-raised-hover active:bg-raised-pressed disabled:bg-disabled",
  outline: "border border-border-strong text-foreground hover:bg-raised active:bg-raised-hover disabled:border-border",
  ghost: "text-foreground hover:bg-raised active:bg-raised-hover",
} as const;

/** Icone dentro i controlli: taglia (icon/sm·md·lg) e spessore del tratto seguono la taglia del controllo. */
export const controlIcon = {
  sm: "[&_svg]:size-4 [&_svg]:[stroke-width:var(--icon-stroke-sm)]",
  md: "[&_svg]:size-5 [&_svg]:[stroke-width:var(--icon-stroke-md)]",
  lg: "[&_svg]:size-6 [&_svg]:[stroke-width:var(--icon-stroke-lg)]",
} as const;

const buttonVariants = cva(`${controlBase} type-small-medium gap-2 whitespace-nowrap`, {
  variants: {
    variant: controlVariant,
    size: {
      sm: `h-8 px-3 ${controlIcon.sm}`,
      md: `h-10 px-4 ${controlIcon.md}`,
      lg: `h-12 px-5 ${controlIcon.lg}`,
    },
  },
  compoundVariants: [
    /* il Ghost ha il padding laterale più stretto, perché non ha bordo né fondo */
    { variant: "ghost", size: "sm", className: "px-2" },
    { variant: "ghost", size: "md", className: "px-3" },
    { variant: "ghost", size: "lg", className: "px-4" },
  ],
  defaultVariants: { variant: "primary", size: "md" },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";

export { buttonVariants };
