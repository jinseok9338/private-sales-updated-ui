import { Navigate } from "react-router";
import { CHECKOUT_FAIL_REASON_MESSAGE } from "~/constants/QueryStringKeys";
import CheckoutSuccess from "~/pages/checkout/success";
import type { Route } from "./+types/(checkout-success).checkout.success._index";
import { getOrderData } from "~/pages/checkout/success/services/api";

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const url = new URL(request.url);
  const orderId = url.searchParams.get("orderId");

  if (!orderId) {
    return {
      orderData: [],
    };
  }

  const orderData = await getOrderData(orderId);
  return {
    orderData,
  };
}

const CheckoutSuccessRoute = ({ loaderData }: Route.ComponentProps) => {
  const { orderData } = loaderData;

  if (orderData.length === 0) {
    return (
      <Navigate
        to={`/checkout/fail?${CHECKOUT_FAIL_REASON_MESSAGE.key}=주문번호가 없습니다.`}
        replace
      />
    );
  }

  return <CheckoutSuccess />;
};

export default CheckoutSuccessRoute;
