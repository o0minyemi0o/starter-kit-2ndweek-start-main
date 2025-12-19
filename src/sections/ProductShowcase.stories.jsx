import { ProductShowcase } from './ProductShowcase';
import { TimelineProvider } from '../contexts/TimelineContext';
import { content } from '../data/content';

export default {
  title: 'Section/ProductShowcase',
  component: ProductShowcase,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: true,
      },
      description: {
        component: `
## ProductShowcase

제품 쇼케이스 섹션.

### 용도
- 제품 목록 페이지
- 좌측: 타입 필터 + 시간대 슬라이더
- 중앙: 필터링된 제품 그리드
- CenteredAsideLayout으로 시각적 중앙 정렬

### 레이아웃 구조
- **SectionContainer**: 최상단 컨테이너
- **상단 영역** (가운데 정렬): 타이틀 + 설명 + TimelineSlider
- **CenteredAsideLayout**: 좌측 필터 + 중앙 콘텐츠
  - 좌측 aside (sticky): ProductFilter
  - 중앙 content: ProductGrid

### 구성 요소
- **ProductFilter**: 제품 타입별 필터링 (All, Ceiling, Stand, Wall, Desk)
- **TimelineSlider**: 시간대별 이미지 블렌딩 (낮 → 밤)
- **ProductGrid**: 필터링된 제품 목록 (반응형 그리드)

### 전역 상태 연동
- useTimeline 훅으로 timeline 상태 관리
- TimelineProvider로 감싸서 사용해야 함
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
    title: {
      control: 'text',
      description: '섹션 제목',
    },
    subtitle: {
      control: 'text',
      description: '섹션 부제목',
    },
    centerSize: {
      control: { type: 'number', min: 4, max: 10, step: 1 },
      description: '중앙 콘텐츠 그리드 크기 (4-10)',
    },
    gridSpacing: {
      control: { type: 'number', min: 1, max: 5, step: 1 },
      description: '제품 그리드 간격',
    },
    onProductClick: {
      action: 'product-clicked',
      description: '제품 클릭 핸들러',
    },
  },
};

export const Default = {
  args: {
    title: content.products.sectionTitle,
    subtitle: content.products.sectionSubtitle,
    centerSize: 6,
    gridSpacing: 2,
  },
};

export const WithoutTitle = {
  args: {
    centerSize: 6,
    gridSpacing: 2,
  },
};

export const NarrowCenter = {
  args: {
    title: 'Curated Collection',
    subtitle: 'Handpicked lighting products',
    centerSize: 4,
    gridSpacing: 2,
  },
};

export const WideCenter = {
  args: {
    title: 'Full Collection',
    subtitle: 'Explore all products',
    centerSize: 10,
    gridSpacing: 3,
  },
};

export const WithClickHandler = {
  args: {
    title: content.products.sectionTitle,
    subtitle: content.products.sectionSubtitle,
    centerSize: 8,
    gridSpacing: 2,
    onProductClick: (id) => alert(`Product ${id} clicked!`),
  },
};
