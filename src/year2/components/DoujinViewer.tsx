import React from 'react'
import classes from './DoujinViewer.module.scss'

const TOTAL_PAGES = 64

export default function DoujinViewer (): JSX.Element {
  const [doujinContainerSize, setDoujinContainerSize] = React.useState({ width: window.innerWidth, height: window.innerHeight })
  const doujinObserver = React.useRef<ResizeObserver>()
  const [displayMode, setDisplayMode] = React.useState('fit-height')
  const doujinContainer = React.useRef<HTMLDivElement>(null)

  const [currentPage, setCurrentPage] = React.useState(0)

  const tryNextPage = React.useCallback(() => {
    if (currentPage < TOTAL_PAGES - 1) {
      setCurrentPage(currentPage + 1)
      doujinContainer.current?.scrollIntoView({ block: displayMode === 'fit-height' ? 'center' : 'start' })
    }
  }, [currentPage, setCurrentPage, doujinContainer.current])

  const tryPrevPage = React.useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      doujinContainer.current?.scrollIntoView({ block: displayMode === 'fit-height' ? 'center' : 'start' })
    }
  }, [currentPage, setCurrentPage, doujinContainer.current])

  React.useEffect(() => {
    return () => {
      doujinObserver.current?.disconnect()
    }
  })

  return (
    <>
      <h1 className={classes.title}>
        Lazulight Manga Anthology
      </h1>
      <div
        className={classes['doujin-reader']} onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            tryNextPage()
          } else if (e.key === 'ArrowRight') {
            tryPrevPage()
          }
        }}
      >

        <div
          className={classes['doujin-container']} style={
        displayMode === 'fit-width'
          ? {
              height: doujinContainerSize.width * (3 / 2)
            }
          : {
              height: doujinContainerSize.height
            }
    } ref={doujinContainer}
        >
          <div
            className={classes['doujin-size-detect']} ref={(node) => {
              if (doujinObserver.current === undefined) {
                doujinObserver.current = new ResizeObserver(([entry]) => {
                  setDoujinContainerSize((currentDoujinContainerSize) => {
                    const newWidth = entry.borderBoxSize[0].inlineSize
                    const newHeight = entry.borderBoxSize[0].blockSize
                    if (newWidth !== currentDoujinContainerSize.width || newHeight !== currentDoujinContainerSize.height) {
                      return {
                        width: newWidth,
                        height: newHeight
                      }
                    } else {
                      return currentDoujinContainerSize
                    }
                  })
                })
              }
              if (node != null) {
                doujinObserver.current?.observe(node)
              }
            }}
          />
          <button className={classes['next-page']} onClick={tryNextPage} disabled={currentPage === TOTAL_PAGES - 1} />
          <button className={classes['prev-page']} onClick={tryPrevPage} disabled={currentPage === 0} />
          {
            [...Array(TOTAL_PAGES).keys()].map((page) =>
              (Math.abs(page - currentPage) <= 1)
                ? <img
                    key={page}
                    src={`/anniversary2/doujin/pages/${(page + 1).toString().padStart(2, '0')}.jpg`}
                    className={page === currentPage ? classes['current-page'] : classes['hidden-page']}
                    style={{
                      width: displayMode === 'fit-width' ? doujinContainerSize.width : undefined,
                      height: displayMode === 'fit-height' ? doujinContainerSize.height : undefined
                    }}
                  />
                : null
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
