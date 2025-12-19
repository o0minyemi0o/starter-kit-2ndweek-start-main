import { SectionContainer } from '../components/container';
import { ProductDetailTemplate } from '../templates';
import { CartDrawer } from '../components/cart';
import { useCart } from '../contexts';

/**
 * ProductDetailSection 컴포넌트
 *
 * 제품 상세 섹션으로, ProductDetailTemplate과 CartDrawer를 통합한 완전한 제품 페이지.
 * useCart 훅으로 장바구니 상태를 연동하고, 장바구니 추가 시 drawer를 자동으로 연다.
 *
 * 동작 방식:
 * 1. ProductDetailTemplate로 제품 정보 및 옵션 표시
 * 2. Add to Cart 클릭 시:
 *    - useCart.addItem()으로 장바구니에 추가
 *    - useCart.openCart()로 CartDrawer 자동 열기
 * 3. CartDrawer로 장바구니 내용 표시 및 관리
 * 4. SectionContainer로 감싸서 페이지 섹션으로 구성
 *
 * Props:
 * @param {object} product - 제품 데이터 { id, title, description, type, lux, kelvin, images } [Required]
 * @param {number} price - 제품 가격 [Required]
 * @param {string} itemNumber - 제품 품번 [Required]
 * @param {string} leadTime - 리드타임 [Required]
 * @param {string} shipDate - 배송 예정일 [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <CartProvider>
 *   <ProductDetailSection
 *     product={{
 *       id: 1,
 *       title: 'Lumen Desk Pro',
 *       description: '집중이 필요한 책상 위를 위한 조명입니다...',
 *       type: 'Desk',
 *       lux: 480,
 *       kelvin: 4400,
 *       images: [dayImage, nightImage],
 *     }}
 *     price={850}
 *     itemNumber="LMP-DSK-001"
 *     leadTime="2-3 weeks"
 *     shipDate="Jan 15, 2025"
 *   />
 * </CartProvider>
 */
export function ProductDetailSection({
  product,
  price,
  itemNumber,
  leadTime,
  shipDate,
  sx,
  ...props
}) {
  const {
    addItem,
    openCart,
    closeCart,
    isCartOpen,
    items,
    subtotal,
    shipping,
    tax,
    total,
    updateQuantity,
    removeItem,
  } = useCart();

  /**
   * 장바구니 추가 핸들러
   * @param {number} quantity - 수량
   * @param {object} selectedOptions - 선택된 옵션 { glassFinish, hardware, height }
   */
  const handleAddToCart = (quantity, selectedOptions) => {
    // 장바구니 아이템 데이터 구성
    const cartItem = {
      id: product.id,
      image: product.images[0],
      title: product.title,
      options: [
        selectedOptions.glassFinish && {
          label: 'Glass Finish',
          value: selectedOptions.glassFinish,
        },
        selectedOptions.hardware && {
          label: 'Hardware',
          value: selectedOptions.hardware,
        },
        selectedOptions.height && {
          label: 'Height',
          value: selectedOptions.height,
        },
      ].filter(Boolean),
      price,
      quantity,
    };

    // 장바구니에 추가
    addItem(cartItem);

    // CartDrawer 자동 열기
    openCart();
  };

  /**
   * 체크아웃 핸들러
   */
  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // 실제 구현에서는 라우팅으로 체크아웃 페이지로 이동
  };

  return (
    <>
      <SectionContainer spacing={0} sx={sx} {...props}>
        <ProductDetailTemplate
          product={product}
          price={price}
          itemNumber={itemNumber}
          leadTime={leadTime}
          shipDate={shipDate}
          onAddToCart={handleAddToCart}
        />
      </SectionContainer>

      {/* CartDrawer */}
      <CartDrawer
        open={isCartOpen}
        onClose={closeCart}
        items={items}
        subtotal={subtotal}
        shipping={shipping}
        tax={tax}
        total={total}
        onQuantityChange={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />
    </>
  );
}
