import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    // watchExclude: ['**/node_modules/**', '**/dist/**'], // Removed - not supported in latest vitest
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov', 'clover'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/',
        'src/test/',
        'src/**/*.d.ts',
        'src/**/*.config.*',
        'src/**/*.stories.*',
        'src/main.tsx',
        'src/index.tsx',
        '**/dist/**',
        '**/*.test.*',
        '**/*.spec.*',
        'coverage/**',
        'public/**',
        'config/**',
      ],
      all: true,
      clean: true,
      skipFull: false,
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
    ui: true,
    open: false,
    api: {
      port: 51204,
    },
    server: {
      deps: {
        inline: ['@testing-library/user-event'],
      },
    },
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: false,
        useAtomics: true,
      },
    },
    logHeapUsage: true,
    passWithNoTests: true,
    clearMocks: true,
    restoreMocks: true,
    mockReset: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
    },
  },
  define: {
    __DEV__: true,
    __PROD__: false,
  },
});