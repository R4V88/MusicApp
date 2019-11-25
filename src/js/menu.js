(function () {
    const x = document.querySelector('.toggle_js');
    const y = document.querySelector('.menu_js')

    x.addEventListener('click', function (event) {
        y.classList.toggle('expanded')
    })
})();


