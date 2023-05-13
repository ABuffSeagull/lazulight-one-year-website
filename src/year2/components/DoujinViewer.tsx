import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.vite'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import classes from './DoujinViewer.module.scss'

// https://usehooks.com/useWindowSize/
function useWindowSize () {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState<{ width?: number, height?: number }>({
    width: undefined,
    height: undefined
  })

  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize () {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

export default function DoujinViewer ({
}: {
}): JSX.Element {
  const { height: windowHeight } = useWindowSize()
  const [doujinContainerSize, setDoujinContainerSize] = React.useState({ width: window.innerWidth, height: window.innerHeight })
  const doujinObserver = React.useRef<ResizeObserver>()
  const [displayMode, setDisplayMode] = React.useState('fit-height')

  React.useEffect(() => {
    return () => {
      doujinObserver.current?.disconnect()
    }
  })

  return (
    <>
      <h1>
        Lazulight Manga Anthology
      </h1>
      <button onClick={() => displayMode === 'fit-height' ? setDisplayMode('fit-width') : setDisplayMode('fit-height')}>Fit {displayMode === 'fit-width' ? <>Width</> : <>Height</>}</button>
    <div className={classes['doujin-container']}>
        <div
            className={classes['doujin-size-detect']} ref={(node) => {
            if (doujinObserver.current === undefined) {
                doujinObserver.current = new ResizeObserver(([entry]) => {
                console.log('Got width update', entry)
                setDoujinContainerSize((currentDoujinContainerSize) => {
                    const newWidth = entry.borderBoxSize[0].inlineSize;
                    const newHeight = entry.borderBoxSize[0].blockSize;
                    if (newWidth !== currentDoujinContainerSize.width || newHeight !== currentDoujinContainerSize.height) {
                        return {
                            width: newWidth,
                            height: newHeight
                        }
                    } else {
                        return currentDoujinContainerSize;
                    }
                })
                })
            }
            if (node != null) {
                doujinObserver.current?.observe(node)
            }
            }}
        >
        </div>
        <Document file='/anniversary2/doujin/Lazulight Anthology Vol. 1.pdf'>
        {
            displayMode === "fit-width" ?
                <Page pageNumber={1} width={doujinContainerSize.width} />
                : <Page pageNumber={1} height={doujinContainerSize.height} />
        }
        </Document>
    </div>
    </>
  )
}
