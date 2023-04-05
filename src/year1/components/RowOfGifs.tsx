import Image from '../components/Image'
import rog from './RowOfGifs.module.scss'

export default function RowOfGifs ({ gif1, gif2, gif3, gif4, className = '' }: {
  gif1: string
  gif2: string
  gif3: string
  gif4: string
  className?: string
}): JSX.Element {
  return (
    <div className={`${rog.container} ${className}`}>
      {/* (Brandon): Number of images is hardcoded into 'row-of-gifs' */}
      <Image src={gif1} enableZoom />
      <Image src={gif2} enableZoom />
      <Image src={gif3} enableZoom />
      <Image src={gif4} enableZoom />
    </div>
  )
}
