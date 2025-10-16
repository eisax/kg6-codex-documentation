# KG6-Codex Documentation

> Create beautiful docs with Markdown & Vue components

## About This Project

This is the **KG6-Codex** documentation project - a comprehensive documentation framework built on top of Nuxt 4. KG6-Codex provides a beautiful, modern, and feature-rich documentation theme that makes it easy to create stunning documentation sites with Markdown and Vue components.


## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd kg6-codex
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to see the documentation site.

## 🛠️ Development

### Available Scripts

- `pnpm run dev` - Start the development server
- `pnpm run docs:dev` - Run the docs development server
- `pnpm run docs:build` - Build the documentation
- `pnpm run lint` - Run ESLint
- `pnpm run typecheck` - Run TypeScript type checking

### Project Structure

This is a monorepo containing several key packages:

```
kg6-codex/
├── cli/                    # CLI tool
├── layer/                  # Main Nuxt layer package
├── docs/                   # Documentation site
├── .starters/              # Starter templates
└── package.json            # Workspace configuration
```

#### `/layer` - Core Package
The main Nuxt layer that provides:
- Documentation theme and components
- Layouts and templates
- Internationalization support
- Content management utilities

#### `/docs` - Documentation Site
The official KG6-Codex documentation that serves as:
- Live documentation for the framework
- Example implementation
- Development playground

#### `/cli` - Command Line Tool
The CLI tool for scaffolding new documentation projects.

### Development Workflow

1. **Make changes** to the layer, docs, or CLI
2. **Test locally** using `pnpm run dev`
3. **Build and verify** with `pnpm run docs:build`
4. **Run tests** and linting before committing

## Content Structure

### Single Language Documentation
```
content/
├── index.md
├── getting-started.md
└── guide/
    ├── introduction.md
    └── configuration.md
```

### Multi-Language Documentation (i18n)
```
content/
├── en/
    ├── index.md
    └── guide/
        └── introduction.md

```

## Creating New Documentation Projects

To create a new documentation project using KG6-Codex:

```bash
# Create a new project
npx create-kg6-codex my-docs

# Or create with i18n template for multi-language docs
npx create-kg6-codex my-docs -t i18n

# Navigate to your project
cd my-docs

# Start development server
npm run dev
```

## Built With

Your project comes pre-configured with the best of the Nuxt ecosystem:

- [Nuxt 4](https://nuxt.com) - The web framework
- [Nuxt Content](https://content.nuxt.com/) - File-based CMS
- [Nuxt UI](https://ui.nuxt.com) - UI components
- [Nuxt Image](https://image.nuxt.com/) - Optimized images
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Nuxt i18n](https://i18n.nuxtjs.org/) - Internationalization

## Documentation

For detailed documentation on customizing your KG6-Codex project, visit the documentation site.

## Contributing

We welcome contributions! Please see our contributing guidelines and feel free to submit issues and pull requests.

## Deployment

### Deploy to Vercel

This project is configured for easy deployment to Vercel:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect the Nuxt configuration

3. **Deploy:**
   - Vercel will automatically build and deploy your documentation
   - Your site will be available at `https://your-project-name.vercel.app`

### Manual Deployment

You can also deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

### Environment Variables

If you need to set any environment variables, add them in your Vercel dashboard under Project Settings > Environment Variables.

## License

Published under the [MIT](LICENSE) license.
