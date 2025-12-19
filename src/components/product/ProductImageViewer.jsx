import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TimeBlendImage } from '../media/TimeBlendImage';
import { TimelineSlider } from '../shared/TimelineSlider';
import { useTimeline } from '../../contexts/TimelineContext';

/**
 * 두 스펙 값 사이를 선형 보간
 * @param {number} value1 - 시작 값
 * @param {number} value2 - 끝 값
 * @param {number} t - 보간 비율 (0~1)
 * @returns {number} 보간된 값
 */
const lerp = (value1, value2, t) => {
  return value1 + (value2 - value1) * t;
};

/**
 * ProductImageViewer 컴포넌트
 *
 * 제품 이미지를 시간대별로 블렌딩하여 표시하고, 하단에 타임라인 슬라이더를 제공하는 뷰어.
 * 우측 상단에 현재 timeline에 해당하는 조도(lux)와 색온도(K) 값을 monospace로 표시한다.
 *
 * 동작 방식:
 * 1. TimeBlendImage로 낮/밤 이미지 블렌딩 (useTimeline에서 timeline 값 가져옴)
 * 2. 하단에 그래디언트 오버레이 + TimelineSlider 배치
 * 3. 우측 상단에 현재 lux·K 값 표시 (specs 배열에서 보간)
 * 4. specs 배열의 timeline 값 사이를 선형 보간하여 실시간 계산
 * 5. 시각적으로 immersive한 전체 화면 뷰어 경험 제공
 *
 * Props:
 * @param {string} dayImage - 낮 이미지 URL [Required]
 * @param {string} nightImage - 밤 이미지 URL [Required]
 * @param {Array} specs - 시간대별 스펙 배열 [{ timeline: 0-1, lux: number, kelvin: number }] [Required]
 * @param {string} aspectRatio - 이미지 종횡비 [Optional, 기본값: '1/1']
 * @param {boolean} showSlider - 슬라이더 표시 여부 [Optional, 기본값: true]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TimelineProvider>
 *   <ProductImageViewer
 *     dayImage="/product-day.jpg"
 *     nightImage="/product-night.jpg"
 *     specs={[
 *       { timeline: 0, lux: 480, kelvin: 4400 },
 *       { timeline: 0.33, lux: 320, kelvin: 3600 },
 *       { timeline: 0.67, lux: 180, kelvin: 3200 },
 *       { timeline: 1.0, lux: 120, kelvin: 2700 }
 *     ]}
 *   />
 * </TimelineProvider>
 */
export function ProductImageViewer({
  dayImage,
  nightImage,
  specs = [],
  aspectRatio = '1/1',
  showSlider = true,
  sx,
  ...props
}) {
  const { timeline } = useTimeline();

  /**
   * 현재 timeline에 해당하는 lux·K 값 계산
   * specs 배열에서 가장 가까운 두 지점을 찾아 선형 보간
   */
  const getCurrentSpecs = () => {
    if (specs.length === 0) {
      return { lux: 0, kelvin: 0 };
    }

    // specs를 timeline 순으로 정렬
    const sortedSpecs = [...specs].sort((a, b) => a.timeline - b.timeline);

    // timeline과 정확히 일치하는 스펙 찾기
    const exactMatch = sortedSpecs.find((spec) => spec.timeline === timeline);
    if (exactMatch) {
      return { lux: Math.round(exactMatch.lux), kelvin: Math.round(exactMatch.kelvin) };
    }

    // 현재 timeline보다 작거나 같은 가장 큰 값 (이전 지점)
    let prevSpec = sortedSpecs[0];
    // 현재 timeline보다 큰 가장 작은 값 (다음 지점)
    let nextSpec = sortedSpecs[sortedSpecs.length - 1];

    for (let i = 0; i < sortedSpecs.length - 1; i++) {
      if (sortedSpecs[i].timeline <= timeline && sortedSpecs[i + 1].timeline >= timeline) {
        prevSpec = sortedSpecs[i];
        nextSpec = sortedSpecs[i + 1];
        break;
      }
    }

    // 두 지점 사이 보간 비율 계산
    const range = nextSpec.timeline - prevSpec.timeline;
    const t = range === 0 ? 0 : (timeline - prevSpec.timeline) / range;

    // 선형 보간
    const lux = lerp(prevSpec.lux, nextSpec.lux, t);
    const kelvin = lerp(prevSpec.kelvin, nextSpec.kelvin, t);

    return {
      lux: Math.round(lux),
      kelvin: Math.round(kelvin),
    };
  };

  const currentSpecs = getCurrentSpecs();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
    >
      {/* 배경: TimeBlendImage (낮/밤 블렌딩) */}
      <TimeBlendImage
        dayImage={dayImage}
        nightImage={nightImage}
        timeline={timeline}
        aspectRatio={aspectRatio}
        objectFit="cover"
      />

      {/* 우측 상단: lux·K 값 (monospace 기술 표기) */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            px: 2,
            py: 1,
            backgroundColor: 'rgba(18, 16, 14, 0.6)',
            backdropFilter: 'blur(8px)',
            transition: 'background-color 0.6s ease',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 500,
              fontSize: { xs: 13, md: 14 },
              letterSpacing: '0.05em',
              color: '#F2E9DA',
            }}
          >
            {currentSpecs.lux} lx · {currentSpecs.kelvin} K
          </Typography>
        </Box>
      </Box>

      {/* 하단: 그래디언트 오버레이 + TimelineSlider */}
      {showSlider && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          {/* 그래디언트 오버레이 (따뜻한 톤, 슬라이더 가독성 확보) */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: { xs: 120, md: 160 },
              background: 'linear-gradient(to top, rgba(18, 16, 14, 0.8) 0%, rgba(18, 16, 14, 0.4) 50%, transparent 100%)',
              pointerEvents: 'none',
              transition: 'opacity 0.6s ease',
            }}
          />

          {/* TimelineSlider */}
          <Box
            sx={{
              position: 'relative',
              px: { xs: 3, md: 6 },
              pb: { xs: 3, md: 4 },
            }}
          >
            <TimelineSlider
              showLabels={true}
              iconSize={20}
              sx={{
                minWidth: 'auto',
                width: '100%',
                '& .MuiSlider-thumb': {
                  backgroundColor: '#FFC66E',
                  border: '2px solid #F2E9DA',
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: '0 0 0 8px rgba(255, 198, 110, 0.16)',
                  },
                },
                '& .MuiTypography-root': {
                  color: '#F2E9DA',
                },
                '& svg': {
                  color: '#F2E9DA',
                },
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}
