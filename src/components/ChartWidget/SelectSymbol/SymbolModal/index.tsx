import React, { useState } from "react";
import Modal from "@/theme/Modal";
import ProductSearch from "../ProductSearch";
import SymbolSearch from "../SymbolSearch";

interface SymbolModalProps {
  isShowModal: boolean;
  onClose: () => void;
}

const SymbolModal: React.FC<SymbolModalProps> = ({ isShowModal, onClose }) => {
  const [product, setProduct] = useState<string>("");
  const [showSymbolSearch, setShowSymbolSearch] = useState<boolean>(false);

  return (
    <Modal
      isShowModal={isShowModal}
      onClose={onClose}
      heading="Product Search"
      footerText="Simply start typing while on the chart to pull up this search box"
      modalClass="w-[85%] h-[80%]"
    >
      {!showSymbolSearch && (
        <ProductSearch
          onSelect={(val) => {
            setProduct(val);
            setShowSymbolSearch(true);
          }}
        />
      )}
      {showSymbolSearch && (
        <SymbolSearch
          product={product}
          onBack={setShowSymbolSearch.bind(null, false)}
        />
      )}
    </Modal>
  );
};

export default SymbolModal;
