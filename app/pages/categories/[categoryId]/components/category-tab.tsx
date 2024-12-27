import { useCategoryDetailContext } from "~/context/categories/[categoryId]/categoryDetailContext";

export function CategoryTabs() {
  const { tabs, activeTab, setActiveTab } = useCategoryDetailContext();
  return (
    <div className="border-b">
      <nav className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === tab.id
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  );
}
