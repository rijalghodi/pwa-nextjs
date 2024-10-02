"use client";

import { usePosts } from "@/hook/usePost";
import Link from "next/link";

export default function Home() {
  const { data, error, isLoading } = usePosts();

  if (isLoading) {
    // Centered loading state with a ring loader
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  if (error) {
    // Centered error state
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        <div>Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 text-white min-h-screen text-inherit inherit px-4">
      {/* Fixed position header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-800 py-2">
        {/* Title of the web, make bolder */}
        <div className="bg-gray-700 rounded-lg p-4 max-w-2xl mx-auto flex justify-between items-center">
          <div className="font-bold text-md">PWA NextJS</div>
          {/* Display flex */}
          <ul className="flex space-x-4 gap-4 px-4">
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Main content with padding */}
      <main className="max-w-2xl mx-auto mt-32">
        <h1 className="text-2xl font-bold mb-4 text-center">Posts</h1>
        {/* Display flex, direction column, gap: 1 rem */}
        <ul className="flex flex-col">
          {data?.map((val, index) => (
            <li
              key={val.id}
              className={`${
                index !== data.length - 1 ? "border-b border-gray-600" : ""
              }`}
            >
              <Link
                href={`/post/${val.id}`}
                className="block hover:bg-gray-700 px-4 py-6  hover:text-gray-200"
              >
                <h2 className="font-semibold text-lg">{val.title}</h2>
                <p className="text-gray-400">{val.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
