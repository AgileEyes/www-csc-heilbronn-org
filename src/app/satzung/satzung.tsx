import Hero, { HeroProps } from '@/components/Hero'
import classNames from './satzung.module.css'

import { CardProps } from '@/components/Card'
import Cards from '@/components/Cards'

const heroProps: HeroProps = {
        title: "Satzung TenTen Cannabis Social Club Heilbronn",
        description: "Im Folgenden ist unsere Satzung aufgeführt. Diese ist die Grundlage für unsere Vereinsarbeit und regelt alle wichtigen Punkte, die für den Verein relevant sind.",
        backgroundImageSource: "/images/verein/hero_background.png"
}

export default function Satzung() {
        return <main className={classNames.container}>
                <Hero {...heroProps} />

                <div>
                        <a href="https://link.csc-heilbronn.org/doc/satzung">Hier über Google Drive downloaden.</a>
                </div>

                <iframe className={classNames.document} src="https://docs.google.com/document/d/e/2PACX-1vTKXkCwHt7UFaRZsgA-1OJH3jK52CNdK5dbrBGSuoGo-KdGGp-_ylbr-Z2B1Oq4_mjdSlKN_S8OcN62/pub?embedded=true"></iframe>
        </main>
}