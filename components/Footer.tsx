"use client";

import Link from 'next/link';

/**
 * Site footer with basic information and links. Adjust the content as
 * necessary; this component is shared across all pages.
 */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 space-y-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-sm mb-2 md:mb-0">
            &copy; {year} The Wellness Halo. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="/" className="hover:text-halo-400">Home</Link>
            <Link href="/pricing" className="hover:text-halo-400">Pricing</Link>
            <Link href="/blog" className="hover:text-halo-400">Blog</Link>
            <Link href="/book" className="hover:text-halo-400">Book</Link>
          </div>
        </div>
        <p className="text-xs opacity-75">
          Built with ❤️ using Next.js and Tailwind CSS. Scheduling powered by Cal.com.
        </p>
      </div>
    </footer>
  );
}