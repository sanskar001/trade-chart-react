import React, { useState } from "react";
import Button from "@/theme/Button";
import { SymbolType } from "./SymbolList/type";
import SymbolModal from "./SymbolModal";

interface SymbolSearchProps {
  selectedSymbol: SymbolType;
  setSymbol: (_val: SymbolType) => void;
}

const SymbolSearch: React.FC<SymbolSearchProps> = ({
  selectedSymbol,
  setSymbol,
}) => {
  const [showSymbolModal, setShowSymbolModal] = useState<boolean>(false);

  const selectSymbolHandler = (val: SymbolType) => {
    setSymbol(val);
    setShowSymbolModal(false);
  };

  return (
    <>
      <Button
        onClick={setShowSymbolModal.bind(null, true)}
        className="h-full w-[130px] px-2 text-sm font-semibold text-left text-truncate"
      >
        {selectedSymbol.product}
      </Button>
      <SymbolModal
        isShowModal={showSymbolModal}
        onClose={setShowSymbolModal.bind(null, false)}
        onSelectSymbol={(val) => selectSymbolHandler(val)}
      />
    </>
  );
};

export default SymbolSearch;
