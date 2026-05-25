---
title: "1인 벤처 스튜디오에 가상 회사를 차렸다 — OPENNODE 임직원 12명 소개"
description: "엔지니어 채용 대신 AI 에이전트 12명으로 벤처 스튜디오를 만든 이야기. 거장 페르소나 기반 임직원 구성과 첫 사업체 worksmith를 만든 과정까지 build-in-public 기록."
publishedAt: 2026-05-25
category: build-in-public
tags: [AI 에이전트, Claude Code, 1인 기업, 벤처 스튜디오, 자동화]
experience: true
author: 사장
draft: false
---

## 솔로 파운더의 가장 큰 벽

1인 AI/IT 벤처 스튜디오 **OPENNODE**를 차리려고 했습니다. 기획은 자신 있었습니다.
**엔지니어 채용이 안 됐습니다.**

대안은 둘이었습니다. (1) 작게 외주를 주거나, (2) AI 에이전트로 채워보거나. 외주는 매번 컨텍스트를 다시 설명해야 했고, 무엇보다 *매번* 비용이 들었습니다. AI 에이전트는 한번 잘 만들어두면 다음 작업부터는 그 위에 쌓입니다.

그래서 OPENNODE 안에 가상 임직원을 채용했습니다. 컴퓨터 안에 있고, 12명이 있습니다. 그리고 그 12명이 본사 OPENNODE의 첫 번째 사업체 — 지금 보고 계신 매거진 **worksmith** — 를 만들었습니다.

## 임직원 12명 (현실 거장 페르소나 기반)

각 에이전트는 그 직종의 거장 사고방식을 체화하도록 설계했습니다.

### 임원
- **Strategy Advisor** — Paul Graham 스타일. 방향성·우선순위 조언.
- **COO** — Andy Grove 스타일. 운영·OKR·실행.
- **CTO** — John Carmack 스타일. 기술 의사결정.

### 기술팀
- **Fullstack Engineer** — DHH(Ruby on Rails 창시자) 스타일.
- **Frontend Engineer** — Guillermo Rauch(Vercel CEO) 스타일.
- **AI Engineer** — Andrej Karpathy 스타일.
- **Game Developer** — Sid Meier 스타일.

### 제품팀
- **Product Manager** — Marty Cagan 스타일.
- **Designer** — Dieter Rams 스타일.

### 콘텐츠팀
- **Content Strategist** — Seth Godin 스타일.
- **Writer** — David Ogilvy 스타일.
- **Editor** — 한국어 SEO·E-E-A-T 특화.

## 어떻게 만들었나

각 에이전트는 마크다운 파일 하나입니다. 위치는 `~/.claude/agents/`. 파일 안에 다음을 적었습니다.

1. **정체성**: 어떤 거장 페르소나인가
2. **핵심 신념**: 그 사람이 실제로 말한 원칙들
3. **주요 책임**: OPENNODE에서 무엇을 맡는가
4. **작업 스타일**: 어떻게 일하는가
5. **사장과의 협업 방식**: 한국어 톤, 어떤 정보를 줘야 하는가
6. **출력 형식**: 어떤 구조로 답해야 하는가

이렇게 정의해두면 Claude Code 메인 세션에서 그 에이전트에 작업을 위임할 수 있습니다. 메인 세션이 곧 *사장*입니다.

## 실제 작동 예시 — 이번 주 운영

이번 주 가동 첫날, 셋을 순서대로 호출했습니다.

1. **COO 호출** → 이번 주 OKR과 우선순위 Top 3, 일별 흐름을 정리받음.
2. **Content Strategist 호출** → 매거진 포지셔닝 한 문장 후보 5개와 카테고리 20개를 받음.
3. **Fullstack + Designer 호출** → 지금 보고 있는 이 사이트의 Astro 골격이 그 결과물.

오늘 한 일을 사람으로 환산하면 — 전략 어드바이저 1시간, 콘텐츠 디렉터 2시간, 풀스택+디자이너 하루. 총 **3-4명의 1일 인건비**를 하루 만에 받았습니다.

## 한계 (정직하게)

- AI 에이전트는 **사장보다 똑똑하지 않습니다**. 사장의 판단을 증폭시킬 뿐.
- **실제 사용자 인터뷰는 사장이 해야 합니다.** 에이전트가 대신 못 합니다.
- **결제·계약·법적 책임**은 사람만 집니다.
- 가장 큰 한계: 사장이 게으르면 에이전트도 멈춥니다.

## 다음 글 예고

worksmith 사이트 자체를 Claude Code로 0에서 만든 기록을 다음 글에서 풀어보겠습니다.
디렉토리 구조부터 Cloudflare Pages 배포까지.

> **이 글은 build-in-public 시리즈 1편입니다.** 매거진 카테고리 [사장님 워크플로우](/categories/build-in-public)에서 이어집니다.
> 본사 OPENNODE의 다른 사업체 소개는 추후 추가될 예정입니다.
