export type Product = string;

export type ProductList = Array<Product>;

type GetProductsHandler = () => ProductList;

export interface Datafeed {
  getProducts: GetProductsHandler;
}
