import { ChevronUp } from "lucide-react";
import { Link } from "react-router";
import FeedbackLink from "~/components/ui/Link";
import { useSearchContext } from "~/context/search/searchContext";

const TrendingList = () => {
  const { searchTrendsData, selectedAge } = useSearchContext();
  const filteredTrends = searchTrendsData.trends.filter((trend) =>
    trend.ageGroups.includes(selectedAge)
  );
  return (
    <div className="mt-6 bg-white rounded-lg">
      {filteredTrends.map((item) => (
        <FeedbackLink to={`/search/result?q=${item.term}`}>
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
        </FeedbackLink>
      ))}
    </div>
  );
};

export default TrendingList;
