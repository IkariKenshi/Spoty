const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
const btnBuscar = document.getElementById('buscador')
const imgMX = document.getElementById('MX')
const imgUSA = document.getElementById('USA')
const imgJP = document.getElementById('JP')
const imgAR = document.getElementById('AR')
const imgFR = document.getElementById('FR')
const imgES = document.getElementById('ES')

const inputAlbum = document.getElementById('inputAlbum')
const btnBuscarAlbum = document.getElementById('btnBuscar')
let topTwoHundred = []

document.addEventListener('DOMContentLoaded', () => {
    loadMusicData()
})

//Para mostrar las canciones populares de Mexico
imgMX.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39151941b2msh98110608fcd8d30p1ea95bjsne3ed49bb7562',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=MX', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = []
            topTwoHundred = response
            //Songs = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
})


//Para mostrar las canciones populares de USA
imgUSA.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39151941b2msh98110608fcd8d30p1ea95bjsne3ed49bb7562',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=US', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = []
            topTwoHundred = response
            //Songs = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
})


//Para mostrar las canciones populares de japon
imgJP.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39151941b2msh98110608fcd8d30p1ea95bjsne3ed49bb7562',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=JP', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = []
            topTwoHundred = response
            //Songs = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
})


//Para mostrar las canciones populares de argentina
imgAR.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39151941b2msh98110608fcd8d30p1ea95bjsne3ed49bb7562',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=AR', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = []
            topTwoHundred = response
            //Songs = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
})


//Para mostrar las canciones populares de francia
imgFR.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39151941b2msh98110608fcd8d30p1ea95bjsne3ed49bb7562',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=FR', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = []
            topTwoHundred = response
            //Songs = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
})


//Para mostrar las canciones populares de españa
imgES.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39151941b2msh98110608fcd8d30p1ea95bjsne3ed49bb7562',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=ES', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = []
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
})


//Trae las canciones de la pagina https://rapidapi.com/airaudoeduardo/api/spotify81/
const loadMusicData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39151941b2msh98110608fcd8d30p1ea95bjsne3ed49bb7562',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = response
            //Songs = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
}

const creaCards = (musica) => {
    contenido.innerHTML = ""
    musica.forEach((song) => {
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName
        
        // Extraer solo el nombre del todo arreglo de artists
        let artists = ''
        let size = song.trackMetadata.artists.length //extrae el total de nombres
        song.trackMetadata.artists.forEach((item, index) => {
            //console.log(index, size)
            if (index == size-1){ //cuando llega al último nombre ya no le agrega la /
                artists += item.name
            } else {
                artists += item.name + ' / '
            }
        })
        cardTop.querySelector('.artistname').textContent = artists
        
        //Clonar
        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}

//Función para buscar una canción 
btnBuscar.addEventListener('keyup', () => {
    let temp = []
    temp = topTwoHundred.filter(song => song.trackMetadata.trackName.toLowerCase().includes(btnBuscar.value.toLowerCase()))
        //song.trackMetadata.trackName.includes(btnBuscar.value)
        //song.trackMetadata.trackName.toLowerCase().includes(btnBuscar.value.toLowerCase())
    creaCards(temp)
}) 

btnBuscarAlbum.addEventListener('click', () => {
    const request = inputAlbum.value.toLowerCase()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '39151941b2msh98110608fcd8d30p1ea95bjsne3ed49bb7562',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch(`https://spotify81.p.rapidapi.com/search?q=${request}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
        .then(response => response.json())
        .then(response => console.log(response.albums.items)) //Solo para mostrar dentro del objeto los albus e items
        .catch(err => console.error(err));
})
