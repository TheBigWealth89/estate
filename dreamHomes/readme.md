# DreamHomes Real Estate

A modern, responsive real estate landing page built with React, TypeScript, and Vite. Features property listings, interactive search, video tours, and beautiful animations.

🌍 **Live Demo**: [https://dream-ho.netlify.app/](https://dream-ho.netlify.app/)


## Tech Stack

- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite + TailwindCSS 3
- **Animations**: Framer Motion for smooth transitions and interactions
- **Testing**: Vitest
- **UI**: Radix UI + TailwindCSS 3 + Lucide React icons

## Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components (Index.tsx = home)
├── components/           # React components including real estate features
│   ├── ui/               # Pre-built UI component library
│   ├── Hero.tsx          # Hero section with search and video modal
│   ├── FeaturedListings.tsx # Property listings with details modal
│   ├── PropertyCard.tsx  # Individual property card component
│   ├── PropertyDetails.tsx # Property details modal
│   ├── SearchBar.tsx     # Interactive property search
│   ├── VideoModal.tsx    # Video tour modal
│   └── ...               # Other components
├── App.tsx               # App entry point and SPA routing setup
└── global.css           # TailwindCSS 3 theming and global styles
```

## Key Features

## SPA Routing System

The routing system is powered by React Router 6:

- `client/pages/Index.tsx` represents the home page.
- Routes are defined in `client/App.tsx` using the `react-router-dom` import
- Route files are located in the `client/pages/` directory

For example, routes can be defined with:

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Index />} />
   <Route path="*" element={<NotFound />} />
</Routes>;
```

### Styling System

- **Primary**: TailwindCSS 3 utility classes
- **Theme and design tokens**: Configure in `client/global.css`
- **UI components**: Pre-built library in `client/components/ui/`
- **Utility**: `cn()` function combines `clsx` + `tailwind-merge` for conditional classes

```typescript
className={cn(
  "base-classes",
  { "conditional-class": condition },

)}
```

### Real Estate Features

- **Property Search**: Interactive search with location suggestions and filters
- **Property Listings**: Grid of featured properties with detailed information
- **Property Details**: Modal with image gallery, full details, and agent contact
- **Video Tours**: Interactive video modal with custom controls
- **Agent Contact**: Direct phone and email contact for each property

Path aliases:

- `@/*` - Client folder

## Development Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build
npm run preview    # Preview production build
npm run typecheck  # TypeScript validation
npm test          # Run Vitest tests
```

## Adding Features

### Add new colors to the theme

Open `client/global.css` and `tailwind.config.ts` and add new tailwind colors.

### New Property Features

1. **Add new property types**: Update the property interface in `PropertyCard.tsx` and `PropertyDetails.tsx`
2. **Enhance search filters**: Add new filter options in `SearchBar.tsx`
3. **Add new property data**: Update the mock data in `FeaturedListings.tsx`

### New Page Route

1. Create component in `client/pages/MyPage.tsx`
2. Add route in `client/App.tsx`:

```typescript
<Route path="/my-page" element={<MyPage />} />
```

### Customize Video Content

- Update the video source in `VideoModal.tsx`
- Add multiple video options for different property types
- Customize video poster images

## Production Deployment

- **Standard**: `npm run build` + `npm run preview`
- **Static Hosting**: Deploy to Netlify, Vercel, or GitHub Pages
- **CDN**: All assets optimized for CDN delivery

## Architecture Notes

- Pure frontend application with Vite for development
- TypeScript throughout for type safety
- Framer Motion for smooth animations
- Responsive design with mobile-first approach
- Comprehensive UI component library with Radix UI
- Mock API integration ready for real estate APIs
