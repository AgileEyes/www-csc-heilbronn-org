import VerticalSeparator from '../Separator/VerticalSeparator'
import classNames from './Hero.module.css'

export interface HeroProps {
    title: string
    description: string
    backgroundImageSource?: string
}

export default function Hero({ title, description, backgroundImageSource }: HeroProps) {
    const style = backgroundImageSource ? {
        backgroundImage: `url('${backgroundImageSource}')`
    } : undefined

    return <div className={classNames.container} style={style}>
        <h1>{title}</h1>
        <VerticalSeparator size='32px' />
        <p className={classNames.description}>{description}</p>
    </div>
}