import * as React from "react"
import { Card, Box, Text, Heading } from '@radix-ui/themes'
import { cn } from "../../lib/utils"

export interface CustomCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  title?: string
  description?: string
  children?: React.ReactNode
  hover?: boolean
}

const CustomCard = React.forwardRef<
  React.ElementRef<typeof Card>,
  CustomCardProps
>(({ className, title, description, children, hover = false, ...props }, ref) => {
  return (
    <Card
      className={cn(
        hover && "transition-all duration-200 hover:scale-105 hover:shadow-lg",
        className
      )}
      ref={ref}
      {...props}
    >
      {title && (
        <Box mb="3">
          <Heading size="4" mb="1">{title}</Heading>
          {description && (
            <Text size="2" color="gray">{description}</Text>
          )}
        </Box>
      )}
      {children}
    </Card>
  )
})
CustomCard.displayName = "CustomCard"

export { CustomCard }