import { formatClass } from ".";

test("get format className when className have unnecessary whitespaces", () => {
  expect(formatClass(" classA classB  classC  classD")).toBe(
    "classA classB classC classD"
  );
});

test("get format className when className is empty", () => {
  expect(formatClass("  ")).toBe("");
});
