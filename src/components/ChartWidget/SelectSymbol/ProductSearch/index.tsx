import React, { useEffect, useState } from "react";
import SearchField from "@/theme/SearchField";
import { historyProduct } from "@/repo/historyProduct";
import RadioTag from "@/theme/RadioTag";
import mockProductData from "@/mocks/product-data.json";
import { ProductList } from "./type";
import RightArrow from "@/components/SVG/RightArrow";

interface ProductSearchProps {
  onSelect: (_val: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSelect }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [productList, setProductList] = useState<ProductList>([]);

  useEffect(() => {
    const newProductList = mockProductData.data.map((item) => ({
      value: item.Value,
      label: item.Value.toUpperCase(),
    }));
    setProductList(newProductList);
  }, []);

  return (
    <div className="h-full flex flex-col">
      <SearchField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        autoFocus
        placeholder="Search Product"
      />
      {false && historyProduct && (
        <div className="flex items-center gap-2 px-5 py-3">
          {historyProduct.map((product) => {
            return (
              <RadioTag
                key={product.value}
                name="product-filter"
                value={product.value}
                label={product.label}
                checked={product.value === searchValue}
                onChange={setSearchValue.bind(null, product.value)}
              />
            );
          })}
        </div>
      )}
      <div className="flex-1 overflow-y-auto">
        {productList.map((product) => {
          return (
            <div
              key={product.value}
              className="h-[40px] flex items-center gap-4 px-5 border-b border-b-alice-blue hover:bg-alice-blue hover:text-royal-blue last:border-b-0"
              onClick={() => {
                setSearchValue(product.value);
                onSelect(product.value);
              }}
            >
              <RightArrow />
              <p>{product.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSearch;
