import { HeroSection } from './HeroSection';
import { content } from '../data/content';

export default {
  title: 'Section/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: true,
      },
      description: {
        component: `
## HeroSection

메인 히어로 섹션.

### 용도
- 메인 페이지 최상단 히어로 영역
- 8:4 비율의 비디오 그리드 레이아웃
- 브랜드 타이틀과 태그라인을 중앙 오버레이로 표시
- 스크롤에 따라 비디오가 재생되는 인터랙션

### 레이아웃 구조
- **LineGrid**: 8:4 비율의 그리드 컨테이너
  - 좌측 (8/12): 메인 비디오 (landscape-motion.mp4)
  - 우측 (4/12): 제품 비디오 (product-9-motion.mp4)
- **오버레이**: 중앙 정렬된 타이틀 + 서브타이틀

### 구성 요소
- **VideoScrubbing**: 스크롤 기반 비디오 재생
- **LineGrid**: 그리드 아이템 사이에 라인이 그려진 레이아웃
- **Typography**: 브랜드 타이틀 및 태그라인

### 데이터 소스
- content.hero.title: 브랜드 이름
- content.hero.subtitle: 브랜드 태그라인
- content.hero.videos.row1Col1: 좌측 비디오
- content.hero.videos.row1Col2: 우측 비디오
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '히어로 타이틀',
    },
    subtitle: {
      control: 'text',
      description: '히어로 서브타이틀',
    },
    row1Col1Video: {
      control: false,
      description: '좌측 비디오 소스 (8/12)',
    },
    row1Col2Video: {
      control: false,
      description: '우측 비디오 소스 (4/12)',
    },
  },
};

export const Default = {
  render: (args) => (
    <>
      <HeroSection {...args} />
      {/* 스크롤 높이 확보용 더미 콘텐츠 */}
      <div style={{ height: '200vh' }} />
    </>
  ),
  args: {
    title: content.hero.title,
    subtitle: content.hero.subtitle,
    row1Col1Video: content.hero.videos.row1Col1,
    row1Col2Video: content.hero.videos.row1Col2,
  },
};

export const WithoutText = {
  render: (args) => (
    <>
      <HeroSection {...args} />
      {/* 스크롤 높이 확보용 더미 콘텐츠 */}
      <div style={{ height: '200vh' }} />
    </>
  ),
  args: {
    title: null,
    subtitle: null,
    row1Col1Video: content.hero.videos.row1Col1,
    row1Col2Video: content.hero.videos.row1Col2,
  },
};

export const CustomText = {
  render: (args) => (
    <>
      <HeroSection {...args} />
      {/* 스크롤 높이 확보용 더미 콘텐츠 */}
      <div style={{ height: '200vh' }} />
    </>
  ),
  args: {
    title: 'Welcome to Lumenstate',
    subtitle: 'Experience the future of lighting',
    row1Col1Video: content.hero.videos.row1Col1,
    row1Col2Video: content.hero.videos.row1Col2,
  },
};
