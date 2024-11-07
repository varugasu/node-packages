import { defineBuildConfig } from "unbuild";
import * as glob from "glob";

const entries = glob.sync("src/**/index.ts");

export default defineBuildConfig({
  entries,
  rollup: {
    emitCJS: true,
  },
  sourcemap: true,
  outDir: "dist",
  declaration: true,
});
