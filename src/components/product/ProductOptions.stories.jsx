import { useState } from 'react';
import { ProductOptions } from './ProductOptions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default {
  title: 'Custom Component/ProductOptions',
  component: ProductOptions,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ProductOptions

제품 옵션 선택 영역을 표시하는 컴포넌트입니다.

### 용도
- 제품 상세 페이지 옵션 선택
- 주문 커스터마이징
- 제품 구성 설정

### 특징
- 3개의 UnderlineSelect 필드
  - Glass Finish (5가지 옵션)
  - Hardware (5가지 옵션)
  - Height (5가지 범위)
- Stack으로 세로 배치 (spacing: 3)
- PRODUCT_OPTIONS 데이터 사용
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
    selectedOptions: {
      control: 'object',
      description: '현재 선택된 옵션 { glassFinish, hardware, height }',
      table: {
        type: { summary: 'object' },
      },
    },
    onOptionChange: {
      action: 'option changed',
      description: '옵션 변경 핸들러 (optionType, value) => void',
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

/** 기본 사용 예시 (인터랙티브) */
export const Default = {
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState({
      glassFinish: '',
      hardware: '',
      height: '',
    });

    const handleOptionChange = (type, value) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [type]: value,
      }));
    };

    return (
      <>
        <ProductOptions
          selectedOptions={selectedOptions}
          onOptionChange={handleOptionChange}
        />

        {/* 선택된 옵션 표시 */}
        <Box sx={{ mt: 4, p: 2, bgcolor: 'background.default', borderRadius: 0 }}>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            Selected Options:
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: 12 }}>
            {JSON.stringify(selectedOptions, null, 2)}
          </Typography>
        </Box>
      </>
    );
  },
};

/** 기본값 설정됨 */
export const WithDefaultValues = {
  name: '기본값 설정됨',
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState({
      glassFinish: 'opaline',
      hardware: 'patina-brass',
      height: '36-48',
    });

    const handleOptionChange = (type, value) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [type]: value,
      }));
    };

    return (
      <>
        <ProductOptions
          selectedOptions={selectedOptions}
          onOptionChange={handleOptionChange}
        />

        <Box sx={{ mt: 4, p: 2, bgcolor: 'background.default', borderRadius: 0 }}>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            Selected Options:
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: 12 }}>
            {JSON.stringify(selectedOptions, null, 2)}
          </Typography>
        </Box>
      </>
    );
  },
};

/** 일부만 선택됨 */
export const PartiallySelected = {
  name: '일부만 선택됨',
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState({
      glassFinish: 'frosted',
      hardware: '',
      height: '49-60',
    });

    const handleOptionChange = (type, value) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [type]: value,
      }));
    };

    return (
      <>
        <ProductOptions
          selectedOptions={selectedOptions}
          onOptionChange={handleOptionChange}
        />

        <Box sx={{ mt: 4, p: 2, bgcolor: 'background.default', borderRadius: 0 }}>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            Selected Options:
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: 12 }}>
            {JSON.stringify(selectedOptions, null, 2)}
          </Typography>
        </Box>
      </>
    );
  },
};

/** 모든 옵션 선택됨 */
export const AllSelected = {
  name: '모든 옵션 선택됨',
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState({
      glassFinish: 'smoke',
      hardware: 'chrome',
      height: '73-84',
    });

    const handleOptionChange = (type, value) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [type]: value,
      }));
    };

    return (
      <>
        <ProductOptions
          selectedOptions={selectedOptions}
          onOptionChange={handleOptionChange}
        />

        <Box sx={{ mt: 4, p: 2, bgcolor: 'background.default', borderRadius: 0 }}>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            Selected Options:
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: 12 }}>
            {JSON.stringify(selectedOptions, null, 2)}
          </Typography>
        </Box>
      </>
    );
  },
};
