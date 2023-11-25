import { getProductById, getProducts } from "../src/database";
import { ProductService } from "../src/product-service.js";

jest.mock("../src/database.js");

test("Mock Modules getProductById", () => {
  getProductById.mockImplementation(() => {
    return {
      id: 1,
      name: "Product Mock",
    };
  });

  const product = ProductService.findById(1);
  expect(product).toEqual({
    id: 1,
    name: "Product Mock",
  });
});

test("Mock Modules getProducts", () => {
  const products = [
    {
      id: 1,
      name: "Product Mock 1",
    },
    {
      id: 2,
      name: "Product Mock 2",
    },
  ];

  getProducts.mockImplementation(() => {
    return products;
  });

  expect(ProductService.findAll()).toEqual(products);
});
