# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# @chanwity/zenith

A modern React component library built with Radix UI and Tailwind CSS.

## Installation

```bash
npm install @chanwity/zenith
# or
yarn add @chanwity/zenith
# or
pnpm add @chanwity/zenith
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom @radix-ui/themes
```

## Usage

### 1. Import Styles

Import the CSS styles in your main application file:

```tsx
import '@chanwity/zenith/styles'
```

### 2. Wrap your app with ThemeProvider

```tsx
import { ThemeProvider } from '@chanwity/zenith'

function App() {
  return (
    <ThemeProvider
      theme={{
        appearance: 'light',
        accentColor: 'blue',
        radius: 'medium'
      }}
    >
      {/* Your app content */}
    </ThemeProvider>
  )
}
```

### 3. Use Components

```tsx
import { CustomButton, CustomCard, cn } from '@chanwity/zenith'

function MyComponent() {
  return (
    <div className="p-4">
      <CustomCard 
        title="Welcome" 
        description="This is a custom card component"
        hover
      >
        <CustomButton gradient>
          Click me!
        </CustomButton>
      </CustomCard>
    </div>
  )
}
```

## Components

### CustomButton

Extended Radix UI Button with additional features:

- `gradient`: Applies a custom gradient style
- `asChild`: Render as a different element
- All standard Radix UI Button props

### CustomCard

A card component with title and description:

- `title`: Card title
- `description`: Card description  
- `hover`: Enable hover effects
- Standard div props

### ThemeProvider

Wrapper for Radix UI Theme provider:

- `theme`: Theme configuration object
- `children`: React children
- `className`: Additional CSS classes

## Utilities

### cn

A utility function for merging Tailwind CSS classes:

```tsx
import { cn } from '@chanwity/zenith'

const className = cn('bg-blue-500', 'text-white', 'px-4 py-2')
```

## Themes

Pre-configured theme objects:

```tsx
import { defaultTheme, darkTheme } from '@chanwity/zenith'

// Use predefined themes
<ThemeProvider theme={darkTheme}>
  {/* Your app */}
</ThemeProvider>
```

## TypeScript

This library is written in TypeScript and includes complete type definitions.

## License

MIT
