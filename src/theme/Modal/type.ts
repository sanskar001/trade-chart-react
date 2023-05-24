type CloseHandlerType = () => void;

export interface BackDropProps {
  backdropClass?: string;
  onClose: CloseHandlerType;
}

export interface ModalWindowProps {
  children: React.ReactNode;
  onClose: CloseHandlerType;
  headerText?: string;
  modalClass?: string;
  footerText?: string;
}

export interface ModalProps extends BackDropProps, ModalWindowProps {
  isShowModal: boolean;
}
