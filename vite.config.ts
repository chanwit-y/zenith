import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src/lib/**/*', 'src/components/**/*', 'src/themes/**/*'],
      exclude: ['src/**/*.test.*', 'src/**/*.spec.*'],
    }),
    tailwindcss(),
  ],
  build: {
    lib: {
      // Entry point for your library
      entry: resolve(__dirname, 'src/lib/main.ts'),
      name: 'zenith',
      formats: ['es', 'umd'],
      fileName: (format) => `zenith.${format}.js`,
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: ['react', 'react-dom', '@radix-ui/themes', '@radix-ui/react-slot', '@radix-ui/react-icons'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@radix-ui/themes': 'RadixThemes',
          '@radix-ui/react-slot': 'RadixSlot',
          '@radix-ui/react-icons': 'RadixIcons',
        },
        // Preserve CSS as a separate file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'styles.css';
          return assetInfo.name || 'asset';
        },
      },
    },
    // Ensure CSS is extracted
    cssCodeSplit: false,
  },
})