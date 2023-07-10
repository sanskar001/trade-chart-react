import React, { useContext, useRef, useState } from "react";
import Modal from "@/theme/Modal";
import ProductSearch from "../ProductSearch";
import SymbolSearch from "../SymbolSearch";
import Heading from "../SymbolSearch/Heading";
import { Product, SymbolType } from "@ChartWidget/type";
import { ChartContext } from "@/store/chart-context";

interface SymbolModalProps {
  isShowModal: boolean;
  onClose: () => void;
}

const SymbolModal: React.FC<SymbolModalProps> = ({ isShowModal, onClose }) => {
  const chartCtx = useContext(ChartContext);
  const productRef = useRef<Product>("");
  const [isSymbol, setIsSymbol] = useState<boolean>(false);

  const modalCloseHandler = () => {
    onClose();
    setIsSymbol(false);
  };

  const productSelectHandler = (val: Product) => {
    productRef.current = val;
    setIsSymbol(true);
  };

  const symbolSelectHandler = (val: SymbolType) => {
    chartCtx.setSymbol(val);
    onClose();
  };

  const modalHeading = isSymbol ? (
    <Heading onBack={setIsSymbol.bind(null, false)} />
  ) : (
    "Product Search"
  );

  return (
    <Modal
      isShowModal={isShowModal}
      onClose={modalCloseHandler}
      heading={modalHeading}
      footerText="Simply start typing while on the chart to pull up this search box"
      modalClass="max-w-[750px] w-[85%] h-[80%]"
    >
      {isSymbol ? (
        <SymbolSearch
          product={productRef.current}
          onSelectSymbol={symbolSelectHandler}
        />
      ) : (
        <ProductSearch onSelect={productSelectHandler} />
      )}
    </Modal>
  );
};

export default SymbolModal;
