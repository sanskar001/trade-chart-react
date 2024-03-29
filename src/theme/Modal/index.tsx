import React from "react";
import { createPortal } from "react-dom";
import Button from "../Button";
import CloseICon from "../../components/SVG/CloseIcon";
import { formatClass } from "../../util/formatClass";
import { BackDropProps, ModalProps, ModalWindowProps } from "./type";

const BackDrop: React.FC<BackDropProps> = ({ backdropClass = "", onClose }) => (
  <div
    className={formatClass(`backdrop ${backdropClass}`)}
    onClick={onClose}
  ></div>
);

const ModalWindow: React.FC<ModalWindowProps> = ({
  children,
  onClose,
  heading = "",
  modalClass = "",
  footerText = "",
}) => (
  <div className={formatClass(`modal ${modalClass}`)}>
    {heading && (
      <div className="modal-header">
        <h4>{heading}</h4>
        <Button className="p-1" onClick={onClose}>
          <CloseICon />
        </Button>
      </div>
    )}
    <div className="modal-body">{children}</div>
    {footerText && <div className="modal-footer">{footerText}</div>}
  </div>
);

const Modal: React.FC<ModalProps> = ({
  children,
  isShowModal = false,
  onClose,
  heading = "",
  modalClass = "",
  backdropClass = "",
  footerText = "",
}) => {
  const chartWidgetContainer = document.getElementById("chart-widget");

  return (
    <React.Fragment>
      {isShowModal &&
        createPortal(
          <ModalWindow
            onClose={onClose}
            modalClass={modalClass}
            heading={heading}
            footerText={footerText}
          >
            {children}
          </ModalWindow>,
          chartWidgetContainer as Element
        )}
      {isShowModal &&
        createPortal(
          <BackDrop onClose={onClose} backdropClass={backdropClass} />,
          chartWidgetContainer as Element
        )}
    </React.Fragment>
  );
};

export default Modal;
