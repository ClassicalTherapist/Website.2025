import Link from 'next/link';
import { posts } from '../../lib/posts';

/**
 * Blog index page. Lists all posts with a brief description. Clicking on a
 * post title takes you to the full article. This page is statically
 * rendered using the posts defined in lib/posts.ts.
 */
export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">The Wellness Journal</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-halo-700 mb-2">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-gray-700">
              {post.summary}
            </p>
            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-halo-600 font-medium hover:underline"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}