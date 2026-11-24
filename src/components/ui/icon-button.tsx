import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { controlBase, controlIcon, controlVariant } from "@/components/ui/button";

/*
  Icon Button, allineato al componente Icon Button di Figma (nodo 35-263): quadrato 32, 40 o 48 px,
  stesse varianti e stessi stati del Button. Dentro va una sola icona (lucide-react).
  Non ha testo, quindi l'etichetta accessibile (aria-label) è obbligatoria.
*/
const iconButtonVariants = cva(controlBase, {
  variants: {
    variant: controlVariant,
    size: {
      sm: `size-8 ${controlIcon.sm}`,
      md: `size-10 ${controlIcon.md}`,
      lg: `size-12 ${controlIcon.lg}`,
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  /** Obbligatorio: senza testo visibile, lo screen reader legge solo questa etichetta. */
  "aria-label": string;
  asChild?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(iconButtonVariants({ variant, size }), className)} {...props} />;
  },
);
IconButton.displayName = "IconButton";

export { iconButtonVariants };
