"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Something Went Wrong
          </h1>
          {error.digest && (
            <p className="text-xs text-gray-400 mb-4">
              Error ID: {error.digest}
            </p>
          )}
          <p className="text-gray-600 mb-8">
            We apologize for the inconvenience.
          </p>
          <button
            onClick={reset}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold"
          >
            Try Again
          </button>
          <p className="mt-6 text-gray-600">
            Or call{" "}
            <a href="tel:+16302997600" className="text-primary font-semibold">
              (630) 299-7600
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
