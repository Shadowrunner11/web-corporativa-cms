import { defineConfig } from "tsup";
import { readFileSync, writeFileSync } from 'node:fs';

// TODO: consider splitting

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  clean: true,
  sourcemap: true,
  format: ['esm', "cjs"],
  treeshake: true,
  external:['@emotion/react', '@emotion/styled', 'react', 'react-dom'],
  outExtension(ctx) {
    return {
      js: `.${ctx.format}.js`
    }
  },
  async onSuccess() {
    const path = './dist/index.esm.js'

    const prevData = readFileSync(path).toString()

    writeFileSync(path, '"use client";\n'+prevData)

  },
});
