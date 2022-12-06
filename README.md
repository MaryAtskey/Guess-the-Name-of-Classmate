# Guess-the-Name-of-Classmate
A short quiz game where you need to guess the name of a classmate from a photo.

Hygienkrav

- vara responsiv (mobile first, minst 3 olika breakpoints)
- semantiskt korrekt
- använda flexboxes alternativt CSS grid (går så klart bra att använda Bootstrap/Tailwind etc.)
- all data och status ska finnas i JavaScript, dvs ska ej använda DOM som ”single point of truth”
- spelet ska vara publicerat på Netlify
 

Versionshantering
(Bedöms i kursen Arbetsmetodik för utvecklare) All källkod ska vara versionshanterad i ett (privat) Git-repository, där ni löpande gör commits med beskrivande commit-meddelanden, så att det är enkelt att följa ert utvecklingsarbete.
 

Struktur
Det ska finnas en Array med objekt, där varje objekt ska ha egenskaperna name och image, där name är en sträng med namnet på personen och image är en URL till bilden på personen.

Array:en ska INTE innehålla någon information som ex. svarsalternativ eller vilket svar som är rätt! Däremot går det bra att lägga till ett id på varje person, om du skulle vilja.

Array:en ska kunna innehålla obegränsat antal personer (dvs du ska aldrig förutsätta att array:en är en viss längd!). När spelet startar/startar om ska man kunna välja hur många personer man vill gissa namnen för (tex. 10, 20 eller samtliga).

För varje person ska hens foto visas (samma foto ska endast förekomma en gång per spelomgång), samt fyra svarsalternativ bestående av personens namn (rätt svar) samt tre slumpmässigt utvalda andra personers namn. Platsen för rätt svar ska vara slumpmässig så man inte kan ”fuska” genom att lära sig var rätt svar är placerat. Naturligtvis ska inte samma namn heller förekomma två gånger för samma foto.

Efter att man valt ett svarsalternativ på varje person, så ska resultatet visas (alt. om man trycker på en knapp ”Visa resultat”), samt efter varje spelrunda där man får reda på hur många rätt vs. fel man hade (t.ex. 16/20 rätt om man gissade rätt på 16 av 20 personer).


