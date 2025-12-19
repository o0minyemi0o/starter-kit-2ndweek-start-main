import { CartItem } from './CartItem';
import Box from '@mui/material/Box';
import { productAssets } from '../../assets/product';

export default {
  title: 'Custom Component/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## CartItem

장바구니의 개별 아이템을 표시하는 컴포넌트입니다.

### 용도
- 장바구니 drawer 아이템
- 주문 요약 아이템
- 위시리스트 아이템

### 특징
- 100x100 썸네일
- 제품명, 옵션, 가격 표시
- 수량 조절 (QuantitySelector)
- Remove 버튼
- Monospace 가격 표시
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: 400, backgroundColor: 'background.paper' }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    image: {
      control: 'text',
      description: '제품 썸네일 이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    title: {
      control: 'text',
      description: '제품명',
      table: {
        type: { summary: 'string' },
      },
    },
    options: {
      control: 'object',
      description: '옵션 목록 [{ label: string, value: string }]',
      table: {
        type: { summary: 'Array<{label: string, value: string}>' },
      },
    },
    price: {
      control: 'number',
      description: '가격',
      table: {
        type: { summary: 'number' },
      },
    },
    quantity: {
      control: 'number',
      description: '수량',
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
    onRemove: {
      action: 'removed',
      description: '삭제 버튼 클릭 핸들러',
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

/** 기본 사용 예시 */
export const Default = {
  args: {
    image: productAssets[1].images[0],
    title: 'Lumen Desk Pro',
    options: [
      { label: 'Finish', value: 'Patina Brass' },
      { label: 'Height', value: '36" - 48"' },
    ],
    price: 850,
    quantity: 1,
  },
};

/** 옵션 없음 */
export const WithoutOptions = {
  name: '옵션 없음',
  args: {
    image: productAssets[2].images[0],
    title: 'Lumen Ceiling',
    options: [],
    price: 1200,
    quantity: 2,
  },
};

/** 단일 옵션 */
export const SingleOption = {
  name: '단일 옵션',
  args: {
    image: productAssets[3].images[0],
    title: 'Lumen Floor',
    options: [
      { label: 'Finish', value: 'Brushed Nickel' },
    ],
    price: 950,
    quantity: 1,
  },
};

/** 다수 옵션 */
export const MultipleOptions = {
  name: '다수 옵션',
  args: {
    image: productAssets[4].images[0],
    title: 'Lumen Wall',
    options: [
      { label: 'Finish', value: 'Polished Brass' },
      { label: 'Glass', value: 'Opaline' },
      { label: 'Height', value: '49" - 60"' },
      { label: 'Mounting', value: 'Wall-mounted' },
    ],
    price: 720,
    quantity: 1,
  },
};

/** 수량 많음 */
export const HighQuantity = {
  name: '수량 많음',
  args: {
    image: productAssets[5].images[0],
    title: 'Lumen Table',
    options: [
      { label: 'Finish', value: 'Matte Black' },
    ],
    price: 680,
    quantity: 5,
  },
};

/** 여러 아이템 목록 */
export const ItemList = {
  name: '여러 아이템 목록',
  decorators: [],
  render: () => (
    <Box sx={{ maxWidth: 400, backgroundColor: 'background.paper' }}>
      <CartItem
        image={productAssets[1].images[0]}
        title="Lumen Desk Pro"
        options={[
          { label: 'Finish', value: 'Patina Brass' },
          { label: 'Height', value: '36" - 48"' },
        ]}
        price={850}
        quantity={1}
      />
      <CartItem
        image={productAssets[2].images[0]}
        title="Lumen Ceiling"
        options={[
          { label: 'Finish', value: 'Chrome' },
        ]}
        price={1200}
        quantity={2}
      />
      <CartItem
        image={productAssets[3].images[0]}
        title="Lumen Floor"
        options={[]}
        price={950}
        quantity={1}
      />
    </Box>
  ),
};
