// Zoom elements to fullscreen on click
// DOC: https://github.com/rpearce/image-zoom
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface ImageToolProps {
  src: metadata[] | string
  sizes?: string
  className?: string
  style?: React.CSSProperties
  alt?: string
  width?: string
  height?: string
  enableZoom?: boolean
}

const formats = ['avif', 'heic', 'heif', 'webp', 'jpg', 'jpeg', 'png']

export default function Picture (props: ImageToolProps): JSX.Element {
  if (typeof props.src === 'string') {
    const imgElement = <img className={props.className} src={props.src} alt={props.alt} />
    return wrapInZoom(imgElement, props.enableZoom)
  }

  // React was sad that enableZoom was being passed to a DOM element, so it goes on the list to be removed from passthroughProps
  const { src: metadata, enableZoom, ...passthroughProps } = props
  const groupedFormats: Record<string, metadata[]> = {}
  let maxWidth = 0
  let maxHeight = 0
  for (const data of metadata) {
    maxWidth = Math.max(maxWidth, data.width)
    maxHeight = Math.max(maxHeight, data.height)
    groupedFormats[data.format] ??= []
    // We literally just init it the line before this
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    groupedFormats[data.format]!.push(data)
  }

  const formatEntries = Object.entries(groupedFormats)
  formatEntries.sort(
    ([firstFormat], [secondFormat]) =>
      formats.indexOf(firstFormat) - formats.indexOf(secondFormat)
  )

  const sources = []
  for (const [format, metaArray] of formatEntries.slice(0, -1)) {
    sources.push(
      <source
        key={format}
        type={`image/${format}`}
        srcSet={makeSrcSet(metaArray)}
      />
    )
  }

  // If only typescript was smart
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [, fallbackMetadata] = formatEntries[formatEntries.length - 1]!

  const pictureElement = (
    <picture className={passthroughProps.className ?? ''}>
      {sources}
      <img
        width={maxWidth}
        height={maxHeight}
        srcSet={makeSrcSet(fallbackMetadata)}
        {...passthroughProps}
      />
    </picture>
  )
  return wrapInZoom(pictureElement, props.enableZoom)
}

function makeSrcSet (metadata: metadata[]): string {
  return metadata.map(({ src, width }) => `${src} ${width}w`).join(',')
}

function wrapInZoom (content: JSX.Element, enableZoom: Boolean | undefined): JSX.Element {
  return (
    (enableZoom != null)
      ? (
        <Zoom overlayBgColorEnd='rgba(45, 45, 45, 0.8)' overlayBgColorStart='rgba(45, 45, 45, 0)' zoomMargin={50}>
          {content}
        </Zoom>
        )
      : (content)
  )
}
