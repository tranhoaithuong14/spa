# React SPA Production

A production-ready Single Page Application built with React, TypeScript, Webpack, and LESS. This project demonstrates modern React development practices with optimized build processes, comprehensive tooling, and maintainable code architecture.

## 🚀 Features

- **🔥 Bleeding-Edge Stack**: React 19.0, TypeScript 5.8.4, Webpack 5.97, LESS 4.2.3 (Absolute Latest July 30, 2025)
- **⚡ Dual Build System**: Webpack + Vite 6.0.6 for maximum flexibility
- **🧪 Advanced Testing**: Vitest 2.3.4 with Happy-DOM, React Testing Library 16.1, MSW 2.6.8
- **🚀 Performance**: ESBuild, LightningCSS, SWC, Bundle Analyzer, PWA Support
- **🎯 Modern DevEx**: Hot reload, TypeScript strict mode, ESLint 9.35 (flat config), Prettier 3.4.2
- **🛡️ Security**: Input sanitization, CSP headers, XSS protection, latest security patches
- **♿ Accessibility**: WCAG 2.1 AA compliant, ARIA labels, semantic HTML, screen reader support
- **📱 PWA Ready**: Service Worker, offline support, installable app, push notifications
- **🔧 Developer Tools**: Husky 9.1.8, lint-staged 15.3, cross-platform scripts
- **🎨 Styling**: LESS 4.2.3, SASS support, CSS Modules, LightningCSS, Emotion support

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
│   │   ├── Layout/          # Layout components
│   │   ├── LoadingSpinner/  # Loading component
│   │   └── WelcomeSection/  # Welcome section component
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Home page
│   │   ├── About.tsx        # About page
│   │   ├── Contact.tsx      # Contact page
│   │   └── NotFound.tsx     # 404 page
│   ├── styles/              # Global styles and variables
│   │   ├── variables.less   # LESS variables
│   │   ├── mixins.less      # LESS mixins
│   │   └── global.less      # Global styles
│   ├── utils/               # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   ├── services/            # API services
│   ├── App.tsx              # Main App component
│   └── index.tsx            # Entry point
├── .husky/                  # Git hooks
├── .eslintrc.js             # ESLint configuration
├── .prettierrc              # Prettier configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

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

3. **Copy environment file:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your configuration.

4. **Install Husky hooks:**
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
| `npm run dev:vite` | Start Vite development server |
| `npm run build` | Build for production with Webpack |
| `npm run build:vite` | Build for production with Vite |
| `npm run build:analyze` | Build with bundle analyzer |
| `npm run analyze` | Analyze bundle size and composition |
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:ui` | Run tests with Vitest UI |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint with auto-fix |
| `npm run lint:check` | Check linting without fixing |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript type checking |
| `npm run preview` | Preview Vite production build |
| `npm run clean` | Clean all build artifacts |
| `npm run validate` | Run all checks (type, lint, test, build) |

## 🔧 Configuration

### Environment Variables

Create `.env` file based on `.env.example`:

- `REACT_APP_API_BASE_URL`: API base URL
- `REACT_APP_ENABLE_ANALYTICS`: Enable/disable analytics
- `NODE_ENV`: Environment (development/production)

### Webpack Configuration

- **Development**: Hot reload, source maps, unminified bundles
- **Production**: Minification, code splitting, optimized assets

### LESS Configuration

- Variables and mixins in `src/styles/`
- Modular CSS with CSS Modules
- Autoprefixer for browser compatibility

### ESLint Configuration (v9.x)

- Modern flat config format in `eslint.config.js`
- TypeScript integration with latest rules
- React and accessibility plugins configured
- Prettier integration for consistent formatting

### Testing Configuration

- **Vitest**: Lightning-fast test runner with native ES modules support
- **React Testing Library**: Simple and complete testing utilities  
- **JSDOM**: Browser environment simulation
- **Coverage Reports**: Built-in code coverage analysis

## 🎯 Build Process

### Development Build
```bash
npm run dev
```
- Fast compilation
- Hot module replacement
- Source maps
- Unminified code

### Production Build
```bash
npm run build
```
- Code minification
- Tree shaking
- Bundle splitting
- Asset optimization
- Cache busting with hashes

## 🔒 Security Features

- **Input Sanitization**: All user inputs are sanitized
- **Security Headers**: CSP, X-Frame-Options, etc.
- **XSS Protection**: Proper escaping and validation
- **Dependency Security**: Regular security audits

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactions

## 🧪 Code Quality

### Pre-commit Hooks
- ESLint checking
- Prettier formatting
- TypeScript compilation
- Automated code quality checks

### Git Workflow
```bash
# Commits will automatically trigger:
# 1. lint-staged (format and lint staged files)
# 2. Pre-commit hooks

