'use strict';

/* Elementos que usamos en el HTML */

const btnSearch = document.querySelector('.js-button-search');
const btnReser = document.querySelector('.js-button-reset');
const inputForm = document.querySelector('.js_input');
const listSeries =  document.querySelector('.js-list-series');
const favList = document.querySelector('.js-favorite');



function borderOnClick(event) {
    event.currentTarget.classList.add('cardSerie-red-border');
    console.log(event.currentTarget.classList);
}


///Render
let data = []; ///мы создаем константу в которой мы храним то что нам присылает сервер

function renderSeries() {
    console.log(data);
    let html = '';
    let classFavorite = '';
    for (const oneSerie of data) {
 const serieFavorite = ListFavorites.findIndex((favorite) => oneSerie.mal_id === favorite.mal_id  
 );

if(serieFavorite !== -1){
  classFavorite = 'cardSerie--myFavorite';
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


function renderFavorites() {
  let html =  '';
  for (let index = 0; index < ListFavorites.length; index++) {
      html += "<li class = cardSerie>";
      html += ListFavorites[index];
      html += "</li>";
    }
    favList.innerHTML = html;
    setLocalStorage(html);

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
})
}); 




/*function ApiData() {
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
  renderFavorites()
}

function addToFavourites(name, showHTML) { 
  const newFavourite = searchItems.filter(item => item.show.name == name);
  if (newFavourite.length !== 0) {
      favouriteItems.push(newFavourite[0]);
  }

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



////Local Storage
function setLocalStorage() {
  localStorage.setItem('ListFavorites', JSON.stringify(ListFavorites));
}




/*

function pageRestart() {
  const favLocalStorage = JSON.parse(localStorage.getItem('ListFavorites'));

  if (favLocalStorage) {
  } else {
console.log(pageRestart);
  }
}

pageRestart();

*/
















//# sourceMappingURL=main.js.map
