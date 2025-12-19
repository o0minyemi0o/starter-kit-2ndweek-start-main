import Box from '@mui/material/Box';

/**
 * TimeBlendImage 컴포넌트
 *
 * 낮/밤 이미지를 블렌딩하는 컴포넌트.
 * 두 개의 이미지를 absolute로 겹쳐서 timeline 값에 따라 opacity를 조절한다.
 *
 * 동작 방식:
 * 1. 낮 이미지(dayImage)와 밤 이미지(nightImage)를 겹쳐서 렌더링
 * 2. timeline 값(0~1)에 따라 이미지 블렌딩
 *    - timeline = 0: 낮 이미지만 보임 (opacity: 1)
 *    - timeline = 0.5: 두 이미지가 50%씩 블렌딩
 *    - timeline = 1: 밤 이미지만 보임 (opacity: 1)
 * 3. CSS transition으로 부드러운 전환 효과
 *
 * Props:
 * @param {string} dayImage - 낮 이미지 URL [Required]
 * @param {string} nightImage - 밤 이미지 URL [Required]
 * @param {number} timeline - 블렌딩 값 (0~1) [Optional, 기본값: 0]
 * @param {string} alt - 이미지 대체 텍스트 [Optional, 기본값: '']
 * @param {string} aspectRatio - 컨테이너 종횡비 [Optional, 기본값: 'auto']
 * @param {string} objectFit - 이미지 맞춤 방식 [Optional, 기본값: 'cover']
 * @param {number} duration - 트랜지션 지속 시간 (ms) [Optional, 기본값: 500]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TimeBlendImage
 *   dayImage="/images/product-day.jpg"
 *   nightImage="/images/product-night.jpg"
 *   timeline={0.5}
 * />
 */
export function TimeBlendImage({
  dayImage,
  nightImage,
  timeline = 0,
  alt = '',
  aspectRatio = 'auto',
  objectFit = 'cover',
  duration = 500,
  sx,
  ...props
}) {
  /**
   * timeline 값을 0~1 범위로 제한
   */
  const safeTimeline = Math.max(0, Math.min(timeline, 1));

  /**
   * 밤 이미지의 opacity 계산
   * timeline이 0이면 opacity 0 (안 보임)
   * timeline이 1이면 opacity 1 (완전히 보임)
   */
  const nightOpacity = safeTimeline;

  if (!dayImage || !nightImage) {
    return (
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          ...(aspectRatio !== 'auto' && { aspectRatio }),
          backgroundColor: 'grey.200',
          ...sx,
        }}
        {...props}
      />
    );
  }

  /**
   * 컨테이너 스타일
   * - aspectRatio가 'auto'이면 첫 이미지의 자연 높이를 따라감
   * - 아니면 지정된 비율 적용
   */
  const containerStyles = {
    position: 'relative',
    width: '100%',
    ...(aspectRatio !== 'auto' && { aspectRatio }),
    overflow: 'hidden',
    backgroundColor: 'grey.200',
    ...sx,
  };

  /**
   * aspectRatio === 'auto'일 때:
   * - 낮 이미지: 상대적 위치로 공간 차지 (컨테이너 높이 결정)
   * - 밤 이미지: 절대 위치로 낮 이미지 위에 중첩
   *
   * aspectRatio !== 'auto'일 때:
   * - 두 이미지 모두 절대 위치로 중첩
   */
  const dayImageStyles = aspectRatio === 'auto'
    ? {
        display: 'block',
        width: '100%',
        height: 'auto',
        objectFit,
        transition: `opacity ${duration}ms ease-out`,
      }
    : {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit,
        transition: `opacity ${duration}ms ease-out`,
      };

  const nightImageStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit,
    opacity: nightOpacity,
    transition: `opacity ${duration}ms ease-out`,
  };

  return (
    <Box sx={containerStyles} {...props}>
      {/* 낮 이미지 (aspectRatio='auto'일 때 공간 차지) */}
      <Box
        component="img"
        src={dayImage}
        alt={alt}
        sx={dayImageStyles}
      />

      {/* 밤 이미지 (항상 absolute로 낮 이미지 위에 중첩) */}
      <Box
        component="img"
        src={nightImage}
        alt={alt}
        sx={nightImageStyles}
      />
    </Box>
  );
}
