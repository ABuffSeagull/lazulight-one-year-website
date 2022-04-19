import React, { useRef } from "react"
import { useEffect } from "react"


interface MascotProps {
    src: string
    className?: string
    style?: string
    delay?: number
    id: React.RefObject<HTMLVideoElement>
} 



export default function MascotAnimation( props: MascotProps): JSX.Element{

    useEffect(() => {
        setTimeout(() => {
            if (null !== props.id.current) {
                props.id.current.setAttribute('loop', 'true')
                props.id.current.play()
            }
        }, props.delay)
    })
      return  <video ref={props.id} muted  src={props.src} />
    
}
