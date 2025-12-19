import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * CartSummary 컴포넌트
 *
 * 장바구니의 가격 요약 정보를 표시하는 컴포넌트.
 * 라벨(좌측)과 금액(우측)을 flexbox로 배치한다.
 *
 * 동작 방식:
 * 1. 좌측에 라벨 텍스트 표시 (예: "Subtotal", "Shipping", "Total")
 * 2. 우측에 금액 표시 (monospace 폰트)
 * 3. variant prop으로 스타일 변형 (default, emphasized)
 * 4. showBorder로 상단 구분선 표시 (선택적)
 *
 * Props:
 * @param {string} label - 좌측 라벨 텍스트 [Required]
 * @param {number} amount - 금액 [Required]
 * @param {string} variant - 스타일 변형 'default' | 'emphasized' [Optional, 기본값: 'default']
 * @param {boolean} showBorder - 상단 구분선 표시 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CartSummary label="Subtotal" amount={2550} />
 * <CartSummary label="Shipping" amount={0} />
 * <CartSummary label="Total" amount={2550} variant="emphasized" showBorder />
 */
export function CartSummary({
  label,
  amount,
  variant = 'default',
  showBorder = false,
  sx,
  ...props
}) {
  const isEmphasized = variant === 'emphasized';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2,
        px: 3,
        ...(showBorder && {
          borderTop: '1px solid',
          borderColor: 'divider',
        }),
        ...sx,
      }}
      {...props}
    >
      {/* 좌측: 라벨 */}
      <Typography
        variant={isEmphasized ? 'subtitle1' : 'body2'}
        sx={{
          fontWeight: isEmphasized ? 700 : 400,
          color: isEmphasized ? 'text.primary' : 'text.secondary',
        }}
      >
        {label}
      </Typography>

      {/* 우측: 금액 */}
      <Typography
        variant={isEmphasized ? 'h6' : 'body2'}
        sx={{
          fontFamily: 'monospace',
          fontWeight: isEmphasized ? 700 : 500,
          letterSpacing: '0.02em',
        }}
      >
        ${amount.toLocaleString()}
      </Typography>
    </Box>
  );
}
