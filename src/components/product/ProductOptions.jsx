import Stack from '@mui/material/Stack';
import { UnderlineSelect } from '../shared';
import { PRODUCT_OPTIONS } from '../../data/products';

/**
 * ProductOptions 컴포넌트
 *
 * 제품 옵션 선택 영역을 표시하는 컴포넌트.
 * Glass Finish, Hardware, Height 옵션을 각각 UnderlineSelect로 표시한다.
 *
 * 동작 방식:
 * 1. Glass Finish 선택 (Clear, Frosted, Opaline, Amber, Smoke)
 * 2. Hardware 선택 (Patina Brass, Polished Brass, Brushed Nickel, Matte Black, Chrome)
 * 3. Height 선택 (36"-48", 49"-60", 61"-72", 73"-84", 85"-96")
 * 4. 각 옵션 변경 시 onOptionChange 호출
 * 5. Stack으로 세로 배치 (spacing: 3)
 *
 * Props:
 * @param {object} selectedOptions - 현재 선택된 옵션 { glassFinish, hardware, height } [Required]
 * @param {function} onOptionChange - 옵션 변경 핸들러 (optionType, value) => void [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductOptions
 *   selectedOptions={{
 *     glassFinish: 'opaline',
 *     hardware: 'patina-brass',
 *     height: '36-48',
 *   }}
 *   onOptionChange={(type, value) => {
 *     setSelectedOptions(prev => ({ ...prev, [type]: value }))
 *   }}
 * />
 */
export function ProductOptions({
  selectedOptions,
  onOptionChange,
  sx,
  ...props
}) {
  return (
    <Stack
      spacing={3}
      sx={{
        ...sx,
      }}
      {...props}
    >
      {/* Glass Finish */}
      <UnderlineSelect
        label="Glass Finish"
        value={selectedOptions.glassFinish || ''}
        onChange={(e) => onOptionChange('glassFinish', e.target.value)}
        options={PRODUCT_OPTIONS.glassFinish}
      />

      {/* Hardware */}
      <UnderlineSelect
        label="Hardware"
        value={selectedOptions.hardware || ''}
        onChange={(e) => onOptionChange('hardware', e.target.value)}
        options={PRODUCT_OPTIONS.hardware}
      />

      {/* Height */}
      <UnderlineSelect
        label="Height"
        value={selectedOptions.height || ''}
        onChange={(e) => onOptionChange('height', e.target.value)}
        options={PRODUCT_OPTIONS.height}
      />
    </Stack>
  );
}
