beforeEach(() => {
  console.log("Before Each 1");
});

afterEach(() => {
  console.log("After Each 1");
});

describe("Inner Scope", () => {
  beforeEach(() => {
    console.log("Inner Before Each 1");
  });

  afterEach(() => {
    console.log("Inner After Each 1");
  });

  describe("Inner Inner Scope", () => {
    beforeEach(() => {
      console.log("Inner Inner Before Each 1");
    });
    afterEach(() => {
      console.log("Inner Inner After Each 1");
    });
    test("Test 1", () => {
      console.info("Test 1");
    });
    test("Test 2", () => {
      console.info("Test 2");
    });
  });
});
