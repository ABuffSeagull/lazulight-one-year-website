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

  const [totalPages, setTotalPages] = React.useState(53);
  const [currentPage, setCurrentPage] = React.useState(0);

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
    <div className={classes['doujin-container']} style={
        displayMode === 'fit-width' ? {
            height: doujinContainerSize.width * (3 / 2)
        } : {
            height: doujinContainerSize.height
        }
    }>
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
        <button className={classes['prev-page']} onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages - 1}></button>
        <button className={classes['next-page']} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}></button>
        <Document file='/anniversary2/doujin/Lazulight Anthology Vol. 1.pdf' onLoadSuccess={(document) => {
            setTotalPages(document.numPages)
        }}>
            {
                [...Array(totalPages).keys()].map((page) => 
                // Rendering each page has an annoying delay because react-pdf is rendering the PDF page to an image in a worker
                // then serializing it and sending it to the JS thread.
                // 
                // To improve performance, we virtualize the list of pages: only render pages within 1 of the current page.
                // This is to prevent huge initial load time (trying to render all pages) while also minimizing page turn delay
                // which shows as an annoying blank black page while the render happens.
                //
                // If you skip forward by a bunch of pages (mash next page), having some render delay is unfortunately inevitable.
                // Virtualization is based on the assumption that the user will spend at least a little time on each page.
                (Math.abs(page - currentPage) <= 1) ?  <Page
                    key={page} pageIndex={page}
                    className={page === currentPage ? undefined : classes['hidden-page']}
                    width={displayMode === "fit-width" ? doujinContainerSize.width : undefined}
                    height={displayMode === "fit-height" ? doujinContainerSize.height : undefined} /> : null
                )
            }
        </Document>
    </div>
    </>
  )
}
