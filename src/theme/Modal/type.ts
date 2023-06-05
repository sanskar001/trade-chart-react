type CloseHandlerType = () => void;

export interface BackDropProps {
  backdropClass?: string;
  onClose: CloseHandlerType;
}

export interface ModalWindowProps {
  children: React.ReactNode;
  onClose: CloseHandlerType;
  heading?: React.ReactNode;
  modalClass?: string;
  footerText?: string;
}

export interface ModalProps extends BackDropProps, ModalWindowProps {
  isShowModal: boolean;
}
