import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { TimelineSlider } from './TimelineSlider';
import { TimelineProvider, useTimeline } from '../../contexts/TimelineContext';
import { ProductCard } from '../card/ProductCard';
import { products } from '../../data/products';

export default {
  title: 'Custom Component/Shared/TimelineSlider',
  component: TimelineSlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## TimelineSlider

시간대별 timeline을 조절하는 슬라이더.

### 용도
- 시간대별 이미지 블렌딩 제어 (낮 → 밤)
- 다크 모드 전환
- 4개 시간대(12pm, 4pm, 8pm, 12am)에 스냅
- 차트 axis + tick 스타일의 얇은 선 디자인

### Timeline 값 매핑
- 0.0 (12pm, 낮): Sun 아이콘
- 0.33 (4pm, 오후): Sunset 아이콘
- 0.67 (8pm, 저녁): Sunset 아이콘
- 1.0 (12am, 밤): Moon 아이콘

### 전역 상태 연동
- useTimeline 훅으로 전역 timeline 상태 관리
- TimelineProvider로 감싸서 사용해야 함
- ProductCard의 timeline prop과 연동하여 이미지 블렌딩 제어
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <TimelineProvider initialTimeline={0}>
        <Story />
      </TimelineProvider>
    ),
  ],
  argTypes: {
    showLabels: {
      control: 'boolean',
      description: '시간 라벨 표시 여부',
    },
    iconSize: {
      control: { type: 'number', min: 12, max: 32, step: 2 },
      description: '아이콘 크기 (px)',
    },
  },
};

export const Default = {
  args: {
    showLabels: true,
    iconSize: 20,
  },
};

export const WithoutLabels = {
  args: {
    showLabels: false,
    iconSize: 20,
  },
};

export const LargeIcons = {
  args: {
    showLabels: true,
    iconSize: 28,
  },
};

export const WithTimelineValue = {
  render: (args) => {
    const TimelineDemo = () => {
      const { timeline } = useTimeline();

      return (
        <Box sx={{ width: 400 }}>
          <TimelineSlider {...args} />
          <Box sx={{ mt: 3, p: 2, border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="caption" color="text.secondary">
              Current Timeline Value:
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: 'monospace' }}>
              {timeline.toFixed(2)}
            </Typography>
          </Box>
        </Box>
      );
    };

    return <TimelineDemo />;
  },
  args: {
    showLabels: true,
    iconSize: 20,
  },
};

export const WithProductCard = {
  render: (args) => {
    const ProductDemo = () => {
      const { timeline } = useTimeline();

      return (
        <Stack spacing={3} sx={{ width: 400 }}>
          {/* Timeline Slider */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Time of Day
            </Typography>
            <TimelineSlider {...args} />
          </Box>

          {/* Product Card with Timeline */}
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
              Product Card (timeline: {timeline.toFixed(2)})
            </Typography>
            <ProductCard
              title={products[0].title}
              type={products[0].type}
              lux={products[0].lux}
              kelvin={products[0].kelvin}
              images={products[0].images}
              timeline={timeline}
            />
          </Box>
        </Stack>
      );
    };

    return <ProductDemo />;
  },
  args: {
    showLabels: true,
    iconSize: 20,
  },
};

export const MultipleProducts = {
  render: (args) => {
    const MultiProductDemo = () => {
      const { timeline } = useTimeline();

      return (
        <Stack spacing={3} sx={{ width: '100%', maxWidth: 800 }}>
          {/* Timeline Slider */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Time of Day
            </Typography>
            <TimelineSlider {...args} />
          </Box>

          {/* Product Grid */}
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
              All products sync with timeline: {timeline.toFixed(2)}
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
              {products.slice(0, 3).map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  type={product.type}
                  lux={product.lux}
                  kelvin={product.kelvin}
                  images={product.images}
                  timeline={timeline}
                />
              ))}
            </Box>
          </Box>
        </Stack>
      );
    };

    return <MultiProductDemo />;
  },
  args: {
    showLabels: true,
    iconSize: 20,
  },
};
