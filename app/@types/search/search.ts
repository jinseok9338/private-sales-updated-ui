export type AgeGroup =
  | "전체"
  | "10대"
  | "20대 초반"
  | "20대 중반"
  | "20대 후반"
  | "30대 이상";

export interface TrendingItem {
  id: number;
  term: string;
  change: "up" | "down" | "same";
  ageGroups: AgeGroup[];
}

export interface SearchPageData {
  lastUpdated: string;
  trends: TrendingItem[];
}
