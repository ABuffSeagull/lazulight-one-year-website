import React from 'react'
import classes from './DoujinViewer.module.scss'

const TOTAL_PAGES = 63;

export default function DoujinViewer ({
}: {
}): JSX.Element {
  const [doujinContainerSize, setDoujinContainerSize] = React.useState({ width: window.innerWidth, height: window.innerHeight })
  const doujinObserver = React.useRef<ResizeObserver>()
  const [displayMode, setDisplayMode] = React.useState('fit-height')
  const doujinContainer = React.useRef<HTMLDivElement>(null);

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
    <div className={classes['doujin-reader']} onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
            if (currentPage < TOTAL_PAGES - 1) {
                setCurrentPage(currentPage + 1);
                doujinContainer.current?.scrollIntoView({ block: "center"});
            }
        } else if (e.key === "ArrowRight") {
            if (currentPage > 0) {
                setCurrentPage(currentPage - 1);
                doujinContainer.current?.scrollIntoView({ block: "center"});
            }
        }
    }}>

    <div className={classes['doujin-container']} style={
        displayMode === 'fit-width' ? {
            height: doujinContainerSize.width * (3 / 2)
        } : {
            height: doujinContainerSize.height
        }
    } ref={doujinContainer}>
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
        <button className={classes['prev-page']} onClick={() => { setCurrentPage(currentPage + 1); doujinContainer.current?.scrollIntoView({ block: "center"})}} disabled={currentPage === TOTAL_PAGES - 1}></button>
        <button className={classes['next-page']} onClick={() => { setCurrentPage(currentPage - 1); doujinContainer.current?.scrollIntoView({ block: "center"})}} disabled={currentPage === 0}></button>
        {
            [...Array(TOTAL_PAGES).keys()].map((page) => 
            (Math.abs(page - currentPage) <= 1) ?  <img
                key={page}
                src={`/anniversary2/doujin/image-${page.toString().padStart(3, "0")}.jpg`}
                className={page === currentPage ? undefined : classes['hidden-page']}
                style={{
                    width: displayMode === "fit-width" ? doujinContainerSize.width : undefined,
                    height: displayMode === "fit-height" ? doujinContainerSize.height : undefined
                }} /> : null
            )
        }
    </div>
    <div className={classes['bottom-nav']}>
        <div className={classes['page-count']}>{currentPage + 1} / {TOTAL_PAGES}</div>
        <button className={classes['change-mode']} onClick={() => displayMode === 'fit-height' ? setDisplayMode('fit-width') : setDisplayMode('fit-height')}>Fit {displayMode === 'fit-width' ? <>Width</> : <>Height</>}</button>
    </div>
    </div>
    </>
  )
}
