import React from "react";
import Modal from "./Modal";

const ModalForm = ({
  className,
  size = "md",
  ...rest
}: ModalProps): React.JSX.Element | null => {
  if (!("form" in rest)) {
    return null;
  }

  const { title, hideCloseButton = false, form } = rest;

  return (
    <Modal.Container size={size}>
      <Modal.Header hideCloseButton={hideCloseButton}>{title}</Modal.Header>
      <Modal.Content className={className}>{form}</Modal.Content>
    </Modal.Container>
  );
};

export default ModalForm;
