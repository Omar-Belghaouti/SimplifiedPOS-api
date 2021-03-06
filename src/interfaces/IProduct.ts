import { ProductTypes } from "../models/Product";

/**
 * Product interface
 */
export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  productType: ProductTypes;
}
