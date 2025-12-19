import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

/**
 * CartHeader 컴포넌트
 *
 * 장바구니 drawer의 헤더 영역.
 * 좌측에 "Cart" 타이틀, 우측에 닫기 버튼을 배치한다.
 *
 * 동작 방식:
 * 1. 좌측에 Tiempos Headline 폰트로 "Cart" 타이틀 표시
 * 2. 우측에 X 아이콘 버튼 배치
 * 3. onClose 콜백으로 닫기 동작 처리
 * 4. 하단에 1px 구분선 표시 (선택적)
 * 5. Lumenstate 색상 팔레트 사용 (Warm Black, 3800K Accent)
 *
 * Props:
 * @param {function} onClose - 닫기 버튼 클릭 핸들러 [Optional]
 * @param {boolean} showBorder - 하단 구분선 표시 여부 [Optional, 기본값: true]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CartHeader onClose={handleClose} />
 */
export function CartHeader({
  onClose,
  showBorder = true,
  sx,
  ...props
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 2,
        ...(showBorder && {
          borderBottom: '1px solid',
          borderColor: 'divider',
        }),
        ...sx,
      }}
      {...props}
    >
      {/* 좌측: Cart 타이틀 */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          letterSpacing: '-0.02em',
        }}
      >
        Cart
      </Typography>

      {/* 우측: 닫기 버튼 */}
      {onClose && (
        <IconButton
          onClick={onClose}
          aria-label="Close cart"
          sx={{
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  );
}
