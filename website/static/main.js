/*Questa parte rappresenta lo script principale*/


/*Sezione per la gestione delle pagine della nav bar, precisamente si occupa di gestire gli
* eventi nel momento in cui andiamo a selezionare ad esempio lo scan o la maps*/
window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        });
    }
}

function SwitchPage (page_id) {
    console.log(page_id);

    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}

/*Sezione che gestisce il QRcode*/
function onScanSuccess(qrCodeMessage) {
    document.getElementById('result').innerHTML = '<span class="result">'+qrCodeMessage+'</span>';
}

function onScanError(errorMessage) {
    //handle scan error
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);


/*Sezione che gestisce la visualizzazione della map. Stabilisce latitudine e longitudine da cui partire
* (in questo caso, Napoli IT, e, inoltre, ne gestisce anche lo zoom iniziale.*/
function initMap() {
    let location = {lat: 40.8563100, lng: 14.2464100};
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location
    });
}


