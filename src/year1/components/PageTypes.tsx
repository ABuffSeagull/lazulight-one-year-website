// With so many css classes being set by className={`something-something-${page}`}
// This should help to guard against invalid names
// Method based off: https://stackoverflow.com/a/61132682

const Y1Lazu = ['lazulight'] as const
const Y1Home = ['home'] as const
const Y1Liver = ['elira', 'pomu', 'finana'] as const
const Y1Project = ['fnf', 'dcl', 'vn'] as const

export type Y1LazuType = typeof Y1Lazu[number]
export type Y1HomeType = typeof Y1Home[number]
export type Y1LiverType = typeof Y1Liver[number]
export type Y1ProjectType = typeof Y1Project[number]

export function isY1LiverType (type: string): boolean {
  return Y1Liver.includes(type as Y1LiverType)
}
