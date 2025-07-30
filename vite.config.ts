import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { checker } from 'vite-plugin-checker';
// import eslint from 'vite-plugin-eslint'; // Temporarily disabled due to type issues
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        plugins: [['@swc/plugin-emotion', {}]],
      }),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        },
      }),
      // eslint({
      //   cache: false,
      //   include: ['./src/**/*.{ts,tsx}'],
      //   exclude: ['node_modules'],
      // }),
      VitePWA({
        registerType: 'autoUpdate',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                },
              },
            },
          ],
        },
        manifest: {
          name: 'React SPA Production',
          short_name: 'ReactSPA',
          description: 'Production-ready React SPA with latest July 2025 versions',
          theme_color: '#1890ff',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
      }),
    ],
    define: {
      __DEV__: command === 'serve',
      __PROD__: command === 'build',
      'process.env': env,
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
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: '@import "@/styles/variables.less";',
          modifyVars: {
            'primary-color': '#1890ff',
            'link-color': '#1890ff',
            'success-color': '#52c41a',
            'warning-color': '#faad14',
            'error-color': '#f5222d',
          },
        },
        scss: {
          additionalData: '@import "@/styles/variables.scss";',
        },
      },
      modules: {
        localsConvention: 'camelCaseOnly',
        generateScopedName: '[name]__[local]___[hash:base64:5]',
      },
      transformer: 'lightningcss',
    },
    build: {
      target: ['es2022', 'chrome108', 'firefox108', 'safari15'],
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      minify: 'esbuild',
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            router: ['react-router-dom'],
            vendor: ['@emotion/react', '@emotion/styled'],
          },
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
          assetFileNames: ({ name }) => {
            if (name && name.endsWith('.css')) {
              return 'css/[name].[hash][extname]';
            }
            return 'assets/[name].[hash][extname]';
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    server: {
      port: 3000,
      host: true,
      open: true,
      cors: true,
      hmr: {
        overlay: true,
      },
    },
    preview: {
      port: 4173,
      host: true,
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['./src/test/setup.ts'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: ['@vite/client', '@vite/env'],
    },
  };
});