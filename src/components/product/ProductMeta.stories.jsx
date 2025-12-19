import { ProductMeta } from './ProductMeta';
import Box from '@mui/material/Box';

export default {
  title: 'Custom Component/ProductMeta',
  component: ProductMeta,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ProductMeta

제품의 메타 정보를 표시하는 컴포넌트입니다.

### 용도
- 제품 상세 페이지 메타 정보 섹션
- 주문 정보 표시
- 제품 스펙 페이지

### 특징
- UnderlineInput readOnly 필드로 표시
- 품번 (Item Number)
- 리드타임 (Lead Time)
- 배송 예정일 (Ships By)
- 세로 배치 (gap: 3)
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: 500, p: 4 }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    itemNumber: {
      control: 'text',
      description: '제품 품번',
      table: {
        type: { summary: 'string' },
      },
    },
    leadTime: {
      control: 'text',
      description: '리드타임 (예: "2-3 weeks")',
      table: {
        type: { summary: 'string' },
      },
    },
    shipDate: {
      control: 'text',
      description: '배송 예정일 (예: "Jan 15, 2025")',
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

/** 기본 사용 예시 */
export const Default = {
  args: {
    itemNumber: 'LMP-DSK-001',
    leadTime: '2-3 weeks',
    shipDate: 'Jan 15, 2025',
  },
};

/** 빠른 배송 */
export const FastShipping = {
  name: '빠른 배송',
  args: {
    itemNumber: 'LMP-DSK-002',
    leadTime: '1 week',
    shipDate: 'Dec 28, 2024',
  },
};

/** 긴 리드타임 */
export const LongLeadTime = {
  name: '긴 리드타임',
  args: {
    itemNumber: 'LMP-CUS-003',
    leadTime: '6-8 weeks',
    shipDate: 'Feb 10, 2025',
  },
};

/** 재고 있음 (즉시 배송) */
export const InStock = {
  name: '재고 있음 (즉시 배송)',
  args: {
    itemNumber: 'LMP-STD-004',
    leadTime: 'In Stock',
    shipDate: 'Dec 23, 2024',
  },
};

/** 맞춤 제작 */
export const CustomOrder = {
  name: '맞춤 제작',
  args: {
    itemNumber: 'LMP-CUS-005',
    leadTime: '8-10 weeks',
    shipDate: 'Mar 1, 2025',
  },
};
