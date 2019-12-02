const searchButton = document.querySelector('.search-btn');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const select = document.getElementById('search-value');



const search = (e) => {
    e.preventDefault()
    query = select.options[select.selectedIndex].value
    const searchValue = input.value;
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}:"${searchValue}"`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff'
            }
        })
        .then((data) => {
            console.log(data);
            let x = data;
            document.getElementById("root").innerHTML="";
            for (i=0; i<x.data.data.length;i++){
                function y(i){
                var div = document.createElement('div');
                div.id = "card"
                if(x.data.data[i].artist.picture_medium === "https://cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg" || x.data.data[i].artist.picture_medium ==="https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg"){
                div.innerHTML = `<div id="photo_wrapper"><img id="photo" src="${x.data.data[i].album.cover_medium}" alt="Cover photo"></div><div id="info_wrapper"><p id="artist_name">${x.data.data[i].artist.name}</p><p id="title">${x.data.data[i].title}</p><p id="album">Album: ${x.data.data[i].album.title}</p><audio controls><source src="${x.data.data[i].preview}"></audio></div>`;} 
                else {
                div.innerHTML = `<div id="photo_wrapper"><img id="photo" src="${x.data.data[i].artist.picture_medium}" alt="Artist photo"></div><div id="info_wrapper"><p id="artist_name">${x.data.data[i].artist.name}</p><p id="title">${x.data.data[i].title}</p><p id="album">Album: ${x.data.data[i].album.title}</p><audio controls><source src="${x.data.data[i].preview}"></audio></div>`;}
                document.getElementById("root").appendChild(div)
                }
                y(i)
                 }
                 
        })
        .catch((error) => {
            console.log(error);
        })
}


searchButton.addEventListener('click', search)