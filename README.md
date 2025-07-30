# React SPA Production

A production-ready Single Page Application built with React, TypeScript, Webpack, and LESS. This project demonstrates modern React development practices with optimized build processes and clean code architecture.

## 🚀 Technology Stack

### Core Stack
- **React 19.1.1** - UI library with latest features
- **TypeScript 5.8.3** - Type safety with strict mode
- **React Router DOM 7.0.2** - Client-side routing

### Build Tools
- **Webpack 5.101.0** - Module bundler with optimizations
- **ts-loader** - TypeScript compilation

### Styling
- **LESS 4.2.1** - CSS preprocessor with variables and mixins
- **CSS Modules** - Scoped styling

### Code Quality
- **ESLint 9.32.0** - Linting with flat config
- **Prettier 3.4.1** - Code formatting
- **Husky 9.1.7** - Git hooks
- **lint-staged** - Pre-commit linting

### Other Tools
- **Webpack Bundle Analyzer** - Bundle analysis and optimization

## 📁 Project Structure

```
├── config/                    # Webpack configuration files
│   ├── webpack.common.js      # Common webpack config
│   ├── webpack.dev.js         # Development config
│   └── webpack.prod.js        # Production config
├── public/                    # Static files
│   └── index.html            # HTML template
├── src/                      # Source code
│   ├── components/           # Reusable components
│   ├── pages/               # Page components
│   ├── styles/              # Global styles and variables
│   ├── utils/               # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   ├── services/            # API services
│   ├── App.tsx              # Main App component
│   └── index.tsx            # Entry point
├── eslint.config.js         # ESLint configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-spa-production
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Husky hooks:**
   ```bash
   npm run prepare
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Webpack development server |
| `npm run build` | Build for production |
| `npm run analyze` | Build with bundle analyzer |
| `npm run lint` | Run ESLint with auto-fix |
| `npm run lint:check` | Check linting without fixing |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript type checking |
| `npm run clean` | Clean build artifacts |
| `npm run validate` | Run all checks (type, lint, build) |

## 🔧 Configuration

### Webpack Configuration
- **Development**: Hot reload, source maps, unminified bundles
- **Production**: Minification, code splitting, optimized assets

### LESS Configuration
- Variables and mixins in `src/styles/`
- CSS Modules with scoped styling
- Modular variables for consistent theming

### ESLint Configuration
- Modern flat config format in `eslint.config.js`
- TypeScript integration with strict rules
- React and accessibility plugins configured
- Prettier integration for consistent formatting

## 🎯 Build Process

### Development Build
```bash
npm run dev
```
- Fast compilation with ts-loader
- Hot module replacement
- Source maps enabled
- Unminified code for debugging

### Production Build
```bash
npm run build
```
- TypeScript compilation
- Code minification with Terser
- Tree shaking
- Bundle splitting
- Asset optimization
- Cache busting with content hashes

### Bundle Analysis
```bash
npm run analyze
```
- Generates detailed bundle report
- Shows module dependencies
- Identifies optimization opportunities

## 🔒 Code Quality

### Pre-commit Hooks
- ESLint checking and auto-fixing
- Prettier formatting
- Staged files only

### Pre-push Hooks
- TypeScript type checking
- ESLint verification

### Git Workflow
```bash
# Commits will automatically trigger:
# 1. lint-staged (format and lint staged files)
# 2. Pre-commit hooks

# Pushes will trigger:
# 1. TypeScript type checking
# 2. ESLint verification
```

## 📊 Performance Features

- **Code Splitting**: Automatic chunk splitting for optimal loading
- **Tree Shaking**: Eliminates unused code
- **Asset Optimization**: Images and fonts are optimized
- **Caching**: Long-term caching with content hashes
- **Bundle Analysis**: Built-in webpack-bundle-analyzer

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Static Hosting
Deploy the `dist/` folder to any static hosting service:
- Netlify
- Vercel  
- AWS S3 + CloudFront
- GitHub Pages
- Azure Static Web Apps

### Server Configuration
For SPA routing, configure your server to serve `index.html` for all routes:

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## 🔍 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all checks pass: `npm run validate`
5. Commit your changes (triggers pre-commit hooks)
6. Push to your branch
7. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

---

**Built with React + TypeScript + Webpack + LESS**