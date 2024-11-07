import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    {
      builder: "mkdist",
      input: "src/",
      distDir: "dist",
      ext: "js",
      format: "esm",
    },
  ],
  outDir: "dist",
  declaration: true,
});
