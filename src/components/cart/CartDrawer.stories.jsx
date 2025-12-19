import { useState } from 'react';
import { CartDrawer } from './CartDrawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { productAssets } from '../../assets/product';

export default {
  title: 'Custom Component/CartDrawer',
  component: CartDrawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## CartDrawer

오른쪽에서 슬라이드되는 장바구니 패널 컴포넌트입니다.

### 용도
- 장바구니 드로어
- 미니 장바구니 사이드바
- 빠른 체크아웃 플로우

### 특징
- 오른쪽에서 슬라이드 인/아웃
- 고정 헤더 + 스크롤 아이템 리스트 + 고정 푸터
- 빈 장바구니 상태 지원
- 반응형 너비 (모바일: 전체 너비, 데스크탑: 480px)
- 샤프한 형태 (borderRadius: 0, boxShadow: none)
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Drawer 열림/닫힘 상태',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onClose: {
      action: 'closed',
      description: '닫기 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
    items: {
      control: 'object',
      description: '장바구니 아이템 목록 [{ id, image, title, options, price, quantity }]',
      table: {
        type: { summary: 'Array<Object>' },
        defaultValue: { summary: '[]' },
      },
    },
    subtotal: {
      control: 'number',
      description: '소계',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    shipping: {
      control: 'number',
      description: '배송비',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    tax: {
      control: 'number',
      description: '세금',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    total: {
      control: 'number',
      description: '총액',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    onQuantityChange: {
      action: 'quantity changed',
      description: '수량 변경 핸들러 (itemId, newQuantity) => void',
      table: {
        type: { summary: 'function' },
      },
    },
    onRemoveItem: {
      action: 'item removed',
      description: '아이템 제거 핸들러 (itemId) => void',
      table: {
        type: { summary: 'function' },
      },
    },
    onCheckout: {
      action: 'checkout clicked',
      description: '체크아웃 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
    width: {
      control: 'number',
      description: 'Drawer 너비 (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '480' },
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

// 샘플 데이터
const sampleItems = [
  {
    id: '1',
    image: productAssets[1].images[0],
    title: 'Lumen Desk Pro',
    options: [
      { label: 'Finish', value: 'Patina Brass' },
      { label: 'Height', value: '36" - 48"' },
    ],
    price: 850,
    quantity: 1,
  },
  {
    id: '2',
    image: productAssets[2].images[0],
    title: 'Lumen Ceiling',
    options: [
      { label: 'Finish', value: 'Chrome' },
    ],
    price: 1200,
    quantity: 2,
  },
  {
    id: '3',
    image: productAssets[3].images[0],
    title: 'Lumen Floor',
    options: [],
    price: 950,
    quantity: 1,
  },
];

/** 기본 사용 예시 */
export const Default = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Box sx={{ p: 4 }}>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Open Cart
          </Button>
        </Box>
        <CartDrawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    );
  },
  args: {
    items: sampleItems,
    subtotal: 4000,
    shipping: 0,
    tax: 320,
    total: 4320,
  },
};

/** 빈 장바구니 */
export const EmptyCart = {
  name: '빈 장바구니',
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Box sx={{ p: 4 }}>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Open Empty Cart
          </Button>
        </Box>
        <CartDrawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    );
  },
  args: {
    items: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
};

/** 단일 아이템 */
export const SingleItem = {
  name: '단일 아이템',
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Box sx={{ p: 4 }}>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Open Cart (1 item)
          </Button>
        </Box>
        <CartDrawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    );
  },
  args: {
    items: [sampleItems[0]],
    subtotal: 850,
    shipping: 0,
    tax: 68,
    total: 918,
  },
};

/** 많은 아이템 (스크롤) */
export const ManyItems = {
  name: '많은 아이템 (스크롤)',
  render: (args) => {
    const [open, setOpen] = useState(false);

    const manyItems = [
      ...sampleItems,
      {
        id: '4',
        image: productAssets[4].images[0],
        title: 'Lumen Wall',
        options: [{ label: 'Finish', value: 'Polished Brass' }],
        price: 720,
        quantity: 1,
      },
      {
        id: '5',
        image: productAssets[5].images[0],
        title: 'Lumen Table',
        options: [{ label: 'Finish', value: 'Matte Black' }],
        price: 680,
        quantity: 2,
      },
      {
        id: '6',
        image: productAssets[6].images[0],
        title: 'Lumen Pendant',
        options: [],
        price: 590,
        quantity: 1,
      },
    ];

    return (
      <>
        <Box sx={{ p: 4 }}>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Open Cart (6 items)
          </Button>
        </Box>
        <CartDrawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          items={manyItems}
          subtotal={6570}
          shipping={0}
          tax={526}
          total={7096}
        />
      </>
    );
  },
};

/** 인터랙티브 예시 (상태 관리) */
export const Interactive = {
  name: '인터랙티브 예시',
  render: () => {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(sampleItems);

    const handleQuantityChange = (itemId, newQuantity) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    };

    const handleRemoveItem = (itemId) => {
      setItems((prev) => prev.filter((item) => item.id !== itemId));
    };

    const handleCheckout = () => {
      alert('Proceeding to checkout...');
      setOpen(false);
    };

    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping = 0;
    const tax = Math.round(subtotal * 0.08);
    const total = subtotal + shipping + tax;

    return (
      <>
        <Box sx={{ p: 4 }}>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Open Interactive Cart
          </Button>
        </Box>
        <CartDrawer
          open={open}
          onClose={() => setOpen(false)}
          items={items}
          subtotal={subtotal}
          shipping={shipping}
          tax={tax}
          total={total}
          onQuantityChange={handleQuantityChange}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        />
      </>
    );
  },
};
