(function() {
    window.addEventListener('load', init);
    function init() {
        document.getElementById("light").addEventListener("click", lightTheme);
        document.getElementById("dark").addEventListener("click", darkTheme);
    }

    const html = document.querySelector("html");
    const lg = document.getElementById("imgLogo");
    if (window.localStorage) {
        if (localStorage.getItem('data-theme') === "light") {
            html.setAttribute("data-theme", "light");
        }
        else if (localStorage.getItem('data-theme') === "dark") {
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
})();