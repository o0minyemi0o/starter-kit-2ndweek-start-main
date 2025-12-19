import { TimeBlendImage } from './TimeBlendImage';
import { productAssets } from '../../assets/product';

export default {
  title: 'Custom Component/Media/TimeBlendImage',
  component: TimeBlendImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## TimeBlendImage

낮/밤 이미지를 블렌딩하는 컴포넌트.

### 용도
- 제품 이미지의 낮/밤 전환 효과
- timeline 값(0~1)에 따라 두 이미지를 부드럽게 블렌딩
- 시간대별 제품 이미지 표현
        `,
      },
    },
  },
  argTypes: {
    dayImage: {
      control: 'text',
      description: '낮 이미지 URL',
    },
    nightImage: {
      control: 'text',
      description: '밤 이미지 URL',
    },
    timeline: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
      description: '블렌딩 값 (0: 낮, 1: 밤)',
    },
    alt: {
      control: 'text',
      description: '이미지 대체 텍스트',
    },
    aspectRatio: {
      control: 'select',
      options: ['auto', '1/1', '4/3', '16/9', '21/9'],
      description: '컨테이너 종횡비',
    },
    objectFit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      description: '이미지 맞춤 방식',
    },
    duration: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: '트랜지션 지속 시간 (ms)',
    },
  },
};

export const Default = {
  args: {
    dayImage: productAssets[1].images[0],
    nightImage: productAssets[1].images[1],
    timeline: 0,
    alt: 'Product Image',
    aspectRatio: 'auto',
    objectFit: 'cover',
    duration: 500,
  },
};

export const HalfBlended = {
  args: {
    dayImage: productAssets[1].images[0],
    nightImage: productAssets[1].images[1],
    timeline: 0.5,
    alt: 'Product Image',
  },
};

export const NightMode = {
  args: {
    dayImage: productAssets[1].images[0],
    nightImage: productAssets[1].images[1],
    timeline: 1,
    alt: 'Product Image',
  },
};
