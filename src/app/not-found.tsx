import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found - 404',
  description: 'The page you are looking for could not be found. Return to our homepage or explore our site.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Page Not Found
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        <div className="space-y-4">
          <Link
            href="/"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Go back home
          </Link>
          <div className="text-sm text-gray-500">
            <p>Or try one of these popular pages:</p>
            <div className="mt-2 space-x-4">
              <Link href="/about" className="text-blue-600 hover:text-blue-800">
                About Us
              </Link>
              <Link href="/leadership" className="text-blue-600 hover:text-blue-800">
                Leadership
              </Link>
              <Link href="/portfolio" className="text-blue-600 hover:text-blue-800">
                Portfolio
              </Link>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
