import { useInfiniteQuery } from "@tanstack/react-query";
import type {
  Recommendation,
  RecommendationItem,
  RecommendationItemList,
} from "~/@types/recommendation/recommendation";
import AxiosClient from "~/api/axios";

interface FetchRecommendationsResponse {
  items: RecommendationItem[];
  nextCursor: number | null;
}

async function fetchRecommendations(
  cursor: number | null = null
): Promise<FetchRecommendationsResponse> {
  const res = await AxiosClient.get("/mock/subCategory.json");
  const result = res.data as Recommendation;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  // slice the mock data baed on the cursor
  const mockItems = result.item_list
    .map((v) => v.item_entity.item)
    .slice(cursor || 0, cursor || 0 + 6);

  return {
    items: mockItems,
    nextCursor: cursor !== null && cursor > 30 ? null : (cursor || 0) + 6,
  };
}

export function useInfiniteRecommendations() {
  return useInfiniteQuery({
    queryKey: ["recommendations"],
    queryFn: ({ pageParam }) => fetchRecommendations(pageParam),
    initialPageParam: null as number | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}
