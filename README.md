# worksmith

> 혼자 일하는 사람을 위한 AI 도구 레시피집
>
> An OPENNODE company — OPENNODE 벤처 스튜디오의 첫 번째 사업체

## 스택

- **Astro 4** — 콘텐츠 중심 정적 사이트
- **Tailwind CSS 3** — 디자인 토큰 기반 스타일
- **TypeScript** — strict 모드
- **Pretendard** — 한국어 본문 폰트 (CDN)
- **Cloudflare Pages** — 배포 (예정)

## 빠른 시작

```bash
cd C:\Users\USER\magazine

# 의존성 설치
npm install

# 개발 서버 (http://localhost:4321)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 디렉토리 구조

```
magazine/
├── public/              정적 파일 (favicon, og 이미지 등)
├── src/
│   ├── consts.ts        사이트 전역 설정 (브랜드명, 카테고리)
│   ├── content/
│   │   ├── config.ts    글 스키마 (frontmatter 검증)
│   │   └── posts/       매거진 글 (.md / .mdx)
│   ├── layouts/
│   │   ├── BaseLayout.astro    공통 레이아웃 + SEO 메타
│   │   └── PostLayout.astro    글 상세 레이아웃
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro      목록 카드
│   │   └── NewsletterCTA.astro 구독 폼
│   ├── pages/
│   │   ├── index.astro                  홈
│   │   ├── about.astro                  소개
│   │   ├── rss.xml.ts                   RSS 피드
│   │   ├── posts/
│   │   │   ├── index.astro              전체 글
│   │   │   └── [slug].astro             글 상세
│   │   └── categories/
│   │       ├── index.astro              카테고리 목록
│   │       └── [category].astro         카테고리별 글
│   └── styles/
│       └── global.css   디자인 토큰 + Tailwind layer
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 새 글 추가하기

`src/content/posts/` 폴더에 마크다운 파일을 만듭니다. 파일명이 URL 슬러그가 됩니다.

```markdown
---
title: "글 제목 (60자 이내)"
description: "메타 디스크립션 (130-160자)"
publishedAt: 2026-05-25
category: operations  # operations | content | customer | marketing | finance | build-in-public
tags: [태그1, 태그2]
experience: true      # 사장님이 직접 써본 도구인지
author: 사장
draft: false
---

본문 (마크다운)
```

`draft: true`인 글은 사이트에 보이지 않습니다.

## 디자인 토큰

`src/styles/global.css`의 `:root` 변수만 바꾸면 사이트 전체 색·간격이 일관되게 변합니다.

```css
--color-accent: 37 99 235;   /* cobalt blue */
```

## 배포 (Cloudflare Pages)

1. `git init && git add . && git commit -m "init"` 후 GitHub 푸시
2. [Cloudflare Dashboard → Pages](https://dash.cloudflare.com/) → "Create a project" → GitHub 연결
3. Build command: `npm run build`
4. Build output directory: `dist`
5. 도메인 연결 (도메인 확정 후)

## TODO (브랜드 확정 후)

- [ ] `src/consts.ts`의 `SITE.name`, `SITE.url`, `SITE.tagline` 업데이트
- [ ] `public/favicon.svg` 브랜드 색·이니셜로 교체
- [ ] OG 이미지 `public/og-default.png` 추가
- [ ] 뉴스레터 서비스 연결 (`src/components/NewsletterCTA.astro`의 form action)
- [ ] Google Search Console / Plausible 또는 GA 추가
- [ ] 첫 번째 글 `draft: false`로 발행

## OPENNODE 본사 에이전트 호출

worksmith를 운영하는 본사 OPENNODE의 가상 임직원은 `~/.claude/agents/` 폴더에 있습니다. 메인 세션에서 호출하세요.

- 새 글 초안: `opennode-writer`
- 발행 전 검수: `opennode-editor`
- 카테고리·전략 검토: `opennode-content-strategist`
- 디자인 변경: `opennode-designer`
- 기능 추가: `opennode-fullstack` / `opennode-frontend`
- 주간 계획: `opennode-coo`
