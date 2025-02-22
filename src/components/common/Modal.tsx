"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { type PropsWithChildren } from "react";

type ModalProps = PropsWithChildren &
  React.ComponentPropsWithoutRef<"div"> & {
    open: boolean;
    onClose: () => void;
    className?: string;
    header?: string;
    description?: string;
    titleClassName?: string;
    descriptionClassName?: string;
  };

const Modal = ({
  onClose,
  open,
  header,
  description,
  children,
  titleClassName,
  descriptionClassName,
  className,
  ...props
}: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent {...props} className={className}>
        {header && (
          <DialogHeader>
            <DialogTitle className={titleClassName}>{header}</DialogTitle>
            {description && (
              <DialogDescription className={descriptionClassName}>
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
