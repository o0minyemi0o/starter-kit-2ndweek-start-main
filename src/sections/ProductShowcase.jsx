import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SectionContainer } from '../components/container/SectionContainer';
import { CenteredAsideLayout } from '../components/layout/CenteredAsideLayout';
import { ProductFilter } from '../components/product/ProductFilter';
import { TimelineSlider } from '../components/shared/TimelineSlider';
import { ProductGrid } from '../templates/ProductGrid';
import { useTimeline } from '../contexts/TimelineContext';
import { products } from '../data/products';

/**
 * ProductShowcase 섹션
 *
 * 제품 쇼케이스 섹션.
 * 상단에 타이틀, 설명, TimelineSlider를 가운데 정렬하고,
 * CenteredAsideLayout으로 좌측 필터 + 중앙 제품 그리드 조합.
 *
 * 동작 방식:
 * 1. SectionContainer로 전체 섹션 래핑
 * 2. 상단: 타이틀 + 설명 + TimelineSlider (가운데 정렬)
 * 3. CenteredAsideLayout으로 좌측 aside + 중앙 콘텐츠 구성
 * 4. 좌측 aside: ProductFilter (타입 필터)
 * 5. 중앙: ProductGrid (필터링된 제품 목록)
 * 6. ProductFilter로 제품 타입 필터링 (all, ceiling, stand, wall, desk)
 * 7. TimelineSlider로 모든 제품의 이미지 블렌딩 제어 (낮 → 밤)
 * 8. useTimeline 훅으로 전역 timeline 상태 관리
 *
 * Props:
 * @param {string} title - 섹션 제목 [Optional]
 * @param {string} subtitle - 섹션 부제목 [Optional]
 * @param {number} centerSize - 중앙 콘텐츠 그리드 크기 [Optional, 기본값: 8]
 * @param {number} gridSpacing - 제품 그리드 간격 [Optional, 기본값: 2]
 * @param {function} onProductClick - 제품 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TimelineProvider>
 *   <ProductShowcase
 *     title="Product Collection"
 *     subtitle="Explore our lighting products"
 *   />
 * </TimelineProvider>
 */
export function ProductShowcase({
  title,
  subtitle,
  centerSize = 6,
  gridSpacing = 2,
  onProductClick,
  sx,
  ...props
}) {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState('all');

  /**
   * 제품 필터링
   * - filter가 'all'이면 전체 제품
   * - 아니면 해당 타입만 필터링
   */
  const filteredProducts = filter === 'all'
    ? products
    : products.filter(product => product.type === filter);

  return (
    <SectionContainer sx={sx} {...props}>
      {/* 상단: 타이틀 + 설명 (가운데 정렬) */}
      {(title || subtitle) && (
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          {title && (
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body1" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      {/* CenteredAsideLayout: 좌측 필터 + 중앙(TimelineSlider + 제품 그리드) */}
      <CenteredAsideLayout
        centerSize={centerSize}
        spacing={3}
        aside={
          <Box sx={{ pt: '116px' }}>
            <ProductFilter value={filter} onChange={setFilter} />
          </Box>
        }
      >
        {/* TimelineSlider: CenteredAsideLayout 중앙 영역 */}
        <Box sx={{ mb: 4, width: '60%', mx: 'auto' }}>
          <TimelineSlider />
        </Box>

        {/* ProductGrid: CenteredAsideLayout 중앙 영역 */}
        <ProductGrid
          products={filteredProducts}
          timeline={timeline}
          onProductClick={onProductClick}
          spacing={gridSpacing}
        />
      </CenteredAsideLayout>
    </SectionContainer>
  );
}
