interface ImageToolProps {
  src: metadata[] | string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
  width?: string;
  height?: string;
}

const formats = ['avif', 'heic', 'heif', 'webp', 'jpg', 'jpeg', 'png'];
export default function Picture(props: ImageToolProps): JSX.Element {
  if (typeof props.src === 'string') {
    // I have to explicitly pass src to make TypeScript happy
    return <img {...props} src={props.src} />;
  }

  const { src: metadata, ...passthroughProps } = props;
  const groupedFormats: Record<string, metadata[]> = {};
  let maxWidth = 0;
  let maxHeight = 0;
  for (const data of metadata) {
    maxWidth = Math.max(maxWidth, data.width);
    maxHeight = Math.max(maxHeight, data.height);
    groupedFormats[data.format] ??= [];
    // We literally just init it the line before this
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    groupedFormats[data.format]!.push(data);
  }

  const formatEntries = Object.entries(groupedFormats);
  formatEntries.sort(
    ([firstFormat], [secondFormat]) =>
      formats.indexOf(firstFormat) - formats.indexOf(secondFormat)
  );

  const sources = [];
  for (const [format, metaArray] of formatEntries.slice(0, -1)) {
    sources.push(
      <source
        key={format}
        type={`image/${format}`}
        srcSet={makeSrcSet(metaArray)}
      />
    );
  }

  // If only typescript was smart
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [, fallbackMetadata] = formatEntries[formatEntries.length - 1]!;
  return (
    <picture className={passthroughProps.className ?? ''}>
      {sources}
      <img
        width={maxWidth}
        height={maxHeight}
        srcSet={makeSrcSet(fallbackMetadata)}
        {...passthroughProps}
      />
    </picture>
  );
}

function makeSrcSet(metadata: metadata[]): string {
  return metadata.map(({ src, width }) => `${src} ${width}w`).join(',');
}
