import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { QuantitySelector } from '../shared';

/**
 * CartItem 컴포넌트
 *
 * 장바구니의 개별 아이템을 표시하는 컴포넌트.
 * 썸네일, 제품명, 옵션, 가격, 수량 조절, Remove 버튼을 포함한다.
 *
 * 동작 방식:
 * 1. 좌측에 100x100 썸네일 이미지 표시
 * 2. 우측 영역에 제품 정보 배치:
 *    - 제품명 (subtitle1, fontWeight 600)
 *    - 옵션 목록 (caption, text.secondary)
 *    - 가격 (monospace)
 * 3. 하단에 QuantitySelector와 Remove 버튼 배치
 * 4. onQuantityChange로 수량 변경 처리
 * 5. onRemove로 아이템 삭제 처리
 *
 * Props:
 * @param {string} image - 제품 썸네일 이미지 URL [Required]
 * @param {string} title - 제품명 [Required]
 * @param {Array<{label: string, value: string}>} options - 옵션 목록 [Optional]
 * @param {number} price - 가격 [Required]
 * @param {number} quantity - 수량 [Required]
 * @param {function} onQuantityChange - 수량 변경 핸들러 (newQuantity) => void [Optional]
 * @param {function} onRemove - 삭제 버튼 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CartItem
 *   image="/product.jpg"
 *   title="Lumen Desk Pro"
 *   options={[
 *     { label: 'Finish', value: 'Patina Brass' },
 *     { label: 'Height', value: '36" - 48"' }
 *   ]}
 *   price={850}
 *   quantity={1}
 *   onQuantityChange={(qty) => updateQuantity(qty)}
 *   onRemove={() => removeItem()}
 * />
 */
export function CartItem({
  image,
  title,
  options = [],
  price,
  quantity,
  onQuantityChange,
  onRemove,
  sx,
  ...props
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        ...sx,
      }}
      {...props}
    >
      {/* 좌측: 썸네일 */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: 100,
          height: 100,
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />

      {/* 우측: 제품 정보 */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {/* 제품명 */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        {/* 옵션 목록 */}
        {options.length > 0 && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
            {options.map((option, index) => (
              <Typography
                key={index}
                variant="caption"
                color="text.secondary"
                sx={{
                  fontSize: 12,
                }}
              >
                {option.label}: {option.value}
              </Typography>
            ))}
          </Box>
        )}

        {/* 가격 */}
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 500,
            letterSpacing: '0.02em',
          }}
        >
          ${price.toLocaleString()}
        </Typography>

        {/* 하단: 수량 조절 + Remove 버튼 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 'auto',
            pt: 1,
          }}
        >
          {/* 수량 조절 */}
          <QuantitySelector
            value={quantity}
            onChange={onQuantityChange}
            size="small"
            min={1}
            max={99}
          />

          {/* Remove 버튼 */}
          {onRemove && (
            <ButtonBase
              onClick={onRemove}
              sx={{
                px: 1.5,
                py: 0.5,
                fontSize: 13,
                color: 'text.secondary',
                textDecoration: 'underline',
                textUnderlineOffset: 2,
                '&:hover': {
                  color: 'text.primary',
                },
              }}
            >
              Remove
            </ButtonBase>
          )}
        </Box>
      </Box>
    </Box>
  );
}
