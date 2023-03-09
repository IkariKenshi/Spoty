const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
const btnBuscar = document.getElementById('buscador')
let topHundred = [];

document.addEventListener('DOMContentLoaded', () => {
    loadMusicData();
})


const loadMusicData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4d425b0d96mshbed6647e5305b91p14d902jsn73e2a1a73e94',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => {
            topHundred = response
            console.log('Canciones: ', topHundred)
            creaCards()
        })
        .catch(err => console.error(err));
}

const creaCards = () => {
    topHundred.forEach((song) => {
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName
        let artists = ''
        let size = song.trackMetadata.artists.length
        song.trackMetadata.artists.forEach((item, index) =>{
            
            if(index === size - 1){ 
            artists += item.name
        }
            else{
                artists += item.name + ' / '
            } 
        })
        cardTop.querySelector('.artistname').textContent = artists

        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    });
    contenido.appendChild(fragment)
}

/*btnBuscar.addEventListener('keyup', () => {
    console.log('Tecla: ',btnBuscar.value)
    var array = []
    for(const obj of topHundred){
        array.push(obj.trackMetadata.trackName)
    }

    let filtrado = array.includes(btnBuscar.value.toLowerCase() )
    //const BuscarCancion = topHundred.trackMetadata.filter((cancion) = cancion.trackName == btnBuscar.value)
    
    console.log('Prueba', filtrado)
})*/


btnBuscar.addEventListener('keyup', () => {
    const searchTerm = btnBuscar.value.toLowerCase()
    const filtroCancion = topHundred.filter((song) => {
      return song.trackMetadata.trackName.toLowerCase().startsWith(searchTerm)
    })
    console.log('click', filtroCancion)

    contenido.innerHTML = ''
    
    filtroCancion.forEach((song) => {
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName
        let artists = ''
        let size = song.trackMetadata.artists.length
        song.trackMetadata.artists.forEach((item, index) =>{
            
            if(index === size - 1){ 
            artists += item.name
        }
            else{
                artists += item.name + ' / '
            } 
        })
        cardTop.querySelector('.artistname').textContent = artists

        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    });
    contenido.appendChild(fragment)
  });