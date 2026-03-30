"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-4xl text-primary mb-4">
          Something Went Wrong
        </h1>
        {error.digest && (
          <p className="text-xs text-text-muted mb-4">
            Error ID: {error.digest}
          </p>
        )}
        <p className="text-text-muted mb-8">
          We apologize for the inconvenience. Please try again or contact us
          directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary px-6 py-3 rounded-lg font-semibold"
          >
            Try Again
          </button>
          <a
            href="/contact"
            className="btn-outline px-6 py-3 rounded-lg font-semibold"
          >
            Contact Us
          </a>
        </div>
        <p className="mt-6 text-text-muted">
          Or call{" "}
          <a href="tel:+16302997600" className="text-primary font-semibold">
            (630) 299-7600
          </a>
        </p>
      </div>
    </div>
  );
}
