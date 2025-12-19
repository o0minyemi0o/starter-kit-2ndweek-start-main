import { useState } from 'react';
import { ProductInfoTemplate } from './ProductInfoTemplate';
import Box from '@mui/material/Box';

export default {
  title: 'Template/ProductInfoTemplate',
  component: ProductInfoTemplate,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## ProductInfoTemplate

제품 상세 페이지의 정보 영역 템플릿입니다.

### 용도
- 제품 상세 페이지 우측 정보 영역
- 제품 주문 인터페이스
- 커스터마이징 폼

### 특징
- ProductMeta: 품번, 리드타임, 배송일
- ProductOptions: Glass Finish, Hardware, Height
- ProductActions: 수량, 가격, Add to Cart
- Divider로 섹션 구분
- 세로 배치 (gap: 4-5)
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: 600, p: 4 }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    itemNumber: {
      control: 'text',
      description: '제품 품번',
      table: {
        type: { summary: 'string' },
      },
    },
    leadTime: {
      control: 'text',
      description: '리드타임',
      table: {
        type: { summary: 'string' },
      },
    },
    shipDate: {
      control: 'text',
      description: '배송 예정일',
      table: {
        type: { summary: 'string' },
      },
    },
    selectedOptions: {
      control: 'object',
      description: '선택된 옵션 { glassFinish, hardware, height }',
      table: {
        type: { summary: 'object' },
      },
    },
    onOptionChange: {
      action: 'option changed',
      description: '옵션 변경 핸들러 (optionType, value) => void',
      table: {
        type: { summary: 'function' },
      },
    },
    quantity: {
      control: { type: 'number', min: 1, max: 99 },
      description: '수량',
      table: {
        type: { summary: 'number' },
      },
    },
    onQuantityChange: {
      action: 'quantity changed',
      description: '수량 변경 핸들러 (newQuantity) => void',
      table: {
        type: { summary: 'function' },
      },
    },
    price: {
      control: 'number',
      description: '개당 가격',
      table: {
        type: { summary: 'number' },
      },
    },
    onAddToCart: {
      action: 'added to cart',
      description: '장바구니 추가 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
    sx: {
      control: 'object',
      description: '추가 MUI sx prop 스타일',
      table: {
        type: { summary: 'object' },
      },
    },
  },
};

/** 기본 사용 예시 (인터랙티브) */
export const Default = {
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState({
      glassFinish: '',
      hardware: '',
      height: '',
    });
    const [quantity, setQuantity] = useState(1);

    const handleOptionChange = (type, value) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [type]: value,
      }));
    };

    const handleAddToCart = () => {
      alert(`Added ${quantity} item(s) to cart with options:\n${JSON.stringify(selectedOptions, null, 2)}`);
    };

    return (
      <ProductInfoTemplate
        itemNumber="LMP-DSK-001"
        leadTime="2-3 weeks"
        shipDate="Jan 15, 2025"
        selectedOptions={selectedOptions}
        onOptionChange={handleOptionChange}
        quantity={quantity}
        onQuantityChange={setQuantity}
        price={850}
        onAddToCart={handleAddToCart}
      />
    );
  },
};

/** 기본값 설정됨 */
export const WithDefaultValues = {
  name: '기본값 설정됨',
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState({
      glassFinish: 'opaline',
      hardware: 'patina-brass',
      height: '36-48',
    });
    const [quantity, setQuantity] = useState(2);

    const handleOptionChange = (type, value) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [type]: value,
      }));
    };

    const handleAddToCart = () => {
      alert(`Added ${quantity} item(s) to cart with options:\n${JSON.stringify(selectedOptions, null, 2)}`);
    };

    return (
      <ProductInfoTemplate
        itemNumber="LMP-DSK-001"
        leadTime="2-3 weeks"
        shipDate="Jan 15, 2025"
        selectedOptions={selectedOptions}
        onOptionChange={handleOptionChange}
        quantity={quantity}
        onQuantityChange={setQuantity}
        price={850}
        onAddToCart={handleAddToCart}
      />
    );
  },
};

/** 빠른 배송 */
export const FastShipping = {
  name: '빠른 배송',
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState({
      glassFinish: 'clear',
      hardware: 'chrome',
      height: '49-60',
    });
    const [quantity, setQuantity] = useState(1);

    const handleOptionChange = (type, value) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [type]: value,
      }));
    };

    const handleAddToCart = () => {
      alert(`Added ${quantity} item(s) to cart`);
    };

    return (
      <ProductInfoTemplate
        itemNumber="LMP-STD-002"
        leadTime="In Stock"
        shipDate="Dec 23, 2024"
        selectedOptions={selectedOptions}
        onOptionChange={handleOptionChange}
        quantity={quantity}
        onQuantityChange={setQuantity}
        price={680}
        onAddToCart={handleAddToCart}
      />
    );
  },
};

/** 높은 가격 제품 */
export const HighPriceProduct = {
  name: '높은 가격 제품',
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState({
      glassFinish: 'smoke',
      hardware: 'polished-brass',
      height: '73-84',
    });
    const [quantity, setQuantity] = useState(1);

    const handleOptionChange = (type, value) => {
      setSelectedOptions((prev) => ({
        ...prev,
        [type]: value,
      }));
    };

    const handleAddToCart = () => {
      alert(`Added ${quantity} item(s) to cart`);
    };

    return (
      <ProductInfoTemplate
        itemNumber="LMP-PRO-003"
        leadTime="4-6 weeks"
        shipDate="Feb 1, 2025"
        selectedOptions={selectedOptions}
        onOptionChange={handleOptionChange}
        quantity={quantity}
        onQuantityChange={setQuantity}
        price={2450}
        onAddToCart={handleAddToCart}
      />
    );
  },
};
