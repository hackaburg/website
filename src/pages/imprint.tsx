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
            label: "Personenbezogene Daten",
            marker: Anchors.PersonenbezogeneDaten,
          },
          {
            label: "Automatisch gespeicherte Daten",
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
            label: "Änderungen der Datenschutzerklärung",
            marker: Anchors.Aenderungen,
          },
        ]}
      />

      <ImprintContainer>
        <Container>
          <h1>Impressum</h1>
        </Container>

        <Section>
          <Container>
            <h1>Impressum</h1>
            <p>
              R-Tech GmbH &mdash; ein Unternehmen der Stadt Regensburg
              <br />
              Franz-Mayer-Str. 1<br />
              93053 Regensburg HRB 8306
              <br />
              Amtsgericht Regensburg
              <br />
              Umsatzsteuer ID-Nr.: DE 216839078
            </p>
            <p>
              Die R-Tech GmbH führt die Geschäfte der Digitalen
              Gründerinitiative Oberpfalz DGO.
            </p>
          </Container>
        </Section>

        {useScrollSpyMarker(Anchors.Kontakt)}
        <Section>
          <Container>
            <Title>Kontakt</Title>
            <p>
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
                      <Link
                        label="dgo@techbase.de"
                        to="mailto:dgo@techbase.de"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </p>
            <br />

            <h3>Geschäftsführer</h3>
            <p>Alexander Rupprecht, Toni Lautenschläger</p>

            <h3>Projektleitung "Digitale Gründerinitiative Oberpfalz"</h3>
            <p>
              Dr. Veronika Fetzer
              <br />
              E-Mail:{" "}
              <Link
                label="dgo@techbase.de"
                to="mailto:veronika.fetzer@techbase.de"
              />
            </p>

            <h3>Presse</h3>
            <p>
              Tanja Braun
              <br />
              E-Mail:{" "}
              <Link
                label="dgo@techbase.de"
                to="mailto:tanja.braun@techbase.de"
              />
            </p>

            <h3>Technische Betreuung</h3>
            <p>
              Sysgrade GmbH
              <br />
              Konrad-Adenauer-Allee 38
              <br />
              93051 Regensburg
            </p>

            <h3>Fotos</h3>
            <p>
              www.fotolia.de
              <br />
              www.shutterstock.com
            </p>
          </Container>
        </Section>

        {useScrollSpyMarker(Anchors.VerweiseUndLinks)}
        <Section>
          <Container>
            <Title>Verweise und Links</Title>
            <p>
              Auf{" "}
              <Link
                label="dgo@techbase.de"
                to="http://www.digitale-oberpfalz.de"
              />{" "}
              und auf{" "}
              <Link label="www.hackaburg.de" to="http://www.hackaburg.de" />{" "}
              befinden sich Verweise ("Hyperlinks") auf andere Seiten im
              Internet. Auf direkte und indirekte Verweise innerhalb der
              Unternehmensdatenbank, die von den Unternehmen ("Inserent") selbst
              verwaltet werden, haben wir keinen Einfluss; erhalten wir
              Kenntniss von gegen das Recht verstoßende Inhalte auf anderen
              Webseiten, auf welche ein Inserent verlinkt, werden wir den
              Inserent umgehend auffordern, den Verweis zu entfernen. Sollte der
              Inserent daraufhin den Verweis nicht unverzüglich entfernen und
              sollte es uns technisch möglich sein, werden wir den Verweis
              selbst entfernen. Wir überprüfen unter Wahrung der
              Verhältnismäßigkeit der Mittel die sonstigen Verweise zum
              Zeitpunkt der Verlinkung; auf aktuelle und zukünftige Änderungen
              der verlinkten Seiten haben wir keinen Einfluss; erhalten wir
              Kenntniss von gegen das Recht verstoßende Inhalte auf den
              Verweiszielen, werden wir den Verweis unterlassen.
            </p>
          </Container>
        </Section>

        {useScrollSpyMarker(Anchors.Datenermittlung)}
        <Section>
          <Container>
            <Title>
              Datenübermittlung und -protokollierung zu systeminternen und
              statistischen Zwecken
            </Title>
            <p>
              Wir erheben und verwenden Ihre personenbezogenen Daten
              ausschließlich im Rahmen der Bestimmungen des Datenschutzrechts
              der Bundesrepublik Deutschland. Im folgenden unterrichten wir Sie
              über Art, Umfang und Zwecke der Erhebung und Verwendung
              personenbezogener Daten. Sie können diese Unterrichtung jederzeit
              auf unserer Webseite abrufen.
            </p>
            <p>
              Ihr Internet-Browser übermittelt beim Zugriff auf unsere Webseite
              aus technischen Gründen automatisch Daten an unseren Webserver. Es
              handelt sich dabei unter anderem um Datum und Uhrzeit des
              Zugriffs, URL der verweisenden Webseite, abgerufene Datei, Menge
              der gesendeten Daten, Browsertyp und -version, Betriebssystem
              sowie Ihre IP-Adresse. Diese Daten werden getrennt von anderen
              Daten, die Sie im Rahmen der Nutzung unseres Angebotes eingeben
              gespeichert. Eine Zuordnung dieser Daten zu einer bestimmten
              Person ist uns nicht möglich. Diese Daten werden zu statistischen
              Zwecken ausgewertet und im Anschluss gelöscht.
            </p>
            <p>
              Diese Website benutzt Google Analytics, einen Webanalysedienst der
              Google Inc. ("Google"). Google Analytics verwendet sog. "Cookies",
              Textdateien, die auf Ihrem Computer gespeichert werden und die
              eine Analyse der Benutzung der Website durch Sie ermöglichen. Die
              durch den Cookie erzeugten Informationen über Ihre Benutzung
              dieser Website werden in der Regel an einen Server von Google in
              den USA übertragen und dort gespeichert. Im Falle der Aktivierung
              der IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von
              Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union
              oder in anderen Vertragsstaaten des Abkommens über den
              Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen
              wird die volle IP-Adresse an einen Server von Google in den USA
              übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
              Website wird Google diese Informationen benutzen, um Ihre Nutzung
              der Website auszuwerten, um Reports über die Websiteaktivitäten
              zusammenzustellen und um weitere mit der Websitenutzung und der
              Internetnutzung verbundene Dienstleistungen gegenüber dem
              Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics
              von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen
              Daten von Google zusammengeführt. Sie können die Speicherung der
              Cookies durch eine entsprechende Einstellung Ihrer
              Browser-Software verhindern; wir weisen Sie jedoch darauf hin,
              dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen
              dieser Website vollumfänglich werden nutzen können. Sie können
              darüber hinaus die Erfassung der durch das Cookie erzeugten und
              auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
              IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch
              Google verhindern, indem sie das unter dem folgenden Link (
              <Link
                label="http://tools.google.com/dlpage/gaoptout?hl=de"
                to="http://tools.google.com/dlpage/gaoptout?hl=de"
              />
              ) verfügbare Browser-Plugin herunterladen und installieren.
            </p>
            <p>
              Sie können die Erfassung durch Google Analytics verhindern, indem
              Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie
              gesetzt, der die zukünftige Erfassung Ihrer Daten beim Besuch
              dieser Website verhindert: Google Analytics deaktivieren
            </p>
            <p>
              Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden
              Sie unter{" "}
              <Link
                label="dgo@techbase.de"
                to="http://www.google.com/analytics/terms/de.html"
              />{" "}
              bzw. unter{" "}
              <Link
                label="http://www.google.com/intl/de/analytics/privacyoverview.html"
                to="http://www.google.com/intl/de/analytics/privacyoverview.html"
              />
              . Wir weisen Sie darauf hin, dass auf dieser Website Google
              Analytics um den Code "gat._anonymizeIp();" erweitert wurde, um
              eine anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu
              gewährleisten.
            </p>
            <p>
              Diese Website benutzt Piwik, eine Open-Source-Software zur
              statistischen Auswertung der Besucherzugriffe. Piwik verwendet
              sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Website durch Sie
              ermöglichen. Die durch den Cookie erzeugten Informationen über
              Ihre Benutzung dieses Internetangebotes werden auf dem Server des
              Anbieters in Deutschland gespeichert. Die IP-Adresse wird sofort
              nach der Verarbeitung und vor deren Speicherung anonymisiert. Sie
              können die Installation der Cookies durch eine entsprechende
              Einstellung Ihrer Browser-Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Website vollumfänglich nutzen können.
              (Quelle: Muster von spreerecht.de)
            </p>
          </Container>
        </Section>

        {useScrollSpyMarker(Anchors.Bestandsdaten)}
        <Section>
          <Container>
            <Title>Bestandsdaten</Title>
            <p>
              Sofern zwischen Ihnen und uns ein Vertragsverhältnis begründet,
              inhaltlich ausgestaltet oder geändert werden soll, erheben und
              verwenden wir personenbezogene Daten von Ihnen, soweit dies zu
              diesen Zwecken erforderlich ist. Auf Anordnung der zuständigen
              Stellen dürfen wir im Einzelfall Auskunft über diese Daten
              (Bestandsdaten) erteilen, soweit dies für Zwecke der
              Strafverfolgung, zur Gefahrenabwehr, zur Erfüllung der
              gesetzlichen Aufgaben der Verfassungsschutzbehörden oder des
              Militärischen Abschirmdienstes oder zur Durchsetzung der Rechte am
              geistigen Eigentum erforderlich ist.
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

        {useScrollSpyMarker(Anchors.Cookies)}
        <Section>
          <Container>
            <Title>Cookies</Title>
            <p>
              Um den Funktionsumfang unseres Internetangebotes zu erweitern und
              die Nutzung für Sie komfortabler zu gestalten, verwenden wir so
              genannte "Cookies". Mit Hilfe dieser "Cookies" können bei dem
              Aufruf unserer Webseite Daten auf Ihrem Rechner gespeichert
              werden. Sie haben die Möglichkeit, das Abspeichern von Cookies auf
              Ihrem Rechner durch entsprechende Einstellungen in Ihrem Browser
              zu verhindern. Hierdurch könnten allerdings der Funktionsumfang
              unseres Angebotes eingeschränkt werden.
            </p>
          </Container>
        </Section>

        {useScrollSpyMarker(Anchors.Auskunftsrecht)}
        <Section>
          <Container>
            <Title>Auskunftsrecht</Title>
            <p>
              Als Nutzer unseres Internetangebotes haben Sie das Recht, von uns
              Auskunft über die zu Ihrer Person oder zu Ihrem Pseudonym
              gespeicherten Daten zu verlangen. Auf Ihr Verlangen kann die
              Auskunft auch elektronisch erteilt werden.
            </p>
            <br />
            <p>Quelle: Rechtsanwalt Kluge, Hannover</p>
            <br />
            <br />
            <br />
          </Container>
        </Section>
      </ImprintContainer>
    </Page>
  );
};

export default Imprint;
