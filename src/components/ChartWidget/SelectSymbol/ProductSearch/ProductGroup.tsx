import React from "react";
import Ghost from "@/components/SVG/Ghost";
import { historyProducts } from "@/util/historyProducts";
import { Product, ProductList } from "@ChartWidget/type";
import ArrowIcon from "@/components/SVG/ArrowIcon";

interface ProductGroupProps {
  productList: ProductList;
  onSelect: (_product: Product) => void;
}

const ProductGroup: React.FC<ProductGroupProps> = ({
  productList,
  onSelect,
}) => {
  const selectProductHandler = (product: Product) => {
    historyProducts.add(product);
    onSelect(product);
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {productList.length > 0 ? (
        productList.map((product) => {
          return (
            <div
              key={product}
              className="h-[40px] flex items-center gap-4 px-5 border-b border-b-alice-blue hover:bg-alice-blue hover:text-royal-blue last:border-b-0 cursor-default"
              onClick={selectProductHandler.bind(null, product)}
            >
              <ArrowIcon direction="right" />
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
  );
};

export default ProductGroup;
