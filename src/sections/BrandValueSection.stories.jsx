import { BrandValueSection } from './BrandValueSection';

export default {
  title: 'Section/BrandValueSection',
  component: BrandValueSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## BrandValueSection

브랜드 가치를 1x3 그리드로 표시하는 섹션.

### 용도
- 랜딩 페이지 브랜드 가치 섹션
- LineGrid로 1px 라인과 함께 그리드 레이아웃 구성
- 각 카드에 아이콘, 제목, 간단한 설명(영문), 상세 설명(한글) 모두 표시
- 반응형: 모바일 1열, 데스크톱 3열
        `,
      },
    },
  },
  argTypes: {
    iconSize: {
      control: { type: 'number', min: 16, max: 64, step: 4 },
      description: '아이콘 크기 (px)',
    },
    iconColor: {
      control: 'text',
      description: '아이콘 색상 (theme 경로 또는 CSS 색상)',
    },
    onCardClick: {
      action: 'card-clicked',
      description: '카드 클릭 핸들러',
    },
  },
};

export const Default = {
  args: {
    iconSize: 32,
  },
};

export const LargeIcons = {
  args: {
    iconSize: 48,
  },
};

export const CustomIconColor = {
  args: {
    iconSize: 32,
    iconColor: 'primary.main',
  },
};

export const Interactive = {
  args: {
    iconSize: 32,
    onCardClick: (id) => alert(`Brand value "${id}" clicked!`),
  },
};
