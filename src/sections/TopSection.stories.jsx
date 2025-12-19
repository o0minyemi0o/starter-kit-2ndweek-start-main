import { TopSection } from './TopSection';
import { content } from '../data/content';

export default {
  title: 'Section/TopSection',
  component: TopSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: true,
      },
      description: {
        component: `
## TopSection

페이지 상단 섹션.

### 용도
- 메인 페이지 최상단 영역
- HeroSection과 BrandValueSection을 결합한 통합 레이아웃
- LineGrid로 2행 구조를 만들어 섹션 사이에 라인 표시

### 레이아웃 구조
- **LineGrid**: 2행 컨테이너
  - Row 1: HeroSection (100vh 고정 높이)
    - 8:4 비디오 그리드
    - 타이틀 + 서브타이틀 오버레이
  - Row 2: BrandValueSection (auto 높이)
    - 4:4:4 브랜드 가치 카드 그리드

### 구성 요소
- **HeroSection**: 메인 비디오 히어로 영역 (100vh)
- **BrandValueSection**: 브랜드 가치 카드 섹션 (auto)
- **LineGrid**: 행 사이에 라인이 그려진 레이아웃

### 높이 구조
- HeroSection: 100vh (뷰포트 전체 높이)
- BrandValueSection: 콘텐츠에 따라 자동 조절
        `,
      },
    },
  },
  argTypes: {
    heroTitle: {
      control: 'text',
      description: 'HeroSection 타이틀',
    },
    heroSubtitle: {
      control: 'text',
      description: 'HeroSection 서브타이틀',
    },
    brandIconSize: {
      control: { type: 'number', min: 16, max: 64, step: 4 },
      description: 'BrandValueSection 아이콘 크기',
    },
    brandIconColor: {
      control: 'text',
      description: 'BrandValueSection 아이콘 색상',
    },
  },
};

export const Default = {
  render: (args) => (
    <>
      <TopSection {...args} />
      {/* 스크롤 높이 확보용 더미 콘텐츠 */}
      <div style={{ height: '100vh' }} />
    </>
  ),
  args: {
    heroTitle: content.hero.title,
    heroSubtitle: content.hero.subtitle,
    brandIconSize: 32,
  },
};

export const WithoutHeroText = {
  render: (args) => (
    <>
      <TopSection {...args} />
      {/* 스크롤 높이 확보용 더미 콘텐츠 */}
      <div style={{ height: '100vh' }} />
    </>
  ),
  args: {
    heroTitle: null,
    heroSubtitle: null,
    brandIconSize: 32,
  },
};

export const CustomContent = {
  render: (args) => (
    <>
      <TopSection {...args} />
      {/* 스크롤 높이 확보용 더미 콘텐츠 */}
      <div style={{ height: '100vh' }} />
    </>
  ),
  args: {
    heroTitle: 'Welcome to Lumenstate',
    heroSubtitle: 'Experience the future of lighting',
    brandIconSize: 48,
    brandIconColor: 'primary.main',
  },
};
