declare module '*&imagetools' {
  const urls: string[]
  export default urls
}
declare module '*&imagetools&single' {
  const url: string
  export default url
}
declare module '*&imagetools&meta' {
  const metadata: Array<{
    src: string
    width: number
    height: number
    format: string
  }>
  export default metadata
}
