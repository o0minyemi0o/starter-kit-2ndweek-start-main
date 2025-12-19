import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ProductMeta, ProductOptions, ProductActions } from '../components/product';

/**
 * ProductInfoTemplate 컴포넌트
 *
 * 제품 상세 페이지의 정보 영역 템플릿.
 * 메타 정보, 옵션 선택, 액션 영역을 세로로 배치한다.
 *
 * 동작 방식:
 * 1. ProductMeta: 품번, 리드타임, 배송일 표시
 * 2. Divider: 섹션 구분선
 * 3. ProductOptions: Glass Finish, Hardware, Height 선택
 * 4. Divider: 섹션 구분선
 * 5. ProductActions: 수량 선택, 가격, Add to Cart 버튼
 *
 * Props:
 * @param {string} itemNumber - 제품 품번 [Required]
 * @param {string} leadTime - 리드타임 [Required]
 * @param {string} shipDate - 배송 예정일 [Required]
 * @param {object} selectedOptions - 선택된 옵션 { glassFinish, hardware, height } [Required]
 * @param {function} onOptionChange - 옵션 변경 핸들러 (optionType, value) => void [Required]
 * @param {number} quantity - 수량 [Required]
 * @param {function} onQuantityChange - 수량 변경 핸들러 (newQuantity) => void [Required]
 * @param {number} price - 개당 가격 [Required]
 * @param {function} onAddToCart - 장바구니 추가 핸들러 [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductInfoTemplate
 *   itemNumber="LMP-DSK-001"
 *   leadTime="2-3 weeks"
 *   shipDate="Jan 15, 2025"
 *   selectedOptions={{ glassFinish: 'opaline', hardware: 'patina-brass', height: '36-48' }}
 *   onOptionChange={(type, value) => setOptions(prev => ({ ...prev, [type]: value }))}
 *   quantity={1}
 *   onQuantityChange={setQuantity}
 *   price={850}
 *   onAddToCart={handleAddToCart}
 * />
 */
export function ProductInfoTemplate({
  itemNumber,
  leadTime,
  shipDate,
  selectedOptions,
  onOptionChange,
  quantity,
  onQuantityChange,
  price,
  onAddToCart,
  sx,
  ...props
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 4, md: 5 },
        ...sx,
      }}
      {...props}
    >
      {/* 메타 정보 */}
      <ProductMeta
        itemNumber={itemNumber}
        leadTime={leadTime}
        shipDate={shipDate}
      />

      <Divider />

      {/* 옵션 선택 */}
      <ProductOptions
        selectedOptions={selectedOptions}
        onOptionChange={onOptionChange}
      />

      <Divider />

      {/* 액션 영역 */}
      <ProductActions
        quantity={quantity}
        onQuantityChange={onQuantityChange}
        price={price}
        onAddToCart={onAddToCart}
      />
    </Box>
  );
}
