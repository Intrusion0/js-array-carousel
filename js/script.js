/*
Dati tre array contenenti: - una lista ordinata di 5 immagini, - una lista ordinata dei relativi 5 luoghi e - una lista di 5 news, creare un carosello come nella foto allegata.
Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi - titolo e - testo.
Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.
*/

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const pictCont = document.querySelector(".main_picture");
const thumbsCont = document.querySelector(".thumbs");

let picture = "";
let thumbs = "";

for (let i = 0; i < items.length; i++) {
    picture += `
    <div class="picture">
        <img src="${items[i]}" alt="${title[i]}">
        <div class="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    </div>`

    thumbs += `
    <div class="thumb">
        <img src="${items[i]}" alt="${title[i]}">
    </div>`
}

// Output con active in posizione di default
pictCont.innerHTML = picture;
document.getElementsByClassName("picture") [0].classList.add("active");

thumbsCont.innerHTML += thumbs;
document.getElementsByClassName("thumb") [0].classList.add("active");

// Evento click sul pulsante "next"
let nextThumb = document.querySelector(".next");

// Creo una variabile di conteggio
let contPos = 0;

nextThumb.addEventListener('click',
    function() {

        if (contPos < items.length - 1) {
            ++contPos;
        } else {
            contPos = 0;
        }

        document.querySelector(".picture.active").classList.remove("active");
        document.getElementsByClassName("picture") [contPos].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb") [contPos].classList.add("active");

        
    }
)

// Evento click sul pulsante "prev"
let prevThumb = document.querySelector(".prev");

prevThumb.addEventListener('click',
    function() {

        if (contPos === 0) {
            contPos = items.length - 1;
        } else {
            --contPos;
        }

        document.querySelector(".picture.active").classList.remove("active");
        document.getElementsByClassName("picture") [contPos].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb") [contPos].classList.add("active");
    }
)