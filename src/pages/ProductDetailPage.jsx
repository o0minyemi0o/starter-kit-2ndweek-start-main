import { useParams, Navigate } from 'react-router-dom';
import { ProductDetailSection } from '../sections';
import { products } from '../data/products';
import { CartProvider } from '../contexts';

/**
 * 제품별 메타데이터 (가격, 품번, 리드타임, 배송일)
 */
const PRODUCT_META = {
  1: { price: 850, itemNumber: 'LMP-DSK-001', leadTime: '2-3 weeks', shipDate: 'Jan 15, 2025' },
  2: { price: 1200, itemNumber: 'LMP-CEI-002', leadTime: '3-4 weeks', shipDate: 'Jan 22, 2025' },
  3: { price: 950, itemNumber: 'LMP-FLR-003', leadTime: '2-3 weeks', shipDate: 'Jan 18, 2025' },
  4: { price: 720, itemNumber: 'LMP-WAL-004', leadTime: 'In Stock', shipDate: 'Dec 28, 2024' },
  5: { price: 680, itemNumber: 'LMP-TBL-005', leadTime: '1-2 weeks', shipDate: 'Jan 10, 2025' },
  6: { price: 580, itemNumber: 'LMP-AMB-006', leadTime: '2-3 weeks', shipDate: 'Jan 12, 2025' },
  7: { price: 1100, itemNumber: 'LMP-ARC-007', leadTime: '3-4 weeks', shipDate: 'Jan 20, 2025' },
  8: { price: 520, itemNumber: 'LMP-SPH-008', leadTime: '1-2 weeks', shipDate: 'Jan 8, 2025' },
  9: { price: 890, itemNumber: 'LMP-LIN-009', leadTime: '2-3 weeks', shipDate: 'Jan 16, 2025' },
  10: { price: 780, itemNumber: 'LMP-PEN-010', leadTime: '2-3 weeks', shipDate: 'Jan 14, 2025' },
  11: { price: 320, itemNumber: 'LMP-MIN-011', leadTime: 'In Stock', shipDate: 'Dec 23, 2024' },
  12: { price: 2450, itemNumber: 'LMP-STU-012', leadTime: '4-6 weeks', shipDate: 'Feb 1, 2025' },
  13: { price: 1350, itemNumber: 'LMP-SPT-013', leadTime: '3-4 weeks', shipDate: 'Jan 25, 2025' },
  14: { price: 620, itemNumber: 'LMP-FLX-014', leadTime: '1-2 weeks', shipDate: 'Jan 9, 2025' },
  15: { price: 980, itemNumber: 'LMP-RNG-015', leadTime: '2-3 weeks', shipDate: 'Jan 17, 2025' },
};

/**
 * ProductDetailPage 컴포넌트
 *
 * URL 파라미터로 제품 ID를 받아 해당 제품의 상세 페이지를 표시.
 *
 * 동작 방식:
 * 1. useParams로 URL의 productId 파라미터 추출
 * 2. products 배열에서 해당 id를 가진 제품 검색
 * 3. 제품을 찾지 못하면 루트 경로로 리다이렉트
 * 4. 제품을 찾으면 ProductDetailSection에 제품 데이터와 메타정보 전달
 * 5. CartProvider로 전체 페이지를 감싸서 장바구니 상태 제공
 *
 * Props:
 * - 없음 (URL 파라미터 사용)
 *
 * Example usage:
 * // React Router 설정에서
 * <Route path="/product/:productId" element={<ProductDetailPage />} />
 *
 * // URL 예시
 * /product/1  → Lumen Desk Pro 페이지
 * /product/12 → Lumen Studio 페이지
 */
export function ProductDetailPage() {
  const { productId } = useParams();

  // URL 파라미터를 숫자로 변환
  const id = parseInt(productId, 10);

  // products 배열에서 해당 제품 찾기
  const product = products.find((p) => p.id === id);

  // 제품을 찾지 못하면 루트로 리다이렉트
  if (!product) {
    return <Navigate to="/" replace />;
  }

  // 제품 메타데이터 가져오기
  const meta = PRODUCT_META[id] || {
    price: 800,
    itemNumber: `LMP-${String(id).padStart(3, '0')}`,
    leadTime: '2-3 weeks',
    shipDate: 'Jan 15, 2025',
  };

  return (
    <CartProvider>
      <ProductDetailSection
        product={product}
        price={meta.price}
        itemNumber={meta.itemNumber}
        leadTime={meta.leadTime}
        shipDate={meta.shipDate}
      />
    </CartProvider>
  );
}
