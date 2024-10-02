import { useQuery } from "@tanstack/react-query";

// Define the Post type based on the JSONPlaceholder response
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch posts from JSONPlaceholder
const fetchPost = async (id: string): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Custom hook to use posts
export const usePostDetail = ({ id, enabled }: { id: string,enabled?: boolean }) => {
  return useQuery<Post, Error>({
    queryKey: ["post-detail", id],
    queryFn: () => fetchPost(id),
    enabled: enabled
  });
};
