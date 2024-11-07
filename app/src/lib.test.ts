import { multiply } from "lib/utils";

import { test, expect } from "vitest";

test("multiply", () => {
  expect(multiply(3, 3)).toBe(9);
});
