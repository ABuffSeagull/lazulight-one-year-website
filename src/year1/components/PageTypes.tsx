// With so many css classes being set by className={`something-something-${page}`}
// This should help to guard against invalid names
// Method based off: https://stackoverflow.com/a/61132682

// TODO: apply these to fix the border for message boxes for DCL

const Y1Lazu = ['lazulight'] as const
const Y1Home = ['home'] as const
const Y1Liver = ['elira', 'pomu', 'finana'] as const
const Y1Fnf = ['fnf'] as const
const Y1Dcl = ['dcl'] as const
const Y1Vn = ['vn'] as const

export type Y1LazuType = typeof Y1Lazu[number]
export type Y1HomeType = typeof Y1Home[number]
export type Y1LiverType = typeof Y1Liver[number]
export type Y1FnfType = typeof Y1Fnf[number]
export type Y1DclType = typeof Y1Dcl[number]
export type Y1VnType = typeof Y1Vn[number]
export type Y1ProjectType = Y1FnfType | Y1DclType | Y1VnType

export function isY1LiverType (type: string): boolean {
  return Y1Liver.includes(type as Y1LiverType)
}
