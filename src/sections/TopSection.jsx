import Grid from '@mui/material/Grid';
import LineGrid from '../components/layout/LineGrid';
import { HeroSection } from './HeroSection';
import { BrandValueSection } from './BrandValueSection';

/**
 * TopSection 컴포넌트
 *
 * 페이지 상단 섹션.
 * LineGrid로 2행 레이아웃을 구성하고, Row 1에 HeroSection, Row 2에 BrandValueSection을 배치.
 *
 * 동작 방식:
 * 1. LineGrid container로 2행 구조 생성
 * 2. Row 1: HeroSection (100vh 고정 높이, 8:4 비디오 그리드)
 * 3. Row 2: BrandValueSection (auto 높이, 4:4:4 카드 그리드)
 * 4. 각 행 사이에 LineGrid의 horizontal line 표시
 *
 * Props:
 * @param {string} heroTitle - HeroSection 타이틀 [Optional]
 * @param {string} heroSubtitle - HeroSection 서브타이틀 [Optional]
 * @param {number} brandIconSize - BrandValueSection 아이콘 크기 [Optional]
 * @param {string} brandIconColor - BrandValueSection 아이콘 색상 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TopSection />
 * <TopSection heroTitle="Welcome" brandIconSize={48} />
 */
export function TopSection({
  rowHeights,
  heroTitle,
  heroSubtitle,
  brandIconSize,
  brandIconColor,
  sx,
  ...props
}) {
  return (
    <LineGrid
      container
      gap={0}
      sx={sx}
      {...props}
    >
      {/* Row 1: HeroSection (100vh) */}
      <Grid size={{ xs: 12 }} sx={{ m: 0, p: 0 }}>
        <HeroSection title={heroTitle} subtitle={heroSubtitle} sx={{ m: 0 }} />
      </Grid>

      {/* Row 2: BrandValueSection (auto height) */}
      <Grid size={{ xs: 12 }} sx={{ m: 0, p: 0 }}>
        <BrandValueSection iconSize={brandIconSize} iconColor={brandIconColor} sx={{ m: 0 }} />
      </Grid>
    </LineGrid>
  );
}
