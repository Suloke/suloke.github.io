import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg">Page not found</p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Go to home
      </Link>
    </div>
  );
}
