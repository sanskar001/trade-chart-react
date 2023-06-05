import React, { useMemo, useState } from "react";
import Button from "@/theme/Button";
import SearchField from "@/theme/SearchField";
import RadioTag from "@/theme/RadioTag";
import RightArrow from "@/components/SVG/RightArrow";
import { historyProduct } from "@/repo/historyProduct";
import { mockDatafeed } from "@/repo/datafeed";

interface ProductSearchProps {
  onSelect: (_val: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSelect }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const productList = useMemo(() => mockDatafeed.getProducts(), []);

  return (
    <div className="h-full flex flex-col">
      <SearchField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        autoFocus
        placeholder="Search Product"
      />
      {historyProduct && (
        <div className="flex items-start justify-between px-5 py-3">
          <div className="flex items-center flex-wrap gap-2">
            {historyProduct.map((product) => {
              return (
                <RadioTag
                  key={product}
                  name="product-filter"
                  value={product}
                  label={product.toUpperCase()}
                  checked={product === searchValue}
                  onChange={setSearchValue.bind(null, product)}
                />
              );
            })}
          </div>
          <Button className="text-sm font-semibold text-royal-blue p-1">
            Clear
          </Button>
        </div>
      )}
      <div className="flex-1 overflow-y-auto">
        {productList.map((product) => {
          return (
            <div
              key={product}
              className="h-[40px] flex items-center gap-4 px-5 border-b border-b-alice-blue hover:bg-alice-blue hover:text-royal-blue last:border-b-0"
              onClick={() => {
                setSearchValue(product);
                onSelect(product);
              }}
            >
              <RightArrow />
              <p className="uppercase">{product}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSearch;
