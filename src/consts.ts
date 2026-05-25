// 사이트 전역 설정 — 도메인 확정되면 url 한 곳만 바꾸면 됨

export const SITE = {
  name: 'worksmith',
  parent: 'OPENNODE',
  tagline: '혼자 일하는 사람을 위한 AI 도구 레시피집',
  description:
    '1인 기업·SMB·프리랜서를 위한 AI 도구 큐레이션. 실제로 1인 AI 기업을 운영하는 사장이 한국어 환경 기준으로 직접 써본 도구만 정리합니다.',
  // TODO: 도메인 확정 후 변경 (worksmith.kr 등)
  url: 'https://worksmith.kr',
  parentUrl: 'https://opennode-sm8vehte.manus.space',
  locale: 'ko-KR',
  author: {
    name: '사장',
    email: 'opennode.kr@gmail.com',
  },
} as const;

export const NAV = [
  { label: '글', href: '/posts' },
  { label: '카테고리', href: '/categories' },
  { label: '소개', href: '/about' },
] as const;

export const CATEGORIES = [
  { slug: 'operations', label: '업무 자동화', emoji: '⚙️' },
  { slug: 'content', label: '콘텐츠 제작', emoji: '✍️' },
  { slug: 'customer', label: '고객 관리', emoji: '💬' },
  { slug: 'marketing', label: '영업·마케팅', emoji: '📈' },
  { slug: 'finance', label: '회계·세무', emoji: '💰' },
  { slug: 'build-in-public', label: '사장님 워크플로우', emoji: '🛠️' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];
