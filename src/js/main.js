'use strict';

/* Elementos que usamos en el HTML */

const btnSearch = document.querySelector('.js-button-search');
const btnReser = document.querySelector('.js-button-reset');
const inputForm = document.querySelector('.js_input');
const listSeries =  document.querySelector('.js-list-series');




let data = []; ///мы создаем константу в которой мы храним то что нам присылает сервер

function renderSeries() {
    console.log(data);
    let html = '';
    let classFavorite = '';
    for (const oneSerie of data) {
 const favIndex = ListFavorites.findIndex((favorite) => oneSerie.mal_id === favorite.mal_id  
 );

if(favIndex !== -1){
  classFavorite = 'cardSerie_fav';
}else{
  classFavorite = '';
}

     html += `<li class="cardSerie js_cardSerieResault ${classFavorite}" id="${oneSerie.mal_id}">`;
     html += `<img src="${oneSerie.images.jpg.image_url}" alt="">`;  
     html += `<h3>${oneSerie.title}</h3>`; 
     html += `</li>`; 
    }
    listSeries.innerHTML = html;
    clickOnSerie();
}

///Eventos
btnSearch.addEventListener('click', (event) => {
  event.preventDefault();
  const userTextValue = inputForm.value;
  fetch(`https://api.jikan.moe/v4/anime?q=${userTextValue}`)
  .then((response) => response.json())
  .then((result) => {

    data = result.data;
    renderSeries(); 
});
}); 



/*
function ApiData() {
fetch('https://api.jikan.moe/v4/anime?')
.then((response) => response.json())
.then((result) => {

    data = result.data;
    renderSeries(); 
}
)
 .catch((error) => {
      console.log(`Se ha producido un error ${error}`);
    });
    };
ApiData();
*/


/// Favorits///////

let ListFavorites = [];


function handleClick(event) {
console.log(event.currentTarget.id);
const idFavorite = parseInt(event.currentTarget.id);

const serieFavoriteClicked = data.find((serie) => serie.mal_id === idFavorite);

const serieFavotiteSelected = ListFavorites.findIndex((favorite) => favorite.mal_id === idFavorite);

if(serieFavotiteSelected === -1) {
  ListFavorites.push(serieFavoriteClicked);
} else {
  ListFavorites.splice(serieFavotiteSelected, 1);
} 
  console.log(ListFavorites);
  renderSeries();
}




function clickOnSerie() {
    const searchListResault = document.querySelectorAll('.js_cardSerieResault');
    for (const li of searchListResault) {
        li.addEventListener('click', handleClick);
    }
}


//// Button Reset


btnReser.addEventListener('click', handleClickReset);

function handleClickReset() {
  renderSeries();
};




/// Buscador///////
/*inputForm.oninput = function() {
    let value = this.value.trim();
    
    let list = document.querySelectorAll('.js-list-series li');
  if (value != '') {
    list.forEach(elem => {
        if(elem.innerText.(value.toLowerCase()) == -1) {
            elem.classList.add('hide')
        }
    });
  } else {
    list.forEach(elem => {
      elem.classList.remove('hide');  
    });
  }
}
*/

















