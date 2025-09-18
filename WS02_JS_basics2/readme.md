# Työpaja 2: JavaScript BOM & DOM

Tässä harjoituksessa harjoitellaan BOM:n ja DOM:n käyttöä. Käytä luentomateriaalia näiden harjoitusten kanssa.

Avaa ensin workshop2.html -tiedosto selaimeen.

Kokeile ratkaista tehtävä konsolissa. Kun saat ratkaisun tehtyä, voit tallentaa koodin tiedostoon script-tägin sisälle.

## Harjoitus 1

Luo JavaScript-komennot, jotka kirjoittavat seuraavan tekstin selaimessa näkyvälle sivulle. Käytä HTML-tagejä tuottaaksesi tekstin tyylit (lihavointi, kursivointi) sivulle.

> **_"Jos minulla olisi yhdeksän tuntia puun kaatamiseen, käyttäisin ensimmäiset kuusi kirveen terottamiseen."_**  
> _– Abraham Lincoln_

## Harjoitus 2

Luo JavaScript-funktio nimeltä `repeatingText`, joka kirjoittaa saman rivin tekstiä sivulle 50 kertaa.

Bonus: kysy käyttäjältä toistojen määrä [prompt-ikkunalla](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt).

## Harjoitus 3 - Selaimen tunnistaminen

Luo JavaScriptillä `if`-lause, joka tarkistaa, käyttääkö käyttäjä Mozilla-selainta. Jos käyttää, selain ohjataan sivulle `http://www.mozilla.org`. Muussa tapauksessa selain ohjataan jollekin toiselle verkkosivulle. Luo yksinkertaiset testisivut koodin testaamiseksi.

Bonus: ennen ohjausta näytä käyttäjälle alert-ikkunalle tiedote: "You are using Firefox, redirecting you...".

Pohdiskelu: miksi selain-tunnistus voi olla epäluotettavaa ja miksi "Feature detection" on usein parempi.

## Harjoitus 4

Luo yksinkertainen verkkosivu, jossa JavaScriptin `confirm`-dialogi kysyy, onko käyttäjä opiskelija.

- Jos käyttäjä painaa OK, kirjoita sivulle: **"Tervetuloa opiskelija"**
- Jos käyttäjä painaa Peruuta, kirjoita sivulle: **"Valitettavasti tämä sivu on tarkoitettu vain opiskelijoille"**

Bonus: kysy myös nimi prompt-ikkunalla ja tulosta: "Tervetuloa, Anna!"

## Harjoitus 5 - kuvien tulostaminen taulukosta

Käytä `document.write`-komentoa tulostaaksesi kuvatagin määrittelemän kuvan selaimen sivulle. Poimi näytettävä kuva JavaScript-taulukosta.

Tehtävässä voit käyttää kuvia seuraavanlaisesta taulukosta:

```javascript
const images = [
  "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
  "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
  "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
];
```

**VINKKI:** Voit käyttää yksittäisiä kuvia taulukon indeksin avulla. Esimerkiksi `images[0]` sisältää URL-osoitteen:  
`http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg`

Kun olet valmis, kirjoita JavaScript-funktio, joka näyttää satunnaisen kuvan seuraavasta kuvalistasta.

**VINKKI:** Voit generoida satunnaisen kokonaisluvun halutulta alueelta (esim. 0–4) seuraavalla koodilla:

```javascript
// Arvotaan kokonaisuluvut 0-4
Math.floor(Math.random() * 5);
// Tai voit käyttää suoraan taulukon kokoa
Math.floor(Math.random() * images.length);
```
