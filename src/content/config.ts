import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(80, '제목은 80자 이하 권장 (SEO)'),
    description: z.string().min(80).max(170, '메타 디스크립션 130-160자 권장'),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum([
      'operations',
      'content',
      'customer',
      'marketing',
      'finance',
      'build-in-public',
    ]),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    // E-E-A-T 신호
    author: z.string().default('사장'),
    experience: z.boolean().default(false).describe('사장님 본인이 직접 써본 경험인가'),
    // 광고/제휴
    sponsored: z.boolean().default(false),
    affiliateLinks: z.boolean().default(false),
  }),
});

export const collections = { posts };
