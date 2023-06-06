import React, { useRef, useState } from "react";
import Modal from "@/theme/Modal";
import ProductSearch from "../ProductSearch";
import SymbolSearch from "../SymbolSearch";
import Heading from "../SymbolSearch/Heading";
import { Product } from "@ChartWidget/type";

interface SymbolModalProps {
  isShowModal: boolean;
  onClose: () => void;
}

const SymbolModal: React.FC<SymbolModalProps> = ({ isShowModal, onClose }) => {
  const productRef = useRef<Product>("");
  const [isSymbol, setIsSymbol] = useState<boolean>(true);

  const modalCloseHandler = () => {
    onClose();
    setIsSymbol(false);
  };

  const productSelectHandler = (val: Product) => {
    productRef.current = val;
    setIsSymbol(true);
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
      modalClass="w-[85%] h-[80%]"
    >
      {isSymbol ? (
        <SymbolSearch product={productRef.current} />
      ) : (
        <ProductSearch onSelect={productSelectHandler} />
      )}
    </Modal>
  );
};

export default SymbolModal;
