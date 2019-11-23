const searchButton = document.querySelector('.search');
const input = document.querySelector('input')

const search = (e) => {
    e.preventDefault()
    const task = input.value;
    console.log(task)
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${task}`)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        })
}


searchButton.addEventListener('click', search)