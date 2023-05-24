import React, { useState } from "react";
import Modal from "@/theme/Modal";

const ChartHeader: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="border-b border-linen-orange">
      <div className="h-[40px] flex items-center p-[2px]">
        <h6 onClick={setShowModal.bind(null, true)}>Chart Header</h6>
        <Modal
          isShowModal={showModal}
          onClose={setShowModal.bind(null, false)}
          modalClass="bg-green-100"
          headerText="Header"
          footerText="Hello Modal footer"
          backdropClass="bg-blue-500/10"
        >
          <div>
            <h1>Modal</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, labore.
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ChartHeader;
