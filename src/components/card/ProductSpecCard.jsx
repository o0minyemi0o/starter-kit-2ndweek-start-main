import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * ProductSpecCard 컴포넌트
 *
 * 제품 스펙을 아이콘 + 라벨 + 값 형태로 표시합니다.
 * LineGrid 내부에서 구분선과 함께 사용되어 기술 데이터를 정돈된 형태로 전달합니다.
 *
 * 동작 방식:
 * 1. orientation='vertical': 아이콘 → 라벨 → 값 (세로 배치, 중앙 정렬)
 * 2. orientation='horizontal': 아이콘 | 라벨 + 값 (가로 배치, 좌측 정렬)
 * 3. 장식 요소 없이 콘텐츠와 구조만으로 정보 전달
 *
 * Props:
 * @param {React.ComponentType} icon - lucide-react 아이콘 컴포넌트 [Required]
 * @param {string} label - 스펙 항목명 (예: "Luminosity", "Color Temp") [Required]
 * @param {string|number} value - 스펙 값 (예: "260 lx", "3200 K") [Required]
 * @param {string} orientation - 레이아웃 방향 'vertical' | 'horizontal' [Optional, 기본값: 'vertical']
 * @param {number} iconSize - 아이콘 크기 (px) [Optional, 기본값: 32]
 * @param {number} iconStrokeWidth - 아이콘 선 두께 [Optional, 기본값: 1.5]
 * @param {string} iconColor - 아이콘 색상 [Optional, 기본값: theme text.primary]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * // 세로 배치 (기본)
 * <ProductSpecCard icon={Sun} label="Luminosity" value="260 lx" />
 *
 * // 가로 배치
 * <ProductSpecCard icon={Sun} label="Luminosity" value="260 lx" orientation="horizontal" />
 */
export function ProductSpecCard({
  icon: Icon,
  label,
  value,
  orientation = 'vertical',
  iconSize = 32,
  iconStrokeWidth = 1.5,
  iconColor,
  sx,
  ...props
}) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isHorizontal ? 'row' : 'column',
        alignItems: isHorizontal ? 'center' : 'center',
        justifyContent: isHorizontal ? 'flex-start' : 'center',
        gap: isHorizontal ? 2 : 2,
        p: { xs: 2, md: 3 },
        textAlign: isHorizontal ? 'left' : 'center',
        ...sx,
      }}
      {...props}
    >
      {/* 아이콘 - 시각적 앵커 */}
      {Icon && (
        <Icon
          size={iconSize}
          strokeWidth={iconStrokeWidth}
          color={iconColor}
          style={{ flexShrink: 0 }}
        />
      )}

      {/* 텍스트 영역 (가로일 때 라벨+값 세로 배치) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: isHorizontal ? 0.5 : 0,
        }}
      >
        {/* 라벨 - 컨텍스트 */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </Typography>

        {/* 값 - 기술 데이터 */}
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 500,
            letterSpacing: '0.02em',
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}
