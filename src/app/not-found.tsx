'use client';
import React from "react";
import img from "next/image";
import { useRouter } from "next/navigation";

const NotFoundComponent = () => {
    const router = useRouter()
  return (
    <div className="relative mt-20 flex flex-col items-center justify-center py-16">
      {/* Globe Icon */}
      <div className="mb-6">
        <img
          src="/globe.svg"
          alt="Globe icon"
          width={64}
          height={64}
          className="drop-shadow-lg"
        />
      </div>
      <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-[var(--muted-foreground)] mb-8 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <div className="flex gap-4">
        <a
          href="/"
          className="px-6 py-2 border font-semibold bg-transparent transition-colors btn btn-primary"
        >
          Go Home
        </a>
        <button
          onClick={() => router.back()}
          className="px-6 py-2 border font-semibold bg-transparent transition-colors btn btn-secondary"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundComponent;
