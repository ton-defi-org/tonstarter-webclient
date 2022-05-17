import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { ReactNode } from "react";

export interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

function Modal(props: Props) {
  const { onClose, open, title, children } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {children}
    </Dialog>
  );
}

export { Modal };
