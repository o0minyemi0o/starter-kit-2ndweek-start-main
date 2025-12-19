import { useState } from 'react';
import { ProductActions } from './ProductActions';
import Box from '@mui/material/Box';

export default {
  title: 'Custom Component/ProductActions',
  component: ProductActions,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ProductActions

제품 구매 액션 영역을 표시하는 컴포넌트입니다.

### 용도
- 제품 상세 페이지 구매 영역
- 제품 카드 빠른 구매
- 장바구니 아이템 수량 조절

### 특징
- 가로 배치 (QuantitySelector | 총 가격 | Add to Cart)
- 수량에 따라 총 가격 자동 계산
- Monospace 폰트로 가격 표시
- Secondary 색상 버튼
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: 800, p: 4 }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    quantity: {
      control: { type: 'number', min: 1, max: 99 },
      description: '선택된 수량',
      table: {
        type: { summary: 'number' },
      },
    },
    onQuantityChange: {
      action: 'quantity changed',
      description: '수량 변경 핸들러 (newQuantity) => void',
      table: {
        type: { summary: 'function' },
      },
    },
    price: {
      control: 'number',
      description: '개당 가격',
      table: {
        type: { summary: 'number' },
      },
    },
    onAddToCart: {
      action: 'added to cart',
      description: '장바구니 추가 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
    min: {
      control: { type: 'number', min: 1 },
      description: '최소 수량',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    max: {
      control: { type: 'number', max: 999 },
      description: '최대 수량',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '99' },
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

/** 기본 사용 예시 (인터랙티브) */
export const Default = {
  render: () => {
    const [quantity, setQuantity] = useState(1);

    return (
      <ProductActions
        quantity={quantity}
        onQuantityChange={setQuantity}
        price={850}
        onAddToCart={() => alert(`Added ${quantity} item(s) to cart`)}
      />
    );
  },
};

/** 높은 가격 */
export const HighPrice = {
  name: '높은 가격',
  render: () => {
    const [quantity, setQuantity] = useState(1);

    return (
      <ProductActions
        quantity={quantity}
        onQuantityChange={setQuantity}
        price={2450}
        onAddToCart={() => alert(`Added ${quantity} item(s) to cart`)}
      />
    );
  },
};

/** 낮은 가격 */
export const LowPrice = {
  name: '낮은 가격',
  render: () => {
    const [quantity, setQuantity] = useState(1);

    return (
      <ProductActions
        quantity={quantity}
        onQuantityChange={setQuantity}
        price={320}
        onAddToCart={() => alert(`Added ${quantity} item(s) to cart`)}
      />
    );
  },
};

/** 다수 수량 */
export const MultipleQuantity = {
  name: '다수 수량',
  render: () => {
    const [quantity, setQuantity] = useState(5);

    return (
      <ProductActions
        quantity={quantity}
        onQuantityChange={setQuantity}
        price={680}
        onAddToCart={() => alert(`Added ${quantity} item(s) to cart`)}
      />
    );
  },
};

/** 최대 수량 제한 */
export const LimitedStock = {
  name: '최대 수량 제한',
  render: () => {
    const [quantity, setQuantity] = useState(1);

    return (
      <ProductActions
        quantity={quantity}
        onQuantityChange={setQuantity}
        price={1200}
        onAddToCart={() => alert(`Added ${quantity} item(s) to cart`)}
        max={3}
      />
    );
  },
};
