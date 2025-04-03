import { useQuery } from "@tanstack/react-query";
import { getProdutDetail } from "../services/api";

export const PRODUCT_DETAIL_QUERY_KEY = "productDetail";

const useGetProductDetail = (goodsId: string) => {
  return useQuery({
    queryKey: [PRODUCT_DETAIL_QUERY_KEY, goodsId],
    queryFn: () => getProdutDetail(goodsId),
    enabled: !!goodsId,
  });
};

export default useGetProductDetail;
