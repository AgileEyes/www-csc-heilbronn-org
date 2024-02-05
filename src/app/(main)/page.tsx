import classNames from './page.module.css'
import Hero, { HeroProps } from '@/components/Hero'
import { CardProps } from '@/components/Card'
import Cards from '@/components/Cards'

const heroProps: HeroProps = {
  title: "Herzlich Willkommen beim Cannabis Social Club Heilbronn!",
  description: "Wir sind eine leidenschaftliche Community von Cannabis-Enthusiasten, die sich zum Ziel gesetzt hat, eine sichere und vertrauenswürdige Anlaufstelle für alle zu sein, die sich für Cannabis interessieren und es auf verantwortungsvolle Weise genießen möchten.",
  backgroundImageSource: "/images/verein/hero_background.png"
}

const cards: CardProps[] = [
  {
    title: "Unser Versprechen",
    descriptions: [
      "Unser Fokus liegt dabei auf hoher Qualität, umfassender Bildung, einem freundlichen Miteinander und fairen Preisen. Wir möchten, dass jeder Mensch das Recht hat, sich über Cannabis zu informieren und seine Entscheidungen auf Basis von Wissen und Erfahrung zu treffen.",
      "Unser Angebot umfasst eine breite Palette an hochwertigen Produkten und einer umfassenden Aufklärung über alles Wissenswerte rund um Cannabis. Wir möchten unseren Mitgliedern dabei helfen, ihre Cannabis-Erfahrungen zu optimieren und auf ein neues Level zu bringen. Dabei legen wir großen Wert auf eine offene, freundliche Atmosphäre und ein respektvolles Miteinander."
    ],
    imageSource: "/images/verein/cannabis_afro_genetics.png"
  },
  {
    title: "Unsere Community",
    descriptions: [
      "Wir sind nicht nur ein Club, sondern eine lebendige Community, die sich durch den Austausch von Erfahrungen und Wissen weiterentwickelt. Wir setzen uns für eine offene, tolerante Gesellschaft ein.",
      "Gleichzeitig ist uns der Jugendschutz besonders wichtig. Wir setzen uns dafür ein, dass Minderjährige keinen Zugang zu Cannabis haben und bieten Aufklärung und Prävention an."
    ],
    imageSource: "/images/verein/community.png"
  },
  {
    title: "Social Media",
    descriptions: [
      "Folgt uns auf Instagram unter dem Hashtag #CannabisSocialClubHeilbronn, um auf dem Laufenden zu bleiben und weitere spannende Informationen rund um Cannabis und unseren Club zu erhalten. Verwendet auch gerne die Hashtags #CSCHeilbronn, #HighQuality, #CannabisCommunity, #CannabisEducation, #FriendlyVibes und #FairPrices, um uns zu unterstützen und mit anderen Cannabis-Enthusiasten zu vernetzen. Wir freuen uns darauf, euch auf unserem Weg begleiten zu dürfen!"
    ],
    imageSource: "/images/verein/qr_website_transparent.png"
  }
]

export default function Home() {

  return (
    <main className={classNames.main}>

      <Hero {...heroProps} />

      <Cards cards={cards} />
    </main>
  )
}
