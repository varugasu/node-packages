import { multiply } from "lib/utils";
import { components } from "lib";

import { test, expect } from "vitest";

test("multiply", () => {
  console.log(components.CircularProgress);
  expect(multiply(3, 3)).toBe(9);
});
