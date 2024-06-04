(function () {
    window.addEventListener('load', init);
    function init() {
        document.getElementById("light").addEventListener("click", lightTheme);
        document.getElementById("dark").addEventListener("click", darkTheme);
        document.getElementById("11").addEventListener("click", b11);
        document.getElementById("12").addEventListener("click", b12);
        document.getElementById("13").addEventListener("click", b13);
        document.getElementById("21").addEventListener("click", b21);
        document.getElementById("22").addEventListener("click", b22);
        document.getElementById("23").addEventListener("click", b23);
        document.getElementById("31").addEventListener("click", b31);
        document.getElementById("32").addEventListener("click", b32);
        document.getElementById("33").addEventListener("click", b33);
        document.getElementById("41").addEventListener("click", b41);
        document.getElementById("42").addEventListener("click", b42);
        document.getElementById("43").addEventListener("click", b43);
        document.getElementById("51").addEventListener("click", b51);
        document.getElementById("52").addEventListener("click", b52);
        document.getElementById("53").addEventListener("click", b53);
        document.getElementById("61").addEventListener("click", b61);
        document.getElementById("62").addEventListener("click", b62);
        document.getElementById("63").addEventListener("click", b63);
        document.getElementById("71").addEventListener("click", b71);
        document.getElementById("72").addEventListener("click", b72);
        document.getElementById("73").addEventListener("click", b73);
        document.getElementById("81").addEventListener("click", b81);
        document.getElementById("82").addEventListener("click", b82);
        document.getElementById("83").addEventListener("click", b83);
        document.getElementById("91").addEventListener("click", b91);
        document.getElementById("92").addEventListener("click", b92);
        document.getElementById("93").addEventListener("click", b93);
        document.getElementById("101").addEventListener("click", b101);
        document.getElementById("102").addEventListener("click", b102);
        document.getElementById("103").addEventListener("click", b103);
        document.getElementById("end").addEventListener("click", end);
        document.getElementById("ag").addEventListener("click", ag);
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

    let score = 0; // очки
    let s1 = 0;
    let s2 = 0;
    let s3 = 0;
    let s4 = 0;
    let s5 = 0;
    let s6 = 0;
    let s7 = 0;
    let s8 = 0;
    let s9 = 0;
    let s10 = 0;

    function b11() {
        document.getElementById("11").className = 'vis';
        document.getElementById("12").classList.remove('vis');
        document.getElementById("12").className = ('first');
        document.getElementById("13").classList.remove('vis');
        document.getElementById("13").className = ('first');
        s1 = 0;
    }

    function b12() {
        document.getElementById("12").className = 'vis';
        document.getElementById("11").classList.remove('vis');
        document.getElementById("11").className = ('first');
        document.getElementById("13").classList.remove('vis');
        document.getElementById("13").className = ('first');
        s1 = 0;
    }

    function b13() {
        document.getElementById("13").className = 'vis';
        document.getElementById("12").classList.remove('vis');
        document.getElementById("12").className = ('first');
        document.getElementById("11").classList.remove('vis');
        document.getElementById("11").className = ('first');
        s1++;
    }

    function b21() {
        document.getElementById("21").className = 'vis';
        document.getElementById("22").classList.remove('vis');
        document.getElementById("22").className = ('first');
        document.getElementById("23").classList.remove('vis');
        document.getElementById("23").className = ('first');
        s2 = 0;
    }

    function b22() {
        document.getElementById("22").className = 'vis';
        document.getElementById("23").classList.remove('vis');
        document.getElementById("23").className = ('first');
        document.getElementById("21").classList.remove('vis');
        document.getElementById("21").className = ('first');
        s2 = 0;
    }

    function b23() {
        document.getElementById("23").className = 'vis';
        document.getElementById("22").classList.remove('vis');
        document.getElementById("22").className = ('first');
        document.getElementById("21").classList.remove('vis');
        document.getElementById("21").className = ('first');
        s2++;
    }

    function b31() {
        document.getElementById("31").className = 'vis';
        document.getElementById("32").classList.remove('vis');
        document.getElementById("32").className = ('first');
        document.getElementById("33").classList.remove('vis');
        document.getElementById("33").className = ('first');
        s3++;
    }

    function b32() {
        document.getElementById("32").className = 'vis';
        document.getElementById("31").classList.remove('vis');
        document.getElementById("31").className = ('first');
        document.getElementById("33").classList.remove('vis');
        document.getElementById("33").className = ('first');
        s3 = 0;
    }

    function b33() {
        document.getElementById("33").className = 'vis';
        document.getElementById("32").classList.remove('vis');
        document.getElementById("32").className = ('first');
        document.getElementById("31").classList.remove('vis');
        document.getElementById("31").className = ('first');
        s3 = 0;
    }

    function b41() {
        document.getElementById("41").className = 'vis';
        document.getElementById("42").classList.remove('vis');
        document.getElementById("42").className = ('first');
        document.getElementById("43").classList.remove('vis');
        document.getElementById("43").className = ('first');
        s4 = 0;
    }

    function b42() {
        document.getElementById("42").className = 'vis';
        document.getElementById("43").classList.remove('vis');
        document.getElementById("43").className = ('first');
        document.getElementById("41").classList.remove('vis');
        document.getElementById("41").className = ('first');
        s4++;
    }

    function b43() {
        document.getElementById("43").className = 'vis';
        document.getElementById("42").classList.remove('vis');
        document.getElementById("42").className = ('first');
        document.getElementById("41").classList.remove('vis');
        document.getElementById("41").className = ('first');
        s4 = 0;
    }

    function b51() {
        document.getElementById("51").className = 'vis';
        document.getElementById("52").classList.remove('vis');
        document.getElementById("52").className = ('first');
        document.getElementById("53").classList.remove('vis');
        document.getElementById("53").className = ('first');
        s5 = 0;
    }

    function b52() {
        document.getElementById("52").className = 'vis';
        document.getElementById("53").classList.remove('vis');
        document.getElementById("53").className = ('first');
        document.getElementById("51").classList.remove('vis');
        document.getElementById("51").className = ('first');
        s5++;
    }

    function b53() {
        document.getElementById("53").className = 'vis';
        document.getElementById("52").classList.remove('vis');
        document.getElementById("52").className = ('first');
        document.getElementById("51").classList.remove('vis');
        document.getElementById("51").className = ('first');
        s5 = 0;
    }

    function b61() {
        document.getElementById("61").className = 'vis';
        document.getElementById("62").classList.remove('vis');
        document.getElementById("62").className = ('first');
        document.getElementById("63").classList.remove('vis');
        document.getElementById("63").className = ('first');
        s6 = 0;
    }

    function b62() {
        document.getElementById("62").className = 'vis';
        document.getElementById("63").classList.remove('vis');
        document.getElementById("63").className = ('first');
        document.getElementById("61").classList.remove('vis');
        document.getElementById("61").className = ('first');
        s6++;
    }

    function b63() {
        document.getElementById("63").className = 'vis';
        document.getElementById("62").classList.remove('vis');
        document.getElementById("62").className = ('first');
        document.getElementById("61").classList.remove('vis');
        document.getElementById("61").className = ('first');
        s6 = 0;
    }

    function b71() {
        document.getElementById("71").className = 'vis';
        document.getElementById("72").classList.remove('vis');
        document.getElementById("72").className = ('first');
        document.getElementById("73").classList.remove('vis');
        document.getElementById("73").className = ('first');
        s7 = 0;
    }

    function b72() {
        document.getElementById("72").className = 'vis';
        document.getElementById("73").classList.remove('vis');
        document.getElementById("73").className = ('first');
        document.getElementById("71").classList.remove('vis');
        document.getElementById("71").className = ('first');
        s7++;
    }

    function b73() {
        document.getElementById("73").className = 'vis';
        document.getElementById("72").classList.remove('vis');
        document.getElementById("72").className = ('first');
        document.getElementById("71").classList.remove('vis');
        document.getElementById("71").className = ('first');
        s7 = 0;
    }

    function b81() {
        document.getElementById("81").className = 'vis';
        document.getElementById("82").classList.remove('vis');
        document.getElementById("82").className = ('first');
        document.getElementById("83").classList.remove('vis');
        document.getElementById("83").className = ('first');
        s8++;

    }

    function b82() {
        document.getElementById("82").className = 'vis';
        document.getElementById("83").classList.remove('vis');
        document.getElementById("83").className = ('first');
        document.getElementById("81").classList.remove('vis');
        document.getElementById("81").className = ('first');
        s8 = 0;
    }

    function b83() {
        document.getElementById("83").className = 'vis';
        document.getElementById("82").classList.remove('vis');
        document.getElementById("82").className = ('first');
        document.getElementById("81").classList.remove('vis');
        document.getElementById("81").className = ('first');
        s8 = 0;
    }

    function b91() {
        document.getElementById("91").className = 'vis';
        document.getElementById("92").classList.remove('vis');
        document.getElementById("92").className = ('first');
        document.getElementById("93").classList.remove('vis');
        document.getElementById("93").className = ('first');
        s9 = 0;
    }

    function b92() {
        document.getElementById("92").className = 'vis';
        document.getElementById("93").classList.remove('vis');
        document.getElementById("93").className = ('first');
        document.getElementById("91").classList.remove('vis');
        document.getElementById("91").className = ('first');
        s9++;
    }

    function b93() {
        document.getElementById("93").className = 'vis';
        document.getElementById("92").classList.remove('vis');
        document.getElementById("92").className = ('first');
        document.getElementById("91").classList.remove('vis');
        document.getElementById("91").className = ('first');
        s9 = 0;
    }

    function b101() {
        document.getElementById("101").className = 'vis';
        document.getElementById("102").classList.remove('vis');
        document.getElementById("102").className = ('first');
        document.getElementById("103").classList.remove('vis');
        document.getElementById("103").className = ('first');
        s10++;
    }

    function b102() {
        document.getElementById("102").className = 'vis';
        document.getElementById("103").classList.remove('vis');
        document.getElementById("103").className = ('first');
        document.getElementById("101").classList.remove('vis');
        document.getElementById("101").className = ('first');
        s10 = 0;
    }

    function b103() {
        document.getElementById("103").className = 'vis';
        document.getElementById("102").classList.remove('vis');
        document.getElementById("102").className = ('first');
        document.getElementById("101").classList.remove('vis');
        document.getElementById("101").className = ('first');
        s10 = 0;
    }

    let flag = false;

    function end() {
        if (flag == false) {
            flag = true;
            document.querySelectorAll('.buttAll button').forEach(button => {
                button.classList.remove('vis');
                button.className = ('first');
            });

            ['13', '23', '31', '42', '52', '62', '72', '81', '92', '101'].forEach(function (id) {
                document.getElementById(id).className = 'right';
            });

            let result = document.getElementById("r");
            let res = document.createElement('p');
            res.className = 'res';
            score = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10;
            if (score == 1) {
                res.innerHTML = 'Вау! Вы набрали ' + score + ' балл';
            }
            else if (score <= 4 && score > 1) {
                res.innerHTML = 'Неплохо! Вы набрали ' + score + ' баллa';
            }
            else if (score == 0) {
                res.innerHTML = 'Очень жаль.. Вы набрали ' + score + ' баллов';
            }
            else {
                res.innerHTML = 'Поздравляю! Вы набрали ' + score + ' баллов';
            }
            result.appendChild(res);
        }
    }

    function ag() {
        document.querySelectorAll('.buttAll button').forEach(button => {
            button.classList.remove('vis');
            button.classList.remove('right');
            button.className = ('first');
        });
        flag = false;
        score = 0;
        s1 = 0;
        s2 = 0;
        s3 = 0;
        s4 = 0;
        s5 = 0;
        s6 = 0;
        s7 = 0;
        s8 = 0;
        s9 = 0;
        s10 = 0;
        document.getElementById("r").innerHTML = '';
    }
})();
