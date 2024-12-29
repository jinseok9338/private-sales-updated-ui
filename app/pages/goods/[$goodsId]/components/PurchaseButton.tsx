import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import ParagraphS from "~/components/ui/typo/paragraph_s";
import useModal from "~/stores/modalStores";

const PurchaseButton = () => {
  const { openModal, closeAllModal } = useModal();
  const navigate = useNavigate();
  const handleClickOK = () => {
    navigate("/cart");
    closeAllModal();
  };
  const handleClickCancel = () => {
    navigate("/");
    closeAllModal();
  };

  const handleClickPurchase = () => {
    openModal({
      content: (
        <div>
          <ParagraphS>해당 상품이 장바구니에 담겼습니다.</ParagraphS>
        </div>
      ),
      txtOK: "장바구니 가기",
      txtCancel: "쇼핑 계속 하기",
      handleOk: handleClickOK,
      handleCancel: handleClickCancel,
    });
  };
  return (
    <div className="fixed bottom-[--footer-height] left-0 right-0 p-4 bg-white border-t">
      <div className="flex gap-4 max-w-2xl mx-auto">
        <Button onClick={handleClickPurchase} className="flex-1 h-14">
          구매하기
        </Button>
      </div>
    </div>
  );
};

export default PurchaseButton;
