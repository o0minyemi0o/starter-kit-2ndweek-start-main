import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ProductFilter } from './ProductFilter';

export default {
  title: 'Custom Component/Product/ProductFilter',
  component: ProductFilter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ProductFilter

제품 타입별 필터링을 위한 세로 탭 컴포넌트.

### 용도
- 제품 목록 페이지의 타입 필터
- 세로 탭 형태로 All/Ceiling/Stand/Wall/Desk 표시
- 선택된 필터 값으로 제품 목록 필터링
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['all', 'ceiling', 'stand', 'wall', 'desk'],
      description: '현재 선택된 필터 값',
    },
    onChange: {
      action: 'filter-changed',
      description: '필터 변경 핸들러',
    },
  },
};

export const Default = {
  args: {
    value: 'all',
  },
};

export const CeilingSelected = {
  args: {
    value: 'ceiling',
  },
};

export const StandSelected = {
  args: {
    value: 'stand',
  },
};

export const WallSelected = {
  args: {
    value: 'wall',
  },
};

export const DeskSelected = {
  args: {
    value: 'desk',
  },
};

export const Interactive = {
  render: () => {
    const [filter, setFilter] = useState('all');

    return (
      <Box>
        <ProductFilter value={filter} onChange={setFilter} />
        <Box sx={{ mt: 2, p: 2, border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="caption" color="text.secondary">
            Selected Filter:
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {filter}
          </Typography>
        </Box>
      </Box>
    );
  },
};
