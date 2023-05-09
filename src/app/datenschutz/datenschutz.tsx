import Hero, { HeroProps } from '@/components/Hero'
import classNames from './datenschutz.module.css'

const heroProps: HeroProps = {
    title: "Datenschutzerklärung",
    description: "Eure Privatsphäre ist uns außerordentlich wichtig.",
    backgroundImageSource: "/images/verein/hero_background.png"
}

export default function Datenschutz() {
    return <main className={classNames.container}>
        <Hero {...heroProps} />
    </main>
}