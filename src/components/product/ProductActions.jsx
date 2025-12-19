import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { QuantitySelector } from '../shared';

/**
 * ProductActions 컴포넌트
 *
 * 제품 구매 액션 영역을 표시하는 컴포넌트.
 * 수량 선택, 총 가격, Add to Cart 버튼을 가로로 배치한다.
 *
 * 동작 방식:
 * 1. 좌측: 수량 선택 (QuantitySelector)
 * 2. 중앙: 총 가격 표시 (monospace)
 * 3. 우측: Add to Cart 버튼 (secondary contained)
 * 4. 가로 flexbox 배치, alignItems center
 *
 * Props:
 * @param {number} quantity - 선택된 수량 [Required]
 * @param {function} onQuantityChange - 수량 변경 핸들러 (newQuantity) => void [Required]
 * @param {number} price - 개당 가격 [Required]
 * @param {function} onAddToCart - 장바구니 추가 핸들러 [Required]
 * @param {number} min - 최소 수량 [Optional, 기본값: 1]
 * @param {number} max - 최대 수량 [Optional, 기본값: 99]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductActions
 *   quantity={2}
 *   onQuantityChange={setQuantity}
 *   price={850}
 *   onAddToCart={handleAddToCart}
 * />
 */
export function ProductActions({
  quantity,
  onQuantityChange,
  price,
  onAddToCart,
  min = 1,
  max = 99,
  sx,
  ...props
}) {
  const totalPrice = price * quantity;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        ...sx,
      }}
      {...props}
    >
      {/* 수량 선택 */}
      <QuantitySelector
        value={quantity}
        onChange={onQuantityChange}
        min={min}
        max={max}
        size="medium"
      />

      {/* 총 가격 */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 600,
          letterSpacing: '0.02em',
          minWidth: 120,
        }}
      >
        ${totalPrice.toLocaleString()}
      </Typography>

      {/* Add to Cart 버튼 */}
      <Button
        variant="contained"
        color="secondary"
        onClick={onAddToCart}
        sx={{
          flex: 1,
          py: 1.5,
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          borderRadius: 0,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
          },
        }}
      >
        Add to Cart
      </Button>
    </Box>
  );
}
