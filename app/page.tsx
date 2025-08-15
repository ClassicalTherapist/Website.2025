import Image from 'next/image';
import Link from 'next/link';

/**
 * Home page: hero section and introduction to The Wellness Halo. This page
 * outlines the core benefits of mobile massage therapy and encourages
 * visitors to start booking or explore other content.
 */
export default function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-halo-100">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.png"
            alt="Relaxing abstract background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="max-w-5xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-halo-800 mb-4">
            Massage Therapy That Comes to You
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Enjoy professional massage therapy in the comfort of your home or workplace—perfect for pain relief, stress management and overall wellness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter your ZIP code"
              className="w-64 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-halo-500"
            />
            <Link
              href="/book"
              className="inline-block px-6 py-3 bg-halo-600 text-white font-semibold rounded-md hover:bg-halo-700 transition"
            >
              Book a Massage
            </Link>
          </div>
          <p className="text-sm text-gray-600">Scheduling syncs with your life—no hassle, no phone calls.</p>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-halo-100 flex items-center justify-center">
              {/* Calendar icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-halo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10m-11 5h12M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Seamless Scheduling</h3>
            <p className="text-gray-600 text-sm">
              Choose your service, preferred therapist and timing—all synced to your calendar.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-halo-100 flex items-center justify-center">
              {/* Hand icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-halo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11V5a3 3 0 116 0v2a3 3 0 116 0v4a3 3 0 016 0v5a3 3 0 11-6 0v-3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Licensed Professionals</h3>
            <p className="text-gray-600 text-sm">
              Work with vetted, insured therapists dedicated to your well‑being.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-halo-100 flex items-center justify-center">
              {/* Gift icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-halo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m16 0H4m16 0l-2-3a2 2 0 00-1.7-.9H7.7a2 2 0 00-1.7.9L4 12M6 12V5a2 2 0 012-2h8a2 2 0 012 2v7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Membership Perks</h3>
            <p className="text-gray-600 text-sm">
              Enjoy rollover credits, preferred rates and shareable membership benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-halo-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to relax?</h2>
        <p className="text-gray-600 mb-6">Book your first massage now and discover the Halo difference.</p>
        <Link
          href="/book"
          className="inline-block px-8 py-3 bg-halo-600 text-white font-semibold rounded-md hover:bg-halo-700 transition"
        >
          Start Booking
        </Link>
      </section>
    </div>
  );
}