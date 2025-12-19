import { useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { HeroSection } from '../sections/HeroSection';
import { BrandValueSection } from '../sections/BrandValueSection';
import { ProductShowcase } from '../sections/ProductShowcase';
import { TimelineProvider, useTimeline } from '../contexts/TimelineContext';
import { createAppTheme } from '../styles/themes/theme';
import { content } from '../data/content';

/**
 * LandingPageContent 컴포넌트
 *
 * timeline 값을 구독하여 다크 모드를 적용하는 내부 컴포넌트.
 */
function LandingPageContent() {
  const { timeline } = useTimeline();

  const theme = useMemo(() => {
    const mode = timeline >= 0.67 ? 'dark' : 'light';
    return createAppTheme(mode);
  }, [timeline]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* 1. Hero Section */}
        <HeroSection
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          row1Col1Video={content.hero.videos.row1Col1}
          row1Col2Video={content.hero.videos.row1Col2}
        />

        {/* 2. Brand Value Section */}
        <BrandValueSection />

        {/* 3. Section Divider */}
        <Divider sx={{ borderColor: 'text.primary' }} />

        {/* 4. Product Showcase */}
        <ProductShowcase
          title={content.products.sectionTitle}
          subtitle={content.products.sectionSubtitle}
          centerSize={8}
          sx={{ pt: 11 }}
        />
      </Box>
    </ThemeProvider>
  );
}

/**
 * LandingPage 컴포넌트
 *
 * Lumenstate 메인 랜딩 페이지.
 * HeroSection, BrandValueSection, ProductShowcase를 순서대로 배치.
 *
 * 동작 방식:
 * 1. TimelineProvider로 전역 timeline 상태 관리
 *    - timeline >= 0.67 (8pm, 12am)일 때 자동 다크 모드 전환
 * 2. HeroSection: 히어로 영역 (비디오 + 타이틀)
 * 3. BrandValueSection: 브랜드 가치 카드 (3개)
 * 4. Divider: BrandValueSection 바로 아래 검은색 구분선 (타이트하게 붙임)
 * 5. ProductShowcase: 제품 쇼케이스 (필터 + 그리드)
 *    - 상단 패딩 11로 적절한 시각적 여유 확보
 *    - centerSize 8로 제품 사진 크기 확보
 *    - TimelineSlider로 다크 모드 전환 제어
 *
 * 데이터 소스:
 * - content.hero: 히어로 섹션 데이터
 * - content.brandValue: 브랜드 가치 데이터
 * - content.products: 제품 섹션 데이터
 * - products: 제품 목록 데이터
 *
 * Example usage:
 * <LandingPage />
 */
export function LandingPage() {
  return (
    <TimelineProvider initialTimeline={0}>
      <LandingPageContent />
    </TimelineProvider>
  );
}
