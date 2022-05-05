const inputGif = document.getElementById('input-gif');
const mainContainer = document.getElementById('main-container');

inputGif.addEventListener('change', customGif);
Sortable.create(mainContainer, {});


function customGif(e) {
    search();
    const URL = "https://g.tenor.com/v1/search?"
    const key = "6G30F53H2FCD";
    const query = `q=${e.target.value}`
    const limit = "&limit=16";

    fetch(`${URL}${query}&key=${key}${limit}`)
    .then(response => response.json())
    .then(data => { createGif(data) })
}

function createGif(data) {
    console.log(data)
    data.results.map( gif => {
        const imgCard = document.createElement("img");
        imgCard.classList.add('img-gif');
        imgCard.src = gif.media[0].mediumgif.url;
        mainContainer.appendChild(imgCard);
    });
}

function search() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}