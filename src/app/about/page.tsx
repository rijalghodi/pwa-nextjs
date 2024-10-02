import Link from "next/link";
import React from "react";

export default function Foo() {
  return (
    <div>
      {/* Main content with padding */}
      <main className="max-w-2xl mx-auto mt-10">
        {/* Back button with left arrow symbol */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-300 hover:text-gray-200 text-sm mb-10"
        >
          Back
        </Link>
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-100">
          About
        </h1>
        <section>
          <p>
            This Progressive Web App (PWA) is built with Next.js and integrated
            with React Query for managing and caching fetched data in IndexedDB,
            providing a seamless offline experience.
          </p>
          <p>
            PWAs offer the ability to install web applications on your device,
            enabling offline access and improved performance. Once installed,
            users can enjoy a native app-like experience, even without an
            internet connection.
          </p>
          <p>
            In this application, IndexedDB is used to cache data for two types
            of resources:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-4">
              <strong>Posts Data</strong>: This data is cached indefinitely,
              ensuring you can always view the list of posts, even when offline.
            </li>
            <li>
              <strong>Post Details</strong>: The detailed data for individual
              posts is cached for only 5 minutes. If you open a post and then go
              offline, the details will remain available for up to 5 minutes.
              After this period, the details will no longer be accessible unless
              the data is re-fetched while online.
            </li>
          </ol>
          <p>
            This caching strategy ensures efficient use of storage and provides
            a balance between data freshness and offline accessibility.
          </p>
        </section>
      </main>
    </div>
  );
}
