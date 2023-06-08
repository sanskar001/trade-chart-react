import React, { useEffect, useMemo, useCallback, useState } from "react";
import Loader from "@/theme/Loader";
import SearchField from "@/theme/SearchField";
import ProductFilter from "./ProductFilter";
import ProductGroup from "./ProductGroup";
import { datafeed } from "@/repo/datafeed";
import { Product, ProductList } from "@ChartWidget/type";

interface ProductSearchProps {
  onSelect: (_val: Product) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSelect }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [productList, setProductList] = useState<ProductList>([]);

  const getProductHandler = useCallback(() => {
    setLoading(true);

    datafeed.getProducts(
      (val) => {
        setProductList(val);
        setLoading(false);
      },
      (err) => {
        alert(err.message);
        setLoading(false);
      }
    );
  }, []);

  useEffect(getProductHandler, []);

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
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <ProductGroup
          productList={filteredProductList}
          onSelect={(prod) => onSelect(prod)}
        />
      )}
    </div>
  );
};

export default ProductSearch;
