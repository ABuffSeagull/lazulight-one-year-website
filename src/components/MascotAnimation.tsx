import React, { useEffect, useRef } from 'react'

interface MascotProps {
  src: string
  delay?: number
}

export default function MascotAnimation (props: MascotProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current != null) { videoRef.current.currentTime = (props.delay ?? 0) / 1000 }
  }, [props.delay])

  return <video ref={videoRef} muted autoPlay loop src={props.src} />
}
