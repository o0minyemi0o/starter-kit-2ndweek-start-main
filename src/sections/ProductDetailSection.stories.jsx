import { ProductDetailSection } from './ProductDetailSection';
import { CartProvider } from '../contexts';
import { products } from '../data/products';

export default {
  title: 'Section/ProductDetailSection',
  component: ProductDetailSection,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <CartProvider>
        <Story />
      </CartProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## ProductDetailSection

제품 상세 섹션으로, ProductDetailTemplate과 CartDrawer를 통합한 완전한 제품 페이지.

### 용도
- 제품 상세 페이지
- 장바구니 연동 제품 뷰
- 전체 구매 플로우

### 특징
- ProductDetailTemplate로 제품 정보 표시
- useCart 훅으로 장바구니 상태 관리
- Add to Cart 클릭 시 CartDrawer 자동 열림
- 수량 변경, 아이템 제거, 체크아웃 연동
- TimelineProvider로 낮/밤 전환 관리
        `,
      },
    },
  },
  argTypes: {
    product: {
      control: 'object',
      description: '제품 데이터 { id, title, description, type, lux, kelvin, images }',
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
