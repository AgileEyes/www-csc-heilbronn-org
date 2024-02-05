import Image from "next/image";
import classNames from "./eflyer.module.css";
import Separator from "@/components/Separator";

export default function eFlyer() {
  return (
    <main className={classNames.container}>
      <div className={classNames.frame}>
        <Image
          src={"/images/logo/logo_v2_large.svg"}
          alt="Logo"
          width={128}
          height={128}
          className={classNames.logo}
        />

        <div className={classNames.title}>
          Willkommen beim
          <br />
          TenTen Cannabis Social Club Heilbronn
        </div>

        <Separator type="vertical" size={"16px"} />

        <div className={classNames.aboutus}>
          <div className={classNames.aboutus_item}>
            Wir als Gemeinschaft widmen uns dem verantwortungsvollen Umgang mit
            Cannabis und der Förderung von Aufklärung und Wissen.
          </div>

          <div className={classNames.aboutus_item}>
            Unser Ziel ist es eine Anlaufstelle für Cannabis Enthusiasten zu
            sein sowie eine fundierte Aufklärung und Prävention.
          </div>

          <div className={classNames.aboutus_item}>
            In Heilbronn planen wir neben der Abgabestelle eine Lokalität zur
            gemeinsamen Verköstigung.
          </div>
        </div>

        <Separator type="vertical" size={"8px"} />

        <div className={classNames.membership}>
          <Image
            src={"/images/eflyer/crown.png"}
            alt="Mitgliedschaft"
            width={24}
            height={24}
          />
          <div className={classNames.membership_text}>
            <div className={classNames.membership_title}>Mitgliedschaft</div>
            <div className={classNames.membership_subtitle}>
              Anwartschaft bis zur Entkriminalisierung
            </div>
          </div>
        </div>

        <ul className={classNames.benefits}>
          <li>
            30 EUR <span className={classNames.decent}>monatlich</span>
          </li>
          <li>Max. 100 Plätze</li>
          <li>
            Priorität
            <ul className={classNames.sub_benefits}>
              <li>Minijob (Theke, Trimming)</li>
              <li>Vorrang für Blüten</li>
              <li>Events (VIP) zukünftig Besuche im Growbereich</li>
            </ul>
          </li>
          <li>
            Mitbestimmung
            <ul className={classNames.sub_benefits}>
              <li>Strainauswahl</li>
              <li>Equipment</li>
            </ul>
          </li>
        </ul>

        <div className={classNames.links}>
          <a
            href="http://link.csc-heilbronn.org/form/mitgliedsanfrage"
            className={classNames.become_member}
          >
            Mitglied werden
          </a>
          <a
            href="https://link.csc-heilbronn.org/whatsapp"
            className={classNames.more_information}
          >
            Mehr Infos
          </a>
        </div>
      </div>
    </main>
  );
}
