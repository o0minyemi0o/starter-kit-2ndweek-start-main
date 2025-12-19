import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CustomCard } from './CustomCard';
import { TimeBlendImage } from '../media/TimeBlendImage';

/**
 * ProductCard 컴포넌트
 *
 * 제품 정보를 표시하는 카드 컴포넌트.
 * CustomCard와 TimeBlendImage를 사용하여 낮/밤 이미지 블렌딩 기능을 제공한다.
 *
 * 동작 방식:
 * 1. 제품 데이터(title, type, lux, kelvin, images)를 props로 받음
 * 2. TimeBlendImage로 낮/밤 이미지 블렌딩 미디어 영역 렌더링
 * 3. 제품명과 스펙(type, lux, kelvin)을 콘텐츠 영역에 표시
 * 4. timeline 값에 따라 이미지가 부드럽게 전환됨
 *
 * Props:
 * @param {string} title - 제품명 [Required]
 * @param {string} type - 제품 타입 (ceiling, stand, wall, desk) [Optional]
 * @param {number} lux - 조도 값 [Optional]
 * @param {number} kelvin - 색온도 값 [Optional]
 * @param {Array} images - 이미지 배열 [images[0]: 낮, images[1]: 밤] [Required]
 * @param {number} timeline - 블렌딩 값 (0~1) [Optional, 기본값: 0]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductCard
 *   title="Lumen Desk Pro"
 *   type="ceiling"
 *   lux={260}
 *   kelvin={3200}
 *   images={['/day.jpg', '/night.jpg']}
 *   timeline={0.5}
 * />
 */
export function ProductCard({
  title,
  type,
  lux,
  kelvin,
  images = [],
  timeline = 0,
  onClick,
  sx,
  ...props
}) {
  /**
   * 이미지 유효성 검사
   */
  const dayImage = images[0] || '';
  const nightImage = images[1] || images[0] || '';

  return (
    <CustomCard
      layout="vertical"
      mediaRatio="auto"
      variant="ghost"
      isInteractive={!!onClick}
      onClick={onClick}
      mediaSlot={
        <TimeBlendImage
          dayImage={dayImage}
          nightImage={nightImage}
          timeline={timeline}
          alt={title}
        />
      }
      contentPadding="md"
      gap="xs"
      sx={sx}
      {...props}
    >
      <Stack spacing={0.5}>
        {/* 제품명 */}
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>

        {/* 제품 스펙 */}
        <Stack direction="row" spacing={1.5}>
          {type && (
            <Typography variant="caption" color="text.secondary">
              {type.toUpperCase()}
            </Typography>
          )}
          {lux !== undefined && (
            <Typography variant="caption" color="text.secondary">
              {lux} lx
            </Typography>
          )}
          {kelvin !== undefined && (
            <Typography variant="caption" color="text.secondary">
              {kelvin} K
            </Typography>
          )}
        </Stack>
      </Stack>
    </CustomCard>
  );
}
