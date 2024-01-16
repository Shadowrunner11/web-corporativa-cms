import { defineConfig } from "tsup";
import { readFileSync, writeFileSync } from 'node:fs';
import { getBreakPointsAsSass, getPaletteAsSAss } from "./src/theme/utils";
import { pacificoDefaultTheme } from "./src";

// TODO: consider splitting

getBreakPointsAsSass(pacificoDefaultTheme.breakpoints)
getPaletteAsSAss(pacificoDefaultTheme.palette)

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

    const bpVars = getBreakPointsAsSass(pacificoDefaultTheme.breakpoints)
    const paletteVars = getPaletteAsSAss(pacificoDefaultTheme.palette)

    writeFileSync('./dist/_bpVars.scss', bpVars)
    writeFileSync('./dist/_paletteVars.scss', paletteVars)
  },
});
