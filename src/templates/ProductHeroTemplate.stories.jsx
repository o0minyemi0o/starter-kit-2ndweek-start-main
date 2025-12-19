import { ProductHeroTemplate } from './ProductHeroTemplate';
import Box from '@mui/material/Box';

export default {
  title: 'Template/ProductHeroTemplate',
  component: ProductHeroTemplate,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ProductHeroTemplate

제품 상세 페이지의 히어로 영역 템플릿입니다.

### 용도
- 제품 상세 페이지 상단
- 제품 소개 섹션
- 랜딩 페이지 히어로

### 특징
- 제품명 (h2, 큰 타이포그래피)
- 설명문 (선택적)
- 3열 스펙 카드 (LineGrid + ProductSpecCard)
  - Type (제품 타입별 아이콘)
  - Lux (조도)
  - Kelvin (색온도)
- 반응형 레이아웃
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 4 }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    title: {
      control: 'text',
      description: '제품명',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: '제품 설명',
      table: {
        type: { summary: 'string' },
      },
    },
    specs: {
      control: 'object',
      description: '스펙 정보 { type, lux, kelvin }',
      table: {
        type: { summary: 'object' },
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

/** 기본 사용 예시 (Desk) */
export const Default = {
  args: {
    title: 'Lumen Desk Pro',
    description: 'Adaptive task lighting with environmental response curves. Adjustable height and color temperature for optimal workspace illumination.',
    specs: {
      type: 'Desk',
      lux: 480,
      kelvin: 4400,
    },
  },
};

/** Ceiling 타입 */
export const CeilingType = {
  name: 'Ceiling 타입',
  args: {
    title: 'Lumen Ceiling',
    description: 'Ambient overhead lighting with circadian rhythm synchronization. Creates uniform illumination across the entire space.',
    specs: {
      type: 'Ceiling',
      lux: 320,
      kelvin: 3800,
    },
  },
};

/** Floor 타입 */
export const FloorType = {
  name: 'Floor 타입',
  args: {
    title: 'Lumen Floor',
    description: 'Directional ambient lighting for reading corners and conversation areas. Height-adjustable arm with rotational freedom.',
    specs: {
      type: 'Floor',
      lux: 380,
      kelvin: 3600,
    },
  },
};

/** Wall 타입 */
export const WallType = {
  name: 'Wall 타입',
  args: {
    title: 'Lumen Wall',
    description: 'Wall-mounted accent lighting with architectural precision. Provides indirect illumination with minimal visual footprint.',
    specs: {
      type: 'Wall',
      lux: 260,
      kelvin: 3200,
    },
  },
};

/** 설명 없음 */
export const WithoutDescription = {
  name: '설명 없음',
  args: {
    title: 'Lumen Minimalist',
    description: undefined,
    specs: {
      type: 'Desk',
      lux: 400,
      kelvin: 4000,
    },
  },
};

/** 높은 스펙 */
export const HighSpecs = {
  name: '높은 스펙',
  args: {
    title: 'Lumen Studio Pro',
    description: 'Professional-grade lighting for color-critical work. Maximum output with precise color rendering capabilities.',
    specs: {
      type: 'Desk',
      lux: 1200,
      kelvin: 5600,
    },
  },
};

/** 낮은 스펙 (분위기 조명) */
export const LowSpecs = {
  name: '낮은 스펙 (분위기 조명)',
  args: {
    title: 'Lumen Ambient',
    description: 'Gentle accent lighting for evening relaxation. Creates a warm, intimate atmosphere without harsh brightness.',
    specs: {
      type: 'Wall',
      lux: 120,
      kelvin: 2700,
    },
  },
};

/** 긴 제목 */
export const LongTitle = {
  name: '긴 제목',
  args: {
    title: 'Lumen Professional Adjustable Task Lighting System',
    description: 'Enterprise-grade lighting solution with advanced environmental sensors and automated adjustment protocols.',
    specs: {
      type: 'Desk',
      lux: 650,
      kelvin: 4800,
    },
  },
};
