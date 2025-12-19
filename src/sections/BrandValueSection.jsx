import Grid from '@mui/material/Grid';
import LineGrid from '../components/layout/LineGrid';
import { BrandValueCard } from '../components/card/BrandValueCard';
import { content } from '../data/content';

/**
 * BrandValueSection 섹션
 *
 * 브랜드 가치를 1x3 그리드로 표시하는 섹션.
 * LineGrid와 BrandValueCard를 조합하여 구성한다.
 *
 * 동작 방식:
 * 1. content.brandValue.features 데이터를 순회
 * 2. LineGrid 컨테이너로 1px 라인과 함께 그리드 레이아웃 구성
 * 3. 각 feature를 BrandValueCard로 렌더링 (icon, title, description, detailedDescription 모두 표시)
 * 4. 반응형 레이아웃:
 *    - 모바일(xs): 1열 (세로 배치)
 *    - 데스크톱(md): 3열 (가로 배치)
 *
 * Props:
 * @param {number} iconSize - 아이콘 크기 (px) [Optional, 기본값: 32]
 * @param {string} iconColor - 아이콘 색상 [Optional]
 * @param {function} onCardClick - 카드 클릭 핸들러 (featureId) => void [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <BrandValueSection />
 * <BrandValueSection iconSize={48} iconColor="primary.main" />
 */
export function BrandValueSection({
  iconSize = 32,
  iconColor,
  onCardClick,
  sx,
  ...props
}) {
  return (
    <LineGrid container gap={0} sx={sx} {...props}>
      {content.brandValue.features.map((feature) => (
        <Grid key={feature.id} size={{ xs: 12, md: 4 }}>
          <BrandValueCard
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            detailedDescription={feature.detailedDescription}
            iconSize={iconSize}
            iconColor={iconColor}
            onClick={onCardClick ? () => onCardClick(feature.id) : undefined}
          />
        </Grid>
      ))}
    </LineGrid>
  );
}
