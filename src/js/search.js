const searchButton = document.querySelector('.search-btn');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const select = document.getElementById('search-value')
let query;

const search = (e) => {
    //e.preventDefault()
    query = select.options[select.selectedIndex].value
    const searchValue = input.value;
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}:"${searchValue}"`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff'
            }
        })
        .then((data) => {

            function createResultsArtist() {

                let myObj = {
                    artist: data.data.data[i].artist.name,
                    artist: data.data.data[i].picture_small,
                    title: data.data.data[i].title,
                    music: data.data.data[i].previev
                }
                var i;
                for (i=0; i<data.length;i++){
                console.log(data.data.data[i].artist.name);
                console.log(data.data.data[i].picture_small);
                console.log(data.data.data[i].previev);
                console.log(data.data.data[i].title);
    
                console.log(data)
    
            }

            

            createResultsArtist();



           

        })
        .catch((error) => {
            console.log(error);
        })
}





function createResultsTrack() {
    let myObj = {
        artist: data.artist.name[i],
        artist: data.artist.picture[i],
        title: data.title[i],

    }
}





searchButton.addEventListener('click', search)