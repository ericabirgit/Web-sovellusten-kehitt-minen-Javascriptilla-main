//ensimmäinen

document.write('<b><em>"If I had nine hours to chop down a tree, I\'d spend the first six sharpening my ax."</em></b><p>— Abraham Lincoln</p>');

//toinen
//vaikea tapa alla
//document.write(Array(50).fill("Tämä on toistuva teksti.").join("<br>"));

//oikea tapa alla
for(let i=0; i<50; i++){
    document.write("Tämä on toistuva teksti.")
}

//kolme

//Tämä koodi tarkistaa, käyttääkö käyttäjä Mozillan selainta ja ohjaa sen mukaisesti.


// Tarkistetaan, sisältääkö selainversion merkkijono "Mozilla"-sanan

/*
if (navigator.userAgent.includes("Mozilla")) {
  alert("You are using Firefox, redirecting you...");
  window.location.href = "http://www.mozilla.org";
} else {
  window.location.href = "http://www.google.com";
}
*/

//viisi

// kuvan URL-osoite
const imageUrl = "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg";

// Kirjoitetaan kuvan HTML-tagi suoraan sivulle
document.write('<img src="' + imageUrl + '" alt="Kuva Flickr-kuvapalvelusta">');
