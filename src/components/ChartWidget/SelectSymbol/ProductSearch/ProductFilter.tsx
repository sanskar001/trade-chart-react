import React, { useState, useEffect } from "react";
import RadioTag from "@/theme/RadioTag";
import Button from "@/theme/Button";
import { historyProducts } from "@/util/historyProducts";
import { Product, ProductList } from "@ChartWidget/type";

interface ProductFilterProps {
  selectedValue: string;
  onSelect: (_val: Product) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  selectedValue,
  onSelect,
}) => {
  const [savedProducts, setSavedProducts] = useState<ProductList>([]);

  useEffect(() => {
    setSavedProducts(historyProducts.get());
  }, []);

  const clearFilterHandler = () => {
    historyProducts.removeAll();
    setSavedProducts([]);
  };

  return (
    <>
      {savedProducts.length > 0 && (
        <div className="flex items-start justify-between px-5 py-3">
          <div className="flex items-center flex-wrap gap-2">
            {savedProducts.map((product) => {
              return (
                <RadioTag
                  key={product}
                  name="product-filter"
                  value={product}
                  label={product.toUpperCase()}
                  checked={product === selectedValue}
                  onChange={onSelect.bind(null, product)}
                />
              );
            })}
          </div>
          <Button
            onClick={clearFilterHandler}
            className="text-sm font-semibold text-royal-blue p-1"
          >
            Clear
          </Button>
        </div>
      )}
    </>
  );
};

export default ProductFilter;
