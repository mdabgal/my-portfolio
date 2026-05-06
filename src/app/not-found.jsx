import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6">

      <h1 className="text-6xl font-bold text-blue-600 mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>

    </main>
  );
}