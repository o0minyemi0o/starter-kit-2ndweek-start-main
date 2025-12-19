import { ProductImageViewer } from './ProductImageViewer';
import { TimelineProvider } from '../../contexts/TimelineContext';
import { productAssets } from '../../assets/product';
import Box from '@mui/material/Box';

export default {
  title: 'Custom Component/ProductImageViewer',
  component: ProductImageViewer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ProductImageViewer

제품 이미지를 시간대별로 블렌딩하여 표시하는 immersive 뷰어 컴포넌트입니다.

### 용도
- 제품 상세 페이지의 히어로 이미지
- 조명 제품의 시간대별 효과 시연
- 인터랙티브 제품 갤러리

### 특징
- TimeBlendImage로 낮/밤 이미지 부드럽게 블렌딩
- TimelineSlider로 시간대 인터랙티브 조절
- 우측 상단 monospace 기술 표기 (lux·K)
- 하단 warm gradient overlay로 슬라이더 가독성 확보
- specs 배열 선형 보간으로 실시간 값 계산
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <TimelineProvider initialTimeline={0}>
        <Box sx={{ maxWidth: 800, width: '100%', mx: 'auto' }}>
          <Story />
        </Box>
      </TimelineProvider>
    ),
  ],
  argTypes: {
    dayImage: {
      control: 'text',
      description: '낮 이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    nightImage: {
      control: 'text',
      description: '밤 이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    specs: {
      control: 'object',
      description: '시간대별 스펙 배열 [{ timeline: 0-1, lux: number, kelvin: number }]',
      table: {
        type: { summary: 'Array<{timeline: number, lux: number, kelvin: number}>' },
      },
    },
    aspectRatio: {
      control: 'text',
      description: '이미지 종횡비 (CSS aspect-ratio 값)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1/1' },
      },
    },
    showSlider: {
      control: 'boolean',
      description: '슬라이더 표시 여부',
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
    dayImage: productAssets[1].images[0],
    nightImage: productAssets[1].images[1],
    specs: [
      { timeline: 0, lux: 480, kelvin: 4400 },     // 12pm - 밝은 낮
      { timeline: 0.33, lux: 320, kelvin: 3600 },  // 4pm - 오후
      { timeline: 0.67, lux: 180, kelvin: 3200 },  // 8pm - 저녁
      { timeline: 1.0, lux: 120, kelvin: 2700 },   // 12am - 밤
    ],
    aspectRatio: '1/1',
    showSlider: true,
  },
};

/** 이미지 디버그 (TimeBlendImage 없이 직접 표시) */
export const ImageDebug = {
  name: '이미지 디버그',
  decorators: [],
  render: () => (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Day Image (productAssets[1].images[0]):</Box>
        <Box
          component="img"
          src={productAssets[1].images[0]}
          alt="Day"
          sx={{ width: '100%', maxWidth: 400, border: '2px solid red' }}
        />
        <Box sx={{ mt: 1, fontSize: 12, fontFamily: 'monospace' }}>
          {productAssets[1].images[0]}
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Box sx={{ mb: 2, fontWeight: 600 }}>Night Image (productAssets[1].images[1]):</Box>
        <Box
          component="img"
          src={productAssets[1].images[1]}
          alt="Night"
          sx={{ width: '100%', maxWidth: 400, border: '2px solid blue' }}
        />
        <Box sx={{ mt: 1, fontSize: 12, fontFamily: 'monospace' }}>
          {productAssets[1].images[1]}
        </Box>
      </Box>
    </Box>
  ),
};

/** 와이드 포맷 (16:9) */
export const WideFormat = {
  name: '와이드 포맷 (16:9)',
  args: {
    dayImage: productAssets[2].images[0],
    nightImage: productAssets[2].images[1],
    specs: [
      { timeline: 0, lux: 500, kelvin: 4500 },
      { timeline: 0.33, lux: 340, kelvin: 3700 },
      { timeline: 0.67, lux: 200, kelvin: 3300 },
      { timeline: 1.0, lux: 140, kelvin: 2800 },
    ],
    aspectRatio: '16/9',
    showSlider: true,
  },
};

/** 세로 포맷 (3:4) */
export const PortraitFormat = {
  name: '세로 포맷 (3:4)',
  args: {
    dayImage: productAssets[3].images[0],
    nightImage: productAssets[3].images[1],
    specs: [
      { timeline: 0, lux: 380, kelvin: 4200 },
      { timeline: 0.33, lux: 280, kelvin: 3500 },
      { timeline: 0.67, lux: 160, kelvin: 3100 },
      { timeline: 1.0, lux: 100, kelvin: 2600 },
    ],
    aspectRatio: '3/4',
    showSlider: true,
  },
};

/** 슬라이더 없음 (정적 표시) */
export const WithoutSlider = {
  name: '슬라이더 없음',
  args: {
    dayImage: productAssets[4].images[0],
    nightImage: productAssets[4].images[1],
    specs: [
      { timeline: 0, lux: 260, kelvin: 3800 },
      { timeline: 1.0, lux: 120, kelvin: 2700 },
    ],
    aspectRatio: '1/1',
    showSlider: false,
  },
};

/** 다양한 제품 비교 */
export const ProductComparison = {
  name: '제품 비교',
  parameters: {
    layout: 'padded',
  },
  decorators: [],
  render: () => (
    <TimelineProvider initialTimeline={0}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, maxWidth: 1200 }}>
        <ProductImageViewer
          dayImage={productAssets[5].images[0]}
          nightImage={productAssets[5].images[1]}
          specs={[
            { timeline: 0, lux: 450, kelvin: 4400 },
            { timeline: 0.33, lux: 300, kelvin: 3600 },
            { timeline: 0.67, lux: 180, kelvin: 3200 },
            { timeline: 1.0, lux: 100, kelvin: 2700 },
          ]}
          aspectRatio="1/1"
        />
        <ProductImageViewer
          dayImage={productAssets[6].images[0]}
          nightImage={productAssets[6].images[1]}
          specs={[
            { timeline: 0, lux: 380, kelvin: 4200 },
            { timeline: 0.33, lux: 260, kelvin: 3500 },
            { timeline: 0.67, lux: 150, kelvin: 3100 },
            { timeline: 1.0, lux: 90, kelvin: 2600 },
          ]}
          aspectRatio="1/1"
        />
        <ProductImageViewer
          dayImage={productAssets[7].images[0]}
          nightImage={productAssets[7].images[1]}
          specs={[
            { timeline: 0, lux: 500, kelvin: 4500 },
            { timeline: 0.33, lux: 340, kelvin: 3700 },
            { timeline: 0.67, lux: 200, kelvin: 3300 },
            { timeline: 1.0, lux: 120, kelvin: 2800 },
          ]}
          aspectRatio="1/1"
        />
      </Box>
    </TimelineProvider>
  ),
};
