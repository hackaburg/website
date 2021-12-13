import styled from "@emotion/styled";
import * as React from "react";
import { Anchors } from "../anchors";
import { Container } from "../components/container";
import { Link } from "../components/link";
import { Navbar } from "../components/navbar";
import { Page } from "../components/page";
import { useScrollSpyMarker } from "../hooks/use-scrollspy";

const ImprintContainer = styled.div`
  padding: 10rem 0;
`;

const Section = styled.section`
  margin: 3rem 0;
`;

const Title = styled.h2``;

const Imprint = () => {
  return (
    <Page>
      <Navbar
        items={[
          {
            label: "Intro",
            marker: Anchors.Intro,
          },
          {
            label: "Deine Daten",
            marker: Anchors.PersonenbezogeneDaten,
          },
          {
            label: "Automatische Daten",
            marker: Anchors.AutomatischGespeicherteDaten,
          },
          {
            label: "Registrierung",
            marker: Anchors.Registrierung,
          },
          {
            label: "Sicherheit",
            marker: Anchors.Sicherheit,
          },
          {
            label: "Betroffenenrechte",
            marker: Anchors.Betroffenenrechte,
          },
          {
            label: "Nutzungsdaten",
            marker: Anchors.Nutzungsdaten,
          },
          {
            label: "Änderungen",
            marker: Anchors.Aenderungen,
          },
        ]}
      />

      <ImprintContainer>
        <Container>
          <h1>Datenschutzerklärung www.hackaburg.de/apply</h1>
        </Container>

        {useScrollSpyMarker(Anchors.Intro)}
        <Section>
          <Container>
            <Title>Wir nehmen Datenschutz ernst</Title>
            <p>
              Der Schutz Ihrer Privatsphäre bei der Verarbeitung persönlicher
              Daten ist für uns ein wichtiges Anliegen. Wenn Sie unsere Webseite
              besuchen, speichern unsere Webserver standardmäßig die IP Ihres
              Internet Service Provider, die Webseite, von der aus Sie uns
              besuchen, die Webseiten, die Sie bei uns besuchen sowie das Datum
              und die Dauer des Besuches. Diese Informationen sind für die
              technische Übertragung der Webseiten und den sicheren
              Serverbetrieb zwingend erforderlich. Eine personalisierte
              Auswertung dieser Daten erfolgt nicht. Sofern Sie uns Daten per
              Kontakt-Formular senden, werden diese Daten im Zuge der
              Datensicherung auf unseren Servern gespeichert. Ihre Daten werden
              von uns ausschließlich zur Bearbeitung Ihres Anliegens verwendet.
              Ihre Daten werden streng vertraulich behandelt. Eine Weitergabe an
              Dritte erfolgt nicht.
            </p>
            <h3>Verantwortlicher:</h3>
            <p>
              R-Tech GmbH — ein Unternehmen der Stadt Regensburg
              <br />
              Franz-Mayer-Str. 1
              <br />
              93053 Regensburg HRB 8306
            </p>
            <table>
              <tbody>
                <tr>
                  <td>Tel.: </td>
                  <td>+49.(0)941.604889-0</td>
                </tr>
                <tr>
                  <td>Fax: </td>
                  <td>+49.(0)941.604889-11</td>
                </tr>
                <tr>
                  <td>E-Mail: </td>
                  <td>
                    <Link label="dgo@techbase.de" to="mailto:dgo@techbase.de" />
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              Die R-Tech GmbH führt die Geschäfte der Digitalen
              Gründerinitiative Oberpfalz DGO.
            </p>
          </Container>
        </Section>

        {useScrollSpyMarker(Anchors.PersonenbezogeneDaten)}
        <Section>
          <Container>
            <Title>Personenbezogene Daten</Title>
            <p>
              Personenbezogene Daten sind Daten über Ihre Person. Diese
              beinhalten Ihren Namen, Ihre Adresse und Ihre E-Mail-Adresse. Sie
              müssen auch keine personenbezogenen Daten preisgeben, um unsere
              Internetseite besuchen zu können. In einigen Fällen benötigen wir
              Ihren Namen und Adresse sowie weitere Informationen, um Ihnen die
              gewünschte Dienstleistung anbieten zu können.
            </p>
            <p>
              Das Gleiche gilt für den Fall, dass wir Sie auf Wunsch mit
              Informationsmaterial beliefern bzw. wenn wir Ihre Anfragen
              beantworten. In diesen Fällen werden wir Sie immer darauf
              hinweisen. Außerdem speichern wir nur die Daten, die Sie uns
              automatisch oder freiwillig übermittelt haben.
            </p>
            <p>
              Wenn Sie einen unserer Services nutzen, sammeln wir in der Regel
              nur die Daten die notwendig sind, um Ihnen unseren Service bieten
              zu können. Möglicherweise fragen wir Sie nach weiteren
              Informationen, die aber freiwilliger Natur sind. Wann immer wir
              personenbezogene Daten verarbeiten, tun wir dies, um Ihnen unseren
              Service anbieten zu können oder um unsere kommerziellen Ziele zu
              verfolgen.
            </p>
          </Container>
        </Section>

        {useScrollSpyMarker(Anchors.AutomatischGespeicherteDaten)}
        <Section>
          <Container>
            <Title>Automatisch gespeicherte Daten</Title>
            <b>Server-Log-Dateien</b>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Datum und Uhrzeit der Anforderung</li>
              <li>Name der angeforderten Datei</li>
              <li>Seite, von der aus die Datei angefordert wurde</li>
              <li>
                Zugriffsstatus (Datei übertragen, Datei nicht gefunden, etc.)
              </li>
              <li>verwendeter Webbrowser und verwendetes Betriebssystem</li>
              <li>vollständige IP-Adresse des anfordernden Rechners</li>
              <li>übertragene Datenmenge</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1
              lit. f DSGVO auf Basis unseres berechtigten Interesses an der
              Verbesserung der Stabilität und Funktionalität unserer Website.
              Aus Gründen der technischen Sicherheit, insbesondere zur Abwehr
              von Angriffsversuchen auf unseren Webserver, werden diese Daten
              von uns kurzzeitig gespeichert. Ein Rückschluss auf einzelne
              Personen ist uns anhand dieser Daten nicht möglich. Nach
              spätestens sieben Tagen werden die Daten durch Verkürzung der
              IP-Adresse auf Domain-Ebene anonymisiert, so dass es nicht mehr
              möglich ist, einen Bezug zum einzelnen Nutzer herzustellen. In
              anonymisierter Form werden die Daten daneben zu statistischen
              Zwecken verarbeitet; ein Abgleich mit anderen Datenbeständen oder
              eine Weitergabe an Dritte, auch in Auszügen, findet nicht statt.
              Lediglich im Rahmen unserer Serverstatistik, die wir alle zwei
              Jahre in unserem Tätigkeitsbericht veröffentlichen, findet eine
              Darstellung der Anzahl der Seitenaufrufe statt.
            </p>
            <b>Cookies</b>
            <p>
              Wenn Sie unsere Internetseiten besuchen, speichern wir
              möglicherweise Informationen auf Ihrem Computer in Form von
              Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID. Eine
              Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus
              einer Zeichenfolge, durch welche Internetseiten und Server dem
              konkreten Internetbrowser zugeordnet werden können, in dem das
              Cookie gespeichert wurde. Dies ermöglicht es den besuchten
              Internetseiten und Servern, den individuellen Browser der
              betroffenen Person von anderen Internetbrowsern, die andere
              Cookies enthalten, zu unterscheiden. Ein bestimmter
              Internetbrowser kann über die eindeutige Cookie-ID wiedererkannt
              und identifiziert werden.
            </p>
            <p>
              Durch den Einsatz von Session-Cookies kann der Verantwortliche den
              Nutzern dieser Internetseite einen nutzerfreundlichen Service
              bereitstellen, der ohne die Setzung von Cookies nicht möglich
              wäre. Ohne Einwilligung verwenden wir lediglich technisch
              notwendige Cookies auf der Rechtsgrundlage des berechtigten
              Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p>
              Personenbezogene Cookies zur Verbesserung unserer Website oder zu
              Marketing-/ Werbezwecken verwenden wir nur mit Ihrer Einwilligung.
              Bei Ihrem ersten Besuch können Sie freiwillig über das
              eingeblendete Cookie-Banner, dem Tracking bzw. der Analyse
              zustimmen. Ggf. werden Ihre Daten an Partner bzw. Drittanbieter
              weitergegeben. Nur wenn Sie dem explizit zustimmen, werden diese
              Cookies gespeichert, die Rechtsgrundlage ist dann Ihre
              Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Ihre Einstellungen
              zur Verwendung von Cookies können Sie hier jederzeit ändern:
            </p>
          </Container>
        </Section>

        {useScrollSpyMarker(Anchors.Registrierung)}
        <Section>
          <Container>
            <Title>Registrierung auf der Internetseite</Title>
            <p>
              Die betroffene Person hat die Möglichkeit, sich auf der
              Internetseite des für die Verarbeitung Verantwortlichen unter
              Angabe von personenbezogenen Daten zu registrieren. Folgende
              personenbezogenen Daten werden dabei erhoben: Name, Beruf,
              Herkunft, E-Mail-Adresse, Passwort.
            </p>
            <p>
              Durch eine Registrierung auf der Internetseite des für die
              Verarbeitung Verantwortlichen wird ferner die vom
              Internet-Service-Provider (ISP) der betroffenen Person vergebene
              IP-Adresse, das Datum sowie die Uhrzeit der Registrierung
              gespeichert. Die Speicherung dieser Daten erfolgt vor dem
              Hintergrund, dass nur so der Missbrauch unserer Dienste verhindert
              werden kann, und diese Daten im Bedarfsfall ermöglichen, begangene
              Straftaten aufzuklären. Insofern ist die Speicherung dieser Daten
              zur Absicherung des für die Verarbeitung Verantwortlichen
              erforderlich. Eine Weitergabe dieser Daten an Dritte erfolgt
              grundsätzlich nicht, sofern keine gesetzliche Pflicht zur
              Weitergabe besteht oder die Weitergabe der Strafverfolgung dient.
            </p>
            <p>
              Die Registrierung der betroffenen Person unter freiwilliger Angabe
              personenbezogener Daten dient dem für die Verarbeitung
              Verantwortlichen dazu, der betroffenen Person Inhalte oder
              Leistungen anzubieten, die aufgrund der Natur der Sache nur
              registrierten Benutzern angeboten werden können. Registrierten
              Personen steht die Möglichkeit frei, die bei der Registrierung
              angegebenen personenbezogenen Daten jederzeit abzuändern oder
              vollständig aus dem Datenbestand des für die Verarbeitung
              Verantwortlichen löschen zu lassen.
            </p>
            <p>
              Sie verpflichten sich, die persönlichen Zugangsdaten vertraulich
              zu behandeln und keinem unbefugten Dritten zugänglich zu machen.
              Wir können keine Haftung für missbräuchlich verwendete Passwörter
              übernehmen, es sei denn, wir hätten den Missbrauch zu
              vertreten.Mit der Funktion „angemeldet bleiben“ möchten wir Ihnen
              den Besuch unserer Webseiten so angenehm wie möglich gestalten.
              Diese Funktion ermöglicht Ihnen die Nutzung unserer Dienste, ohne
              sich jedes Mal erneut einloggen zu müssen. Aus Sicherheitsgründen
              werden Sie jedoch nochmals zur Eingabe Ihres Passworts
              aufgefordert, wenn beispielsweise Ihre persönlichen Daten geändert
              werden sollen oder Sie eine Bestellung aufgeben möchten. Wir
              empfehlen Ihnen, diese Funktion nicht zu nutzen, wenn der Computer
              von mehreren Benutzern verwendet wird. Wir weisen darauf hin, dass
              die Funktion „angemeldet bleiben“ nicht verfügbar ist, wenn Sie
              eine Einstellung verwenden, die gespeicherte Cookies nach jeder
              Session automatisch löscht.
            </p>
          </Container>
        </Section>

        {useScrollSpyMarker(Anchors.Sicherheit)}
        <Section>
          <Container>
            <Title>Sicherheit</Title>
            <p>
              Wir haben technische und administrative Sicherheitsvorkehrungen
              getroffen um Ihre personenbezogenen Daten gegen Verlust,
              Zerstörung, Manipulation und unautorisierten Zugriff zu schützen.
              All unsere Mitarbeiter sowie für uns tätige Dienstleister sind auf
              die gültigen Datenschutzgesetze verpflichtet.
            </p>
            <p>
              Wann immer wir personenbezogene Daten sammeln und verarbeiten
              werden diese verschlüsselt, bevor sie übertragen werden. Das
              heißt, dass Ihre Daten nicht von Dritten missbraucht werden
              können. Unsere Sicherheitsvorkehrungen unterliegen dabei einem
              ständigen Verbesserungsprozess und unsere Datenschutzerklärungen
              werden ständig überarbeitet. Bitte stellen Sie sicher, dass Ihnen
              die aktuellste Version vorliegt.
            </p>
          </Container>
        </Section>

        {useScrollSpyMarker(Anchors.Betroffenenrechte)}
        <Section>
          <Container>
            <Title>Betroffenenrechte</Title>
            <p>
              Sie haben jederzeit ein Recht auf Auskunft, Berichtigung, Löschung
              oder Einschränkung der Verarbeitung Ihrer gespeicherten Daten, ein
              Widerspruchsrecht gegen die Verarbeitung sowie ein Recht auf
              Datenübertragbarkeit und auf Beschwerde gemäß den Voraussetzungen
              des Datenschutzrechts.
            </p>
            <b>Recht auf Auskunft</b>
            <p>
              Sie können von uns eine Auskunft verlangen, ob und in welchem
              Ausmaß wir Ihre Daten verarbeiten.
            </p>
            <b>Recht auf Berichtigung</b>
            <p>
              Verarbeiten wir Ihre Daten, die unvollständig oder unrichtig sind,
              so können Sie jederzeit deren Berichtigung bzw. deren
              Vervollständigung von uns verlangen.
            </p>
            <b>Recht auf Löschung</b>
            <p>
              Sie können von uns die Löschung Ihrer Daten verlangen, sofern wir
              diese unrechtmäßig verarbeiten oder die Verarbeitung
              unverhältnismäßig in Ihre berechtigten Schutzinteressen eingreift.
              Bitte beachten Sie, dass es Gründe geben kann, die einer
              sofortigen Löschung entgegenstehen, z.B. im Fall von gesetzlich
              geregelten Aufbewahrungspflichten. Unabhängig von der Wahrnehmung
              Ihres Rechts auf Löschung, werden wir Ihre Daten umgehend und
              vollständig löschen, soweit keine diesbezügliche
              rechtsgeschäftliche oder gesetzliche Aufbewahrungspflicht
              entgegensteht.
            </p>
            <b>Recht auf Einschränkung der Verarbeitung</b>
            <p>
              Sie können von uns die Einschränkung der Verarbeitung Ihrer Daten
              verlangen, wenn
            </p>
            <ul>
              <li>
                Sie die Richtigkeit der Daten bestreiten, und zwar für eine
                Dauer, die es uns ermöglicht, die Richtigkeit der Daten zu
                überprüfen.
              </li>
              <li>
                die Verarbeitung der Daten unrechtmäßig ist, Sie aber eine
                Löschung ablehnen und stattdessen eine Einschränkung der
                Datennutzung verlangen,
              </li>
              <li>
                wir die Daten für den vorgesehenen Zweck nicht mehr benötigen,
                Sie diese Daten aber noch zur Geltendmachung oder Verteidigung
                von Rechtsansprüchen brauchen, oder
              </li>
              <li>
                Sie Widerspruch gegen die Verarbeitung der Daten eingelegt
                haben.
              </li>
            </ul>
            <b>Recht auf Datenübertragbarkeit:</b>
            <p>
              Sie können von uns verlangen, dass wir Ihnen Ihre Daten, die Sie
              uns bereitgestellt haben, in einem strukturierten, gängigen und
              maschinenlesbaren Format zur Verfügung stellen und dass Sie diese
              Daten einem anderen Verantwortlichen ohne Behinderung durch uns
              übermitteln können, sofern
            </p>
            <ul>
              <li>
                wir diese Daten aufgrund einer von Ihnen erteilten und
                widerrufbaren Zustimmung oder zur Erfüllung eines Vertrages
                zwischen uns verarbeiten, und
              </li>
              <li>
                diese Verarbeitung mithilfe automatisierter Verfahren erfolgt.
              </li>
            </ul>
            <p>
              Bei technischer Machbarkeit können Sie von uns eine direkte
              Übermittlung Ihrer Daten an einen anderen Verantwortlichen
              verlangen.
            </p>
            <b>Widerspruchsrecht</b>
            <p>
              Verarbeiten wir Ihre Daten aus berechtigtem Interesse, so können
              Sie gegen diese Datenverarbeitung jederzeit Widerspruch einlegen;
              dies würde auch für ein auf diese Bestimmungen gestütztes
              Profiling gelten. Wir verarbeiten dann Ihre Daten nicht mehr, es
              sei denn, wir können zwingende schutzwürdige Gründe für die
              Verarbeitung nachweisen, die Ihre Interessen, Rechte und
              Freiheiten überwiegen oder die Verarbeitung dient der
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
              Der Verarbeitung Ihrer Daten zum Zweck der Direktwerbung können
              Sie jederzeit ohne Angabe von Gründen widersprechen.
            </p>
            <b>Beschwerderecht</b>
            <p>
              Sind Sie der Meinung, dass wir bei der Verarbeitung Ihrer Daten
              gegen deutsches oder europäisches Datenschutzrecht verstoßen, so
              bitten wir Sie, mit uns Kontakt aufzunehmen, um Fragen aufklären
              zu können. Sie haben selbstverständlich auch das Recht, sich an
              die für Sie zuständige Aufsichtsbehörde, das jeweilige Landesamt
              für Datenschutzaufsicht, zu wenden. Sofern Sie eines der genannten
              Rechte uns gegenüber geltend machen wollen, so wenden Sie sich
              bitte an unseren Datenschutzbeauftragten. Im Zweifel können wir
              zusätzliche Informationen zur Bestätigung Ihrer Identität
              anfordern.
            </p>
          </Container>
        </Section>

        {useScrollSpyMarker(Anchors.Nutzungsdaten)}
        <Section>
          <Container>
            <Title>Nutzungsdaten</Title>
            <p>
              Wir erheben und verwenden personenbezogene Daten von Ihnen, soweit
              dies erforderlich ist, um die Inanspruchnahme unseres
              Internetangebotes zu ermöglichen oder abzurechnen (Nutzungsdaten).
              Dazu gehören insbesondere Merkmale zu Ihrer Identifikation und
              Angaben zu Beginn und Ende sowie des Umfangs der Nutzung unseres
              Angebotes. Für Zwecke der Werbung, der Marktforschung und zur
              bedarfsgerechten Gestaltung unseres Internetangebotes dürfen wir
              bei Verwendung von Pseudonymen Nutzungsprofile erstellen. Sie
              haben das Recht, dieser Verwendung Ihrer Daten zu widersprechen.
              Die Nutzungsprofile dürfen wir nicht mit Daten über den Träger des
              Pseudonyms zusammenführen. Auf Anordnung der zuständigen Stellen
              dürfen wir im Einzelfall Auskunft über diese Daten (Bestandsdaten)
              erteilen, soweit dies für Zwecke der Strafverfolgung, zur
              Gefahrenabwehr, zur Erfüllung der gesetzlichen Aufgaben der
              Verfassungsschutzbehörden oder des Militärischen Abschirmdienstes
              oder zur Durchsetzung der Rechte am geistigen Eigentum
              erforderlich ist.
            </p>
          </Container>
        </Section>

        {useScrollSpyMarker(Anchors.Aenderungen)}
        <Section>
          <Container>
            <Title>Änderungen der Datenschutzerklärung</Title>
            <p>
              Wir behalten uns das Recht vor, unsere Datenschutzerklärungen zu
              ändern, falls dies aufgrund neuer Technologien notwendig sein
              sollte. Bitte stellen Sie sicher, dass Ihnen die aktuellste
              Version vorliegt. Werden an dieser Datenschutzerklärung
              grundlegende Änderungen vorgenommen, geben wir diese auf unserer
              Website bekannt.
            </p>
            <p>
              Alle Interessenten und Besucher unserer Internetseite erreichen
              uns in Datenschutzfragen unter:
            </p>
            <p>Herr Christian Volkmer, vertreten durch Herrn Wojtek Dragon</p>
            <p>
              Projekt 29 GmbH & Co. KG
              <br />
              Ostengasse 14
              <br />
              93047 Regensburg
            </p>
            <table>
              <tbody>
                <tr>
                  <td>Tel.: </td>
                  <td>+49.(0)941.2986930</td>
                </tr>
                <tr>
                  <td>Fax: </td>
                  <td>+49.(0)941.29869316</td>
                </tr>
                <tr>
                  <td>E-Mail: </td>
                  <td>
                    <Link
                      label="anfragen@projekt29.de"
                      to="mailto:anfragen@projekt29.de"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Internet: </td>
                  <td>
                    <Link
                      label="www.projekt29.de"
                      to="https://www.projekt29.de"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </Container>
        </Section>
      </ImprintContainer>
    </Page>
  );
};

export default Imprint;