import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LineGrid from '../components/layout/LineGrid';
import { ProductSpecCard } from '../components/card';
import {
  Lamp,
  LampCeiling,
  LampDesk,
  LampFloor,
  Sun,
  SlidersHorizontal,
} from 'lucide-react';

/**
 * ProductHeroTemplate 컴포넌트
 *
 * 제품 상세 페이지의 히어로 영역 템플릿.
 * 제품명, 설명, 3열 스펙 카드를 세로로 배치한다.
 *
 * 동작 방식:
 * 1. 제품명을 h2 타이포그래피로 표시
 * 2. 설명문을 body1으로 표시
 * 3. LineGrid + ProductSpecCard로 3개의 스펙 표시
 *    - 타입 (Lamp 관련 아이콘)
 *    - Lux (Sun 아이콘)
 *    - Kelvin (SlidersHorizontal 아이콘)
 * 4. 각 스펙은 구분선으로 분리
 *
 * Props:
 * @param {string} title - 제품명 [Required]
 * @param {string} description - 제품 설명 [Optional]
 * @param {object} specs - 스펙 정보 { type, lux, kelvin } [Required]
 * @param {string} specs.type - 제품 타입 (예: 'Desk', 'Ceiling', 'Floor', 'Wall') [Required]
 * @param {number} specs.lux - 조도 값 [Required]
 * @param {number} specs.kelvin - 색온도 값 [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductHeroTemplate
 *   title="Lumen Desk Pro"
 *   description="Adaptive task lighting with environmental response curves"
 *   specs={{
 *     type: 'Desk',
 *     lux: 480,
 *     kelvin: 4400,
 *   }}
 * />
 */

// 타입별 아이콘 매핑
const typeIcons = {
  Desk: LampDesk,
  Ceiling: LampCeiling,
  Floor: LampFloor,
  Wall: Lamp,
  Default: Lamp,
};

export function ProductHeroTemplate({
  title,
  description,
  specs,
  sx,
  ...props
}) {
  const { type, lux, kelvin } = specs;

  // 타입에 맞는 아이콘 선택
  const TypeIcon = typeIcons[type] || typeIcons.Default;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 4, md: 6 },
        ...sx,
      }}
      {...props}
    >
      {/* 제품명 */}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 300,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          fontSize: { xs: 40, md: 56 },
        }}
      >
        {title}
      </Typography>

      {/* 설명 (선택적) */}
      {description && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 600,
            lineHeight: 1.7,
            fontSize: { xs: 15, md: 16 },
          }}
        >
          {description}
        </Typography>
      )}

      {/* 3열 스펙 카드 (가로 배치) */}
      <LineGrid container gap={0}>
        {/* 타입 */}
        <Grid size={{ xs: 4 }}>
          <ProductSpecCard
            icon={TypeIcon}
            label="Type"
            value={type}
            orientation="horizontal"
            iconSize={32}
            iconStrokeWidth={1.5}
          />
        </Grid>

        {/* Lux */}
        <Grid size={{ xs: 4 }}>
          <ProductSpecCard
            icon={Sun}
            label="Lux"
            value={`${lux.toLocaleString()} lx`}
            orientation="horizontal"
            iconSize={32}
            iconStrokeWidth={1.5}
          />
        </Grid>

        {/* Kelvin */}
        <Grid size={{ xs: 4 }}>
          <ProductSpecCard
            icon={SlidersHorizontal}
            label="Kelvin"
            value={`${kelvin.toLocaleString()} K`}
            orientation="horizontal"
            iconSize={32}
            iconStrokeWidth={1.5}
          />
        </Grid>
      </LineGrid>
    </Box>
  );
}
