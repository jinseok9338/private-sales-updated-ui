import { Button } from "~/components/ui/button";

export interface Tab {
  id: string;
  name: string;
}

interface CategoryTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function CategoryTabs({
  tabs,
  activeTab,
  onTabChange,
}: CategoryTabsProps) {
  return (
    <div className="border-b">
      <nav className="flex">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-3 text-sm font-medium border-b-2 rounded-none bg-transparent shadow-none ${
              activeTab === tab.id
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.name}
          </Button>
        ))}
      </nav>
    </div>
  );
}
