import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { CartHeader } from './CartHeader';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { CartCheckoutButton } from './CartCheckoutButton';

/**
 * CartDrawer 컴포넌트
 *
 * 오른쪽에서 슬라이드 인/아웃되는 장바구니 패널.
 * 헤더, 스크롤 가능한 아이템 리스트, 요약 및 체크아웃 버튼으로 구성.
 *
 * 동작 방식:
 * 1. open prop으로 drawer 표시/숨김 제어
 * 2. 상단에 CartHeader (닫기 버튼 포함)
 * 3. 중간에 스크롤 가능한 CartItem 리스트
 * 4. 하단에 고정된 CartSummary + CartCheckoutButton
 * 5. onClose로 닫기 동작 처리
 * 6. onCheckout으로 체크아웃 동작 처리
 *
 * Props:
 * @param {boolean} open - Drawer 열림/닫힘 상태 [Required]
 * @param {function} onClose - 닫기 핸들러 [Required]
 * @param {Array<Object>} items - 장바구니 아이템 목록 [Optional, 기본값: []]
 * @param {number} subtotal - 소계 [Optional, 기본값: 0]
 * @param {number} shipping - 배송비 [Optional, 기본값: 0]
 * @param {number} tax - 세금 [Optional, 기본값: 0]
 * @param {number} total - 총액 [Optional, 기본값: 0]
 * @param {function} onQuantityChange - 수량 변경 핸들러 (itemId, newQuantity) => void [Optional]
 * @param {function} onRemoveItem - 아이템 제거 핸들러 (itemId) => void [Optional]
 * @param {function} onCheckout - 체크아웃 핸들러 [Optional]
 * @param {number} width - Drawer 너비 [Optional, 기본값: 480]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CartDrawer
 *   open={isCartOpen}
 *   onClose={() => setCartOpen(false)}
 *   items={cartItems}
 *   subtotal={2550}
 *   shipping={0}
 *   tax={204}
 *   total={2754}
 *   onQuantityChange={(id, qty) => updateQuantity(id, qty)}
 *   onRemoveItem={(id) => removeItem(id)}
 *   onCheckout={handleCheckout}
 * />
 */
export function CartDrawer({
  open,
  onClose,
  items = [],
  subtotal = 0,
  shipping = 0,
  tax = 0,
  total = 0,
  onQuantityChange,
  onRemoveItem,
  onCheckout,
  width = 480,
  sx,
  ...props
}) {
  const isEmpty = items.length === 0;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: {
            xs: '100%',
            sm: width,
          },
          maxWidth: '100%',
          borderRadius: 0,
          boxShadow: 'none',
          ...sx,
        },
      }}
      {...props}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.paper',
        }}
      >
        {/* 헤더 (고정) */}
        <CartHeader onClose={onClose} showBorder />

        {/* 아이템 리스트 (스크롤) */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          {isEmpty ? (
            // 빈 장바구니 메시지
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                p: 4,
                textAlign: 'center',
              }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 1,
                }}
              >
                Your cart is empty
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  fontSize: 13,
                }}
              >
                Add items to get started
              </Typography>
            </Box>
          ) : (
            // 아이템 목록
            items.map((item) => (
              <CartItem
                key={item.id}
                image={item.image}
                title={item.title}
                options={item.options}
                price={item.price}
                quantity={item.quantity}
                onQuantityChange={
                  onQuantityChange
                    ? (newQuantity) => onQuantityChange(item.id, newQuantity)
                    : undefined
                }
                onRemove={
                  onRemoveItem ? () => onRemoveItem(item.id) : undefined
                }
              />
            ))
          )}
        </Box>

        {/* 하단: 요약 + 체크아웃 버튼 (고정) */}
        {!isEmpty && (
          <Box
            sx={{
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <CartSummary label="Subtotal" amount={subtotal} />
            <CartSummary label="Shipping" amount={shipping} />
            <CartSummary label="Tax" amount={tax} />
            <Divider />
            <CartSummary
              label="Total"
              amount={total}
              variant="emphasized"
            />
            <CartCheckoutButton
              onClick={onCheckout}
              disabled={isEmpty}
            />
          </Box>
        )}
      </Box>
    </Drawer>
  );
}
