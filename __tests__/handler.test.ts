import { main } from "../app";

test("hello", async () => {
  expect(main()).toBe("Hello World!");
});
