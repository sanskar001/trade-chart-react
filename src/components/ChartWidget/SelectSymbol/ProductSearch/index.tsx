import React, { useEffect, useMemo, useState } from "react";
import Button from "@/theme/Button";
import SearchField from "@/theme/SearchField";
import RadioTag from "@/theme/RadioTag";
import RightArrow from "@/components/SVG/RightArrow";
import Ghost from "@/components/SVG/Ghost";
import { mockDatafeed } from "@/repo/datafeed";
import { historyProducts } from "@/util/historyProducts";
import { ProductList } from "@ChartWidget/type";

interface ProductSearchProps {
  onSelect: (_val: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSelect }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [savedProducts, setSavedProducts] = useState<ProductList>([]);

  useEffect(() => {
    setSavedProducts(historyProducts.get());
  }, []);

  const productList: ProductList = useMemo(() => {
    const data = mockDatafeed.getProducts();
    return data.map((product) => product.toLowerCase());
  }, []);

  const filteredProductList: ProductList = useMemo(() => {
    return productList.filter((product) =>
      product.includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  return (
    <div className="h-full flex flex-col">
      <SearchField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        autoFocus
        placeholder="Search Product"
      />
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
                  checked={product === searchValue}
                  onChange={setSearchValue.bind(null, product)}
                />
              );
            })}
          </div>
          <Button
            onClick={() => {
              historyProducts.removeAll();
              setSavedProducts([]);
            }}
            className="text-sm font-semibold text-royal-blue p-1"
          >
            Clear
          </Button>
        </div>
      )}
      <div className="flex-1 overflow-y-auto">
        {filteredProductList.length > 0 ? (
          filteredProductList.map((product) => {
            return (
              <div
                key={product}
                className="h-[40px] flex items-center gap-4 px-5 border-b border-b-alice-blue hover:bg-alice-blue hover:text-royal-blue last:border-b-0"
                onClick={() => {
                  historyProducts.add(product);
                  onSelect(product);
                }}
              >
                <RightArrow />
                <p className="uppercase">{product}</p>
              </div>
            );
          })
        ) : (
          <div className="h-full flex flex-col gap-2 items-center justify-center">
            <Ghost />
            <p>No products match your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
