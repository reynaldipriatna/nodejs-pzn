import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "rey",
        name: "Reynaldi Priatna",
        email: "reynaldipriatna@mail.com",
        phone: "081234567890",
      },
    });

    expect(customer.id).toBe("rey");
    expect(customer.name).toBe("Reynaldi Priatna");
    expect(customer.email).toBe("reynaldipriatna@mail.com");
    expect(customer.phone).toBe("081234567890");
  });

  it("should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        phone: "081122334455",
      },
      where: {
        id: "rey",
      },
    });

    expect(customer.id).toBe("rey");
    expect(customer.name).toBe("Reynaldi Priatna");
    expect(customer.email).toBe("reynaldipriatna@mail.com");
    expect(customer.phone).toBe("081122334455");
  });

  it("should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "rey",
      },
    });

    expect(customer.id).toBe("rey");
    expect(customer.name).toBe("Reynaldi Priatna");
    expect(customer.email).toBe("reynaldipriatna@mail.com");
    expect(customer.phone).toBe("081122334455");
  });

  it("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "rey",
      },
    });

    expect(customer.id).toBe("rey");
    expect(customer.name).toBe("Reynaldi Priatna");
    expect(customer.email).toBe("reynaldipriatna@mail.com");
    expect(customer.phone).toBe("081122334455");
  });
});
