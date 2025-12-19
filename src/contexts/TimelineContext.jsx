import { createContext, useContext, useState } from 'react';

/**
 * TimelineContext
 *
 * 전역 timeline 상태를 관리하는 Context.
 * 시간대별 이미지 블렌딩과 다크 모드 전환을 위한 timeline 값(0~1)을 제공한다.
 *
 * Timeline 값 매핑:
 * - 0.0 (12pm, 낮): Sun 아이콘, 라이트 모드
 * - 0.33 (4pm, 오후): Sunset 아이콘, 라이트 모드
 * - 0.67 (8pm, 저녁): Sunset 아이콘, 다크 모드
 * - 1.0 (12am, 밤): Moon 아이콘, 다크 모드
 *
 * 다크 모드 전환:
 * - Storybook의 ThemeWrapper가 timeline >= 0.67일 때 자동으로 다크 모드 적용
 */
const TimelineContext = createContext(null);

/**
 * TimelineProvider 컴포넌트
 *
 * Timeline 상태를 제공하는 Provider.
 *
 * Props:
 * @param {node} children - 자식 컴포넌트
 * @param {number} initialTimeline - 초기 timeline 값 [Optional, 기본값: 0]
 */
export function TimelineProvider({ children, initialTimeline = 0 }) {
  const [timeline, setTimeline] = useState(initialTimeline);

  const value = {
    timeline,
    setTimeline,
  };

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  );
}

/**
 * useTimeline 훅
 *
 * Timeline 상태에 접근하기 위한 커스텀 훅.
 *
 * Returns:
 * @returns {object} { timeline: number, setTimeline: function }
 *
 * Example usage:
 * const { timeline, setTimeline } = useTimeline();
 * <TimeBlendImage dayImage={day} nightImage={night} timeline={timeline} />
 */
export function useTimeline() {
  const context = useContext(TimelineContext);

  if (!context) {
    throw new Error('useTimeline must be used within TimelineProvider');
  }

  return context;
}
