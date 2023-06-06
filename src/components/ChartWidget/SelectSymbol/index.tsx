import React, { useContext, useState } from "react";
import Button from "@/theme/Button";
import SymbolModal from "./SymbolModal";
import { ChartContext } from "@/store/chart-context";

const SelectSymbol: React.FC = () => {
  const chartCtx = useContext(ChartContext);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={setShowModal.bind(null, true)}
        className="h-full w-[100px] px-2 uppercase text-sm font-semibold text-left text-truncate"
      >
        {chartCtx.symbol.product}
      </Button>
      <SymbolModal
        isShowModal={showModal}
        onClose={setShowModal.bind(null, false)}
      />
    </>
  );
};

export default SelectSymbol;
