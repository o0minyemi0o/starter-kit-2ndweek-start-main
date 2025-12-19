import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ProductCard } from './ProductCard';
import { products } from '../../data/products';

export default {
  title: 'Custom Component/Card/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: 220, width: '100%' }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ProductCard

제품 정보를 표시하는 카드 컴포넌트.

### 용도
- 제품 그리드 레이아웃에서 개별 제품 표시
- 낮/밤 이미지 블렌딩으로 시간대별 제품 이미지 표현
- 제품명, 타입, 조도(lux), 색온도(kelvin) 정보 표시
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '제품명',
    },
    type: {
      control: 'select',
      options: ['ceiling', 'stand', 'wall', 'desk'],
      description: '제품 타입',
    },
    lux: {
      control: { type: 'number', min: 0, max: 1000, step: 10 },
      description: '조도 값',
    },
    kelvin: {
      control: { type: 'number', min: 2000, max: 6000, step: 100 },
      description: '색온도 값',
    },
    timeline: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
      description: '블렌딩 값 (0: 낮, 1: 밤)',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
};

export const Default = {
  args: {
    title: products[0].title,
    type: products[0].type,
    lux: products[0].lux,
    kelvin: products[0].kelvin,
    images: products[0].images,
    timeline: 0,
  },
};

export const NightMode = {
  args: {
    title: products[0].title,
    type: products[0].type,
    lux: products[0].lux,
    kelvin: products[0].kelvin,
    images: products[0].images,
    timeline: 1,
  },
};

export const Interactive = {
  args: {
    title: products[0].title,
    type: products[0].type,
    lux: products[0].lux,
    kelvin: products[0].kelvin,
    images: products[0].images,
    timeline: 0,
    onClick: () => alert('Product clicked!'),
  },
};

export const Variants = {
  decorators: [],
  render: () => (
    <Stack direction="row" spacing={2} sx={{ width: '100%', maxWidth: 700 }}>
      <Box sx={{ flex: 1, maxWidth: 220 }}>
        <ProductCard
          title={products[0].title}
          type={products[0].type}
          lux={products[0].lux}
          kelvin={products[0].kelvin}
          images={products[0].images}
          timeline={0}
        />
      </Box>
      <Box sx={{ flex: 1, maxWidth: 220 }}>
        <ProductCard
          title={products[1].title}
          type={products[1].type}
          lux={products[1].lux}
          kelvin={products[1].kelvin}
          images={products[1].images}
          timeline={0.5}
        />
      </Box>
      <Box sx={{ flex: 1, maxWidth: 220 }}>
        <ProductCard
          title={products[2].title}
          type={products[2].type}
          lux={products[2].lux}
          kelvin={products[2].kelvin}
          images={products[2].images}
          timeline={1}
        />
      </Box>
    </Stack>
  ),
};
