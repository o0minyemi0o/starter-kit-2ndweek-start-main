import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { PRODUCT_TYPES } from '../../data/products';

/**
 * ProductFilter 컴포넌트
 *
 * 제품 타입별 필터링을 위한 세로 탭 컴포넌트.
 * All/Ceiling/Stand/Wall/Desk 필터를 제공한다.
 *
 * 동작 방식:
 * 1. 세로 탭 형태로 제품 타입 필터 표시
 * 2. "All" 탭 + PRODUCT_TYPES의 각 타입
 * 3. 선택된 필터 값을 onChange 콜백으로 전달
 * 4. value가 'all'이면 전체 제품, 아니면 해당 타입만 필터링
 *
 * Props:
 * @param {string} value - 현재 선택된 필터 값 ('all' | 'ceiling' | 'stand' | 'wall' | 'desk') [Optional, 기본값: 'all']
 * @param {function} onChange - 필터 변경 핸들러 (value) => void [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * const [filter, setFilter] = useState('all');
 * <ProductFilter value={filter} onChange={setFilter} />
 */
export function ProductFilter({
  value = 'all',
  onChange,
  sx,
  ...props
}) {
  /**
   * 탭 변경 핸들러
   */
  const handleChange = (event, newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  /**
   * 필터 옵션 생성
   * - "All" 탭 + PRODUCT_TYPES의 각 타입
   */
  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: PRODUCT_TYPES.CEILING, label: 'Ceiling' },
    { value: PRODUCT_TYPES.STAND, label: 'Stand' },
    { value: PRODUCT_TYPES.WALL, label: 'Wall' },
    { value: PRODUCT_TYPES.DESK, label: 'Desk' },
  ];

  return (
    <Box sx={sx} {...props}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: {
            left: 0,
            right: 'auto',
            backgroundColor: 'text.primary',
          },
        }}
        sx={{
          minWidth: 120,
        }}
      >
        {filterOptions.map((option) => (
          <Tab
            key={option.value}
            label={option.label}
            value={option.value}
            sx={{
              alignItems: 'flex-start',
              textAlign: 'left',
              minHeight: 48,
              color: 'text.secondary',
              '&.Mui-selected': {
                color: 'text.primary',
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
