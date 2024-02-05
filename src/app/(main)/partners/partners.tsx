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
        title: "Medusafilters",
        descriptions: [
            "Filter sind unerlässlich, wenn es darum geht die Schäden beim Rauchen zu reduzieren. Daher sind wir stolz auf unseren Partner Medusafilters. Unsere Mitglieder klären wir über die Vorteile von Aktivkohlefiltern auf und bieten ihnen die Möglichkeit, diese zu einem vergünstigten Preis zu erwerben."
        ],
        imageSource: "/images/partner/medusafilters.png"
    },
    {
        title: "420cloud",
        descriptions: [
            "Für eine ordentliche und moderne Administration braucht es eine Vereinssoftware. 420cloud hilft uns dabei, unsere Mitglieder zu verwalten und die Kommunikation zu vereinfachen."
        ],
        imageSource: "/images/partner/420cloud.webp"
    },
    {
        title: "CSC Maps",
        descriptions: [
            "Unser Partner CSC Maps hilft Cannabis Interessenten einfachen Zugang zu Informationen über Cannabis Social Clubs anzubieten. Dabei werden die CSCs auf einer Karte angezeigt und können nach verschiedenen Kriterien gefiltert werden. Optimal für alle, die einen CSC in ihrer Nähe suchen."
        ],
        imageSource: "/images/partner/csc-maps.jpg"
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