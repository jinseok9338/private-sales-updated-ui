import { CategoryProvider } from "~/contexts/CategoryContext";
import CategoryIndex from "~/pages/categories";
import LADYJEWELEY1 from "~/assets/images/Acc/LADY/tabitem.png";
import LADYJEWELEY2 from "~/assets/images/Acc/LADY/tabitem-1.png";
import LADYJEWELEY3 from "~/assets/images/Acc/LADY/tabitem-2.png";
import LADYJEWELEY4 from "~/assets/images/Acc/LADY/tabitem-3.png";
import LADYJEWELEY5 from "~/assets/images/Acc/LADY/tabitem-4.png";

import HOMMEJEWELEY1 from "~/assets/images/Acc/HOMME/tabitem-6.png";
import HOMMEJEWELEY2 from "~/assets/images/Acc/HOMME/tabitem-7.png";
import HOMMEJEWELEY3 from "~/assets/images/Acc/HOMME/tabitem-8.png";
import HOMMEJEWELEY4 from "~/assets/images/Acc/HOMME/tabitem-9.png";
import HOMMEJEWELEY5 from "~/assets/images/Acc/HOMME/tabitem-28.png";

import LADYBAG1 from "~/assets/images/Bags/LADY/tabitem-10.png";

import HOMMEBAG1 from "~/assets/images/Bags/HOMME/tabitem-11.png";

import FJTP1 from "~/assets/images/Fjtp/tabitem-27.png";

import MAISON1 from "~/assets/images/Maison/tabitem-12.png";

import HOMMERTW1 from "~/assets/images/Rtw/HOMME/tabitem-19.png";
import HOMMERTW2 from "~/assets/images/Rtw/HOMME/tabitem-20.png";
import HOMMERTW3 from "~/assets/images/Rtw/HOMME/tabitem-21.png";
import HOMMERTW4 from "~/assets/images/Rtw/HOMME/tabitem-22.png";

import LADYRTW1 from "~/assets/images/Rtw/LADY/tabitem-13.png";
import LADYRTW2 from "~/assets/images/Rtw/LADY/tabitem-14.png";
import LADYRTW3 from "~/assets/images/Rtw/LADY/tabitem-15.png";
import LADYRTW4 from "~/assets/images/Rtw/LADY/tabitem-16.png";
import LADYRTW5 from "~/assets/images/Rtw/LADY/tabitem-17.png";
import LADYRTW6 from "~/assets/images/Rtw/LADY/tabitem-18.png";

import LADYSHOES1 from "~/assets/images/Shoes/LADY/tabitem-23.png";

import HOMMESHOES1 from "~/assets/images/Shoes/HOMME/tabitem-24.png";

import HOMMESLG1 from "~/assets/images/Slg/HOMME/tabitem-26.png";

import LADYSLG1 from "~/assets/images/Slg/LADY/tabitem-25.png";

export type CategoryResponse = {
  itemList: {
    categoryId: number;
    parentId: number | null;
    name: string;
    subCategoryList?: {
      categoryId: number;
      parentId: number | null;
      name: string;
      subCategoryList?: {
        categoryId: number;
        parentId: number | null;
        name: string;
        image: string;
      }[];
      image: string;
      quota?: string;
    }[];
    image: string;
    quota?: string;
  }[];
};

