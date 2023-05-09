import Hero, { HeroProps } from '@/components/Hero'
import classNames from './impressum.module.css'

const heroProps: HeroProps = {
    title: "Impressum",
    description: "Der Verein ist aktuell in Gründung. Verpflichtende Informationen werden zeitnah nachgereicht, sobald die Eintragung im Vereinsregister stattfindet.",
    backgroundImageSource: "/images/verein/hero_background.png"
}

export default function Impressum() {
    return <main className={classNames.container}>
        <Hero {...heroProps} />

        <p>
            CSC Heilbron i.G.

            Mail: csc_heilbronn@gmx.de
        </p>
    </main>
}