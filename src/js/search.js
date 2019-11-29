const searchButton = document.querySelector('.search-btn');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const select = document.getElementById('search-value')
let query;

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
            const li = document.createElement('li');
            li.innerHTML = data
            ul.appendChild(li)
            console.log(data)
        })
        .catch((error) => {
            console.log(error);
        })
}


searchButton.addEventListener('click', search)