import { useWindowSize } from "@uidotdev/usehooks";

import React, { type FC, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "../button";
import { cn } from "~/lib/utils";
import Modal from "./Modal";
import StringToHtml from "~/components/ui/StringToHtml";
import useModal from "~/stores/modalStores";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const InfoContainer: FC<ContainerProps> = ({ children, className }) => {
  return (
    <pre
      className={cn(
        "my-6 justify-center gap-2.5 rounded-sm bg-zinc-100 px-4 py-3",
        className
      )}
    >
      {children}
    </pre>
  );
};

export const ContentContainer: FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("justify-center gap-2.5 text-base", className)}>
      {children}
    </div>
  );
};

export const AlertContainer: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "my-6 w-full justify-center gap-2.5 px-4 py-3 text-center text-base",
        className
      )}
    >
      {children}
    </div>
  );
};

const ModalDefault = ({
  className,
  size = "md",
  ...rest
}: ModalProps): React.JSX.Element | null => {
  if (!("alert" in rest) && !("content" in rest)) {
    return null;
  }

  const { closeModal } = useModal();
  const { t } = useTranslation();
  const sizes = useWindowSize();
  const isMobile = sizes.width ?? 0 < 768;

  const {
    // @ts-ignore
    title,
    // @ts-ignore
    hideCloseButton = false,
    handleClose,
    handleOk,
    hideBottomButton,
    handleCancel,
    hideBottomCancelButton,
    txtCancel,
    txtOK,
  } = rest;

  return (
    <Modal.Container
      size={size}
      className={isMobile ? "justify-center gap-4 bg-white" : ""}
    >
      <Modal.Header hideCloseButton={hideCloseButton} handleClose={handleClose}>
        {title}
      </Modal.Header>
      <Modal.Content className={className}>
        <>
          {"info" in rest && <InfoContainer>{rest.info}</InfoContainer>}
          {"alert" in rest && (
            <AlertContainer>
              <StringToHtml text={rest.alert} />
            </AlertContainer>
          )}
          {"content" in rest && (
            <ContentContainer>
              <StringToHtml text={rest.content} />
            </ContentContainer>
          )}
        </>
      </Modal.Content>
      {!hideBottomButton && (
        <Modal.Footer>
          {handleCancel !== undefined ? (
            !hideBottomCancelButton ? (
              <Button
                variant={"secondary"}
                size="default"
                className="min-w-0 border-[1.5px] border-neutral-900"
                onClick={() => {
                  handleCancel();
                }}
              >
                {txtCancel ? txtCancel : t("common.button.cancel")}
              </Button>
            ) : null
          ) : null}
          {txtCancel && !handleCancel && (
            <Button
              variant={"secondary"}
              size="default"
              className="min-w-0 border-[1.5px] border-neutral-900"
              onClick={closeModal}
            >
              {txtCancel}
            </Button>
          )}
          <Button
            variant={"default"}
            size="default"
            onClick={handleOk ? handleOk : closeModal}
            className={hideBottomCancelButton ? "w-40" : "min-w-0"}
          >
            {txtOK ? txtOK : t("common.button.ok")}
          </Button>
        </Modal.Footer>
      )}
    </Modal.Container>
  );
};

export default ModalDefault;
