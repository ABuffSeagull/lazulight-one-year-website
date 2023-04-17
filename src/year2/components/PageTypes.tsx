// With so many css classes being set by className={`something-something-${page}`}
// This should help to guard against invalid names
// Method based off: https://stackoverflow.com/a/61132682

const Y2Lazu = ['lazulight'] as const
const Y2Home = ['home'] as const
const Y2Liver = ['elira', 'pomu', 'finana'] as const
const Y2Doujin = ['doujin'] as const
const Y2Song = ['song'] as const

export type Y2LazuType = typeof Y2Lazu[number]
export type Y2HomeType = typeof Y2Home[number]
export type Y2LiverType = typeof Y2Liver[number]
export type Y2DoujinType = typeof Y2Doujin[number]
export type Y2SongType = typeof Y2Song[number]
export type Y2ProjectType = Y2DoujinType | Y2SongType

export function isY2LiverType (type: string): boolean {
  return Y2Liver.includes(type as Y2LiverType)
}
