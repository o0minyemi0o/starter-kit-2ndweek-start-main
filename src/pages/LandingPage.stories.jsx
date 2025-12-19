import { LandingPage } from './LandingPage';

export default {
  title: 'Page/LandingPage',
  component: LandingPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: true,
      },
      description: {
        component: `
## LandingPage

Lumenstate 메인 랜딩 페이지.

### 용도
- 브랜드 소개 및 제품 쇼케이스를 위한 메인 페이지
- HeroSection, BrandValueSection, ProductShowcase를 순서대로 배치
- 전체 사용자 경험 플로우 제공

### 페이지 구조
1. **HeroSection**
   - 8:4 비율의 비디오 그리드
   - 브랜드 타이틀 + 태그라인 오버레이
   - 스크롤 기반 비디오 재생

2. **BrandValueSection**
   - 3개의 브랜드 가치 카드 (4:4:4)
   - Immanence, Continuity, Flexibility
   - 아이콘 + 타이틀 + 설명

3. **ProductShowcase**
   - 타입별 제품 필터 (All, Ceiling, Stand, Wall, Desk)
   - 시간대 슬라이더 (12pm, 4pm, 8pm, 12am)
   - 제품 그리드 (반응형)
   - 제품 이미지 블렌딩 (낮 → 밤)

### 전역 상태
- TimelineProvider로 timeline 상태 관리
- ProductShowcase에서 timeline 슬라이더 조작
- 모든 제품 카드의 이미지가 동시에 블렌딩
- timeline >= 0.67 (8pm, 12am)일 때 자동 다크 모드 전환

### 데이터 소스
- content.hero: 히어로 비디오 및 텍스트
- content.brandValue: 브랜드 가치 정보
- content.products: 제품 섹션 텍스트
- products: 제품 목록 (15개)

### 레이아웃 설정
- BrandValueSection 바로 아래 검은색 구분선 (타이트하게 붙임)
- ProductShowcase centerSize: 8 (제품 사진 크기 확보)
- ProductShowcase 상단 패딩: 11 (적절한 시각적 여유 확보)
        `,
      },
    },
  },
};

export const Default = {
  render: () => <LandingPage />,
};
