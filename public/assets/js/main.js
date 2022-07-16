'use strict';

/* Elementos que usamos en el HTML */
const btnSearch = document.querySelector('.js-button-search');
const btnReser = document.querySelector('.js-button-reset');
const inputForm = document.querySelector('.js_input');
const listSeries =  document.querySelector('.js-list-series');



///renderezar/pintar en Html
let data = []; ///мы создаем константу в которой мы храним то что нам присылает сервер

function renderSeries() {
    console.log(data);
    let html = "";
    for (const oneSerie of data) {
     html += `<li class="cardSerie js_cardSerieResault" id="${oneSerie.mal_id}">`;
     html += `<img src="${oneSerie.images.jpg.image_url}" alt="">`;  
     html += `<h3>${oneSerie.title}</h3>`; 
     html += `</li>`; 
    }
    listSeries.innerHTML = html;
    clickOnSerie();
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

let ListFavorites = [];


function handleClick(event) {
    console.log(event.currentTarget.id);
    const idFavorite = event.currentTarget.id;

 const serieFavoriteClicked = data.find((cardSerieResault) => cardSerieResault.id === idFavorite);
 console.log(serieFavoriteClicked);
}

function clickOnSerie() {
    const searchListResault = document.querySelectorAll('.js_cardSerieResault');
    for (const li of searchListResault) {
        li.addEventListener('click', handleClick);
        
    }
}


inputForm.oninput = function() {
    let value = this.value.trim().toLowerCase();
    
    let list = document.querySelectorAll('.js-list-series li');
  if (value != '') {
    list.forEach(elem => {
        if(elem.innerText.search(value) == -1) {
            elem.classList.add('hide')
        }
    });
  } else {
    list.forEach(elem => {
      elem.classList.remove('hide');  
    });
  }
}


















//# sourceMappingURL=main.js.map
