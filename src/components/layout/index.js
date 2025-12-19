/**
 * Layout Components
 *
 * 레이아웃 관련 컴포넌트 모음
 * 황금비율, 그리드, 화면 분할 등 다양한 레이아웃 패턴을 제공
 */

// RatioContainer - 고정 종횡비 컨테이너
export { RatioContainer, PHI } from './RatioContainer.jsx';

// PhiSplit - 황금비율 2분할 레이아웃
export { PhiSplit } from './PhiSplit.jsx';

// BentoGrid - 벤토 박스 그리드 레이아웃
export { BentoGrid, BentoItem } from './BentoGrid.jsx';
export { BENTO_PRESETS } from './bentoPresets.js';

// FullPageContainer - 전체 화면 섹션 컨테이너
export {
  FullPageContainer,
  FullPageSection,
  FullPageSnap,
} from './FullPageContainer.jsx';

// SplitScreen - 화면 분할 레이아웃
export {
  SplitScreen,
  StickySection,
  SplitOverlay,
} from './SplitScreen.jsx';

// LineGrid - 구분선이 있는 그리드 레이아웃
export { default as LineGrid } from './LineGrid.jsx';

// HeroStack - 히어로 섹션 스택 레이아웃
export { default as HeroStack } from './HeroStack.jsx';

// CenteredAsideLayout - 중앙 정렬 사이드 레이아웃
export { default as CenteredAsideLayout } from './CenteredAsideLayout.jsx';
