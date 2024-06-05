(function () {
    window.addEventListener('load', init);
    function init() {
        document.getElementById("light").addEventListener("click", lightTheme);
        document.getElementById("dark").addEventListener("click", darkTheme);
        document.getElementById("show").addEventListener("click", showGP);
        document.getElementById("next").addEventListener("click", nextGP);
    }

    const html = document.querySelector("html");
    if (window.localStorage) {
        if (localStorage.getItem('data-theme') == "light") {
            html.setAttribute("data-theme", "light");
        }
        else if (localStorage.getItem('data-theme') == "dark") {
            html.setAttribute("data-theme", "dark");
        }
    }

    function lightTheme() {
        if (window.localStorage) {
            localStorage.setItem('data-theme', "light");
            html.setAttribute("data-theme", "light");
        }
    }

    function darkTheme() {
        if (window.localStorage) {
            localStorage.setItem('data-theme', "dark");
            html.setAttribute("data-theme", "dark");
        }
    }

    let url = "https://hp-api.herokuapp.com/api/characters";
    function showGP() {
        fetch(url)
            .then(checkStatus)
            .then(resp => resp.json())
            .then(showResult)
            .catch(console.error);
    }

    let n = 0;
    function showResult(response) {
        let character = response[n];
        let nameElement = document.getElementById("name");
        let div = document.getElementById("img");
        nameElement.textContent = '';
        div.innerHTML = '';
        let img = document.createElement('img');
        img.className = "i";
        img.src = character.image;
        div.appendChild(img);
        nameElement.textContent = character.name;
    }

    function nextGP() {
        if (n <= 20) {
            n++;
        }
        else {
            n = 0;
        }
        showGP();
    }

    function checkStatus(response) {
        if (!response.ok) {
            console.log("error");
            throw Error("Ошибка запроса: " + response.statusText);
        }
        return response;
    }

})();