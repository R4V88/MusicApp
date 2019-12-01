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
            for (i=0; i<x.data.data.length;i++){
                console.log(x.data.data[i].artist.name);
                console.log(x.data.data[i].picture_small);
                console.log(x.data.data[i].previev);
                console.log(x.data.data[i].title);
            
            
            
                 }
                 
        })
        .catch((error) => {
            console.log(error);
        })
}



function createResultsArtist() {
    let myObj = {
        artist: data.data.data[i].artist.name,
        artist: data.data.data[i].picture_small,
        title: data.data.data[i].title,
        music: data.data.data[i].previev
    }
    var i;
    for (i=0; i<data.length;i++){
    console.log(getDataFromApi.data.data[i].artist.name);
    console.log(data.data.data[i].picture_small);
    console.log(data.data.data[i].previev);
    console.log(data.data.data[i].title);
    console.log(myObj.artist);



     }};


searchButton.addEventListener('click', search)