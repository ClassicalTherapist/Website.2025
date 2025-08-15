export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
};

/**
 * Example blog posts. Replace these with your own original content. Each post
 * includes a slug used in the URL, a title, date, summary and full
 * markdown‑like content. You can add as many posts as you like.
 */
export const posts: Post[] = [
  {
    slug: 'benefits-of-mobile-massage',
    title: '5 Benefits of Mobile Massage Therapy',
    date: '2025-08-15',
    summary:
      'Discover how mobile massage therapy saves time and enhances your wellness routine.',
    content: `### Convenient and stress‑free\n\nWith mobile massage, the therapist comes to you. There’s no need to fight traffic or rearrange your busy schedule—your session happens right in the comfort of your home or office.\n\n### Personalized experience\n\nHaving a therapist in your own space allows for a more personalized treatment. You can control the atmosphere, music and lighting to optimize relaxation.\n\n### Supports consistent self‑care\n\nWhen scheduling is easy and travel isn’t required, you’re more likely to keep up with regular treatments, which leads to better long‑term results.\n\n### Great for families and caregivers\n\nMobile massage makes it possible for parents, caregivers and those with limited mobility to receive therapeutic care without childcare or transportation challenges.\n\n### Reduced stress after your session\n\nYou can ease back into your day without the stress of driving home post‑massage. This lets you prolong the benefits of your treatment and stay in a relaxed state longer.`,
  },
  {
    slug: 'choosing-the-right-massage-duration',
    title: 'How to Choose the Right Massage Duration',
    date: '2025-08-15',
    summary:
      'Not sure whether to book a 60‑, 90‑ or 120‑minute session? Here’s how to decide.',
    content: `### Listen to your body\n\nIf you’re new to massage or need targeted relief for a specific area, a 60‑minute session might be perfect.\n\n### For full‑body relaxation\n\nA 90‑minute massage allows ample time to address the entire body while still spending extra time on areas of tension.\n\n### Treat yourself to luxury\n\nWhen you want the ultimate indulgence or have multiple areas of concern, a 120‑minute session provides an immersive, unrushed experience.\n\n### Consider your schedule\n\nRemember to factor in how the appointment fits into your day. Mobile appointments make it easier to choose longer sessions without the commute!`,
  },
];