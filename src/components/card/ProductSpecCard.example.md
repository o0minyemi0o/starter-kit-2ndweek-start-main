# ProductSpecCard Component

## Overview

A refined, minimal component for displaying product specifications in a vertical layout with icon, label, and value. Designed for use within LineGrid for structured data display.

## Component Location

- **Component**: `src/components/card/ProductSpecCard.jsx`
- **Story**: `src/components/card/ProductSpecCard.stories.jsx`
- **Category**: Custom Component/ProductSpecCard

## Features

- ✅ lucide-react icon integration
- ✅ Typography hierarchy (icon → caption label → monospace value)
- ✅ Lumenstate design tokens
- ✅ Minimal aesthetic (no decorations)
- ✅ Responsive spacing with theme tokens
- ✅ Full Storybook documentation with autodocs

## Installation & Import

```jsx
// Import from card module (recommended)
import { ProductSpecCard } from '@/components/card';

// Import LineGrid from layout module
import { LineGrid } from '@/components/layout';

// Or direct imports
import { ProductSpecCard } from '@/components/card/ProductSpecCard';
import LineGrid from '@/components/layout/LineGrid';

// Import icons from lucide-react
import { Sun, Lightbulb, Zap } from 'lucide-react';
```

## Basic Usage

```jsx
import { ProductSpecCard } from '@/components/card';
import { Sun } from 'lucide-react';

function ProductDetail() {
  return (
    <ProductSpecCard
      icon={Sun}
      label="Luminosity"
      value="260 lx"
    />
  );
}
```

## Usage in LineGrid (Recommended)

```jsx
import Grid from '@mui/material/Grid';
import { LineGrid } from '@/components/layout';
import { ProductSpecCard } from '@/components/card';
import { Sun, Lightbulb, Zap, Thermometer } from 'lucide-react';

function ProductSpecs() {
  return (
    <LineGrid container gap={0}>
      <Grid size={{ xs: 6, md: 3 }}>
        <ProductSpecCard
          icon={Sun}
          label="Luminosity"
          value="260 lx"
        />
      </Grid>
      <Grid size={{ xs: 6, md: 3 }}>
        <ProductSpecCard
          icon={Lightbulb}
          label="Color Temp"
          value="3200 K"
        />
      </Grid>
      <Grid size={{ xs: 6, md: 3 }}>
        <ProductSpecCard
          icon={Zap}
          label="Power"
          value="12 W"
        />
      </Grid>
      <Grid size={{ xs: 6, md: 3 }}>
        <ProductSpecCard
          icon={Thermometer}
          label="Operating Temp"
          value="-10 ~ 40°C"
        />
      </Grid>
    </LineGrid>
  );
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `icon` | `React.ComponentType` | ✅ Yes | - | lucide-react 아이콘 컴포넌트 |
| `label` | `string` | ✅ Yes | - | 스펙 항목명 (예: "Luminosity") |
| `value` | `string \| number` | ✅ Yes | - | 스펙 값 (예: "260 lx") |
| `iconSize` | `number` | No | `32` | 아이콘 크기 (px) |
| `iconStrokeWidth` | `number` | No | `1.5` | 아이콘 선 두께 |
| `iconColor` | `string` | No | `text.primary` | 아이콘 색상 |
| `sx` | `object` | No | - | 추가 MUI sx prop 스타일 |

## Customization

### Custom Icon Size
```jsx
<ProductSpecCard
  icon={Sun}
  label="Luminosity"
  value="260 lx"
  iconSize={48}  // Larger icon
/>
```

### Custom Icon Color
```jsx
<ProductSpecCard
  icon={Moon}
  label="Night Mode"
  value="120 lx"
  iconColor="#FFC66E"  // 3800K Accent
/>
```

### Custom Styling
```jsx
<ProductSpecCard
  icon={Lightbulb}
  label="Color Temp"
  value="3200 K"
  sx={{
    backgroundColor: 'grey.50',
    minHeight: 200,
  }}
/>
```

## Design Principles

- **Minimal**: No borders, shadows, or backgrounds - pure content
- **Hierarchical**: Icon (visual) → Label (context) → Value (data)
- **Technical**: Monospace values for precision and clarity
- **Responsive**: Spacing adapts with theme breakpoints
- **Accessible**: Proper semantic structure and contrast

## Available in Storybook

View interactive examples and documentation:
- **Story Path**: Custom Component / ProductSpecCard
- **Controls**: Adjust all props in real-time
- **Examples**: Default, LineGrid usage, Icon variants, Size variants

## Rules Compliance

✅ Follows all project rules:
- Uses MUI Grid with correct import (`@mui/material/Grid`)
- Uses lucide-react icons (as specified in design-system.mdc)
- Uses theme tokens for spacing, colors, typography
- Includes full JSDoc props documentation
- Includes Storybook story with autodocs
- No custom SVG icons (uses lucide-react)
- Exported from card/index.js

## Related Components

- `LineGrid`: Layout component for grid with dividing lines
- `ProductCard`: Card for product display with TimeBlendImage
- `CustomCard`: Base card component
