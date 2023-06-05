import React, { useRef, useState } from "react";
import Modal from "@/theme/Modal";
import ProductSearch from "../ProductSearch";
import SymbolSearch from "../SymbolSearch";
import { Product } from "@ChartWidget/type";

interface SymbolModalProps {
  isShowModal: boolean;
  onClose: () => void;
}

const SymbolModal: React.FC<SymbolModalProps> = ({ isShowModal, onClose }) => {
  const productRef = useRef<Product>("");
  const [showSymbolSearch, setShowSymbolSearch] = useState<boolean>(false);

  const modalCloseHandler = () => {
    onClose();
    setShowSymbolSearch(false);
  };

  return (
    <Modal
      isShowModal={isShowModal}
      onClose={modalCloseHandler}
      heading={showSymbolSearch ? "Symbol Search" : "Product Search"}
      footerText="Simply start typing while on the chart to pull up this search box"
      modalClass="w-[85%] h-[80%]"
    >
      {!showSymbolSearch && (
        <ProductSearch
          onSelect={(val) => {
            productRef.current = val;
            setShowSymbolSearch(true);
          }}
        />
      )}
      {showSymbolSearch && (
        <SymbolSearch
          product={productRef.current}
          onBack={() => {
            productRef.current = "";
            setShowSymbolSearch(false);
          }}
        />
      )}
    </Modal>
  );
};

export default SymbolModal;
