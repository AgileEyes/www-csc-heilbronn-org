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

        <div>
    <p className={classNames.c54}><span className={classNames.c32}>Pr&auml;ambel &nbsp;</span></p>
    <p className={classNames.c11}><span className={classNames.c0}>Cannabis Social Clubs (CSC) sind Anbaugemeinschaften von Cannabisnutzern, die ihren
            &nbsp;Eigenbedarfsanbau gemeinschaftlich organisieren oder, dort wo Anbau von Cannabis noch nicht
            &nbsp;erlaubt ist, die Legalisierung des Anbaus von Cannabis zum Eigenbedarf anstreben. </span></p>
    <p className={classNames.c1}><span className={classNames.c0}>Da der Anbau von THC-haltigem Hanf, auch f&uuml;r den Eigenbedarf in der
            Bundesrepublik Deutschland &nbsp;immer noch verboten ist, und auch aktiv verfolgt wird, werden die Aufgaben
            des Vereins zun&auml;chst &nbsp;darin bestehen, sich als Interessengemeinschaft von Cannabis-Konsumenten
            einzusetzen f&uuml;r: </span></p>
    <p className={classNames.c41}><span className={classNames.c0}>- Die &Auml;nderung der Drogengesetzgebung in Bezug auf Cannabis in Deutschland
            &nbsp;- Eine akzeptierende und regulierende Drogenpolitik in Heilbronn &nbsp;</span></p>
    <p className={classNames.c19}><span className={classNames.c0}>- Jugend- und Verbraucherschutz, Aufkl&auml;rung und Pr&auml;vention &nbsp;</span>
    </p>
    <p className={classNames.c95}><span className={classNames.c0}>Nach der Schaffung gesetzeskonformer M&ouml;glichkeiten, strebt der TenTen Cannabis
            Social Club &nbsp;Heilbronn den Betrieb einer dann legalen Anbaugemeinschaft an. </span></p>
    <p className={classNames.c88}><span className={classNames.c0}>Der TenTen Cannabis Social Club Heilbronn hei&szlig;t als Mitglieder nicht nur
            Cannabis-Nutzer &nbsp;willkommen, sondern ausdr&uuml;cklich alle Menschen, die an einer akzeptierenden und
            regulierenden &nbsp;Drogenpolitik und einer Gesetzgebung zum Schutz von Jugend, Verbrauchern und der
            Gesellschaft &nbsp;interessiert sind. </span></p>
    <p className={classNames.c91}><span className={classNames.c0}>In diesem Sinne gibt sich der &ldquo;TenTen Cannabis Social Club Heilbronn&quot; in
            seiner Satzung.</span></p>
    <p className={classNames.c79}><span className={classNames.c21}>&sect;1 Name, Sitz, Gesch&auml;ftsjahr &nbsp;</span></p>
    <p className={classNames.c70}><span className={classNames.c0}>Der Verein f&uuml;hrt den Namen &bdquo;TenTen Cannabis Social Club Heilbronn.
        </span></p>
    <p className={classNames.c30}><span className={classNames.c0}>Er hat seinen Sitz in Heilbronn und soll in das Vereinsregister eingetragen werden.
            Danach f&uuml;hrt er im Namen den Zusatz e.V. </span></p>
    <p className={classNames.c40}><span className={classNames.c0}>Das Gesch&auml;ftsjahr ist das Kalenderjahr. </span></p>
    <p className={classNames.c75}><span className={classNames.c32}>&sect;2 Ziele und Aufgaben des Vereins &nbsp;</span></p>
    <p className={classNames.c100}><span className={classNames.c21}>2.1 ANBAU &nbsp;</span></p>
    <p className={classNames.c81}><span className={classNames.c0}>Der &quot;TenTen Cannabis Social Club Heilbronn&quot; setzt sich f&uuml;r regulierte
            Strukturen zum Umgang und &nbsp;Konsum von Cannabis ein. Insbesondere setzen wir uns f&uuml;r die
            Legalisierung des Eigenanbaus, &nbsp;sowohl individuell, als auch gemeinschaftlich, ein. Nach Schaffung
            gesetzeskonformer &nbsp;M&ouml;glichkeiten, strebt der TenTen Cannabis Social Club Heilbronn den legalen
            Betrieb eines &nbsp;gemeinschaftlichen Eigenbedarfsanbau von Cannabis an. </span></p>
    <p className={classNames.c38}><span className={classNames.c21}>2.2 &Ouml;FFENTLICHKEITSARBEIT UND POLITIKBERATUNG &nbsp;</span></p>
    <p className={classNames.c55}><span className={classNames.c0}>Der Verein setzt sich f&uuml;r eine Beendigung der Cannabisprohibition und f&uuml;r
            die Schaffung eines &nbsp;regulierten Marktes und die daf&uuml;r notwendigen Gesetzes&auml;nderungen ein.
            Die angestrebten &nbsp;Gesetzes&auml;nderungen sollten auch den Eigenanbau von Cannabis, sowohl individuell
            als auch den &nbsp;gemeinschaftlichen Anbau zulassen und regeln. In diesem Sinne betreibt der Verein
            &nbsp;&Ouml;ffentlichkeitsarbeit und steht der Politik als Ansprechpartner zur Verf&uuml;gung. Der TenTen
            Cannabis &nbsp;Social Club Heilbronn ist &uuml;berparteilich und arbeitet daran alle Parteien von den Zielen
            des Vereins &nbsp;zu &uuml;berzeugen. </span></p>
    <p className={classNames.c5}><span className={classNames.c21}>2.3 AUFKL&Auml;RUNG, JUGENDSCHUTZ UND PR&Auml;VENTION &nbsp;</span></p>
    <p className={classNames.c69}><span className={classNames.c0}>Dem TenTen Cannabis Social Club Heilbronn sind Jugendschutz und Pr&auml;vention,
            sowie der &nbsp;Verbraucherschutz ein besonderes Anliegen. Daf&uuml;r ist eine wissenschaftlich fundierte
            und &nbsp;ideologiefreie Aufkl&auml;rung von zentraler Bedeutung. Der TenTen Cannabis Social Club Heilbronn
            ist &nbsp;sich der Gefahren, die durch den Konsum von Cannabis f&uuml;r Kinder und Jugendliche entstehen
            &nbsp;bewusst. Daher m&ouml;chte der Verein Aufkl&auml;rungsarbeit leisten und sich dabei insbesondere an
            &nbsp;Risikogruppen wenden. Ebenso bietet er bei Vorliegen einer &auml;rztlichen Verschreibung Beratung
            f&uuml;r &nbsp;Patienten an. </span></p>
    <p className={classNames.c5}><span className={classNames.c21}>2.4 MEDIZIN UND FORSCHUNG &nbsp;</span></p>
    <p className={classNames.c83}><span className={classNames.c0}>Der &bdquo;TenTen Cannabis Social Club Heilbronn setzt sich f&uuml;r einen
            vorurteilsfreien Einsatz von Cannabis &nbsp;in der Medizin ein. Hierf&uuml;r wird der &bdquo;TenTen Cannabis
            Social Club Heilbronn Kontakte zu Medizinern &nbsp;aufbauen, um &uuml;ber die Anwendungsm&ouml;glichkeiten
            von Cannabis als Medizin zu informieren, und &nbsp;m&ouml;gliche Patienten bei der Erlangung eines
            Patientenausweises oder einer Ausnahmegenehmigung &nbsp;zu unterst&uuml;tzen. Ebenso setzt der TenTen
            Cannabis Social Club Heilbronn sich f&uuml;r die Forschung an &nbsp;Cannabis, sowohl in der Medizin wie auch
            als Genussmittel ein. Durch den Aufbau von Kontakten zu &nbsp;Forschungseinrichtungen und Wissenschaftlern
            wird der TenTen Cannabis Social Club Heilbronn die &nbsp;laufende Forschung auf diesem Gebiet
            unterst&uuml;tzen. </span></p>
    <p className={classNames.c62}><span className={classNames.c21}>2.5 SOCIALISING &nbsp;</span></p>
    <p className={classNames.c10}><span className={classNames.c0}>Der Club m&ouml;chte seinen Mitgliedern ein lebendiges Vereinsleben bieten, bei dem
            auch Spa&szlig;, &nbsp;Vergn&uuml;gen und Geselligkeit nicht zu kurz kommen. Deswegen soll es, auch
            losgel&ouml;st von &nbsp;vorgenannten Zielen, Clubveranstaltungen geben, die der Kontaktpflege und dem
            Zusammenhalt der &nbsp;Gemeinschaft dienen.</span></p>
    <p className={classNames.c52}><span className={classNames.c32}>&sect;3 MITGLIEDSCHAFT &nbsp;</span></p>
    <p className={classNames.c13}><span className={classNames.c0}>Mitglieder des TenTen Cannabis Social Club Heilbronn k&ouml;nnen alle
            nat&uuml;rlichen und auch juristischen &nbsp;Personen werden, die das 21. Lebensjahr vollendet haben.
            Stimmberechtigt sind ausschlie&szlig;lich &nbsp;aktive Gr&uuml;ndungsmitglieder. </span></p>
    <p className={classNames.c99}><span className={classNames.c0}>&Uuml;ber Aufnahmeantr&auml;ge f&uuml;r Mitglieder entscheidet der Vorstand auf
            schriftlichen Antrag. Lehnt der &nbsp;Vorstand eine Mitgliedschaft ab, hat er dies dem Bewerber/der
            Bewerberin schriftlich mitzuteilen. &nbsp;Er/Sie hat das Recht den Antrag auf Mitgliedschaft der
            n&auml;chsten Mitgliederversammlung vorzulegen. &nbsp;Diese entscheidet dann erneut und endg&uuml;ltig.
        </span></p>
    <p className={classNames.c47}><span className={classNames.c0}>Der Austritt eines Mitgliedes erfolgt durch schriftliche Erkl&auml;rung
            gegen&uuml;ber dem Vorstand mit einer &nbsp;Frist von einem Monat. </span></p>
    <p className={classNames.c90}><span className={classNames.c0}>Ein Mitglied kann durch Beschluss des Vorstandes oder der Mitgliederversammlung
            ausgeschlossen &nbsp;werden, wenn es den Vereinszielen Zuwiderhandlungen oder seinen Verpflichtungen
            gegen&uuml;ber &nbsp;dem Verein nicht nachkommt. Gegen den Beschluss kann das Mitglied die
            Mitgliederversammlung &nbsp;anrufen. Diese entscheidet endg&uuml;ltig. Vor einem Beschluss ist das
            betroffene Mitglied anzuh&ouml;ren. &nbsp;Bei Anrufung einer Mitgliederversammlung ist das Mitglied zu laden
            und anzuh&ouml;ren. Die Mitglieder &nbsp;sind verpflichtet, die satzungsgem&auml;&szlig;en Zwecke des
            Vereins zu unterst&uuml;tzen und wenn m&ouml;glich zu &nbsp;f&ouml;rdern. Sie sind verpflichtet, die
            festgesetzten Beitr&auml;ge zu zahlen. </span></p>
    <p className={classNames.c96}><span className={classNames.c21}>3.1 DEFINITION AKTIVE GR&Uuml;NDUNGSMITGLIEDER, DAUERMITGLIEDER,
            &nbsp;JAHRESMITGLIEDER SOWIE EHRENMITGLIEDER </span></p>
    <p className={classNames.c97}><span className={classNames.c23}>Aktive Gr&uuml;ndungsmitglieder </span></p>
    <p className={classNames.c25}><span className={classNames.c0}>Aktiven Gr&uuml;ndungsmitgliedern stehen grunds&auml;tzlich alle Mitgliederrechte
            aber auch &ndash;pflichten zu. &nbsp;Dies ergibt sich aus dem Umkehrschluss zu &sect; 35 BGB. </span></p>
    <p className={classNames.c24}><span className={classNames.c0}>Sie bet&auml;tigen sich aktiv am Vereinslebens und gestalten den Verein nach ihren
            Vorstellungen. Die &nbsp;ordentliche Vereinsmitgliedschaft kann auch durch Regelungen in der Satzung
            Besonderheiten &nbsp;aufweisen. In der Regel, sind die aktiven Gr&uuml;ndungsmitglieder diejenigen, die
            Stimm- bzw. &nbsp;Wahlrecht haben. Sie sind diejenigen, die die Aktivit&auml;ten des Vereines tragen und den
            Vereinszweck &nbsp;erf&uuml;llen. </span></p>
    <p className={classNames.c3}><span className={classNames.c23}>Dauermitgliedschaft </span></p>
    <p className={classNames.c101}><span className={classNames.c0}>Dauermitglieder sind Personen, die nicht aktiv an der Erf&uuml;llung des
            Vereinszwecks mitwirken, uns &nbsp;&bdquo;TenTen Cannabis Social Club Heilbronn&rdquo; aber dennoch durch
            ihre Mitgliedschaft unterst&uuml;tzen &nbsp;wollen. Obwohl sie nicht aktiv den Vereinszweck erf&uuml;llen,
            steht es den Dauermitgliedern frei, an &nbsp;Vereinsveranstaltungen (Feste, Auftritte, Sitzungen etc.)
            teilzunehmen. Das Teilnehmerrecht an &nbsp;Mitgliederversammlungen Dauermitgliedern nicht entzogen, das
            Rede- und Stimmrecht hingegen &nbsp;schon. </span></p>
    <p className={classNames.c68}><span className={classNames.c23}>Ehrenmitglied des Vereins </span></p>
    <p className={classNames.c36}><span className={classNames.c0}>Die Auszeichnung Ehrenmitglied des Vereins wird verliehen, wenn das zu ehrende
            Mitglied &uuml;ber &nbsp;einen langen Zeitraum als aktiver Vorstand oder als aktives Mitglied des TenTen
            Cannabis Social Club &nbsp;Heilbronn wesentlich mitgepr&auml;gt hat. Unter einer Ehrenmitgliedschaft
            versteht man ein &nbsp;Sonderrecht, welches dem Geehrten eine (Ehren-)Mitgliedschaft im Verein antr&auml;gt.
            Dieses Sonderrecht kann beispielsweise in einer Beitragsfreiheit oder in Form von &ldquo;freien Zutritt zu
            &nbsp;Vereinsveranstaltungen&rdquo; ausgestaltet sein. M&ouml;glich ist auch eine Verleihung eines
            Ehrentitels, die &nbsp;dann mit Rechten zur Teilnahme und Wortmeldung oder anderen Bevorrechtigungen
            verbunden ist.</span></p>
    <p className={classNames.c17}><span className={classNames.c21}>3.2 Ausschluss eines Mitglieds </span></p>
    <p className={classNames.c33}><span className={classNames.c0}>Ein Mitglied kann durch Beschluss des Vorstandes ausgeschlossen werden, wenn es das
            Ansehen des &nbsp;Vereins sch&auml;digt, seinen Beitragsverpflichtungen nachhaltig nicht nachkommt oder wenn
            ein &nbsp;sonstiger wichtiger Grund vorliegt. </span></p>
    <p className={classNames.c58}><span className={classNames.c0}>Der Vorstand muss dem auszuschlie&szlig;enden Mitglied den Beschluss in
            schriftlicher Form unter &nbsp;Angaben von Gr&uuml;nden mitteilen und ihm auf Verlangen eine Anh&ouml;rung
            gew&auml;hren. </span></p>
    <p className={classNames.c72}><span className={classNames.c0}>Gegen den Beschluss des Vorstandes ist in innerhalb einer Frist von zwei Monaten
            nach Zugang des &nbsp;Ausschlie&szlig;ungsbeschlusses die Anrufung der Mitgliederversammlung zul&auml;ssig.
            Bis zum Beschluss der &nbsp;Mitgliedsversammlung ruht die Mitgliedschaft. Die Mitgliederversammlung
            entscheidet &uuml;ber die &nbsp;Ausschlie&szlig;ung endg&uuml;ltig. </span></p>
    <p className={classNames.c16}><span className={classNames.c32}>&sect;4 Rechte und Pflichten der Mitglieder &nbsp;</span></p>
    <p className={classNames.c39}><span className={classNames.c0}>Die Mitgliederversammlung erl&auml;sst eine Beitragsordnung, die die H&ouml;he der
            monatlich zuzahlenden &nbsp;Mitgliedsbeitr&auml;ge regelt. &nbsp;</span></p>
    <p className={classNames.c84}><span className={classNames.c0}>Mitglieder k&ouml;nnen sich f&uuml;r Vereinsaktivit&auml;ten zu Arbeits- und
            Interessengemeinschaften &nbsp;zusammenschlie&szlig;en. </span></p>
    <p className={classNames.c4}><span className={classNames.c21}>4.1 Unabh&auml;ngigkeit &nbsp;</span></p>
    <p className={classNames.c77}><span className={classNames.c0}>Grundlage der Vereinsarbeit ist das Bekenntnis aller Mitglieder des Vereins zur
            freundlich &nbsp;demokratischen Grundordnung auf der Grundlage des Grundgesetzes der Bundesrepublik
            &nbsp;Deutschland. Der Verein vertritt den Grundsatz religi&ouml;ser und weltanschaulicher Toleranz sowie
            &nbsp;parteipolitischer Neutralit&auml;t. Er Tritt extremistischen, rassistischen und fremdenfeindlichen
            &nbsp;Bestrebungen entscheiden entgegen. Der Verein bietet nur solchen Personen eine Mitgliedschaft an,
            &nbsp;die sich zu diesen Grunds&auml;tzen bekennen. </span></p>
    <p className={classNames.c57}><span className={classNames.c0}>Auf Mitgliedschaft oder Stellung im Verein darf bei politischen Bet&auml;tigungen
            nicht Bezug genommen &nbsp;werden. </span></p>
    <p className={classNames.c67}><span className={classNames.c32}>&sect;5 Vereinsmittel &nbsp;</span></p>
    <p className={classNames.c35}><span className={classNames.c0}>Der Verein ist auf Eigenwirtschaftlichkeit ausgerichtet und verfolgt keine
            Gewinnerzielungsabsicht. &nbsp;</span></p>
    <p className={classNames.c48}><span className={classNames.c0}>Mittel des Vereins d&uuml;rfen nur nach Vorgaben dieser Satzung verwendet werden.
            Die Mitglieder &nbsp;erhalten in ihrer Eigenschaft als Mitglied keine Zuwendungen aus Mitteln des Vereins.
            Sie haben bei &nbsp;ihrem Ausscheiden keinerlei Anspr&uuml;che an das Vereinsverm&ouml;gen. &nbsp;</span>
    </p>
    <p className={classNames.c40}><span className={classNames.c0}>Einnahmen erzielt der Verein durch: &nbsp;</span></p>
    <p className={classNames.c45}><span className={classNames.c0}>- Beitr&auml;ge &nbsp;</span></p>
    <p className={classNames.c6}><span className={classNames.c0}>- Veranstaltungserl&ouml;se </span></p>
    <p className={classNames.c50}><span className={classNames.c0}>- Verkauf von Fanartikeln </span></p>
    <p className={classNames.c6}><span className={classNames.c0}>- Spenden und Sponsoring </span></p>
    <p className={classNames.c28}><span className={classNames.c0}>N&auml;heres regelt die Beitrags- und Finanzordnung. &nbsp;</span></p>
    <p className={classNames.c85}><span className={classNames.c32}>&sect;6 Verg&uuml;tungen f&uuml;r die Vereinst&auml;tigkeiten &nbsp;</span></p>
    <p className={classNames.c35}><span className={classNames.c0}>Die Vereins- und Organ&auml;mter werden grunds&auml;tzlich ehrenamtlich
            ausge&uuml;bt. </span></p>
    <p className={classNames.c31}><span className={classNames.c0}>Bei Bedarf k&ouml;nnen Vereins&auml;mter im Rahmen der haushaltsrechtlichen
            M&ouml;glichkeiten entgeltlich auf &nbsp;Grundlage eines Dienst- oder Arbeitsvertrages oder gegen Zahlung
            einer Aufwandsentsch&auml;digung &nbsp;nach &sect;3 Nr. 26 EStG (Ehrenamtspauschale) ausge&uuml;bt werden.
            &nbsp;</span></p>
    <p className={classNames.c14}><span className={classNames.c0}>Die Entscheidung &uuml;ber eine entgeltliche Vereinst&auml;tigkeit nach Abs. 2
            trifft der Vorstand. Gleiches gilt &nbsp;f&uuml;r Vertragsinhalte und Vertragsbeendigung. &nbsp;</span></p>
    <p className={classNames.c92}><span className={classNames.c0}>Der Vorstand ist erm&auml;chtigt, T&auml;tigkeiten f&uuml;r den Verein gegen Zahlung
            einer angemessenen &nbsp;Verg&uuml;tung (z.B. Dienst- oder Werkleistung) oder Aufwandsentsch&auml;digung
            (z.B nebenberufliche &nbsp;&Uuml;bungsleiter) zu beauftragen. Ma&szlig;gebend ist die Haushaltslage des
            Vereins. &nbsp;</span></p>
    <p className={classNames.c76}><span className={classNames.c0}>Zu den Erledigungen der Gesch&auml;ftsf&uuml;hrungsaufgaben und der
            Gesch&auml;ftsstelle ist der Vorstand &nbsp;erm&auml;chtigt, im Rahmen der haushaltsrechtlichen
            M&ouml;glichkeiten, hauptamtlich Besch&auml;ftigte &nbsp;einzustellen. </span></p>
    <p className={classNames.c38}><span className={classNames.c21}>6.1 Haftung des Vereins &nbsp;</span></p>
    <p className={classNames.c74}><span className={classNames.c0}>Ehrenamtliche T&auml;tige haften f&uuml;r Sch&auml;den gegen&uuml;ber den
            Mitgliedern und gegen&uuml;ber dem Verein, die &nbsp;sie in Erf&uuml;llung ihrer ehrenamtlichen
            T&auml;tigkeiten verursachen, nur f&uuml;r Vorsatz und grobe &nbsp;Fahrl&auml;ssigkeit. &nbsp;</span></p>
    <p className={classNames.c51}><span className={classNames.c32}>&sect;7 Organe &nbsp;</span></p>
    <p className={classNames.c35}><span className={classNames.c0}>Die Organe des Vereins sind: </span></p>
    <p className={classNames.c45}><span className={classNames.c0}>- Die Mitgliederversammlung </span></p>
    <p className={classNames.c6}><span className={classNames.c0}>- Der Vorstand </span></p>
    <p className={classNames.c75}><span className={classNames.c32}>&sect;8 Mitgliederversammlung &nbsp;</span></p>
    <p className={classNames.c44}><span className={classNames.c0}>Die Mitgliederversammlung ist das oberste Organ des Vereins. Sie wird in der Regel
            von einem &nbsp;Mitglied des Vorstandes geleitet. Ersatzweise kann die Mitgliederversammlung eine
            &nbsp;Versammlungsleitung w&auml;hlen. Die Wahl erfolgt offen durch Akklamation. &nbsp;</span></p>
    <p className={classNames.c59}><span className={classNames.c0}>Die Mitgliederversammlung stellt die Richtlinien f&uuml;r die Arbeit des Vereins auf
            und entscheidet &nbsp;Fragen von grunds&auml;tzlicher Bedeutung. Zu den Aufgaben der Mitgliederversammlung
            geh&ouml;ren &nbsp;insbesondere: &nbsp;</span></p>
    <p className={classNames.c2}><span className={classNames.c0}>- Die Wahl des Vorstandes in geheimer Wahl </span></p>
    <p className={classNames.c6}><span className={classNames.c0}>- die Beratung &uuml;ber den Stand und die Planung der Arbeit </span></p>
    <p className={classNames.c78}><span className={classNames.c0}>- die Genehmigung des vom Vorstand vorgelegten Wirtschafts- und Investitionsplans -
            die Beschlussfassung &uuml;ber den Jahresabschluss </span></p>
    <p className={classNames.c71}><span className={classNames.c0}>- die Entgegennahme des Gesch&auml;fts- und T&auml;tigkeitsberichts des Vorstandes -
            die Beschlussfassung &uuml;ber die Entlassung des Vorstandes </span></p>
    <p className={classNames.c8}><span className={classNames.c0}>- der Erlass der Beitragsordnung </span></p>
    <p className={classNames.c66}><span className={classNames.c0}>- die Beschlussfassung &uuml;ber die &Uuml;bernahme neuer Aufgaben oder den
            R&uuml;ckzug aus Aufgaben seitens des Vereins </span></p>
    <p className={classNames.c8}><span className={classNames.c0}>- die Beschlussfassung &uuml;ber &Auml;nderungen der Satzung und die Aufl&ouml;sung
            des Vereins. </span></p>
    <p className={classNames.c73}><span className={classNames.c0}>Die Mitgliederversammlung wird auf Beschluss des Vorstandes unter Angabe der
            vorl&auml;ufigen &nbsp;Tagesordnung mit einer Frist von mindestens drei Wochen eingeladen. Die Einladung
            erfolgt &nbsp;ausschlie&szlig;lich elektronisch, solange das Mitglied dem nicht schriftlich widerspricht.
            Ein Mitglied, &nbsp;welches widerspricht, wird schriftlich mit einfachem Brief geladen. </span></p>
    <p className={classNames.c9}><span className={classNames.c0}>Die Frist f&uuml;r die Einladung orientiert sich am Zeitpunkt der Absendung durch den
            Vorstand bzw. die &nbsp;Gesch&auml;ftsstelle. Die Mitgliederversammlung tagt mindestens einmal im Jahr
            &nbsp;(Jahreshauptversammlung), ansonsten soweit es erforderlich ist oder der Vorstand sie einberuft.
        </span></p>
    <p className={classNames.c94}><span className={classNames.c0}>Eine au&szlig;erordentliche Mitgliederversammlung muss stattfinden, wenn mindestens
            25% der &nbsp;Mitglieder des Vereins diese unter Angabe von Gr&uuml;nden und Nennung einer Tagesordnung
            &nbsp;schriftlich verlangen. Die Mitgliederversammlung hat sp&auml;testens sechs Wochen nach Eingang des
            &nbsp;Antrages stattzufinden. </span></p>
    <p className={classNames.c18}><span className={classNames.c0}>Allgemeine Beschl&uuml;sse der Mitgliederversammlung werden mit einfacher
            Stimmenmehrheit der &nbsp;anwesenden Mitglieder gefasst. </span></p>
    <p className={classNames.c65}><span className={classNames.c0}>&Uuml;ber die Beschl&uuml;sse und, soweit zum Verst&auml;ndnis zu deren
            Zustandekommen erforderlich, auch &uuml;ber &nbsp;den wesentlichen Verlauf der Beratung, ist eine
            Niederschrift anzufertigen. Sie wird von der &nbsp;Versammlungsleitung und der Protokollf&uuml;hrung
            unterschrieben. </span></p>
    <p className={classNames.c26}><span className={classNames.c0}>Alle Mitglieder, die nicht mit ihrem Mitgliedsbeitrag l&auml;nger als einen Monat im
            Verzug sind, sind &nbsp;stimm- und antragsberechtigt. Antr&auml;ge auf Satzungs&auml;nderung,
            au&szlig;erordentliche Neuwahlen oder &nbsp;Aufl&ouml;sung sind mindestens vier Wochen vor der Versammlung
            beim Vorstand einzureichen und mit &nbsp;der fristgem&auml;&szlig;en Einladung zu versenden. Solche
            Antr&auml;ge sind als Initiativantr&auml;ge unzul&auml;ssig. &nbsp;</span></p>
    <p className={classNames.c82}><span className={classNames.c0}>Die Mitgliederversammlung ist &ouml;ffentlich. Die Versammlung kann zu einzelnen
            &nbsp;Tagesordnungspunkten die &Ouml;ffentlichkeit mit Mehrheitsbeschluss ausschlie&szlig;en. </span></p>
    <p className={classNames.c29}><span className={classNames.c0}>Zur Durchf&uuml;hrung von Versammlungen, Sitzungen und Tagungen der Organe sowie
            aller Gremien &nbsp;erl&auml;sst der Vorstand eine Gesch&auml;ftsordnung. </span></p>
    <p className={classNames.c16}><span className={classNames.c32}>&sect;9 Vorstand &nbsp;</span></p>
    <p className={classNames.c53}><span className={classNames.c0}>Der Vorstand besteht aus dem Vorsitzenden Julian Steiner (Pr&auml;sident), dem
            stellvertretenden &nbsp;Vorsitzenden (?)(Vizepr&auml;sident) und dem Schatzmeister (?). Sie bilden den
            Vorstand im Sinne von &sect; &nbsp;26 BGB. Die Vorstandsmitglieder sind ehrenamtlich t&auml;tig. </span></p>
    <p className={classNames.c15}><span className={classNames.c0}>Die Mitgliederversammlung kann zum angek&uuml;ndigten Tagesordnungspunkt Wahlen
            beschlie&szlig;en, &nbsp;dass der Vorstand um eine bestimmte Anzahl von Beisitzern/innen zu erweitern ist.
        </span></p>
    <p className={classNames.c89}><span className={classNames.c0}>Vorstandsmitglieder m&uuml;ssen Vereinsmitglieder sein. </span></p>
    <p className={classNames.c22}><span className={classNames.c0}>Zur rechtsverbindlichen Vertretung des Vereins nach au&szlig;en gen&uuml;gt die
            gemeinsame Zeichnung &nbsp;durch zwei Mitglieder des gesetzlichen Vorstandes. </span></p>
    <p className={classNames.c46}><span className={classNames.c0}>Vorstandsmitglieder bleiben so lange im Amt, bis sie von ihrem Amt
            zur&uuml;cktreten, nach &sect; 27 Abs. 2 &nbsp;BGB von der Mitgliederversammlung abberufen werden oder
            versterben. </span></p>
    <p className={classNames.c12}><span className={classNames.c0}>Der Vorstand soll in der Regel viertelj&auml;hrlich bis monatlich tagen. Die
            Sitzungen sind &nbsp;vereins&ouml;ffentlich, sofern Datenschutzbestimmungen keine Vertraulichkeit verlangen.
        </span></p>
    <p className={classNames.c37}><span className={classNames.c0}>Alle Mitglieder sind berechtigt, Antr&auml;ge an den Vorstand zu stellen. Die
            Beschl&uuml;sse sind schriftlich zu &nbsp;protokollieren, die Protokolle sind den Mitgliedern zur Kenntnis
            zu geben. </span></p>
    <p className={classNames.c16}><span className={classNames.c32}>&sect;10 Satzungs&auml;nderung und Aufl&ouml;sung &nbsp;</span></p>
    <p className={classNames.c60}><span className={classNames.c0}>&Uuml;ber Satzungs&auml;nderungen, die &Auml;nderung des Vereinszwecks und die
            Aufl&ouml;sung entscheidet die &nbsp;Mitgliederversammlung. Vorschl&auml;ge zu Satzungs&auml;nderungen,
            Zweck&auml;nderungen und zur Aufl&ouml;sung &nbsp;sind von der Mitgliederversammlung an den Vorstand zu
            richten und vom Vorstand den </span></p>
    <p className={classNames.c86}><span className={classNames.c0}>stimmberechtigten Mitgliedern bis sp&auml;testens drei Wochen vor der
            Mitgliederversammlung bekannt &nbsp;zu geben. </span></p>
    <p className={classNames.c20}><span className={classNames.c0}>Beschl&uuml;sse zur &Auml;nderung der Satzung bed&uuml;rften einer Mehrheit von 2/3
            der anwesenden Mitglieder. </span></p>
    <p className={classNames.c7}><span className={classNames.c0}>Ein Beschluss zur Aufl&ouml;sung des Vereins bedarf einer Mehrheit von &frac34; der
            anwesenden Mitglieder &nbsp;der Mitgliederversammlung. </span></p>
    <p className={classNames.c98}><span className={classNames.c0}>&Auml;nderungen oder Erg&auml;nzungen der Satzung, die von einer zust&auml;ndigen
            Beh&ouml;rde vorgeschrieben &nbsp;werden, werden vom Vorstand umgesetzt und bed&uuml;rfen keiner
            Beschlussfassung durch die &nbsp;Mitgliederversammlung. Sie sind den Mitgliedern sp&auml;testens mit der
            n&auml;chsten Einladung zur &nbsp;Mitgliederversammlung mitzuteilen. </span></p>
    <p className={classNames.c56}><span className={classNames.c0}>Bei Aufl&ouml;sung des Vereins &ldquo;TenTen Cannabis Social Club Heilbronn&rdquo;
            geht ein m&ouml;gliches &nbsp;Vereinsverm&ouml;gen nach Liquidation anteilig an: </span></p>
    <p className={classNames.c2}><span className={classNames.c0}>- (LEAP)Law Enforcement Against Prohibition </span></p>
    <p className={classNames.c6}><span className={classNames.c0}>- Deutschland e.V.</span></p>
        </div>
    </main>
}