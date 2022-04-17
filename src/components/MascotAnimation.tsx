// export default function MascotAnimation(,delay: string  )
import Image from './Image'

interface MascotProps {
    src: metadata[] | string
    className?: string
    delay?: string
}


export default function MascotAnimation(props: MascotProps): JSX.Element{

    return <Image src={props.src} className={props.className} />
    
}
