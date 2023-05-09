import Hero, { HeroProps } from '@/components/Hero'
import classNames from './partners.module.css'
import { CardProps } from '@/components/Card'
import Cards from '@/components/Cards'

const heroProps: HeroProps = {
    title: "Unsere Partnerschaften",
    description: "Wir sind eine leidenschaftliche Community von Cannabis-Enthusiasten, die sich zum Ziel gesetzt hat, eine sichere und vertrauenswürdige Anlaufstelle für alle zu sein, die sich für Cannabis interessieren und es auf verantwortungsvolle Weise genießen möchten.",
    backgroundImageSource: "/images/verein/hero_background.png"
}

const cards: CardProps[] = [
    {
        title: "Afro Genetics",
        descriptions: [
            "@afro.genetics wird uns in allen Angelegenheiten des Anbaus von Cannabis unterstützen und uns exklusive Genetiken zur Verfügung stellen, die nur unseren Clubmitgliedern zur Verfügung stehen. Wir können uns auf ihre Fachkenntnisse und jahrelange Erfahrung verlassen, um sicherzustellen, dass wir die bestmögliche Qualität anbauen und genießen können."
        ],
        imageSource: "/images/partner/afro-genetics.png"
    },
    {
        title: "Cannabis Social Club 76",
        descriptions: [
            "Ein aus der Region Baden-Baden frisch etablierter Cannabis Social Club deren Gründer seit Jahren äußerst gute private und berufliche Beziehung zu uns pflegt."
        ],
        imageSource: "/"
    },
]

export default function Partners() {
    return <main className={classNames.container}>
        <Hero {...heroProps} />

        <Cards cards={cards} />
    </main>
}