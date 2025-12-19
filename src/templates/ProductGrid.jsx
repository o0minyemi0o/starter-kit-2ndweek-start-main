import Grid from '@mui/material/Grid';
import { ProductCard } from '../components/card/ProductCard';

/**
 * ProductGrid 템플릿
 *
 * 제품 목록을 그리드 레이아웃으로 표시하는 템플릿.
 * ProductCard 컴포넌트를 그리드 형태로 배치한다.
 *
 * 동작 방식:
 * 1. products 배열을 순회하며 ProductCard 생성
 * 2. 무조건 4열 고정 그리드 레이아웃 (size={3})
 *    - Grid container 최소 너비 600px
 *    - 작은 화면에서는 가로 스크롤 발생
 * 3. timeline 값에 따라 모든 카드의 이미지가 동시에 블렌딩
 * 4. onProductClick 핸들러로 개별 제품 클릭 처리
 *
 * Props:
 * @param {Array} products - 제품 데이터 배열 [{ id, title, type, lux, kelvin, images }] [Required]
 * @param {number} timeline - 블렌딩 값 (0~1) [Optional, 기본값: 0]
 * @param {function} onProductClick - 제품 클릭 핸들러 (productId) => void [Optional]
 * @param {object} spacing - Grid spacing 값 [Optional, 기본값: 2]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductGrid
 *   products={products}
 *   timeline={0.5}
 *   onProductClick={(id) => navigate(`/product/${id}`)}
 * />
 */
export function ProductGrid({
  products = [],
  timeline = 0,
  onProductClick,
  spacing = 2,
  sx,
  ...props
}) {
  if (products.length === 0) {
    return null;
  }

  return (
    <Grid container spacing={spacing} sx={{ minWidth: 600, ...sx }} {...props}>
      {products.map((product) => (
        <Grid key={product.id} size={3}>
          <ProductCard
            title={product.title}
            type={product.type}
            lux={product.lux}
            kelvin={product.kelvin}
            images={product.images}
            timeline={timeline}
            onClick={onProductClick ? () => onProductClick(product.id) : undefined}
          />
        </Grid>
      ))}
    </Grid>
  );
}
