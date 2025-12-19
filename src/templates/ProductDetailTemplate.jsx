import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { SplitScreen } from '../components/layout';
import { ProductImageViewer } from '../components/product';
import { ProductHeroTemplate } from './ProductHeroTemplate';
import { ProductInfoTemplate } from './ProductInfoTemplate';
import { TimelineProvider } from '../contexts/TimelineContext';

/**
 * ProductDetailTemplate 컴포넌트
 *
 * 제품 상세 페이지의 전체 레이아웃 템플릿.
 * SplitScreen으로 좌우 분할하여 이미지와 정보를 표시한다.
 *
 * 동작 방식:
 * 1. SplitScreen 좌측: ProductImageViewer (낮/밤 이미지 블렌딩)
 * 2. SplitScreen 우측: Stack으로 세로 배치
 *    - ProductHeroTemplate (제품명, 설명, 스펙)
 *    - Divider
 *    - ProductInfoTemplate (메타, 옵션, 액션)
 * 3. md 이하에서 세로 스택 (stackOrder="reverse"로 이미지가 하단)
 *
 * Props:
 * @param {object} product - 제품 데이터 { title, description, type, lux, kelvin, images } [Required]
 * @param {number} price - 제품 가격 [Required]
 * @param {string} itemNumber - 제품 품번 [Required]
 * @param {string} leadTime - 리드타임 [Required]
 * @param {string} shipDate - 배송 예정일 [Required]
 * @param {function} onAddToCart - 장바구니 추가 핸들러 [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ProductDetailTemplate
 *   product={{
 *     title: 'Lumen Desk Pro',
 *     description: '집중이 필요한 책상 위를 위한 조명입니다...',
 *     type: 'Desk',
 *     lux: 480,
 *     kelvin: 4400,
 *     images: [dayImage, nightImage],
 *   }}
 *   price={850}
 *   itemNumber="LMP-DSK-001"
 *   leadTime="2-3 weeks"
 *   shipDate="Jan 15, 2025"
 *   onAddToCart={(quantity, options) => addToCart(quantity, options)}
 * />
 */
export function ProductDetailTemplate({
  product,
  price,
  itemNumber,
  leadTime,
  shipDate,
  onAddToCart,
  sx,
  ...props
}) {
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
    if (onAddToCart) {
      onAddToCart(quantity, selectedOptions);
    }
  };

  // ProductImageViewer용 specs 배열 생성
  // timeline 값에 따라 lux·K 변화 시뮬레이션
  const imageSpecs = [
    { timeline: 0, lux: product.lux, kelvin: product.kelvin },              // 낮
    { timeline: 0.33, lux: Math.round(product.lux * 0.7), kelvin: Math.round(product.kelvin * 0.85) }, // 오후
    { timeline: 0.67, lux: Math.round(product.lux * 0.4), kelvin: Math.round(product.kelvin * 0.75) }, // 저녁
    { timeline: 1.0, lux: Math.round(product.lux * 0.25), kelvin: Math.round(product.kelvin * 0.65) }, // 밤
  ];

  return (
    <TimelineProvider initialTimeline={0}>
      <SplitScreen
        ratio="50:50"
        stackAt="md"
        stackOrder="reverse"
        gap={0}
        left={
          // 좌측: ProductImageViewer
          <ProductImageViewer
            dayImage={product.images[0]}
            nightImage={product.images[1]}
            specs={imageSpecs}
            aspectRatio="1/1"
            showSlider
          />
        }
        right={
          // 우측: ProductHeroTemplate + ProductInfoTemplate
          <Stack
            spacing={{ xs: 4, md: 6 }}
            sx={{
              p: { xs: 4, md: 6, lg: 8 },
              height: '100%',
            }}
          >
            {/* 제품 히어로 (제품명, 설명, 스펙) */}
            <ProductHeroTemplate
              title={product.title}
              description={product.description}
              specs={{
                type: product.type,
                lux: product.lux,
                kelvin: product.kelvin,
              }}
            />

            <Divider />

            {/* 제품 정보 (메타, 옵션, 액션) */}
            <ProductInfoTemplate
              itemNumber={itemNumber}
              leadTime={leadTime}
              shipDate={shipDate}
              selectedOptions={selectedOptions}
              onOptionChange={handleOptionChange}
              quantity={quantity}
              onQuantityChange={setQuantity}
              price={price}
              onAddToCart={handleAddToCart}
            />
          </Stack>
        }
        sx={sx}
        {...props}
      />
    </TimelineProvider>
  );
}
