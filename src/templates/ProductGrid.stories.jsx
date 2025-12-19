import { ProductGrid } from './ProductGrid';
import { products } from '../data/products';

export default {
  title: 'Template/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ProductGrid

제품 목록을 그리드 레이아웃으로 표시하는 템플릿.

### 용도
- 제품 목록 페이지
- 무조건 4열 고정 그리드 레이아웃 (size={3})
- 그리드 최소 너비 600px 보장 (작은 화면에서 가로 스크롤)
- timeline 값으로 모든 제품의 낮/밤 이미지를 동시에 제어
        `,
      },
    },
  },
  argTypes: {
    products: {
      control: 'object',
      description: '제품 데이터 배열',
    },
    timeline: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
      description: '블렌딩 값 (0: 낮, 1: 밤)',
    },
    spacing: {
      control: { type: 'number', min: 0, max: 8, step: 1 },
      description: 'Grid spacing 값',
    },
    onProductClick: {
      action: 'product-clicked',
      description: '제품 클릭 핸들러',
    },
  },
};

export const Default = {
  args: {
    products: products,
    timeline: 0,
    spacing: 2,
  },
};

export const NightMode = {
  args: {
    products: products,
    timeline: 1,
    spacing: 2,
  },
};

export const HalfBlended = {
  args: {
    products: products,
    timeline: 0.5,
    spacing: 2,
  },
};

export const WithClickHandler = {
  args: {
    products: products,
    timeline: 0,
    spacing: 2,
    onProductClick: (id) => alert(`Product ${id} clicked!`),
  },
};

export const FirstSix = {
  args: {
    products: products.slice(0, 6),
    timeline: 0,
    spacing: 2,
  },
};
