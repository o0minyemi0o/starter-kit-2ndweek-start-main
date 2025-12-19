import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TimelineProvider } from './contexts';
import { LandingPage, ProductDetailPage } from './pages';

/**
 * App 컴포넌트
 *
 * 전체 앱의 루트 컴포넌트.
 * TimelineProvider로 전역 timeline 상태를 관리하여
 * 모든 페이지에서 일관된 다크모드 전환을 지원한다.
 *
 * 라우팅:
 * - / : LandingPage
 * - /product/:productId : ProductDetailPage
 */
function App() {
  return (
    <BrowserRouter>
      <TimelineProvider initialTimeline={0}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </TimelineProvider>
    </BrowserRouter>
  );
}

export default App;
