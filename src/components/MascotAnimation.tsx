import React from "react"
import { useEffect } from "react"
import ReactPlayer from 'react-player'


interface MascotProps {
    src: string
    className?: string
    style?: string
    delay?: number
} 



export default function MascotAnimation( props: MascotProps){


    let mascot = <video muted loop src={props.src} />
    
    useEffect(() => {
        console.log('test')
        setTimeout(() => {
          // video play
        }, props.delay)
      })



    return  mascot
   
    
    
}
