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
            document.getElementById("search_results").innerHTML="";
            for (i=0; i<data.data.data.length;i++){
                var div = document.createElement('div');
                div.id = "card"
                if(data.data.data[i].artist.picture_medium === "https://cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg" || data.data.data[i].artist.picture_medium ==="https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg"){
                div.innerHTML = `<div id="photo_wrapper">
                    <img id="photo" src="${data.data.data[i].album.cover_medium}" alt="Cover photo">
                </div>
                <div id="info_wrapper">
                    <p id="artist_name">${data.data.data[i].artist.name}</p>
                    <p id="title">${data.data.data[i].title}</p>
                    <p id="album">Album: ${data.data.data[i].album.title}</p>
                    <audio controls><source src="${data.data.data[i].preview}"></audio>
                </div>`;} 
                else {
                div.innerHTML = `<div id="photo_wrapper">
                    <img id="photo" src="${data.data.data[i].artist.picture_medium}" alt="Artist photo">
                </div>
                <div id="info_wrapper">
                    <p id="artist_name">${data.data.data[i].artist.name}</p>
                    <p id="title">${data.data.data[i].title}</p>
                    <p id="album">Album: ${data.data.data[i].album.title}</p>
                    <audio controls><source src="${data.data.data[i].preview}"></audio></div>`;}
                document.getElementById("search_results").appendChild(div)
                }    
        })
        .catch((error) => {
            console.log(error);
        })
}


searchButton.addEventListener('click', search)