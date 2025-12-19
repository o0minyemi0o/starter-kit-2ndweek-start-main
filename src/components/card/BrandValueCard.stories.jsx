import Stack from '@mui/material/Stack';
import { BrandValueCard } from './BrandValueCard';
import { content } from '../../data/content';

export default {
  title: 'Custom Component/Card/BrandValueCard',
  component: BrandValueCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## BrandValueCard

브랜드 가치를 표시하는 카드 컴포넌트.

### 용도
- 브랜드 가치 섹션에서 핵심 메시지 전달
- 아이콘, 제목, 간단한 설명(영문), 상세 설명(한글)을 조합한 정보 카드
- ghost 스타일로 미니멀한 디자인 제공
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['CircleDot', 'Repeat', 'Activity'],
      description: 'lucide-react 아이콘 이름',
    },
    title: {
      control: 'text',
      description: '브랜드 가치 제목',
    },
    description: {
      control: 'text',
      description: '간단한 설명 (영문)',
    },
    detailedDescription: {
      control: 'text',
      description: '상세 설명 (한글)',
    },
    iconSize: {
      control: { type: 'number', min: 16, max: 64, step: 4 },
      description: '아이콘 크기 (px)',
    },
    iconColor: {
      control: 'text',
      description: '아이콘 색상 (theme 경로 또는 CSS 색상, 예: "text.primary", "#000000")',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
};

export const Default = {
  args: {
    icon: content.brandValue.features[0].icon,
    title: content.brandValue.features[0].title,
    description: content.brandValue.features[0].description,
    detailedDescription: content.brandValue.features[0].detailedDescription,
    iconSize: 32,
  },
};

export const Interactive = {
  args: {
    icon: content.brandValue.features[0].icon,
    title: content.brandValue.features[0].title,
    description: content.brandValue.features[0].description,
    detailedDescription: content.brandValue.features[0].detailedDescription,
    onClick: () => alert('Brand value card clicked!'),
  },
};

export const AllFeatures = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ maxWidth: 1200 }}>
      {content.brandValue.features.map((feature) => (
        <BrandValueCard
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          detailedDescription={feature.detailedDescription}
        />
      ))}
    </Stack>
  ),
};
