"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";
import type { AgeGroup } from "~/@types/search/search";
import { ageGroups, searchTrendsData } from "~/mocks/search";

export default function SearchPage() {
  const [selectedAge, setSelectedAge] = useState<AgeGroup>("전체");

  const filteredTrends = searchTrendsData.trends.filter((trend) =>
    trend.ageGroups.includes(selectedAge)
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">인기 검색어</h1>
          <span className="text-sm text-gray-500">
            {searchTrendsData.lastUpdated}
          </span>
        </div>

        {/* Age filter buttons */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {ageGroups.map((age) => (
            <button
              key={age}
              onClick={() => setSelectedAge(age)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm ${
                selectedAge === age
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {age}
            </button>
          ))}
        </div>

        {/* Trending items list */}
        <div className="mt-6 bg-white rounded-lg">
          {filteredTrends.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-4 py-4 border-b last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <span className="text-lg font-medium w-6">{item.id}</span>
                <span>{item.term}</span>
              </div>
              <ChevronUp className="w-4 h-4 text-red-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
