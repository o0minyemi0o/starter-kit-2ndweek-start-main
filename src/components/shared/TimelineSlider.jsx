import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Sun, Sunset, Moon } from 'lucide-react';
import { useTimeline } from '../../contexts/TimelineContext';

/**
 * 시간대 스냅 포인트
 * - 12pm (낮): 0
 * - 4pm (오후): 0.33
 * - 8pm (저녁): 0.67
 * - 12am (밤): 1.0
 */
const SNAP_POINTS = [
  { value: 0, label: '12pm', icon: Sun },
  { value: 0.33, label: '4pm', icon: Sunset },
  { value: 0.67, label: '8pm', icon: Sunset },
  { value: 1.0, label: '12am', icon: Moon },
];

/**
 * TimelineSlider 컴포넌트
 *
 * 시간대별 timeline을 조절하는 슬라이더.
 * useTimeline 훅으로 전역 상태와 연동되며, 4개 시간대(12pm, 4pm, 8pm, 12am)에 스냅된다.
 *
 * 동작 방식:
 * 1. 차트 axis + tick 스타일의 얇은 선 디자인
 * 2. 4개 지점(0, 0.33, 0.67, 1.0)에 스냅
 * 3. 각 지점에 아이콘(Sun, Sunset, Moon)과 시간 라벨 표시
 * 4. useTimeline 훅으로 전역 timeline 값 업데이트
 * 5. ProductCard 이미지 블렌드 + 다크 모드 전환 제어
 *    - timeline >= 0.67 (8pm, 12am)일 때 자동 다크 모드
 *
 * Props:
 * @param {boolean} showLabels - 시간 라벨 표시 여부 [Optional, 기본값: true]
 * @param {number} iconSize - 아이콘 크기 (px) [Optional, 기본값: 20]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TimelineProvider>
 *   <TimelineSlider />
 * </TimelineProvider>
 */
export function TimelineSlider({
  showLabels = true,
  iconSize = 20,
  sx,
  ...props
}) {
  const { timeline, setTimeline } = useTimeline();

  /**
   * 슬라이더 값 변경 핸들러
   * 가장 가까운 스냅 포인트로 자동 스냅
   */
  const handleChange = (event, newValue) => {
    // 가장 가까운 스냅 포인트 찾기
    const closest = SNAP_POINTS.reduce((prev, curr) =>
      Math.abs(curr.value - newValue) < Math.abs(prev.value - newValue) ? curr : prev
    );

    setTimeline(closest.value);
  };

  /**
   * 현재 timeline에 해당하는 스냅 포인트 찾기
   */
  const currentSnap = SNAP_POINTS.find(snap => snap.value === timeline) || SNAP_POINTS[0];

  return (
    <Box sx={{ width: '100%', minWidth: 400, ...sx }} {...props}>
      {/* 아이콘 + 라벨 */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1,
        }}
      >
        {SNAP_POINTS.map((snap) => {
          const IconComponent = snap.icon;
          const isActive = snap.value === timeline;

          return (
            <Box
              key={snap.value}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0.5,
                opacity: isActive ? 1 : 0.4,
                transition: 'opacity 0.3s ease',
              }}
            >
              <IconComponent size={iconSize} strokeWidth={1.5} />
              {showLabels && (
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: 11,
                    fontFamily: 'monospace',
                  }}
                >
                  {snap.label}
                </Typography>
              )}
            </Box>
          );
        })}
      </Box>

      {/* Axis 라인과 Tick 마커 */}
      <Box sx={{ position: 'relative', mb: 1 }}>
        {/* Axis 라인 (얇은 가로선) */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '1px',
            bgcolor: 'text.primary',
            transform: 'translateY(-50%)',
            zIndex: 0,
          }}
        />

        {/* Tick 마커 (각 스냅 포인트에 세로선) */}
        {SNAP_POINTS.map((snap) => (
          <Box
            key={snap.value}
            sx={{
              position: 'absolute',
              top: '50%',
              left: `${snap.value * 100}%`,
              transform: 'translate(-50%, -50%)',
              width: '1px',
              height: 8,
              bgcolor: 'text.primary',
              zIndex: 1,
            }}
          />
        ))}

        {/* Slider */}
        <Slider
          value={timeline}
          onChange={handleChange}
          min={0}
          max={1}
          step={null}
          marks={SNAP_POINTS.map(snap => ({ value: snap.value }))}
          sx={{
            position: 'relative',
            zIndex: 2,
            '& .MuiSlider-thumb': {
              width: 12,
              height: 12,
            },
            '& .MuiSlider-track': {
              display: 'none',
            },
            '& .MuiSlider-rail': {
              opacity: 0,
            },
            '& .MuiSlider-mark': {
              display: 'none',
            },
          }}
        />
      </Box>
    </Box>
  );
}
