import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { Button as RadixButton } from '@radix-ui/themes'
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

export interface CustomButtonProps extends ComponentPropsWithoutRef<typeof RadixButton> {
  asChild?: boolean
  gradient?: boolean
}

const CustomButton = forwardRef<
  ElementRef<typeof RadixButton>,
  CustomButtonProps
>(({ className, asChild = false, gradient = false, ...props }, ref) => {
  const Comp = asChild ? Slot : RadixButton

  return (
    <Comp
      className={cn(
        gradient && "custom-gradient text-white border-0",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
CustomButton.displayName = "CustomButton"

export { CustomButton }