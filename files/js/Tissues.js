(function () {
    window.addEventListener('load', init);
    function init() {
        document.getElementById("light").addEventListener("click", lightTheme);
        document.getElementById("dark").addEventListener("click", darkTheme);
        document.getElementById("fir").addEventListener("click", firInf);
        document.getElementById("sec").addEventListener("click", secInf);
        document.getElementById("th").addEventListener("click", thInf);
        document.getElementById("four").addEventListener("click", fourInf);
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

    function firInf() {
        document.getElementById("imgInf").src = "https://gas-kvas.com/uploads/posts/2023-02/1675658081_gas-kvas-com-p-kletki-zhivotnoi-tkani-risunok-24.png";
        document.getElementById("imgInf2").src = "https://upload.wikimedia.org/wikipedia/commons/b/be/Epithelial_Tissues_Stratified_Squamous_Epithelium_(40230842160).jpg";
        document.getElementById("zagInf").innerText = "Эпителиальная ткань";
        var ul = document.getElementById('osob');
        ul.innerHTML = ''; // Очищаем список
        var texts = [
            'Находится на внешних поверхностях органов (кожа) или облицовывает внутренние (кишечник).',
            'Клетки располагаются на базальной мембране (своеобразной пленке, на которой находятся клетки).',
            'Клетки расположены очень близко друг к другу.',
            'Клетки объединяются в слои.',
            'Межклеточное вещество в минимальном количестве.',
            'Быстрое отмирание клеток.',
            'Высокая способность к регенерации.',
            'Клетки называются эпителиоцитами.',
            'Клетки разделяются на покровные и железистые.',
            'Покровные могут быть однослойными и многослойными.',
            'Клетки могут иметь реснички или микроворсинки.',
            'Происхождение из эктодермы (большей частью).',
            'Связан с соединительной тканью.',
            'Не имеет кровеносных сосудов.',
            'Дыхание и питание происходят через соединительную ткань.',
            'Сторона клетки, обращенная к базальной мембране, отличается от стороны, обращенной наружу.'
        ];

        texts.forEach(function (text) {
            var li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
        });

        var ul2 = document.getElementById('fun');
        ul2.innerHTML = ''; // Очищаем список
        var texts2 = [
            'Барьерная и защитная функции: предотвращает обезвоживание и обеспечивает механическую защиту.',
            'Дыхательная: органы дыхания состоят из эпителиальной ткани.',
            'Секреторная: железы производят секрет, например, желудок вырабатывает соляную кислоту.',
            'Регуляторная/эндокринная: синтезируют и выделяют гормоны.',
            'Выделительная: потовые железы удаляют ионы, воду, мочевину.',
            'Абсорбционная: в кишечнике происходит всасывание веществ.',
            'Синтез витамина D: эпидермис кожи.',
            'Синтез меланина: защита от ультрафиолетового излучения солнца.'
        ];

        texts2.forEach(function (text2) {
            var li2 = document.createElement('li');
            li2.textContent = text2;
            ul2.appendChild(li2);
        });

        document.getElementById('pokr').src = "img/pokr.jpg";
        document.getElementById('ferr').src = "img/ferr.jpg";
        var div1 = document.getElementById('oneText');
        div1.innerHTML = '';
        var div2 = document.getElementById('twoText');
        div2.innerHTML = '';

        var texts3 = [
            'Эпителий бывает:',
            '1. Покровный (образует покровы тела, выстилает сосуды, слизистые оболочки)',
            'а) Однослойный - все клетки соединены с базальной мембраной.',
            'б) Многослойный - с базальной мембраной соединён только базальный слой.'
        ];

        texts3.forEach(function (text3) {
            var p1 = document.createElement('p');
            p1.className = "dop";
            p1.textContent = text3;
            div1.appendChild(p1);
        });

        var texts4 = [
            '2. Железистый (выделяет гормоны/секреты):',
            'внутренняя секреция — гормоны в кровь (без протоков);',
            'внешняя секреция — по протокам, вывод секрета наружу (пот) или в полости органов (кишки).'
        ];

        texts4.forEach(function (text4) {
            var p2 = document.createElement('p');
            p2.className = "dop";
            p2.textContent = text4;
            div2.appendChild(p2);
        });
    }

    function secInf() {
        document.getElementById("imgInf").src = "img/soed.jpg";
        document.getElementById("imgInf2").src = "https://fikiwiki.com/uploads/posts/2022-02/1644934680_24-fikiwiki-com-p-kartinki-tkanei-cheloveka-24.jpg";
        document.getElementById("zagInf").innerText = "Соединительная ткань";
        var ul = document.getElementById('osob');
        ul.innerHTML = ''; // Очищаем список
        var texts = [
            'Разделяется на несколько подтипов (собственно соединительная ткань, кровь, хрящевая, костная, жировая).',
            'Клетки соединительной ткани располагаются рыхло.',
            'Клетки окружены обильным межклеточным веществом, состоящим из волокон коллагена и других белков.',
            'Не содержит базальной мембраны.',
            'Образуется только из мезодермы.',
            'Пронизана обширной сетью кровеносных сосудов.',
            'Клетки  имеют однородную структуру.',
            'Клетки активно синтезируют межклеточное вещество.',
            'Межклеточное вещество может быть как твёрдым (например, в случае костной или хрящевой ткани), так и жидким (примером являются кровь и лимфа).'
        ];

        texts.forEach(function (text) {
            var li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
        });

        var ul2 = document.getElementById('fun');
        ul2.innerHTML = ''; // Очищаем список
        var texts2 = [
            'Опорная функция: обеспечивает структурную поддержку органам и тканям, например, в случае костей и хрящей.',
            'Защита от травм, где кости, хрящи и жировая ткань играют роль амортизаторов.',
            'Соединительная функция: связывает органы и структуры, такие как сухожилия и связки.',
            'Транспортная функция, где кровь и лимфа отвечают за перемещение веществ и клеток по организму.',
            'Иммунная защита, где кровь и лимфа участвуют в обеспечении иммунной реакции.',
            'Кроветворная функция, которая осуществляется ретикулярной тканью в красном костном мозге и лимфоузлах.',
            'Регуляция температуры, где жировая ткань и кровь играют важную роль.'
        ];

        texts2.forEach(function (text2) {
            var li2 = document.createElement('li');
            li2.textContent = text2;
            ul2.appendChild(li2);
        });

        document.getElementById('pokr').src = "https://studarium.ru/public/img/articles/759.jpg";
        document.getElementById('ferr').src = "https://studarium.ru/public/img/articles/766.jpg";
        var div1 = document.getElementById('oneText');
        div1.innerHTML = '';
        var div2 = document.getElementById('twoText');
        div2.innerHTML = '';

        var texts3 = [
            'В соединительных тканях имеются три основных типа волокон:',
            '1. Коллагеновые - обеспечивают механическую прочность.',
            '2. Эластические - обуславливают гибкость тканей.',
            '3. Ретикулярные - образуют ретикулярные сети, служащие основой многих органов (печень, костный мозг).'
        ];

        texts3.forEach(function (text3) {
            var p1 = document.createElement('p');
            p1.className = "dop";
            p1.textContent = text3;
            div1.appendChild(p1);
        });

        var texts4 = [
            'Кость состоит из компактного и губчатого вещества. Губчатое костное вещество образуют костные пластинки, которые объединяются в трабекулы (имеют форму дуг/арок). Губчатое вещество образует внутренние части губчатых и плоских костей, эпифизы трубчатых костей, внутренний слой диафиза. Содержит орган кроветворение - красный костный мозг.',
            'Компактное вещество почти не имеет промежутков, костные пластинки имеют концентрическую форму (полые цилиндры, вложенные друг в друга). Компактное вещество образует поверхности плоских и губчатых костей, поверхностный слой эпифиза и основную часть диафиза.'
        ];

        texts4.forEach(function (text4) {
            var p2 = document.createElement('p');
            p2.className = "dop";
            p2.textContent = text4;
            div2.appendChild(p2);
        });
    }

    function thInf() {
        document.getElementById("imgInf").src = "https://avatars.dzeninfra.ru/get-zen_doc/3700776/pub_63b3db747fc57c5d5d22d0f7_63b3db841c8b7a2c47f3cd96/scale_1200";
        document.getElementById("imgInf2").src = "https://fikiwiki.com/uploads/posts/2022-02/1644859898_49-fikiwiki-com-p-kartinki-tkanei-zhivotnikh-50.jpg";
        document.getElementById("zagInf").innerText = "Мышечная ткань";
        var ul = document.getElementById('osob');
        ul.innerHTML = ''; // Очищаем список
        var texts = [
            'Гладкая МТ состоит из одноядерных клеток веретеновидной формы и не обладает поперечно-полосатой структурой.',
            'Сокращение гладкой МТ происходит медленно и непроизвольно, не утомляется.',
            'Гладка МТ управляется автономной нервной системой (симпатика и парасимпатика).',
            'Скелетная поперечно-полосатая МТ состоит из многоядерных волокон с поперечно-полосатой структурой.',
            'Сокращение скелетной поперечно-полосатой МТ происходит быстро и произвольно, быстро утомляется.',
            'Скелетная поперечно-полосатая МТ управляется соматической нервной системой (прецентральная извилина коры ГМ).',
            'Структурно-функциональная единица скелетной поперечно-полосатой МТ — саркомер.',
            'Сердечная поперечно-полосатая МТ состоит из одно- или двухядерных клеток, связанных между собой контактами, образующими проводящую систему.',
            'Сердечная поперечно-полосатая МТ обладает поперечно-полосатой структурой.',
            'Сердечная поперечно-полосатая МТ сокращается ритмично, автоматически и неутомимо благодаря автоматической активности, возникающей в самой ткани.'
        ];

        texts.forEach(function (text) {
            var li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
        });

        var ul2 = document.getElementById('fun');
        ul2.innerHTML = ''; // Очищаем список
        var texts2 = [
            'Гладкая МТ выстилает стенки внутренних полых органов, таких как сосуды, желудок, кишечник, мочевой пузырь, матка, а также мышцы, контролирующие сужение и расширение зрачка.',
            'Скелетные мышцы образуют мускулатуру, которая обеспечивает движение и поддержание позы у человека, включая двуглавую мышцу плеча, диафрагму, межреберные мышцы, а также мышцы стенок ротовой, грудной и брюшной полостей, а также языка (Скелетная поперечно-полосатая МТ).',
            'Сердечная поперечно-полосатая МТ образует миокард сердца, отвечая за его сокращение и обеспечивая кровообращение по организму.'
        ];

        texts2.forEach(function (text2) {
            var li2 = document.createElement('li');
            li2.textContent = text2;
            ul2.appendChild(li2);
        });

        document.getElementById('pokr').src = "https://studarium.ru/public/img/articles/774.jpg";
        document.getElementById('ferr').src = "https://studarium.ru/public/img/articles/777.jpg";
        var div1 = document.getElementById('oneText');
        div1.innerHTML = '';
        var div2 = document.getElementById('twoText');
        div2.innerHTML = '';

        var texts3 = [
            'Гладкая мышечная ткань сокращается непроизвольно (неподвластна воле человека). Работа гладких мышц обеспечивается вегетативной (автономной) нервной системой. К примеру невозможно по желанию сузить или расширить бронхи, кровеносные сосуды, зрачок.',
            'Гладкая мышечная ткань называется неисчерченной, так как не обладает поперечной исчерченностью, характерной для поперечнополосатых скелетной и сердечной мышечных тканей.'
        ];

        texts3.forEach(function (text3) {
            var p1 = document.createElement('p');
            p1.className = "dop";
            p1.textContent = text3;
            div1.appendChild(p1);
        });

        var texts4 = [
            'Саркомер - элементарная сократительная единица поперечнополосатых мышц, структурная единица миофибриллы. В состав саркомера (и миофибриллы в целом) входят миофиламенты (лат. filamentum - нить) двух типов, которые обеспечивают сократимость мышечной ткани.',
            'Саркомер состоит из актиновых (тонких) и миозиновых (толстых) филаментов, которые образованы главным образом белками актином и миозином. Сокращение происходит за счет взаимного перемещения миофиламентов: они тянутся навстречу друг другу, саркомер укорачивается (и мышца в целом).'
        ];

        texts4.forEach(function (text4) {
            var p2 = document.createElement('p');
            p2.className = "dop";
            p2.textContent = text4;
            div2.appendChild(p2);
        });
    }

    function fourInf() {
        document.getElementById("imgInf").src = "https://avatars.dzeninfra.ru/get-zen_doc/5352530/pub_60ef2e2ea3ef25112edce467_60ef2eab9ee1f0315a15bf39/scale_1200";
        document.getElementById("imgInf2").src = "https://reedr.ru/wp-content/uploads/2019/04/Nervnaya-tkan.jpg";
        document.getElementById("zagInf").innerText = "Нервная ткань";
        var ul = document.getElementById('osob');
        ul.innerHTML = ''; // Очищаем список
        var texts = [
            'Обладает возбудимостью и проводимостью.',
            'Состоит из нейронов и клеток-спутников (глии или нейроглии).',
            'Располагается в головном и спинном мозге, в нервах.',
            'Нервы пронизывают весь организм.'
        ];

        texts.forEach(function (text) {
            var li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
        });

        var ul2 = document.getElementById('fun');
        ul2.innerHTML = ''; // Очищаем список
        var texts2 = [
            'Питательная — обеспечивают питание нейронов (клетки-спутницы).',
            'Дыхательная — участвуют в дыхании тканей (клетки-спутницы).',
            'Защитная — выполняют защитные функции (клетки-спутницы).',
            'Опорная — обеспечивают опору и поддержку нервных структур (клетки-спутницы).',
            'Изолирующая — образуют миелиновую оболочку аксонов, что способствует более быстрой передаче нервных импульсов (клетки-спутницы).',
            'Генерируют и проводят нервные импульсы (нейроны).',
            'Обеспечивают работу нервной системы (нейроны).'
        ];

        texts2.forEach(function (text2) {
            var li2 = document.createElement('li');
            li2.textContent = text2;
            ul2.appendChild(li2);
        });

        document.getElementById('pokr').src = "https://studarium.ru/public/img/articles/max/786.jpg";
        document.getElementById('ferr').src = "https://studarium.ru/public/img/articles/794.jpg";
        var div1 = document.getElementById('oneText');
        div1.innerHTML = '';
        var div2 = document.getElementById('twoText');
        div2.innerHTML = '';

        var texts3 = [
            'Структурно-функциональной единицей нервной ткани является нейрон (от др.-греч. νεῦρον — волокно, нерв) - клетка с одним длинным отростком - аксоном (греч. axis - ось), и одним/несколькими короткими - дендритами (греч. dendros - дерево).',
            'Отростки нейронов проводят нервные импульсы и передают их другим нейронам, эффекторам, благодаря чему мышцы сокращаются или расслабляются, а секреция желез усиливается или уменьшается.'
        ];

        texts3.forEach(function (text3) {
            var p1 = document.createElement('p');
            p1.className = "dop";
            p1.textContent = text3;
            div1.appendChild(p1);
        });

        var texts4 = [
            'Синапсом называют место контакта между двумя нейронами или между нейроном и эффектором (органом-мишенью). В синапсе нервный импульс "преобразуется" в химический: происходит выброс особых веществ - нейромедиаторов (наиболее известный - ацетилхолин) в синаптическую щель.',
            'Попав в синаптическую щель, ацетилхолин связывается с рецепторами на постсинаптической мембране, таким образом, возбуждение (нервный импульс) передается другому нейрону. Так устроена нервная система: электрический путь передачи сменяется химическим (в синапсе).'
        ];

        texts4.forEach(function (text4) {
            var p2 = document.createElement('p');
            p2.className = "dop";
            p2.textContent = text4;
            div2.appendChild(p2);
        });
    }
})();