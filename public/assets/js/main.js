'use strict';

/* Elementos que usamos en el HTML */
const btnSearch = document.querySelector('.js-button-search');
const btnReser = document.querySelector('.js-button-reset');
const inputForm = document.querySelector('.js_input');
const listSeries =  document.querySelector('.js-list-series');




let data = []; ///мы создаем константу в которой мы храним то что нам присылает сервер

function renderSeries() {
    console.log(data);
    let html = "";
    for (const oneSerie of data) {
     html += `<li class="cardSerie">`;
     html += `<img src="${oneSerie.images.jpg.image_url}" alt="">`;  
     html += `<h3>${oneSerie.title}</h3>`; 
     html += `</li>`; 
    }
    listSeries.innerHTML = html;
}

function ApiData() {
fetch('https://api.jikan.moe/v4/anime?')
.then((response) => response.json())
.then((result) => {
    data = result.data;
    renderSeries();
}
)};

ApiData();



console.log('data fuera del then' + data);

///renderezar/pintar en Html


//Objetos con cada gatito
const tarjeta_serie = {
    image: " ",
    name: " ",
};

// Obtener listado de series desde el servidor
/*
let kittenDataList = [];

 fetch('https://api.jikan.moe/v4/anime?', {
    image: 'kittenDataList.url',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
  .then((response) => response.json())
  .then ((json) => {
    console.log(data);
 kittenDataList = data.results
 renderKittenList(kittenDataList) 
  })

  .catch((error) => console.log(`Ha sucedido un error: ${error}`)) 
*/









/*
let data = [ ]; 
const changeLatter = document.querySelector('.js_article');

function renderInfo() {
    let html = '';
for ( const infoData of data) {
   html = `<li>${infoData.name}</li>`; 
}
changeLatter.innetHTML = html;
}

fetch('https://api.jikan.moe/v4/anime?')
.then((response) => response.json())
.then((json) => {
    console.log(json);
    data = json.Object;
 
    renderInfo();
})
*/



//# sourceMappingURL=main.js.map
