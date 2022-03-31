interface ImageToolProps {
  src: metadata[] | string
  className?: string
  alt?: string
  width?: string
  height?: string
}

export default function Image (props: ImageToolProps): JSX.Element {
  if (typeof props.src === 'string') {
    return (
      <img src={props.src} width={props.width} height={props.height} alt={props.alt} />
    )
  } else {
    const [fallback, ...sources] = props.src
    return (
      <picture className={props.className}>
        {sources.map((metadata) => (
          <source
            key={metadata.src}
            type={`image/${metadata.format}`}
            srcSet={metadata.src}
          />
        ))}
        <img
          src={fallback.src}
          width={props.width}
          height={props.height}
          alt={props.alt}
        />
      </picture>
    )
  }
}
