import React, { useState } from "react";
import Button from "@/theme/Button";
import SymbolModal from "./SymbolModal";

const SelectSymbol: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={setShowModal.bind(null, true)}
        className="h-full w-[130px] px-2 text-sm font-semibold text-left text-truncate"
      >
        RELIANCE
      </Button>
      <SymbolModal
        isShowModal={showModal}
        onClose={setShowModal.bind(null, false)}
      />
    </>
  );
};

export default SelectSymbol;
