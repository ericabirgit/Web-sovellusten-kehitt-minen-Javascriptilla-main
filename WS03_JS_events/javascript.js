document.addEventListener('DOMContentLoaded', () => {

    // --- HARJOITUS 1: Painikkeet ja Taulukko ---

    const buttons = document.querySelectorAll('button');
    const alertButton = buttons[0]; 
    const tableButton = buttons[1]; 
    const taulukonPaikka = document.getElementById('taulukonPaikka'); 

    if (alertButton) {
        alertButton.addEventListener('click', () => {
            const currentDate = new Date().toLocaleString('fi-FI');
            alert(`Klikkasit minua! ${currentDate}`);
        });
    }

    function showTable() {
        const data = [
            ["Tiger Nixon", "System Architect", "$320,800"],
            ["Garrett Winters", "Accountant", "$170,750"],
            ["Ashton Cox", "Junior Technical Author", "$86,000"],
            ["Cedric Kelly", "Senior Javascript Developer", "$433,060"],
            ["Airi Satou", "Accountant", "$162,700"]
        ];

        let tableHTML = `
            <table class="dynamictable" border="1">
                <thead><tr><th>Nimi</th><th>Tehtävä</th><th>Palkka</th></tr></thead>
                <tbody>
        `;
        data.forEach(row => {
            tableHTML += `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`;
        });
        tableHTML += `</tbody></table>`;

        if (taulukonPaikka) {
            taulukonPaikka.innerHTML = tableHTML;
        }
    }

    if (tableButton) {
        tableButton.addEventListener('click', showTable);
    }
    
    // --- HARJOITUS 2: Hiiritapahtumat Otsikkoon ---
    
    const ex2Heading = document.querySelector('h2:nth-of-type(2)'); 
    const ex1Heading = document.querySelector('h2:nth-of-type(1)'); 

    if (ex2Heading) {
        ex2Heading.addEventListener('mouseover', () => {
            console.log("Stepped over my a mouse!");
        });
    }

    if (ex1Heading) {
         ex1Heading.addEventListener('click', () => {
            ex1Heading.style.color = 'red';
            ex1Heading.innerHTML = 'Bye bye mouse!';
        });
    }
    
    // --- HARJOITUS 3: Lomake-tapahtumat ---

    const textarea = document.getElementById('textdata');
    const charCountSpan = document.getElementById('charcount');
    const form = document.querySelector('form');
    const sendButton = form ? form.querySelector('button') : null;
    let keypressCount = 0; 
    const MAX_CHARS = 200;

    if (textarea) {
        textarea.addEventListener('focus', () => {
            textarea.style.backgroundColor = '#f0f8ff'; 
            console.log("Please fill in the form with proper data.");
        });

        textarea.addEventListener('blur', () => {
            textarea.style.backgroundColor = '';
        });

        textarea.addEventListener('input', () => { 
            const currentLength = textarea.value.length;
            
            if (charCountSpan) {
                charCountSpan.textContent = `${currentLength}/${MAX_CHARS}`;
                
                if (currentLength > MAX_CHARS) {
                    charCountSpan.style.color = 'red';
                    textarea.style.borderColor = 'red';
                } else {
                    charCountSpan.style.color = '';
                    textarea.style.borderColor = '';
                }
            }
            
            if (sendButton) {
                const isInvalid = currentLength === 0 || currentLength > MAX_CHARS;
                sendButton.disabled = isInvalid;
            }
        });
        
        textarea.addEventListener('keydown', () => {
            keypressCount++;
        });
    }

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
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
    const coordsHeading = document.getElementById('coords'); 

    if (coordinatesDiv) {
        coordinatesDiv.style.border = '1px solid black';
        coordinatesDiv.style.width = '300px';
        coordinatesDiv.style.height = '100px';

        coordinatesDiv.addEventListener('mousemove', (event) => {
            const rect = coordinatesDiv.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            const coordsText = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
            
            console.log(coordsText);
            coordinatesDiv.innerHTML = coordsText; 
            
            if (coordsHeading) {
                 coordsHeading.textContent = coordsText;
            }
        });
    }
    
    // --- BONUS-TEHTÄVÄ: Geolocation ---

    const geoButtonHtml = document.createElement('button');
    geoButtonHtml.textContent = 'Tarkista sijainti (Bonus)';
    
    const lastHr = document.querySelector('hr:last-of-type');
    if (lastHr) lastHr.after(geoButtonHtml);

    function getGeolocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                
                console.log(`Sijainti: Lat ${lat}, Lon ${lon}`);
                alert(`Sijainti luettu! Lat: ${lat}, Lon: ${lon}`);

                const mapsUrl = `http://googleusercontent.com/maps.google.com/?q=${lat},${lon}`;
                window.location.href = mapsUrl;

            }, error => {
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