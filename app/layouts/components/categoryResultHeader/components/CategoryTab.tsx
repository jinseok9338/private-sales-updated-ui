import React from "react";
import {
  Tabs as ShadcnTabs,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
} from "~/components/ui/tabs";
import { TypoSubtleSemibold } from "~/components/ui/typo/AnchorsSubtle";
import { useSelectCategory } from "~/hooks/useSelectCategory";
import { cn } from "~/lib/utils";

const Tabs = ShadcnTabs;

const TabsList: React.FC<React.ComponentProps<typeof ShadcnTabsList>> = ({
  className,
  ...props
}) => (
  <ShadcnTabsList
    className={cn(
      "h-auto p-0 bg-transparent border-b border-gray-200",
      className
    )}
    {...props}
  />
);

const TabsTrigger: React.FC<React.ComponentProps<typeof ShadcnTabsTrigger>> = ({
  className,
  ...props
}) => (
  <ShadcnTabsTrigger
    className={cn(
      "px-6 py-3 h-auto rounded-none text-base font-medium transition-none relative data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=inactive]:text-gray-500",
      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black after:opacity-0 data-[state=active]:after:opacity-100",
      className
    )}
    {...props}
  />
);

const CategoryTab = () => {
  const {
    secondCategoryId,
    handleSelectSecondCategory,
    selectedFirstCategory,
  } = useSelectCategory();

  return (
    <Tabs
      value={secondCategoryId ?? undefined}
      onValueChange={(value) => handleSelectSecondCategory(Number(value))}
      className="w-full bg-common-white"
    >
      <div className="overflow-x-auto scrollbar-hide">
        <TabsList className="w-full flex justify-start gap-[2px] px-4 min-w-max">
          {selectedFirstCategory?.subCategoryList?.map((category) => (
            <TabsTrigger
              className="p-3 whitespace-nowrap"
              value={category.categoryId.toString()}
              key={category.categoryId}
            >
              <TypoSubtleSemibold>
                {category.name?.toUpperCase()}
              </TypoSubtleSemibold>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
};

export default CategoryTab;