# Pushes will trigger:
# 1. TypeScript type checking
# 2. ESLint verification
```

## 📊 Performance Optimizations

- **Code Splitting**: Routes and components are lazily loaded
- **Tree Shaking**: Unused code is eliminated
- **Asset Optimization**: Images and fonts are optimized
- **Caching**: Long-term caching with content hashes
- **Bundle Analysis**: Integrated webpack-bundle-analyzer

### Bundle Analysis
```bash
# Analyze bundle size and composition
npm run analyze

# Build with analyzer enabled
npm run build:analyze
```

The analyzer will generate detailed reports about:
- Bundle size breakdown
- Module dependencies
- Code splitting effectiveness
- Optimization opportunities

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
- IE 11+ (with polyfills)

## 📚 Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Core Stack** | | |
| React | ^19.0.0 | UI library with latest concurrent features |
| TypeScript | ^5.8.4 | Type safety with bleeding-edge language features |
| React Router | ^7.0.2 | Client-side routing with latest features |
| **Build Tools** | | |
| Webpack | ^5.97.1 | Primary module bundler with latest optimizations |
| Vite | ^6.0.6 | Alternative build tool for lightning-fast development |
| ESBuild | ^0.24.2 | Ultra-fast JavaScript bundler and minifier |
| SWC | ^3.8.1 | Rust-based JavaScript/TypeScript compiler |
| **Styling** | | |
| LESS | ^4.2.3 | Primary CSS preprocessor |
| SASS | ^1.83.0 | Alternative CSS preprocessor |
| LightningCSS | ^1.28.2 | Ultra-fast CSS bundler and minifier |
| Emotion | ^11.14.0 | CSS-in-JS library |
| **Testing** | | |
| Vitest | ^2.3.4 | Next-generation test runner |
| React Testing Library | ^16.1.0 | Simple and complete testing utilities |
| Happy-DOM | ^15.11.8 | Lightweight DOM implementation |
| MSW | ^2.6.8 | API mocking for testing |
| **Code Quality** | | |
| ESLint | ^9.35.0 | Latest linting with flat config |
| Prettier | ^3.4.2 | Code formatting |
| Husky | ^9.1.8 | Git hooks |
| lint-staged | ^15.3.0 | Pre-commit linting |
| **Tools** | | |
| Webpack Bundle Analyzer | ^4.10.2 | Bundle analysis and optimization |
| Workbox | ^7.3.0 | PWA and service worker tools |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all tests pass
5. Run linting and formatting
6. Commit your changes (triggers pre-commit hooks)
7. Push to your branch
8. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

**Build fails with TypeScript errors:**
```bash
npm run type-check
```

**Linting errors:**
```bash
npm run lint
```

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
```

**Module resolution issues:**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Performance Issues

**Bundle size too large:**
1. Use webpack-bundle-analyzer
2. Implement code splitting
3. Remove unused dependencies
4. Optimize imports

**Slow development server:**
1. Check for large files in src/
2. Exclude node_modules from file watchers
3. Use latest Node.js version

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check existing documentation
- Review configuration files

---

**Made with ❤️ by Frontend Architect Team**