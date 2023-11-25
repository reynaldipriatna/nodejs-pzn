import { getProductById, getProducts } from "./database.js";

export class ProductService {
  static findById(id) {
    return getProductById(id);
  }

  static findAll() {
    return getProducts();
  }
}
