import { TypoBody13 } from "~/components/ui/typo/AnchorsBody13";
import { Link, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { TypoBody14Semibold } from "~/components/ui/typo/AnchorsBody14";
import { TypoDetail12Medium } from "~/components/ui/typo/AnchorsDetail12";
import { useCategory } from "~/contexts/CategoryContext";
import { useTranslation } from "react-i18next";
import {
  FIRST_CATEGORY_ID,
  SECOND_CATEGORY_ID,
  THIRD_CATEGORY_ID,
} from "~/constants/QueryStringKeys";
import { useRef, useEffect, useCallback } from "react";
import { useIntersectionObserver } from "~/hooks/useIntersectionObserver";

interface SubCategoryGridContainerProps {
  secondCategory: {
    categoryId: number;
    parentId: number;
    name: string;
  };
  thirdCategory: {
    categoryId: number;
    name: string;
    image: string;
  }[];
}

const SubCategoryGridContainer = ({
  secondCategory,
  thirdCategory,
}: SubCategoryGridContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { setActiveCategory } = useCategory();
  const { t } = useTranslation();
  const firstCategoryId = secondCategory.parentId;
  const secondCategoryId = secondCategory.categoryId;

  const toUrl = (categoryId?: number) => {
    if (!categoryId)
      return `/categories/detail?${FIRST_CATEGORY_ID.key}=${firstCategoryId}&${SECOND_CATEGORY_ID.key}=${secondCategoryId}`;
    return `/categories/detail?${FIRST_CATEGORY_ID.key}=${firstCategoryId}&${SECOND_CATEGORY_ID.key}=${secondCategoryId}&${THIRD_CATEGORY_ID.key}=${categoryId}`;
  };

  const handleIntersect = useCallback(
    (categoryId: number) => {
      setActiveCategory(categoryId);
    },
    [setActiveCategory]
  );

  const { observe, unobserve } = useIntersectionObserver({
    onIntersect: handleIntersect,
    threshold: 0.3,
    rootMargin: "-10% 0px -70% 0px",
  });

  useEffect(() => {
    observe(containerRef.current);
    return () => unobserve(containerRef.current);
  }, [observe, unobserve]);

  return (
    <div
      ref={containerRef}
      id={`category-${secondCategory.parentId}`}
      data-category-id={secondCategory.parentId}
      className="scroll-mt-4"
    >
      <div className="p-4 flex justify-between items-center">
        <TypoBody14Semibold>{secondCategory?.name}</TypoBody14Semibold>
        <Button onClick={() => navigate(toUrl())} variant={"ghost"}>
          <TypoBody13 className="text-gray-500">
            {t("category.filter.go-see")}
          </TypoBody13>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-x-[7.5px] gap-y-3 py-3 pb-7">
        {thirdCategory.map((subcategory) => (
          <Link
            to={toUrl(subcategory.categoryId)}
            key={subcategory.categoryId}
            className="flex flex-col items-center "
          >
            <div className="relative w-[60px] h-[60px] aspect-square overflow-hidden">
              <img
                src={subcategory.image}
                alt={subcategory.name}
                className="object-cover"
              />
            </div>
            <TypoDetail12Medium className="text-center">
              {subcategory.name}
            </TypoDetail12Medium>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryGridContainer;
