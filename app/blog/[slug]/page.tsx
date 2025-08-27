import { Metadata } from "next";

// Explicitly type params for Next 15
interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;

  return (
    <main>
      <h1>Blog post: {slug}</h1>
    </main>
  );
}

// For dynamic route handling
export async function generateStaticParams() {
  return [];
}

// Keep dynamic rendering safe for build
export const dynamic = "force-dynamic";
