import { notFound } from 'next/navigation';
import { posts } from '../../../lib/posts';

interface PageProps {
  params: { slug: string };
}

/**
 * Renders an individual blog post. The post content is parsed into basic
 * headings and paragraphs. For a richer writing experience, integrate a
 * markdown parser or CMS in the future.
 */
export default function BlogPostPage({ params }: PageProps) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  // Simple parser: convert markdown‑like headings (###) into <h3>, leave other
  // lines as paragraphs. Split by two newlines to keep paragraphs grouped.
  const blocks = post.content.split(/\n\n/);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <article className="prose prose-emerald prose-lg max-w-none">
        <h1>{post.title}</h1>
        <p className="text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        {blocks.map((block, idx) => {
          const trimmed = block.trim();
          if (trimmed.startsWith('### ')) {
            return (
              <h3 key={idx} className="mt-6">
                {trimmed.replace(/^###\s+/, '')}
              </h3>
            );
          }
          return (
            <p key={idx} className="mt-4">
              {trimmed}
            </p>
          );
        })}
      </article>
    </div>
  );
}