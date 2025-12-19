import { ProductDetailTemplate } from './ProductDetailTemplate';
import { products } from '../data/products';

export default {
  title: 'Template/ProductDetailTemplate',
  component: ProductDetailTemplate,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## ProductDetailTemplate

제품 상세 페이지의 전체 레이아웃 템플릿입니다.

### 용도
- 제품 상세 페이지
- 제품 프레젠테이션
- 커머스 상세 화면

### 특징
- SplitScreen 50:50 분할 (좌: 이미지, 우: 정보)
- ProductImageViewer: 낮/밤 블렌딩, 타임라인 슬라이더
- ProductHeroTemplate: 제품명, 설명, 스펙 (Type, Lux, Kelvin)
- ProductInfoTemplate: 메타, 옵션, 액션
- md 이하에서 세로 스택 (이미지 하단)
- TimelineProvider로 전역 timeline 상태 관리
        `,
      },
    },
  },
  argTypes: {
    product: {
      control: 'object',
      description: '제품 데이터 { title, description, type, lux, kelvin, images }',
      table: {
        type: { summary: 'object' },
      },
    },
    price: {
      control: 'number',
      description: '제품 가격',
      table: {
        type: { summary: 'number' },
      },
    },
    itemNumber: {
      control: 'text',
      description: '제품 품번',
      table: {
        type: { summary: 'string' },
      },
    },
    leadTime: {
      control: 'text',
      description: '리드타임',
      table: {
        type: { summary: 'string' },
      },
    },
    shipDate: {
      control: 'text',
      description: '배송 예정일',
      table: {
        type: { summary: 'string' },
      },
    },
    onAddToCart: {
      action: 'added to cart',
      description: '장바구니 추가 핸들러 (quantity, options) => void',
      table: {
        type: { summary: 'function' },
      },
    },
    sx: {
      control: 'object',
      description: '추가 MUI sx prop 스타일',
      table: {
        type: { summary: 'object' },
      },
    },
  },
};

/** Lumen Desk Pro */
export const LumenDeskPro = {
  name: 'Lumen Desk Pro',
  args: {
    product: products[0],
    price: 850,
    itemNumber: 'LMP-DSK-001',
    leadTime: '2-3 weeks',
    shipDate: 'Jan 15, 2025',
  },
};

/** Lumen Ceiling */
export const LumenCeiling = {
  name: 'Lumen Ceiling',
  args: {
    product: products[1],
    price: 1200,
    itemNumber: 'LMP-CEI-002',
    leadTime: '3-4 weeks',
    shipDate: 'Jan 22, 2025',
  },
};

/** Lumen Floor */
export const LumenFloor = {
  name: 'Lumen Floor',
  args: {
    product: products[2],
    price: 950,
    itemNumber: 'LMP-FLR-003',
    leadTime: '2-3 weeks',
    shipDate: 'Jan 18, 2025',
  },
};

/** Lumen Wall */
export const LumenWall = {
  name: 'Lumen Wall',
  args: {
    product: products[3],
    price: 720,
    itemNumber: 'LMP-WAL-004',
    leadTime: 'In Stock',
    shipDate: 'Dec 28, 2024',
  },
};

/** Lumen Table */
export const LumenTable = {
  name: 'Lumen Table',
  args: {
    product: products[4],
    price: 680,
    itemNumber: 'LMP-TBL-005',
    leadTime: '1-2 weeks',
    shipDate: 'Jan 10, 2025',
  },
};

/** 높은 가격 제품 */
export const HighPriceProduct = {
  name: '높은 가격 제품',
  args: {
    product: products[11], // Lumen Studio
    price: 2450,
    itemNumber: 'LMP-STU-012',
    leadTime: '4-6 weeks',
    shipDate: 'Feb 1, 2025',
  },
};

/** 재고 있음 (즉시 배송) */
export const InStockProduct = {
  name: '재고 있음 (즉시 배송)',
  args: {
    product: products[10], // Lumen Mini
    price: 320,
    itemNumber: 'LMP-MIN-011',
    leadTime: 'In Stock',
    shipDate: 'Dec 23, 2024',
  },
};
