Hallo!
Willkommen in meinem Repository zum Tier Quartett von mir (Annalena).

Das Tier Quartett ist ein interaktives Kartenspiel, das Tierkarten mit spannenden Informationen wie Namen, Gruppenzugehörigkeit und Trivia anzeigt. Die Karten lassen sich entweder in sortierter Reihenfolge, gruppiert nach Tiergruppen, oder in zufälliger Reihenfolge anzeigen. Jede Tiergruppe hat dabei eine eigene Farbe, die sowohl auf den Karten als auch im Hintergrund dargestellt wird. Zusätzlich erscheint in der sortierten Ansicht der Name der Gruppe im aside-Bereich auf der linken Seite der Webseite.

Wird die Mischfunktion genutzt, ändert sich das Layout: Der aside-Bereich verschwindet, und der Hintergrund wird durch einen dynamischen radialen Farbverlauf ersetzt. Die Karten können jederzeit zurück in die ursprüngliche Reihenfolge gebracht werden. Es gibt einen spaßigen Hovereffekt, wenn man mit der Maus über die Karte fährt.

Im oberen Bereich der Seite befindet sich der Header mit der Überschrift und einem Button, der das Mischen der Karten ermöglicht. Für mobile Geräte ist das Layout der Webseite speziell angepasst. In dieser Ansicht wird der aside-Bereich ausgeblendet, und die Karten werden vertikal untereinander dargestellt.

Die gesamte Webseite basiert auf einem Grid-Layout, das die Anordnung der Elemente organisiert. Innerhalb des Kartenbereichs wird zusätzlich ein flexibles Layout verwendet, das die Karten gleichmäßig verteilt. Die verwendeten Tierbilder sind im Repository enthalten und wurden mithilfe von DALL-E erstellt.

Der Code generiert dynamisch die Tierkarten basierend auf einer externen Datenquelle, die in der Datei animaldata.js gespeichert ist. Dabei wird jede Karte individuell erstellt und in den Container eingefügt. Sie zeigt die Gruppennummer, den deutschen Namen des Tieres, eine Trivia-Information und Statistiken wie Gewicht, Geschwindigkeit und Lebensdauer. Bilder werden passend zu den Namen eingebunden.

jQuery: Zum Erstellen und Einfügen von DOM-Elementen.
gmynd.js: Zum Zufallsmischen der Karten.
Google Fonts: Schriftart "Inter".

