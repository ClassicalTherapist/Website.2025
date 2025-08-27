// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";

// ✅ This is the shape Next expects for dynamic routes under app/.
// Do NOT import a PageProps from anywhere else here.
type PageProps = {
  params: { slug: string }; // <- plain object, not a Promise
};

// If you statically generate any posts, list their slugs here (or fetch from DB)
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Example: const slugs = await getAllPostSlugs();
  // return slugs.map((s) => ({ slug: s }));
  return []; // no pre-rendered posts yet; on-demand rendering is fine
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;

  // Example data fetch:
  // const post = await getPostBySlug(slug);
  // if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold mb-4">Post: {slug}</h1>
      <p>Content coming soon.</p>
    </main>
  );
}
