// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;

  // TODO: load your post using `slug`
  // const post = await getPostBySlug(slug)
  // if (!post) notFound();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog post: {slug}</h1>
      <p>Replace this with real content.</p>
    </main>
  );
}

/**
 * If you want SSG (prebuild pages), return an array of params objects:
 *   [{ slug: "first-post" }, { slug: "second-post" }]
 * If you don't have slugs yet or want everything dynamic, delete this
 * function and keep the `export const dynamic = "force-dynamic"` line instead.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Example: no prebuilt posts yet
  return [];
}

// For fully dynamic pages during build, leave this ON.
// (Remove it if you implement real SSG above.)
export const dynamic = "force-dynamic";
