import type { AgeGroup, SearchPageData } from "~/@types/search/search";

export const ageGroups: AgeGroup[] = [
  "전체",
  "10대",
  "20대 초반",
  "20대 중반",
  "20대 후반",
  "30대 이상",
];

export const searchTrendsData: SearchPageData = {
  lastUpdated: "12.26 14:00 기준",
  trends: [
    {
      id: 1,
      term: "브이넥 니트",
      change: "up",
      ageGroups: ["전체", "20대 초반", "20대 중반"],
    },
    {
      id: 2,
      term: "코트",
      change: "up",
      ageGroups: ["전체", "20대 중반", "20대 후반"],
    },
    {
      id: 3,
      term: "퍼자켓",
      change: "up",
      ageGroups: ["전체", "20대 초반"],
    },
    {
      id: 4,
      term: "레그워머",
      change: "up",
      ageGroups: ["전체", "10대", "20대 초반"],
    },
    {
      id: 5,
      term: "네일팁",
      change: "up",
      ageGroups: ["전체", "20대 초반", "20대 중반"],
    },
    {
      id: 6,
      term: "블라우스",
      change: "up",
      ageGroups: ["전체", "20대 후반", "30대 이상"],
    },
    {
      id: 7,
      term: "목티",
      change: "up",
      ageGroups: ["전체", "10대", "20대 초반"],
    },
    {
      id: 8,
      term: "하객룩",
      change: "up",
      ageGroups: ["전체", "20대 중반", "20대 후반"],
    },
    {
      id: 9,
      term: "어그부츠",
      change: "up",
      ageGroups: ["전체", "10대", "20대 초반"],
    },
    {
      id: 10,
      term: "니트원피스",
      change: "up",
      ageGroups: ["전체", "20대 후반", "30대 이상"],
    },
  ],
};
