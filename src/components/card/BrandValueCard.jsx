import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CircleDot, Repeat, Activity } from 'lucide-react';
import { CustomCard } from './CustomCard';

/**
 * 아이콘 이름을 lucide-react 컴포넌트로 매핑
 */
const ICON_MAP = {
  CircleDot,
  Repeat,
  Activity,
};

/**
 * BrandValueCard 컴포넌트
 *
 * 브랜드 가치를 표시하는 카드 컴포넌트.
 * CustomCard를 사용하여 아이콘, 제목, 설명, 상세 설명을 표시한다.
 *
 * 동작 방식:
 * 1. icon 문자열을 lucide-react 컴포넌트로 변환
 * 2. 아이콘, 제목, 간단한 설명(영문), 상세 설명(한글)을 세로로 배치
 * 3. ghost 스타일로 미니멀한 카드 디자인 제공
 *
 * Props:
 * @param {string} icon - lucide-react 아이콘 이름 ('CircleDot', 'Repeat', 'Activity') [Required]
 * @param {string} title - 브랜드 가치 제목 [Required]
 * @param {string} description - 간단한 설명 (영문) [Required]
 * @param {string} detailedDescription - 상세 설명 (한글) [Required]
 * @param {number} iconSize - 아이콘 크기 (px) [Optional, 기본값: 32]
 * @param {string} iconColor - 아이콘 색상 (theme 경로 또는 CSS 색상) [Optional, 기본값: theme.palette.text.primary]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <BrandValueCard
 *   icon="CircleDot"
 *   title="Immanence"
 *   description="Light quietly residing within the space."
 *   detailedDescription="조명이 건축과 하나가 되어..."
 * />
 */
export function BrandValueCard({
  icon,
  title,
  description,
  detailedDescription,
  iconSize = 32,
  iconColor,
  onClick,
  sx,
  ...props
}) {
  const theme = useTheme();

  /**
   * 아이콘 문자열을 lucide-react 컴포넌트로 변환
   */
  const IconComponent = ICON_MAP[icon];

  /**
   * iconColor를 theme에서 해석
   * - iconColor가 없으면 theme.palette.text.primary 사용
   * - 'text.primary' 같은 theme 경로 문자열이면 theme에서 값 추출
   * - '#000000' 같은 직접 색상 값이면 그대로 사용
   */
  const resolveIconColor = () => {
    if (!iconColor) {
      return theme.palette.text.primary;
    }

    // theme 경로 형식 (예: 'text.primary', 'primary.main')
    if (typeof iconColor === 'string' && iconColor.includes('.')) {
      const [category, variant] = iconColor.split('.');
      return theme.palette[category]?.[variant] || iconColor;
    }

    // 직접 색상 값 또는 다른 형식
    return iconColor;
  };

  return (
    <CustomCard
      variant="ghost"
      contentPadding="md"
      isInteractive={!!onClick}
      onClick={onClick}
      sx={sx}
      {...props}
    >
      <Stack spacing={2}>
        {/* 아이콘 */}
        {IconComponent && (
          <Box sx={{ color: resolveIconColor() }}>
            <IconComponent
              size={iconSize}
              strokeWidth={1.5}
            />
          </Box>
        )}

        {/* 제목 */}
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>

        {/* 간단한 설명 (영문) */}
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        {/* 상세 설명 (한글) */}
        {detailedDescription && (
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            {detailedDescription}
          </Typography>
        )}
      </Stack>
    </CustomCard>
  );
}
