import { add } from "esm-only/dist/utils";

export const multiply = (a: number, b: number) => {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result = add(result, a);
  }
  return result;
};
