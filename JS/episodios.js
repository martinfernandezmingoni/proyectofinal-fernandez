const container = document.querySelector('#cardContainer');
const selectSeason = document.querySelector('#temporada');
const searchBtn = document.querySelector('#search');


function filterSeason(array){
    let season = selectSeason.value
    if (!season){
        return array;
    }else {
        return array.filter((item) => item.season == season)
    }
}


function createHTML(array) {
    
    container.innerHTML = ''
    array.forEach((episode) => {
        const card = `
            <div class="col">
                <div class="card h-100">
                    <img src="${episode.thumbnailUrl}" class="card-img-top" alt="${episode.name}">
                    <div class="card-body">
                        <h5 class="card-title">${episode.name}</h5>
                        <p class="card-text">Episodio: ${episode.episode}</p>
                        <p class="card-text">Temporada: ${episode.season}</p>
                        <p class="card-text">Puntuacion: ${episode.rating}</p>
                        <p class="card-text">Descripcion: ${episode.description}</p>
                    </div>
                </div>
            </div>`
        container.innerHTML += card
    })
}




async function bringData(){

    const response = await fetch('https://api.sampleapis.com/simpsons/episodes')
    
    const data  = await  response.json()

    createHTML(filterSeason(data));
    
    
}

searchBtn.addEventListener('click', bringData)


