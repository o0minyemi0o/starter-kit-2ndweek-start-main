import { CartCheckoutButton } from './CartCheckoutButton';
import Box from '@mui/material/Box';

export default {
  title: 'Custom Component/CartCheckoutButton',
  component: CartCheckoutButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## CartCheckoutButton

장바구니의 체크아웃 버튼을 표시하는 컴포넌트입니다.

### 용도
- 장바구니 drawer 하단 체크아웃 버튼
- 주문 요약 페이지 결제 버튼
- 위시리스트에서 장바구니로 이동 버튼

### 특징
- 전체 너비 버튼 (fullWidth)
- secondary.main 배경색
- 샤프한 형태 (borderRadius: 0)
- 그림자 제거 (boxShadow: none)
- 대문자 텍스트 (textTransform: uppercase)
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
      description: '버튼 텍스트',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Proceed to Checkout'" },
      },
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
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
    label: 'Proceed to Checkout',
    disabled: false,
  },
};

/** 비활성화 상태 */
export const Disabled = {
  name: '비활성화 상태',
  args: {
    label: 'Proceed to Checkout',
    disabled: true,
  },
};

/** 커스텀 라벨 */
export const CustomLabel = {
  name: '커스텀 라벨',
  args: {
    label: 'Complete Order',
    disabled: false,
  },
};

/** 짧은 라벨 */
export const ShortLabel = {
  name: '짧은 라벨',
  args: {
    label: 'Checkout',
    disabled: false,
  },
};

/** 장바구니 하단 예시 */
export const InCartFooter = {
  name: '장바구니 하단 예시',
  decorators: [],
  render: () => (
    <Box
      sx={{
        maxWidth: 400,
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <CartCheckoutButton label="Proceed to Checkout" />
    </Box>
  ),
};
