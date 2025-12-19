import { CartSummary } from './CartSummary';
import Box from '@mui/material/Box';

export default {
  title: 'Custom Component/CartSummary',
  component: CartSummary,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## CartSummary

장바구니의 가격 요약 정보를 표시하는 컴포넌트입니다.

### 용도
- 장바구니 drawer 가격 요약
- 주문 요약 페이지
- 결제 정보 표시

### 특징
- 좌우 flexbox 레이아웃 (label, amount)
- Monospace 금액 표시
- variant로 스타일 변형 (default, emphasized)
- 선택적 상단 구분선 (showBorder)
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
    label: {
      control: 'text',
      description: '좌측 라벨 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    amount: {
      control: 'number',
      description: '금액',
      table: {
        type: { summary: 'number' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'emphasized'],
      description: '스타일 변형',
      table: {
        type: { summary: "'default' | 'emphasized'" },
        defaultValue: { summary: "'default'" },
      },
    },
    showBorder: {
      control: 'boolean',
      description: '상단 구분선 표시 여부',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    label: 'Subtotal',
    amount: 2550,
    variant: 'default',
    showBorder: false,
  },
};

/** Emphasized 변형 (Total용) */
export const Emphasized = {
  name: 'Emphasized (Total)',
  args: {
    label: 'Total',
    amount: 2550,
    variant: 'emphasized',
    showBorder: true,
  },
};

/** 상단 구분선 포함 */
export const WithBorder = {
  name: '상단 구분선 포함',
  args: {
    label: 'Shipping',
    amount: 0,
    variant: 'default',
    showBorder: true,
  },
};

/** 큰 금액 */
export const LargeAmount = {
  name: '큰 금액',
  args: {
    label: 'Subtotal',
    amount: 12450,
    variant: 'default',
    showBorder: false,
  },
};

/** 완전한 요약 목록 */
export const SummaryList = {
  name: '완전한 요약 목록',
  decorators: [],
  render: () => (
    <Box sx={{ maxWidth: 400, backgroundColor: 'background.paper' }}>
      <CartSummary
        label="Subtotal"
        amount={2550}
        variant="default"
      />
      <CartSummary
        label="Shipping"
        amount={0}
        variant="default"
      />
      <CartSummary
        label="Tax"
        amount={204}
        variant="default"
      />
      <CartSummary
        label="Total"
        amount={2754}
        variant="emphasized"
        showBorder
      />
    </Box>
  ),
};
