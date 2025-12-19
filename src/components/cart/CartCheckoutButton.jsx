import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

/**
 * CartCheckoutButton 컴포넌트
 *
 * 장바구니의 체크아웃 버튼을 표시하는 컴포넌트.
 * 전체 너비의 contained 버튼으로, secondary.main 배경색을 사용한다.
 *
 * 동작 방식:
 * 1. 전체 너비를 차지하는 버튼 표시
 * 2. onClick 핸들러로 체크아웃 동작 처리
 * 3. disabled 상태 지원 (선택적)
 * 4. 패딩으로 터치 영역 확보
 *
 * Props:
 * @param {string} label - 버튼 텍스트 [Optional, 기본값: 'Proceed to Checkout']
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {boolean} disabled - 비활성화 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CartCheckoutButton onClick={handleCheckout} />
 * <CartCheckoutButton label="Complete Order" disabled={cartEmpty} />
 */
export function CartCheckoutButton({
  label = 'Proceed to Checkout',
  onClick,
  disabled = false,
  sx,
  ...props
}) {
  return (
    <Box
      sx={{
        p: 3,
        ...sx,
      }}
      {...props}
    >
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        disabled={disabled}
        onClick={onClick}
        sx={{
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
        {label}
      </Button>
    </Box>
  );
}
