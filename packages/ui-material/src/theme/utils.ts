import { pipe } from "ramda"
import { arrToArgs } from "../utils"
import type { pacificoDefaultTheme } from "."

export const transformToSassVars = (prefix:string)=>
  (token:string, value: string)=>`$${prefix}-${token}: ${value};\n`

const parseToSassVars = pipe(transformToSassVars, arrToArgs)

export const transformBreakP = parseToSassVars('breakpoint')

type Breakpoints = typeof pacificoDefaultTheme.breakpoints

export const getBreakPointsAsSass = ({values, unit}: Breakpoints) => Object
  .entries(values)
  .map(([bp, value])=>[bp, `${value}${unit}`])
  .map(transformBreakP)
  .join('')


type Palette = typeof pacificoDefaultTheme.palette

export const getPaletteAsSAss = (palette: Palette)=>
  Object.entries(palette)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value])=>value.constructor.name === "Object")
    .flatMap(([token, variants])=> Object
      .entries(variants)
      .map<string>(parseToSassVars(`palette-${token}`))
    )
    .join(' ')