const MOCK_CATEGORY = {
  itemList: [
    {
      categoryId: 1,
      parentId: null,
      name: "Acc",
      subCategoryList: [
        {
          categoryId: 101,
          parentId: 1,
          name: "Lady",
          subCategoryList: [
            {
              categoryId: 10101,
              parentId: 101,
              name: "Custom Jewelery",
              image: LADYJEWELEY1,
            },
            {
              categoryId: 10202,
              parentId: 101,
              name: "Tie&Scarves",
              image: LADYJEWELEY2,
            },
            {
              categoryId: 10203,
              parentId: 101,
              name: "Belt",
              image: LADYJEWELEY3,
            },
            {
              categoryId: 10204,
              parentId: 101,
              name: "Eyewear",
              image: LADYJEWELEY4,
            },
            {
              categoryId: 10205,
              parentId: 101,
              name: "Hat&Socks",
              image: LADYJEWELEY5,
            },
          ],
        },
        {
          categoryId: 102,
          parentId: 1,
          name: "Homme",
          subCategoryList: [
            {
              categoryId: 10201,
              parentId: 102,
              name: "Custom Jewelery",
              image: HOMMEJEWELEY1,
            },
            {
              categoryId: 10202,
              parentId: 102,
              name: "Tie&Scarves",
              image: HOMMEJEWELEY2,
            },
            {
              categoryId: 10203,
              parentId: 102,
              name: "Belt",
              image: HOMMEJEWELEY3,
            },
            {
              categoryId: 10204,
              parentId: 102,
              name: "Eyewear",
              image: HOMMEJEWELEY4,
            },
            {
              categoryId: 10205,
              parentId: 102,
              name: "Hat&Socks",
              image: HOMMEJEWELEY5,
            },
          ],
        },
      ],
    },
    {
      categoryId: 2,
      parentId: null,
      name: "Bags",
      subCategoryList: [
        {
          categoryId: 201,
          parentId: 2,
          name: "Lady",
          subCategoryList: [
            {
              categoryId: 20101,
              parentId: 201,
              name: "Lady",
              image: LADYBAG1,
            },
          ],
        },
        {
          categoryId: 202,
          parentId: 2,
          name: "Homme",
          subCategoryList: [
            {
              categoryId: 20201,
              parentId: 202,
              name: "Homme",
              image: HOMMEBAG1,
            },
          ],
        },
      ],
    },
    {
      categoryId: 3,
      parentId: null,
      name: "Maison",
      subCategoryList: [
        {
          categoryId: 301,
          parentId: 3,
          name: "Maison",
          subCategoryList: [
            {
              categoryId: 30101,
              parentId: 301,
              name: "Maison",
              image: MAISON1,
            },
          ],
        },
      ],
    },
    {
      categoryId: 4,
      parentId: null,
      name: "RTW",
      subCategoryList: [
        {
          categoryId: 401,
          parentId: 4,
          name: "Lady",
          subCategoryList: [
            {
              categoryId: 40101,
              parentId: 401,
              name: "Outer",
              image: LADYRTW1,
            },
            {
              categoryId: 40102,
              parentId: 401,
              name: "Top",
              image: LADYRTW2,
            },
            {
              categoryId: 40103,
              parentId: 401,
              name: "Pants",
              image: LADYRTW3,
            },
            {
              categoryId: 40104,
              parentId: 401,
              name: "Skirt",
              image: LADYRTW4,
            },
            {
              categoryId: 40105,
              parentId: 401,
              name: "Dress",
              image: LADYRTW5,
            },
            {
              categoryId: 40106,
              parentId: 401,
              name: "Others",
              image: LADYRTW6,
            },
          ],
        },
        {
          categoryId: 402,
          parentId: 4,
          name: "Homme",
          subCategoryList: [
            {
              categoryId: 40201,
              parentId: 402,
              name: "Outer",
              image: HOMMERTW1,
            },
            {
              categoryId: 40202,
              parentId: 402,
              name: "Top",
              image: HOMMERTW2,
            },
            {
              categoryId: 40203,
              parentId: 402,
              name: "Pants",
              image: HOMMERTW3,
            },
            {
              categoryId: 40204,
              parentId: 402,
              name: "Suit&Others",
              image: HOMMERTW4,
            },
          ],
        },
      ],
    },
    {
      categoryId: 5,
      parentId: null,
      name: "Shoes",
      subCategoryList: [
        {
          categoryId: 501,
          parentId: 5,
          name: "Lady",
          subCategoryList: [
            {
              categoryId: 50101,
              parentId: 501,
              name: "Lady",
              image: LADYSHOES1,
            },
          ],
        },
        {
          categoryId: 502,
          parentId: 5,
          name: "Homme",
          subCategoryList: [
            {
              categoryId: 50201,
              parentId: 502,
              name: "Homme",
              image: HOMMESHOES1,
            },
          ],
        },
      ],
    },
    {
      categoryId: 6,
      parentId: null,
      name: "SLG",
      subCategoryList: [
        {
          categoryId: 601,
          parentId: 6,
          name: "Lady",
          subCategoryList: [
            {
              categoryId: 60101,
              parentId: 601,
              name: "Lady",
              image: LADYSLG1,
            },
          ],
        },
        {
          categoryId: 602,
          parentId: 6,
          name: "Homme",
          subCategoryList: [
            {
              categoryId: 60201,
              parentId: 602,
              name: "Homme",
              image: HOMMESLG1,
            },
          ],
        },
      ],
    },
    {
      categoryId: 7,
      parentId: null,
      name: "FJTP",
      subCategoryList: [
        {
          categoryId: 701,
          parentId: 7,
          name: "FJTP",
          subCategoryList: [
            {
              categoryId: 70101,
              parentId: 701,
              name: "FJTP",
              image: FJTP1,
            },
          ],
        },
      ],
    },
  ],
};

export async function clientLoader() {
  return MOCK_CATEGORY;
}

export default function CategoryPage() {
  return (
    <CategoryProvider>
      <CategoryIndex />
    </CategoryProvider>
  );
}
