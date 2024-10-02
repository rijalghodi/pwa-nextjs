import { useQuery } from "@tanstack/react-query";

// Define the Post type based on the JSONPlaceholder response
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch posts from JSONPlaceholder
const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Custom hook to use posts
export const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
