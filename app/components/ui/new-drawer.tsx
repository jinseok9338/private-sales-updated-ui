import { motion, useAnimation, type PanInfo } from "framer-motion";
import { useCallback, useRef, type ReactNode, useEffect } from "react";
import useEscKeyClose from "~/hooks/useEscKeyClose";

interface DrawerProps {
  /** The content to be rendered inside the drawer */
  children: ReactNode;
  /** Whether the drawer is currently open */
  isOpen: boolean;
  /** Callback function when the drawer closes */
  onClose: () => void;
  /** Optional trigger component to open the drawer */
  trigger?: ReactNode;
  /** Optional footer component */
  footer?: ReactNode;
  /** Optional z-index for the drawer (default: 50) */
  zIndex?: number;
  /** Optional close threshold percentage (default: 0.3) */
  closeThreshold?: number;
  /** Direction of the drawer (default: 'bottom') */
  direction?: "top" | "bottom";
  /** Optional offset for the drawer (default: 0) */
}

const AcDrawer = ({
  children,
  isOpen,
  onClose,
  trigger,
  footer,
  zIndex = 50,
  closeThreshold = 0.3,

  direction = "bottom",
}: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const overlayControls = useAnimation();

  const isTop = direction === "top";

  // Watch for isOpen changes and animate accordingly
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (drawerRef.current) drawerRef.current.style.display = "block";
      if (overlayRef.current) overlayRef.current.style.display = "block";

      overlayControls.start({ opacity: 0.7 });
      controls.start("visible");
    } else {
      const handleCloseAnimation = async () => {
        await Promise.all([
          overlayControls.start({ opacity: 0 }),
          controls.start("hidden"),
        ]);

        document.body.style.overflow = "unset";
        if (drawerRef.current) drawerRef.current.style.display = "none";
        if (overlayRef.current) overlayRef.current.style.display = "none";
      };

      handleCloseAnimation();
    }
  }, [isOpen, controls, overlayControls]);

  const handleClose = () => {
    onClose();
  };

  useEscKeyClose(handleClose);

  const onDragEnd = useCallback(
    (event: PointerEvent, { point, velocity }: PanInfo): void => {
      if (!drawerRef.current) return;

      const drawerHeight = drawerRef.current.getBoundingClientRect().height;

      const shouldClose = isTop
        ? // For top drawer: close on upward movement or when dragged up past threshold
          velocity.y < -20 ||
          (velocity.y <= 0 && point.y < -drawerHeight * closeThreshold)
        : // For bottom drawer: close on downward movement or when dragged down past threshold
          velocity.y > 20 ||
          (velocity.y >= 0 && point.y > drawerHeight * closeThreshold);

      if (shouldClose) {
        handleClose();
      } else {
        controls.start("visible");
      }
    },
    [closeThreshold, onClose, isTop]
  );

  return (
    <>
      {trigger && <div>{trigger}</div>}

      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={overlayControls}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black overflow-hidden"
        style={{
          display: "none",
          zIndex: zIndex - 1,
        }}
        onClick={handleClose}
      />

      <motion.div
        ref={drawerRef}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { y: isTop ? "-100%" : "100%" },
          visible: { y: 0 },
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
        }}
        className={`fixed ${
          isTop ? "top-0" : "bottom-0"
        } left-0 right-0 bg-white ${isTop ? "rounded-b-2xl" : "rounded-t-2xl"}`}
        style={{
          display: "none",
          zIndex,
        }}
      >
        {!isTop && (
          <header
            ref={headerRef}
            className="relative flex h-6 w-full items-center"
          >
            <motion.div
              className="absolute z-0 flex h-6 w-full cursor-grab items-center justify-center rounded-t-2xl bg-white"
              drag="y"
              dragConstraints={headerRef}
              dragElastic={0.03}
              dragMomentum={false}
              onDragEnd={onDragEnd}
            >
              <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </motion.div>
          </header>
        )}

        <div className="max-h-[calc(100vh-120px)] overflow-y-auto">
          {children}
        </div>

        {footer && <div>{footer}</div>}

        {isTop && (
          <header
            ref={headerRef}
            className="relative flex h-6 w-full items-center"
          >
            <motion.div
              className="absolute z-0 flex h-6 w-full cursor-grab items-center justify-center rounded-b-2xl bg-white"
              drag="y"
              dragConstraints={headerRef}
              dragElastic={0.03}
              dragMomentum={false}
              onDragEnd={onDragEnd}
            >
              <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </motion.div>
          </header>
        )}
      </motion.div>
    </>
  );
};

export default AcDrawer;
