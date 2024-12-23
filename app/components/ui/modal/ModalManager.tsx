import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect } from "react";
import FocusLock from "react-focus-lock";
import useModal from "~/stores/modalStores";
import ModalBackdrop from "./ModalBackdrop";
import Modal, { MODAL_Z_INDEX } from "./Modal";

// REF : https://gist.github.com/magalhaespaulo/737a5c35048c18b8a2209d8a9fae977c - tailwind with framer-motion

const Modals = () => {
  const { modals, closeModal, focusLockDisabled } = useModal();

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (
          modals.length > 0 &&
          modals[modals.length - 1].disabledEscKey !== true
        ) {
          closeModal();
        }
      }
    },
    [modals]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);

  return (
    <ModalBackdrop zIndex={MODAL_Z_INDEX}>
      <AnimatePresence initial={false}>
        <FocusLock disabled={focusLockDisabled}>
          {modals.map((modalProps, idx) => {
            return (
              <Modal.Ground key={idx}>
                <Modal {...modalProps} />
              </Modal.Ground>
            );
          })}
        </FocusLock>
      </AnimatePresence>
    </ModalBackdrop>
  );
};

export default Modals;
