"use client";

import { usePostDetail } from "@/hook/usePostDetail";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function PostDetail() {
  const { postId } = useParams();
  const [isOffline, setIsOffline] = useState(false);
  const { data, error, isLoading } = usePostDetail({
    id: postId as string,
    enabled: !isOffline,
  });

  useEffect(() => {
    // Set offline status on component mount and when network changes
    const handleOnlineStatus = () => {
      setIsOffline(false);
    };
    const handleOfflineStatus = () => {
      setIsOffline(true);
    };

    handleOnlineStatus(); // Check initial status
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);

  if (isOffline) {
    return (
      <div className="flex items-center justify-center min-h-screen text-yellow-500">
        <div>You are offline. Can not get data from the server.</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        <div>Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div>
      <main className="max-w-2xl mx-auto mt-10">
        <Link
          href="/"
          className="inline-flex items-center text-gray-300 hover:text-gray-200 text-sm mb-10"
        >
          Back
        </Link>
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-100">
          {data?.title}
        </h1>
        <section className="text-gray-300">{data?.body}</section>
      </main>
    </div>
  );
}
