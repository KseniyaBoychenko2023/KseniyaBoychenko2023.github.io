(function () {
    window.addEventListener('load', init);
    function init() {
        document.getElementById("light").addEventListener("click", lightTheme);
        document.getElementById("dark").addEventListener("click", darkTheme);
        document.getElementById("load").addEventListener("click", loadData);
        document.getElementById("back").addEventListener("click", toBack);
        document.getElementById("forward").addEventListener("click", toForward);
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

    let cnt = 6;
    let onOrOff = false;

    async function loadData() {
        if (onOrOff == false) {
            onOrOff = true;
            let data = await fetch("data/organs.json")
                .then(response => response.json());
            let n = 0;
            let i = "";
            for (let organ of data.Organs) {
                if (i != organ.name) {
                    if (n < cnt && n >= cnt - 6) {
                        img = document.createElement('img');
                        img.src = organ.img;
                        div = document.createElement('div');
                        div.id = organ.name;
                        div.append(img);
                        div.addEventListener("click", clickOrgan);
                        document.getElementById("img").append(div);
                    }
                    n++;
                    i = organ.name;
                }
            }
        }
    }

    function clickOrgan() {
        document.querySelectorAll('.vis').forEach(item => {
            item.classList.remove('vis');
        });

        let vis = this;
        vis.classList.add('vis');
        getInf(this.id);
    }

    async function getInf(id) {
        let data = await fetch("data/organs.json")
            .then(response => response.json());
        document.getElementById("name").innerHTML = "";
        document.getElementById("lat").innerHTML = "";
        document.getElementById("inf").innerHTML = "";
        for (let organ of data.Organs) {
            if (organ.name == id) {
                document.getElementById("name").innerHTML = organ.name;
                document.getElementById("lat").innerHTML = organ.nameLat;
                document.getElementById("inf").innerHTML = organ.info;
                break;
            }
        }
    }

    function toBack() {
        if (cnt > 6 && onOrOff) {
            document.getElementById("img").innerHTML = "";
            cnt -= 6;
            onOrOff = false;
            loadData();
        }
    }

    function toForward() {
        if (cnt < 42 && onOrOff) {
            document.getElementById("img").innerHTML = "";
            cnt += 6;
            onOrOff = false;
            loadData();
        }
    }

})();
