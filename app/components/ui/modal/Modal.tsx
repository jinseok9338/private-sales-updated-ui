﻿import React, { useEffect } from "react";
import { cn } from "~/lib/utils";
import ModalDefault from "./ModalDefault";
import ModalForm from "./ModalForm";
import ModalContainer from "./ModalContainer";
import ModalHeader from "./ModalHeader";
import useModal from "~/stores/modalStores";

export const MODAL_Z_INDEX = 50;
export const MODAL_SIZE: Record<ModalSize, string> = {
  sm: "400px",
  md: "640px",
  lg: "800px",
  xl: "1000px",
  full: "100%",
  half: "50%",
  "2xl": "1200px",
  "3xl": "1400px",
};

const Modal = ({
  className,
  size = "md",
  forcusLockDisabled,
  ...rest
}: ModalProps): React.JSX.Element | null => {
  const { setFocusLockDisabled } = useModal();

  useEffect(() => {
    if (forcusLockDisabled) {
      setFocusLockDisabled(forcusLockDisabled);
    }
    return () => {
      setFocusLockDisabled(false);
    };
  }, []);
  if ("alert" in rest || "content" in rest) {
    return <ModalDefault {...rest} className={className} size={size} />;
  }

  if ("form" in rest) {
    return <ModalForm {...rest} className={className} size={size} />;
  }

  if ("custom" in rest) {
    const { custom } = rest;
    return (
      <Modal.Container className={className} size={size}>
        {custom}
      </Modal.Container>
    );
  }

  return <Modal.Container>Need any content...</Modal.Container>;
};

const ModalContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full overflow-y-auto overflow-x-hidden", className)}>
      {children}
    </div>
  );
};

const ModalFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-flow-col justify-items-stretch gap-x-1",
        className
      )}
    >
      {children}
    </div>
  );
};

const ModalGround = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex h-full w-full items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

/*
# Modal 구조
Ground
└── Modal
    └── Container
        ├── Header
        ├── Content
        └── Footer
*/
/**
 *  모달의 배경
 */
Modal.Ground = ModalGround;
/**
 * 모달의 컨테이너
 */
Modal.Container = ModalContainer;
Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
