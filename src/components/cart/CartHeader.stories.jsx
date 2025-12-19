import { CartHeader } from './CartHeader';
import Box from '@mui/material/Box';

export default {
  title: 'Custom Component/CartHeader',
  component: CartHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## CartHeader

장바구니 drawer의 헤더 영역 컴포넌트입니다.

### 용도
- 장바구니 drawer 상단 헤더
- 모달 헤더 (제목 + 닫기 버튼)
- 사이드 패널 헤더

### 특징
- 좌측 "Cart" 타이틀 (Tiempos Headline)
- 우측 X 닫기 버튼
- 하단 구분선 (선택적)
- Lumenstate 색상 팔레트
- 간결한 레이아웃
        `,
      },
    },
  },
  argTypes: {
    onClose: {
      action: 'closed',
      description: '닫기 버튼 클릭 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
    showBorder: {
      control: 'boolean',
      description: '하단 구분선 표시 여부',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
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
    showBorder: true,
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 400, backgroundColor: 'background.paper' }}>
        <Story />
      </Box>
    ),
  ],
};

/** 구분선 없음 */
export const WithoutBorder = {
  name: '구분선 없음',
  args: {
    showBorder: false,
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 400, backgroundColor: 'background.paper' }}>
        <Story />
      </Box>
    ),
  ],
};

/** 닫기 버튼 없음 */
export const WithoutCloseButton = {
  name: '닫기 버튼 없음',
  args: {
    onClose: undefined,
    showBorder: true,
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 400, backgroundColor: 'background.paper' }}>
        <Story />
      </Box>
    ),
  ],
};

/** 전체 폭 (모바일) */
export const FullWidth = {
  name: '전체 폭 (모바일)',
  args: {
    showBorder: true,
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '100%', maxWidth: 375, backgroundColor: 'background.paper' }}>
        <Story />
      </Box>
    ),
  ],
};

/** 다크 배경 */
export const DarkBackground = {
  name: '다크 배경',
  args: {
    showBorder: true,
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          width: 400,
          backgroundColor: '#12100E',
          color: '#F2E9DA',
        }}
      >
        <Story />
      </Box>
    ),
  ],
};
