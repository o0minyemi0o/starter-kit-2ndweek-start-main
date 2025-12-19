# Prompt Guide

---


---

## Shared


### MinimalTimelineSlider

Box와 lucide-react 아이콘(Sun, Sunset, Moon)을 사용해서 헤더용 초소형 타임라인 슬라이더를 만들어줘. 아이콘 클릭으로 시간대 이동하고, 1px 축 라인과 틱 마커로 현재 위치를 표시해줘. useTimeline 훅으로 전역 상태와 연동해줘.

### ScrollVideo

VideoScrubbing과 TimelineSlider, Typography를 사용해서 스크롤 비디오 컴포넌트를 만들어줘. 스크롤 위치에 따라 비디오 프레임이 변하고, 하단에 시간 오버레이를 표시해줘.

---

## Card


---

## Product


### ProductGallery

Box와 Stack, TimeBlendImage를 사용해서 제품 이미지 갤러리를 만들어줘. 메인 이미지 + 썸네일 스트립 형태로, timeline 값에 따라 낮/밤 이미지 블렌딩을 지원해줘. 페이지네이션 인디케이터로 현재 위치를 표시해줘.

### ProductTabs

Box와 Typography, Divider를 사용해서 제품 정보 탭 메뉴를 만들어줘. 세로/가로 방향 지원하고, Overview/Description/Tech Specs 등 탭 목록을 props로 받아서 렌더링해줘.

### ProductImageViewer

Box와 Typography, TimeBlendImage, TimelineSlider를 사용해서 제품 이미지 뷰어를 만들어줘. 배경에 낮/밤 블렌딩 이미지, 하단에 그래디언트 오버레이와 슬라이더를 표시해줘. 우측 상단에 lux·K 값을 monospace로 표시해줘.

### ProductFilter

Tabs와 Tab, Box를 사용해서 제품 타입 필터를 만들어줘. @src/data/products.js의 PRODUCT_TYPES에서 CEILING, STAND, WALL, DESK 값을 사용하고, 세로 탭 형태로 All/Ceiling/Stand/Wall/Desk 필터를 표시해줘.

---

## Cart

---

## Navigation


### Footer

Stack과 Typography, InputBase, IconButton, lucide-react 아이콘(ArrowRight, Instagram, Twitter)을 사용해서 푸터를 만들어줘. @src/data/content.js의 brand.name, brand.tagline, footer.copyright 값을 사용하고, 뉴스레터 이메일 입력 폼을 포함해줘.

### AppShell

Box와 GNB, Footer를 사용해서 앱 레이아웃 쉘을 만들어줘. 상단에 GNB, 중간에 메인 콘텐츠(children), 하단에 Footer를 배치해줘. GNB는 sticky 옵션을 지원해줘.

---

## Template


### CheckoutTemplate

Box와 CheckoutLayout, CheckoutLogo, CheckoutSteps, ExpressCheckout, ContactForm, ShippingForm, CheckoutActions, PolicyLinks, OrderSummary를 사용해서 체크아웃 템플릿을 만들어줘. 좌측에 폼 영역(로고, 단계, 빠른결제, 연락처, 배송지, 액션, 정책), 우측에 주문 요약을 배치해줘.

---

## Section



### CheckoutSection

CheckoutTemplate과 useCart를 사용해서 체크아웃 섹션을 만들어줘. CartContext에서 items, subtotal을 가져오고, Contact/Shipping 폼 상태를 관리해줘.

---

## Page


### CheckoutPage

CheckoutSection을 사용해서 체크아웃 페이지를 만들어줘. GNB 없이 독립적인 체크아웃 플로우로 구성해줘.
