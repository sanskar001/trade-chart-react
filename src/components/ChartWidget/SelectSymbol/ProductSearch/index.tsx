import React, { useEffect, useMemo, useState } from "react";
import SearchField from "@/theme/SearchField";
import ProductFilter from "./ProductFilter";
import ProductGroup from "./ProductGroup";
import { datafeed } from "@/repo/datafeed";
import { Product, ProductList } from "@ChartWidget/type";

interface ProductSearchProps {
  onSelect: (_val: Product) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSelect }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [productList, setProductList] = useState<ProductList>([]);

  useEffect(() => {
    datafeed.getProducts(
      (val) => setProductList(val),
      (err) => alert(err.message)
    );
  }, []);

  const filteredProductList = useMemo(() => {
    return productList.filter((product) =>
      product.includes(searchValue.trim().toLowerCase())
    );
  }, [productList, searchValue]);

  return (
    <div className="h-full flex flex-col">
      <SearchField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ProductFilter
        selectedValue={searchValue.toLowerCase()}
        onSelect={(val) => setSearchValue(val)}
      />
      <ProductGroup
        productList={filteredProductList}
        onSelect={(prod) => onSelect(prod)}
      />
    </div>
  );
};

export default ProductSearch;
