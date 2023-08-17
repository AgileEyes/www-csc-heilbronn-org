import Hero, { HeroProps } from "@/components/Hero";
import classNames from "./gruender.module.css";
import MemberCard, { Member } from "@/components/MemberCard";
import Separator from "@/components/Separator";

const heroProps: HeroProps = {
  title: "Gründungsmitglieder",
  description: "Ihr wollt uns kennenlernen? Hier sind wir!",
  backgroundImageSource: "/images/verein/hero_background.png",
};

const members: Member[] = [
  {
    name: "Julian Steiner",
    image: "/images/gruender/julian.jpg",
    description:
      "Julian ist der erste Vorsitzende des Vereins. Er ist für die Organisation und die Leitung des Vereins zuständig. Außerdem ist er neben dem Tagegeschäft als Business Developer tätig, um unser Partnernetzwerk stetig zu erweitern.",
  },
  {
    name: "\"Emin\" Qerkin Sadiku",
    image: "/images/gruender/julian.jpg",
    description:
      "Emin ist der zweite Vorsitzende des Vereins. Neben der Hilfe beim operativen Tagesgeschäft ist er ist für die Organisation von und Bewirtung bei Vereinsereignissen zuständig.",
  },
  {
    name: "Oliver Molnar",
    image: "/images/gruender/julian.jpg",
    description:
      "Oliver ist der Schatzmeister des Vereins und für die Finanzen verantwortlich. Zusätzlich ist er für das Themenfeld IT zuständig. Auch ist er Datenschutzbeauftragter des Vereins und Entwickler dieser Website.",
  },
];

export default function Datenschutz() {
  return (
    <main className={classNames.container}>
      <Hero {...heroProps} />

      {members.map((member, index) => (
        <>
          <MemberCard {...member} />

          {index !== members.length - 1 && <Separator type="vertical" size="16px" />}
        </>
      ))}
    </main>
  );
}
