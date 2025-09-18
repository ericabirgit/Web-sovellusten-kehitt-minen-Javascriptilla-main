# Työpaja 3: JavaScript-tapahtumat

Tässä harjoituksessa harjoittelemme JavaScript-tapahtumien käyttöä. Käytä luentomateriaalia rinnakkain näiden harjoitusten kanssa. On myös hyvä idea tallentaa kirjoittamasi koodirivit myöhempää käyttöä varten.

## Harjoitus 1

Alla näet kolme painiketta. Muokkaa lähdekoodia ja lisää näihin painikkeisiin onClick-tapahtumat.

Klikkaa minua Näytä taulukko Sijainti

1. Ensimmäisen painikkeen pitäisi avata alert-ikkuna, joka sanoo "Klikkasit minua!".
2. Toinen painike kutsuu kirjoittamaasi funktiota nimeltä showTable(). `showTable`-funktio tulostaa sivulle itse määrittelemäsi HTML-taulukon (alla) sivulle.

- Vinkki: Määrittele taulukko käyttäen backtick merkkejä eli ` -merkkejä.
- Vinkki:Etsi taulukolle sopiva paikka käyttäen `document.querySelector() -funktiota`. Käytä innerHTML-kenttää sisällön

Voit vapaasti muokata taulukon tietoja.

|    **Nimi**     |         **Tehtävä**         | **Palkka** |
| :-------------: | :-------------------------: | :--------: |
|   Tiger Nixon   |      System Architect       |  $320,800  |
| Garrett Winters |         Accountant          |  $170,750  |
|   Ashton Cox    |   Junior Technical Author   |  $86,000   |
|  Cedric Kelly   | Senior Javascript Developer |  $433,060  |
|   Airi Satou    |         Accountant          |  $162,700  |

## Harjoitus 2

- Lisää onMouseOver-tapahtuma tälle sivulle otsikkoon "Exercise 2". Tapahtuman pitäisi aktivoitua, kun hiiri liikkuu otsikon päälle. Tulosta konsoliin: "Stepped over my a mouse!".
- Lisää toinen tapahtuma, joka aktivoituu, kun hiirellä klikataa Exercise 1 -otsikon päältä. Vaihda tällä kertaa otsikon väri punaiseksi ja sisällöksi teksti: "Bye bye mouse!"
- Lisää kuuntelija dynaamisesti addEventListener()-funktiolla

Vinkki: etsi elementti käyttäen document.querySelector() -funktiota. Sisältöön pääset käsiksi innerHTML-kentän avulla.

## Harjoitus 3

Alla näet yksinkertaisen lomakkeen.

- Lisää onfocus-tapahtuma alla olevaan `textarea`-elementtiin. Kun käyttäjä siirtyy tekstikenttään, näytetään teksti: "Please fill in the form with proper data.". Voit myös kokeilla taustavärin muuttamista.
- Lisää onkeydown-tapahtuma `textarea`-elementtiin. Lisää sitten koodi joka laskee näppäinpainallukset ja tulostaa ne tekstikenttään jonka id on "charcount". Voisitko keksiä muita fiksuja käyttötapoja tämänkaltaiselle kuuntelijalle?
- Kun lomakkeen painiketta klikataan, tarkista onko `textarea`-kenttä tyhjä. Ilmoita käyttäjälle tyhjästä kentästä asianmukaisella viestillä haluamallasi tavalla.

VINKKI: Voit käyttää seuraavaa komentoa tekstialueen arvon lukemiseen: `document.getElementById("textdata").value`. Lomakkeita käsitellään tarkemmin tulevissa työpajoissa.

Bonus: Näytä käyttäjälle reaaliaikainen merkkimäärä textarea-kentässä (esim. 0/200).
Jos käyttäjä ylittää merkkirajan, muuta tekstin väri punaiseksi.

Haaste: Lisää "lähetä"-painikkeeseen deaktivointi, kun kenttä on tyhjä tai liian pitkä. Tämä onnistuu muuttamalla napin disabled-kenttää JavaScriptin avulla.

```html
<form>
  <textarea id="textdata"></textarea><br />
  <span id="charcount"></span>
  <button>Send me</button>
</form>
```

## Exercise 4

```html
<div id="coordinates"></div>
```

Lisää onMouseMove-tapahtuma yllä olevaan DIV-elementtiin. Kun liikutat
hiirtä DIVin (suorakulmion) päällä, ohjelman pitäisi tulostaa kohdistimen
koordinaatit.

Kokeile ensin tulostamista konsoliin `console.log`-komennolla.

Kun ohjelma toimii, voit kokeilla tulostaa tekstin elementtiin, jolla on id
"coords".

Lue lisää [hiiren koordinaattien lukemisesta.
](https://www.w3schools.com/jsref/event_clientx.asp).

VINKKI: Käytä
`document.getElementById("coordinates").innerHTML` tämän toteuttamiseen.

VINKKI: Käytä `document.getElementById("coordinates").innerHTML` tämän
toteuttamiseen.

## Bonus-tehtävä

Tee nappi joka tarkistaa käyttäjän [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API) ja tulostaa sen konsoliin sekä sivulle.

Huom: Jotkin selaimet eivät salli tätä vaihtamatta asetuksia. Kokeile eri selaimia, jos saat virheitä.

Lopuksi ohjaa selain Google Maps -sivulle lukemillasi koordinaateilla.

VINKKI: Voit avata Google Mapsin tietyillä koordinaateilla linkillä:  
 `https://www.google.com/maps?q=LATITUDE,LONGITUDE`

Bonus: Miten voisi käsitellä tilanteen, jossa sijainti ei ole saatavilla?
