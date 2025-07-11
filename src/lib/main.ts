// Export all Radix Themes components and custom components
export * from '../components/ui'

// Export utilities
export { cn } from './utils'

// Export theme configurations
export { defaultTheme } from '../themes/default'
export { darkTheme } from '../themes/dark'

// Import styles (side effect) - this ensures CSS is bundled
import '../styles/globals.css'