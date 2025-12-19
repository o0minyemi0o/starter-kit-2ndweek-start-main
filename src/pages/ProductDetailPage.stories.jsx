import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ProductDetailPage } from './ProductDetailPage';

export default {
  title: 'Page/ProductDetailPage',
  component: ProductDetailPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## ProductDetailPage

URL 파라미터로 제품 ID를 받아 제품 상세 페이지를 표시하는 페이지 컴포넌트.

### 용도
- 제품 상세 페이지 라우팅
- URL 기반 제품 표시
- 장바구니 통합 전체 플로우

### 특징
- React Router의 useParams로 productId 추출
- products 배열에서 제품 검색
- 제품이 없으면 루트(/)로 리다이렉트
- CartProvider로 장바구니 상태 제공
- ProductDetailSection으로 전체 UI 구성

### URL 형식
\`\`\`
/product/:productId
\`\`\`

### 라우팅 예시
\`\`\`jsx
// React Router 설정
<Route path="/product/:productId" element={<ProductDetailPage />} />
\`\`\`
        `,
      },
    },
  },
};

/**
 * 스토리 래퍼 - MemoryRouter로 URL 파라미터 시뮬레이션
 */
const ProductDetailPageWrapper = ({ productId }) => (
  <MemoryRouter initialEntries={[`/product/${productId}`]}>
    <Routes>
      <Route path="/product/:productId" element={<ProductDetailPage />} />
    </Routes>
  </MemoryRouter>
);

/** Lumen Desk Pro (ID: 1) */
export const LumenDeskPro = {
  render: () => <ProductDetailPageWrapper productId={1} />,
};

/** Lumen Ceiling (ID: 2) */
export const LumenCeiling = {
  render: () => <ProductDetailPageWrapper productId={2} />,
};

/** Lumen Floor (ID: 3) */
export const LumenFloor = {
  render: () => <ProductDetailPageWrapper productId={3} />,
};

/** Lumen Wall (ID: 4) */
export const LumenWall = {
  render: () => <ProductDetailPageWrapper productId={4} />,
};

/** Lumen Table (ID: 5) */
export const LumenTable = {
  render: () => <ProductDetailPageWrapper productId={5} />,
};

/** Lumen Mini - 재고 있음 (ID: 11) */
export const LumenMini = {
  render: () => <ProductDetailPageWrapper productId={11} />,
};

/** Lumen Studio - 높은 가격 (ID: 12) */
export const LumenStudio = {
  render: () => <ProductDetailPageWrapper productId={12} />,
};

/** 존재하지 않는 제품 (404 리다이렉트) */
export const NotFound = {
  render: () => <ProductDetailPageWrapper productId={999} />,
  parameters: {
    docs: {
      description: {
        story: '존재하지 않는 제품 ID를 전달하면 루트(/)로 리다이렉트됩니다.',
      },
    },
  },
};
