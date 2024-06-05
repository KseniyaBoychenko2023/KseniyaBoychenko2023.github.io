(function () {
    window.addEventListener('load', init);
    function init() {
        document.getElementById("light").addEventListener("click", lightTheme);
        document.getElementById("dark").addEventListener("click", darkTheme);
        document.getElementById("del").addEventListener("click", imgDel);
        document.getElementById("cit").addEventListener("click", imgCit);
        document.getElementById("citKl").addEventListener("click", imgCitKl);
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

    function imgDel() {
        document.getElementById('imgTheory').src = 'https://cdn.nur.kz/images/720/8c393531b85227b9.webp';
        document.getElementById('imgText').innerText = "Процесс деления клеток человека";
    }

    function imgCit() {
        document.getElementById('imgTheory').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cell_membrane_detailed_diagram_blank.svg/2560px-Cell_membrane_detailed_diagram_blank.svg.png';
        document.getElementById('imgText').innerText = "Цитоплазматическая мембрана";
    }

    function imgCitKl() {
        document.getElementById('imgTheory').src = 'https://art.kartinkof.club/uploads/posts/2023-07/1689048195_art-kartinkof-club-p-idei-dlya-srisovki-tsitoplazma-57.png';
        document.getElementById('imgText').innerText = "Цитоплазма клетки";
    }

})();
