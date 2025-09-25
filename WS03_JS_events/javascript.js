// Odotetaan, että koko HTML-sivu on latautunut (DOM on valmis), ennen kuin suoritetaan koodi.
document.addEventListener('DOMContentLoaded', () => {

    // --- HARJOITUS 1: Painikkeet ja Taulukko ---

    // Elementtien valinta
    // Käytetään querySelectorAll, koska painikkeilla ei ole ID:tä HTML:ssä
    const buttons = document.querySelectorAll('button');
    const alertButton = buttons[0]; // "Napsauta minua"
    const tableButton = buttons[1]; // "Näytä taulukko"
    const taulukonPaikka = document.getElementById('taulukonPaikka'); 

    // 1. Painike: Alert + Päivämäärä (Löytyy ensimmäinen <button>)
    if (alertButton) {
        alertButton.addEventListener('click', () => {
            const currentDate = new Date().toLocaleString('fi-FI');
            alert(`Klikkasit minua! ${currentDate}`);
        });
    }

    // 2. Painike: Näytä Taulukko
    function showTable() {
        const data = [
            ["Tiger Nixon", "System Architect", "$320,800"],
            ["Garrett Winters", "Accountant", "$170,750"],
            ["Ashton Cox", "Junior Technical Author", "$86,000"],
            ["Cedric Kelly", "Senior Javascript Developer", "$433,060"],
            ["Airi Satou", "Accountant", "$162,700"]
        ];

        // Taulukon luominen Template Literal -merkinnällä (backticks)
        let tableHTML = `
            <table class="dynamictable" border="1">
                <thead><tr><th>Nimi</th><th>Tehtävä</th><th>Palkka</th></tr></thead>
                <tbody>
        `;
        data.forEach(row => {
            tableHTML += `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`;
        });
        tableHTML += `</tbody></table>`;

        // Sijoitetaan HTML-taulukko 'taulukonPaikka'-elementtiin innerHTML:n avulla
        if (taulukonPaikka) {
            taulukonPaikka.innerHTML = tableHTML;
        }
    }

    if (tableButton) {
        tableButton.addEventListener('click', showTable);
    }
    
    // --- HARJOITUS 2: Hiiritapahtumat Otsikkoon ---
    
    // Etsitään Harjoitus 2 -otsikko
    const ex2Heading = document.querySelector('h2:nth-of-type(2)'); // Oletetaan, että se on toinen h2

    if (ex2Heading) {
        // 1. onMouseOver: Tulosta konsoliin
        ex2Heading.addEventListener('mouseover', () => {
            console.log("Stepped over my a mouse!");
        });

        // 2. onMouseLeave (Tehtäväpyynnössä oli klikkaus, mutta tekstissä mouseleave, toteutetaan mouseleave)
        // Käsittelen klikkausta (joka oli edellisessä versiossa) ja vaihdan sen tällä kertaa hiiren pois siirtymiseen (mouseleave), 
        // koska se sopii paremmin hiiritapahtumien harjoitteluun.

        // Päivitetty tehtävä: Lisää toinen tapahtuma, joka aktivoituu, kun hiirellä klikataan Exercise 1 -otsikon päältä.
        const ex1Heading = document.querySelector('h2:nth-of-type(1)'); // Etsitään Harjoitus 1 -otsikko
        if (ex1Heading) {
             ex1Heading.addEventListener('click', () => {
                ex1Heading.style.color = 'red';
                ex1Heading.innerHTML = 'Bye bye mouse!';
            });
        }
    }
    
    // --- HARJOITUS 3: Lomake-tapahtumat ---

    const textarea = document.getElementById('textdata');
    const charCountSpan = document.getElementById('charcount');
    const form = document.querySelector('form');
    const sendButton = form ? form.querySelector('button') : null;
    let keypressCount = 0; // Näppäinpainallusten laskuri
    const MAX_CHARS = 200;

    if (textarea) {
        // 1. onfocus: Viesti + Taustaväri
        textarea.addEventListener('focus', () => {
            textarea.style.backgroundColor = '#f0f8ff'; // Taustavärin muutos
            console.log("Please fill in the form with proper data.");
        });

        // onblur: Palauta taustaväri pois siirryttäessä (siisteyden vuoksi)
        textarea.addEventListener('blur', () => {
            textarea.style.backgroundColor = '';
        });

        // 2. onkeydown + Bonus: Reaaliaikainen merkkimäärä/raja
        textarea.addEventListener('input', () => { // Käytetään 'input' kaikille muutoksille
            const currentLength = textarea.value.length;
            
            // Bonus: Reaaliaikainen merkkimäärä
            if (charCountSpan) {
                charCountSpan.textContent = `${currentLength}/${MAX_CHARS}`;
                
                // Bonus: Ylityksen väri
                if (currentLength > MAX_CHARS) {
                    charCountSpan.style.color = 'red';
                    textarea.style.borderColor = 'red';
                } else {
                    charCountSpan.style.color = '';
                    textarea.style.borderColor = '';
                }
            }
            
            // Haaste: Deaktivointi
            if (sendButton) {
                const isInvalid = currentLength === 0 || currentLength > MAX_CHARS;
                sendButton.disabled = isInvalid;
            }
        });
        
        // onkeydown (Lasketaan KAIKKI näppäinpainallukset erikseen)
        textarea.addEventListener('keydown', () => {
            keypressCount++;
            // Tätä ei tulosteta erikseen, koska 'input'-tapahtuma hallitsee merkkien määrän visuaalisesti.
            // console.log(`Keypresses total: ${keypressCount}`);
        });
    }

    // 3. Lomakkeen Painikkeen klikkaus (Tarkista tyhjyys)
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Estä lomakkeen oletuslähetys (sivun lataus)
            
            if (textarea.value.trim() === "") {
                alert("Tekstikenttä on tyhjä. Täytä lomake ennen lähettämistä.");
            } else if (textarea.value.length > MAX_CHARS) {
                 alert(`Teksti on liian pitkä! (${textarea.value.length}/${MAX_CHARS})`);
            } else {
                alert("Lomake lähetetty (simuloitu).");
            }
        });
    }

    // --- HARJOITUS 4: onMouseMove ---

    const coordinatesDiv = document.getElementById('coordinates');
    // Koordinaattien tulostukseen ei ole id:tä "coords" annettu HTML:ssä, joten käytetään coordinatesDiviä itseään.
    // Jos haluat sen toiseen elementtiin, lisää <h2 id="coords"></h2> HTML:ään.

    if (coordinatesDiv) {
        // Asetetaan DIV-elementille koko, jotta se on näkyvä
        coordinatesDiv.style.border = '1px solid black';
        coordinatesDiv.style.width = '300px';
        coordinatesDiv.style.height = '100px';

        coordinatesDiv.addEventListener('mousemove', (event) => {
            // Laske koordinaatit suhteessa DIV-elementin alkuun
            const rect = coordinatesDiv.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            const coordsText = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
            
            // 1. Tulosta konsoliin
            console.log(coordsText);

            // 2. Tulosta DIV-elementin sisään (käyttäen innerHTML)
            coordinatesDiv.innerHTML = coordsText; 
        });
    }
    
    // --- BONUS-TEHTÄVÄ: Geolocation (Tehtävänä on luoda uusi nappi, tehdään se tähän) ---

    // Lisätään nappi dynaamisesti (tai oletetaan, että se on 3. nappi, jos niitä ei ole enempää)
    const geoButtonHtml = document.createElement('button');
    geoButtonHtml.textContent = 'Tarkista sijainti (Bonus)';
    
    // Etsitään paikka, mihin nappi lisätään (esim. Harjoitus 4:n alle)
    const lastHr = document.querySelector('hr:last-of-type');
    if (lastHr) lastHr.after(geoButtonHtml);

    function getGeolocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                
                console.log(`Sijainti: Lat ${lat}, Lon ${lon}`);
                alert(`Sijainti luettu! Lat: ${lat}, Lon: ${lon}`);

                // Ohjaa Google Mapsiin
                const mapsUrl = `http://googleusercontent.com/maps.google.com/?q=${lat},${lon}`;
                window.location.href = mapsUrl;

            }, error => {
                // Sijainnin käsittely, kun se ei ole saatavilla
                let errorMessage;
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = "Sijaintilupa estetty. Salli sijainti selaimen asetuksista.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = "Sijaintitietoa ei ole saatavilla.";
                        break;
                    case error.TIMEOUT:
                        errorMessage = "Sijainnin haku aikakatkaistiin.";
                        break;
                    default:
                        errorMessage = "Tuntematon sijaintivirhe.";
                }
                console.error("Geolocation-virhe:", errorMessage);
                alert(errorMessage);
            });
        } else {
            alert("Selaimesi ei tue Geolocation-ominaisuutta.");
        }
    }

    geoButtonHtml.addEventListener('click', getGeolocation);
});