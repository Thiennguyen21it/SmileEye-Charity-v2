# 🌟 SmileEye Charity v2

A modern, responsive charity website built with React, TypeScript, and Tailwind CSS to support Co-tu communities in Vietnam.

## ✨ Features

- **🌍 Multi-language Support**: English, Vietnamese, and Japanese
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **⚡ Performance Optimized**: TypeScript, code splitting, and modern build tools
- **🎨 Modern UI/UX**: Beautiful animations and interactive components
- **♿ Accessibility**: WCAG compliant with proper ARIA labels
- **🔧 Developer Experience**: ESLint, TypeScript, and hot reload

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd SmileEye-charity-v2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Header, Footer, Navigation
│   └── ui/             # Button, Modal, LoadingSpinner
├── pages/              # Page components
├── context/            # React Context providers
├── i18n/               # Internationalization
│   ├── config.ts       # i18next configuration
│   └── locales/        # Translation files
├── utils/              # Utility functions and constants
├── types/              # TypeScript type definitions
├── data/               # Static data and configurations
└── styles/             # Global styles
```

## 🔧 Technologies Used

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Internationalization**: react-i18next
- **Routing**: React Router DOM
- **Icons**: FontAwesome
- **Notifications**: React Hot Toast
- **Linting**: ESLint

## 📱 Pages

1. **Home** - Hero section with project video and information
2. **Blog** - Latest news and updates
3. **Achievement** - Program accomplishments and milestones
4. **Contributors** - Sponsors and supporters
5. **Contribute** - Donation and volunteer opportunities
6. **QA & Contact** - FAQ and contact information

## 🌐 Internationalization

The application supports three languages:

- **English** (en) - Default
- **Vietnamese** (vn)
- **Japanese** (jp)

Language files are located in `src/i18n/locales/` and can be easily extended.

## 🎨 UI Components

### Reusable Components

- **Button**: Multiple variants (primary, secondary, outline, danger, success)
- **LoadingSpinner**: Configurable size and color
- **ContactModal**: Form with validation and submission

### Design System

- **Colors**: Emerald primary, gray neutrals
- **Typography**: Inter font family
- **Spacing**: Consistent Tailwind spacing scale
- **Animations**: Smooth transitions and hover effects

## 🚀 Performance Optimizations

### Code Quality

- ✅ **TypeScript**: Full type safety and better developer experience
- ✅ **ESLint**: Code quality and consistency
- ✅ **Component Reusability**: Shared UI components
- ✅ **Constants**: Centralized configuration

### Build Optimizations

- ✅ **Vite**: Fast build tool with HMR
- ✅ **Tree Shaking**: Unused code elimination
- ✅ **Code Splitting**: Automatic route-based splitting
- ✅ **Asset Optimization**: Image and CSS optimization

### Bundle Analysis

- **CSS**: ~40KB (6.7KB gzipped)
- **JavaScript**: ~477KB (149KB gzipped)
- **Total**: Fast loading with modern compression

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Style

- Use TypeScript for all new components
- Follow React functional component patterns
- Use Tailwind CSS for styling
- Implement proper error handling
- Add proper TypeScript types

## 🌟 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Contact

- **Phone**: 0962 414 125
- **Email**: dinhdongphuong@gmail.com
- **Location**: Co-tu Communities, Vietnam

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for the Co-tu communities**
