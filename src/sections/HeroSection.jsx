import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LineGrid from '../components/layout/LineGrid';
import VideoScrubbing from '../components/media/VideoScrubbing';
import { content } from '../data/content';

/**
 * HeroSection 컴포넌트
 *
 * 메인 히어로 섹션.
 * LineGrid로 8:4 비율의 비디오 그리드를 구성하고, 타이틀과 서브타이틀을 오버레이로 표시.
 *
 * 동작 방식:
 * 1. LineGrid container로 전체 그리드 구성
 * 2. 좌측 (8/12): row1Col1 비디오
 * 3. 우측 (4/12): row1Col2 비디오
 * 4. 타이틀과 서브타이틀을 좌측 상단 오버레이로 표시
 *    - 위치: top { xs: 24px, md: 40px }
 *    - 타이틀 크기: { xs: 2.5rem, md: 4rem, lg: 5rem }
 *    - 서브타이틀 크기: { xs: 1rem, md: 1.5rem, lg: 2rem }
 * 5. VideoScrubbing으로 스크롤 기반 비디오 재생
 *
 * Props:
 * @param {string} title - 히어로 타이틀 [Optional, 기본값: content.hero.title]
 * @param {string} subtitle - 히어로 서브타이틀 [Optional, 기본값: content.hero.subtitle]
 * @param {string} row1Col1Video - 좌측 비디오 소스 [Optional, 기본값: content.hero.videos.row1Col1]
 * @param {string} row1Col2Video - 우측 비디오 소스 [Optional, 기본값: content.hero.videos.row1Col2]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <HeroSection />
 */
export function HeroSection({
  title = content.hero.title,
  subtitle = content.hero.subtitle,
  row1Col1Video = content.hero.videos.row1Col1,
  row1Col2Video = content.hero.videos.row1Col2,
  sx,
  ...props
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      {/* 비디오 그리드 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* 좌측 비디오 (8/12) */}
        <Box sx={{ width: { xs: '100%', md: '66.666%' }, display: 'flex' }}>
          <VideoScrubbing
            src={row1Col1Video}
            startInView
            ratio="auto"
            sx={{
              width: '100%',
              display: 'block',
            }}
          />
        </Box>

        {/* 세로 라인 */}
        <Box
          sx={{
            width: '1px',
            bgcolor: 'text.primary',
            display: { xs: 'none', md: 'block' },
          }}
        />

        {/* 우측 비디오 (4/12) */}
        <Box sx={{ width: { xs: '100%', md: '33.333%' }, display: 'flex' }}>
          <VideoScrubbing
            src={row1Col2Video}
            startInView
            ratio="16/9"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>

      {/* 텍스트 오버레이 */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 24, md: 40 },
          left: { xs: 20, md: 40 },
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        {/* 타이틀 */}
        {title && (
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
              lineHeight: 1.1,
              color: 'text.primary',
              mb: 1.5,
            }}
          >
            {title}
          </Typography>
        )}

        {/* 서브타이틀 */}
        {subtitle && (
          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.5rem', lg: '2rem' },
              lineHeight: 1.3,
              color: 'text.secondary',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
