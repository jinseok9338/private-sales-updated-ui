export interface CategoryAnalytics {
  LIST_INDEX: number;
  CATEGORY_SNO: string;
  CATEGORY_NAME: string;
  CATEGORY_DEPTH?: string;
}

export interface SubCategory {
  item: {
    sno: number;
    name: string;
    deeplink: string;
    image: string;
  };
  logging: {
    analytics: CategoryAnalytics;
  };
}

export interface Category {
  item: {
    sno: number;
    name: string;
    deeplink: string | null;
    subCategoryList: SubCategory[];
  };
  logging: {
    analytics: CategoryAnalytics;
  };
}
