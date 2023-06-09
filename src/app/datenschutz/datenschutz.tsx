import Hero, { HeroProps } from "@/components/Hero";
import classNames from "./datenschutz.module.css";

const heroProps: HeroProps = {
  title: "Datenschutzerklärung",
  description: "Eure Privatsphäre ist uns außerordentlich wichtig.",
  backgroundImageSource: "/images/verein/hero_background.png",
};

export default function Datenschutz() {
  return (
    <main className={classNames.container}>
      <Hero {...heroProps} />

      <h2>Google Analytics</h2>
      <p className={classNames.description}>
        Diese Website nutzt den Dienst „Google Analytics“, welcher von der
        Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA)
        angeboten wird, zur Analyse der Websitebenutzung durch Nutzer. Der
        Dienst verwendet „Cookies“ – Textdateien, welche auf Ihrem Endgerät
        gespeichert werden. Die durch die Cookies gesammelten Informationen
        werden im Regelfall an einen Google-Server in den USA gesandt und dort
        gespeichert.
        <br />
        <br />
        Auf dieser Website greift die IP-Anonymisierung. Die IP-Adresse der
        Nutzer wird innerhalb der Mitgliedsstaaten der EU und des Europäischen
        Wirtschaftsraum gekürzt. Durch diese Kürzung entfällt der Personenbezug
        Ihrer IP-Adresse. Im Rahmen der Vereinbarung zur
        Auftragsdatenvereinbarung, welche die Websitebetreiber mit der Google
        Inc. geschlossen haben, erstellt diese mithilfe der gesammelten
        Informationen eine Auswertung der Websitenutzung und der
        Websiteaktivität und erbringt mit der Internetnutzung verbundene
        Dienstleistungen.
        <br />
        <br />
        Sie haben die Möglichkeit, die Speicherung des Cookies auf Ihrem Gerät
        zu verhindern, indem Sie in Ihrem Browser entsprechende Einstellungen
        vornehmen. Es ist nicht gewährleistet, dass Sie auf alle Funktionen
        dieser Website ohne Einschränkungen zugreifen können, wenn Ihr Browser
        keine Cookies zulässt.
        <br />
        <br />
        Weiterhin können Sie durch ein Browser-Plugin verhindern, dass die durch
        Cookies gesammelten Informationen (inklusive Ihrer IP-Adresse) an die
        Google Inc. gesendet und von der Google Inc. genutzt werden.
        <br/>
        <br/>
        Folgender Link führt Sie zu dem entsprechenden Plugin:
        https://tools.google.com/dlpage/gaoptout?hl=de
        <br />
        Hier finden Sie weitere Informationen zur Datennutzung durch die Google
        Inc.: https://support.google.com/analytics/answer/6004245?hl=de
      </p>
    </main>
  );
}
