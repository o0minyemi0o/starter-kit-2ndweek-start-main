import { ProductSpecCard } from './ProductSpecCard';
import Grid from '@mui/material/Grid';
import { LineGrid } from '../layout';
import {
  Sun,
  Moon,
  Lightbulb,
  LampDesk,
  Thermometer,
  Zap,
} from 'lucide-react';

export default {
  title: 'Custom Component/ProductSpecCard',
  component: ProductSpecCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ProductSpecCard

제품 스펙을 아이콘 + 라벨 + 값 형태로 세로 배치하여 표시하는 컴포넌트입니다.

### 용도
- LineGrid 내부에서 기술 데이터를 정돈된 형태로 표시
- 제품 상세 페이지의 스펙 섹션
- 비교 테이블의 데이터 셀

### 특징
- lucide-react 아이콘으로 시각적 앵커 제공
- caption 라벨로 컨텍스트 명시
- monospace 값으로 기술 정보 강조
- 최소한의 장식으로 정보에 집중
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: false,
      description: 'lucide-react 아이콘 컴포넌트',
      table: {
        type: { summary: 'React.ComponentType' },
      },
    },
    label: {
      control: 'text',
      description: '스펙 항목명 (예: "Luminosity", "Color Temp")',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: '스펙 값 (예: "260 lx", "3200 K")',
      table: {
        type: { summary: 'string | number' },
      },
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: '레이아웃 방향',
      table: {
        type: { summary: "'vertical' | 'horizontal'" },
        defaultValue: { summary: "'vertical'" },
      },
    },
    iconSize: {
      control: { type: 'number', min: 16, max: 64, step: 4 },
      description: '아이콘 크기 (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 32 },
      },
    },
    iconStrokeWidth: {
      control: { type: 'number', min: 1, max: 3, step: 0.5 },
      description: '아이콘 선 두께',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1.5 },
      },
    },
    iconColor: {
      control: 'color',
      description: '아이콘 색상 (기본: theme text.primary)',
      table: {
        type: { summary: 'string' },
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

/** 기본 사용 예시 */
export const Default = {
  args: {
    icon: Sun,
    label: 'Luminosity',
    value: '260 lx',
    iconSize: 32,
    iconStrokeWidth: 1.5,
  },
};

/** LineGrid 내부 배치 */
export const InLineGrid = {
  name: 'LineGrid 내부 사용',
  render: () => (
    <LineGrid container gap={0} sx={{ width: 600, height: 200 }}>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Sun}
          label="Luminosity"
          value="260 lx"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Lightbulb}
          label="Color Temp"
          value="3200 K"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Zap}
          label="Power"
          value="12 W"
        />
      </Grid>
    </LineGrid>
  ),
};

/** 다양한 아이콘 */
export const IconVariants = {
  name: '아이콘 변형',
  render: () => (
    <LineGrid container gap={0} sx={{ width: 800, height: 300 }}>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Sun}
          label="Day Mode"
          value="480 lx · 4400 K"
          iconColor="#FFC66E"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Moon}
          label="Night Mode"
          value="120 lx · 2700 K"
          iconColor="#9C958B"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={LampDesk}
          label="Type"
          value="Desk"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Thermometer}
          label="Operating Temp"
          value="-10 ~ 40°C"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Zap}
          label="Power"
          value="12 W"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Lightbulb}
          label="Lifespan"
          value="50,000 hrs"
        />
      </Grid>
    </LineGrid>
  ),
};

/** 크기 변형 */
export const SizeVariants = {
  name: '크기 변형',
  render: () => (
    <LineGrid container gap={0} sx={{ width: 600, height: 200 }}>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Sun}
          label="Small"
          value="24px"
          iconSize={24}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Sun}
          label="Medium"
          value="32px"
          iconSize={32}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Sun}
          label="Large"
          value="48px"
          iconSize={48}
        />
      </Grid>
    </LineGrid>
  ),
};

/** 가로 배치 */
export const HorizontalOrientation = {
  name: '가로 배치',
  render: () => (
    <LineGrid container gap={0} sx={{ width: 800, height: 200 }}>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={LampDesk}
          label="Type"
          value="Desk"
          orientation="horizontal"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Sun}
          label="Lux"
          value="480 lx"
          orientation="horizontal"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <ProductSpecCard
          icon={Thermometer}
          label="Kelvin"
          value="4400 K"
          orientation="horizontal"
        />
      </Grid>
    </LineGrid>
  ),
};
