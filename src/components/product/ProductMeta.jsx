import Box from '@mui/material/Box';
import { UnderlineInput } from '../shared';

/**
 * ProductMeta 컴포넌트
 *
 * 제품의 메타 정보를 표시하는 컴포넌트.
 * 품번, 리드타임, 배송일을 readOnly UnderlineInput으로 표시한다.
 *
 * 동작 방식:
 * 1. itemNumber (품번)를 라벨 "Item Number"로 표시
 * 2. leadTime (리드타임)을 라벨 "Lead Time"으로 표시
 * 3. shipDate (배송 예정일)를 라벨 "Ships By"로 표시
 * 4. 모든 필드는 readOnly로 표시 (수정 불가)
 * 5. UnderlineInput의 밑줄 스타일로 깔끔한 표시
 *
 * Props:
 * @param {string} itemNumber - 제품 품번 [Required]
 * @param {string} leadTime - 리드타임 (예: "2-3 weeks") [Required]
 * @param {string} shipDate - 배송 예정일 (예: "Jan 15, 2025") [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductMeta
 *   itemNumber="LMP-DSK-001"
 *   leadTime="2-3 weeks"
 *   shipDate="Jan 15, 2025"
 * />
 */
export function ProductMeta({
  itemNumber,
  leadTime,
  shipDate,
  sx,
  ...props
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        ...sx,
      }}
      {...props}
    >
      {/* 품번 */}
      <UnderlineInput
        label="Item Number"
        value={itemNumber}
        readOnly
      />

      {/* 리드타임 */}
      <UnderlineInput
        label="Lead Time"
        value={leadTime}
        readOnly
      />

      {/* 배송 예정일 */}
      <UnderlineInput
        label="Ships By"
        value={shipDate}
        readOnly
      />
    </Box>
  );
}
