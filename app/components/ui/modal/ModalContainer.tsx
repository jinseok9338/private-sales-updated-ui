import { motion } from "framer-motion";
import React from "react";
import { MODAL_SIZE } from "./Modal";
import { cn } from "~/lib/utils";
const effect = {
  hidden: {
    y: "-2vh",
    scale: 1.1,
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    scale: 1,
    transition: {
      type: "easeOut",
      duration: 0.2,
    },
  },
  exit: {
    y: "2vh",
    scale: 0.9,
    opacity: 0,
    transition: {
      type: "easeIn",
      duration: 0.2,
    },
  },
};

interface IModalContainerProps {
  children: React.ReactNode;
  size?: ModalSize;
  className?: string;
}

const ModalContainer = ({
  children,
  className,
  size = "md",
}: IModalContainerProps): React.JSX.Element | null => {
  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
      tabIndex={-1}
      role="dialog"
      className={cn(
        "relative inset-0",
        "flex max-h-full max-w-full flex-col scroll-auto",
        isMobile ? "h-full !w-full px-6" : "p-10",
        className || "gap-6 bg-white shadow"
      )}
      style={{ width: MODAL_SIZE[size || "md"] }}
      variants={effect}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </motion.div>
  );
};

export default ModalContainer;
