import { createContext, useContext, useState } from 'react';

/**
 * CartContext
 *
 * 장바구니 상태를 관리하는 Context.
 * 장바구니 아이템 추가, 수량 변경, 삭제 기능을 제공한다.
 */
const CartContext = createContext(null);

/**
 * CartProvider 컴포넌트
 *
 * 장바구니 상태를 제공하는 Provider.
 *
 * Props:
 * @param {node} children - 자식 컴포넌트
 */
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  /**
   * 장바구니에 아이템 추가
   * @param {object} item - 추가할 아이템 { id, image, title, options, price, quantity }
   */
  const addItem = (item) => {
    setItems((prev) => {
      // 동일한 id와 options를 가진 아이템이 있는지 확인
      const existingItemIndex = prev.findIndex(
        (i) =>
          i.id === item.id &&
          JSON.stringify(i.options) === JSON.stringify(item.options)
      );

      if (existingItemIndex >= 0) {
        // 기존 아이템의 수량 증가
        const updated = [...prev];
        updated[existingItemIndex] = {
          ...updated[existingItemIndex],
          quantity: updated[existingItemIndex].quantity + item.quantity,
        };
        return updated;
      }

      // 새 아이템 추가
      return [...prev, { ...item, id: `${item.id}-${Date.now()}` }];
    });
  };

  /**
   * 아이템 수량 변경
   * @param {string} itemId - 아이템 ID
   * @param {number} newQuantity - 새 수량
   */
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  /**
   * 아이템 제거
   * @param {string} itemId - 아이템 ID
   */
  const removeItem = (itemId) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  /**
   * 장바구니 비우기
   */
  const clearCart = () => {
    setItems([]);
  };

  /**
   * 장바구니 drawer 열기/닫기
   */
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  /**
   * 장바구니 통계
   */
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0; // 무료 배송
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    items,
    itemCount,
    subtotal,
    shipping,
    tax,
    total,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    isCartOpen,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * useCart 훅
 *
 * 장바구니 상태에 접근하기 위한 커스텀 훅.
 *
 * Returns:
 * @returns {object} {
 *   items: Array,
 *   itemCount: number,
 *   subtotal: number,
 *   shipping: number,
 *   tax: number,
 *   total: number,
 *   addItem: function,
 *   updateQuantity: function,
 *   removeItem: function,
 *   clearCart: function,
 *   isCartOpen: boolean,
 *   openCart: function,
 *   closeCart: function,
 * }
 *
 * Example usage:
 * const { addItem, openCart, items } = useCart();
 * addItem({ id: '1', image: '/img.jpg', title: 'Product', price: 100, quantity: 1 });
 * openCart();
 */
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
}
