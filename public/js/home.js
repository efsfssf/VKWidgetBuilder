document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');
  
    modeSwitch.addEventListener('click', function () {
        switch_theme(this);
    });

    console.log(localStorage.dark_mode);
    if (localStorage.dark_mode === 'true') switch_theme(modeSwitch);

});

const switch_theme = (modeSwitch) => {
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
    localStorage.dark_mode = document.documentElement.classList.value === 'dark' ? true : false;
}

// Список доступных блоков в модальном окне настройки блока "кнопка"
const availableButtonBlocks = {
    "title_mini_block": 1,
    "action_mini_block": 1,
    "icon_mini_block": 10,
    "style_mini_block": 1
}

function menuItems() {
    const menu = document.getElementsByClassName('app-sidebar')[0];
    menu.onclick = function (e) {
        for (let i = 0; i < menu.children.length; i++) {
            menu.children[i].classList.remove('active');
        }
        e.target.classList.add('active');

    }
    //menu.addEventListener('click',e => e.target.classList.add("active"))
}

function openMenu(item) {
    const menuBlocks = document.getElementsByClassName('messages')[0];
    for (let i = 0; i < menuBlocks.children.length; i++) {
        menuBlocks.children[i].classList.remove('active');
    }
    for (let i = 0; i < menuBlocks.children.length; i++) {
        if (i == item - 1)
            menuBlocks.children[i].classList.add('active');
    }
    console.log(item);
}

function openSettings() {
    /*const body = document.body;
    console.log(body);


    payload = `<span>Тест</span>`;

    var newModel = document.createElement('div');
    newModel.innerHTML = payload;
    newModel.setAttribute('class','settings-container');
    body.insertBefore(newModel, body.firstChild);*/

    window.location.href = "/settings";
}



function get_parent(elem) {
    /*** For Class ***/
    // var x = elem.closest(".parent").className;
    /*** For Name ***/
    var x = elem.closest(".bloks__itemMenu")/*.attributes["name"].value*/;
    return x;
}

/** Добавление нового мини-блока в модальное окно
* @param type_add_block Этот параметр принимает тип создаваемого мини блока
**/
function addModalBlock(type_add_block) {
    var current_ButtonBlocks= {
        "title_mini_block": 0,
        "action_mini_block": 0,
        "icon_mini_block": 0,
        "style_mini_block": 0
    }
    if (type_add_block === "ИКОНКА ВИДЖЕТА")
    {
        var payload = `
            <div class='blockModal'>
            <div>Введите индитификатор иконки <a href='#!'>Как узнать?</a></div>
            <input id="image_id_${header_iconELEMENT.index}" value="" type="text" size="40" required placeholder="451939019"></input>
            <div>Введите высоту иконки</div>
            <input id="height_${header_iconELEMENT.index}" value="" type="text" size="40" placeholder="30"></input>
            <div>Введите ширину иконки</div>
            <input id="width_${header_iconELEMENT.index}" value="" type="text" size="40" placeholder="30"></input>
            </div>`;

        var newModel = document.createElement('li');
        newModel.innerHTML = payload;
        newModel.setAttribute('class','bloks__itemMenu Modal');
        newModel.setAttribute('draggable','true');
        newModel.setAttribute('data-index',header_iconELEMENT.index);
        const sp2 = document.getElementById("childElement");
        sp2.appendChild(newModel);
        //getListModalBlock.insertBefore(newModel, sp2.nextSibling);

        header_iconELEMENT.header_icon.data.push(
            {
                "image_id": 451939019,
                "height": 60,
                "width": 60
            }
        );

        header_iconELEMENT.index += 1;
        console.log(header_iconELEMENT.header_icon);
    } else if (type_add_block === 'title_mini_block')
    {
        var mini_bloks_list = document.getElementById('childElement').getElementsByTagName("li");
        for (let item of mini_bloks_list) {
            current_ButtonBlocks[item.id] += 1;

        }

        if (current_ButtonBlocks['title_mini_block'] === 0)
        {
            var text = new Text("Заголовок", null, "Вы можете поменять этот текст", {
                "weight": "regular",
                "align": "center"
            });
            buttonELEMENT.data.title = text;
            console.log(buttonELEMENT.data.title.id);
            color = '#ffd3e2';
            var payload = `
            <div class='blockModal' style="background-color: ${color}; color: black;">
            <p class="box-content-header">${buttonELEMENT.data.title.id}</p>
            <div>Введите текст виджета</div>
            <input id="valueTITLE" value="${buttonELEMENT.data.title.value}" type="text" size="40"></input>
            <br>
            <br>
            <div>Стиль</div>
            <small>Этот объект описывает стили, применимые к базовому элементу TEXT, который вы ввели выше</small>
            <div>Начертание шрифта</div>
            <select name="weight" id="styleWeight">
                <option value="regular" ${JSON.parse(JSON.stringify(buttonELEMENT.data.title.style))['weight'] == 'regular' ? `selected="selected"` : ``}>Обычный</option>
                <option value="medium" ${JSON.parse(JSON.stringify(buttonELEMENT.data.title.style))['weight'] == 'medium' ? `selected="selected"` : ``}>Полужирный</option>
            </select>
            <div>Выравнивание базового элемента по горизонтали</div>
            <select name="align" id="styleAlign">
                <option value="left" ${JSON.parse(JSON.stringify(buttonELEMENT.data.title.style))['align'] == 'left' ? `selected="selected"` : ``}>По левому</option>
                <option value="center" ${JSON.parse(JSON.stringify(buttonELEMENT.data.title.style))['align'] == 'center' ? `selected="selected"` : ``}>По центру</option>
                <option value="right" ${JSON.parse(JSON.stringify(buttonELEMENT.data.title.style))['align'] == 'right' ? `selected="selected"` : ``}>По правому</option>
            </select>
            </div>`;
            var newModel = document.createElement('li');
            newModel.innerHTML = payload;
            newModel.setAttribute('class','bloks__itemMenu Modal');
            newModel.setAttribute('draggable','true');
            newModel.setAttribute('id', 'title_mini_block');
            newModel.setAttribute('data-index',buttonELEMENT.index);
            const sp2 = document.getElementById("childElement");
            sp2.appendChild(newModel);

            
            buttonELEMENT.index++;
        }
        else
        {
            alert('Максимально возможное кол-во мини-блоков данного типа: ' + availableButtonBlocks[type_add_block])
        }
    } else if (type_add_block === 'action_mini_block')
    {
        var mini_bloks_list = document.getElementById('childElement').getElementsByTagName("li");
        for (let item of mini_bloks_list) {
            current_ButtonBlocks[item.id] += 1;

        }

        if (current_ButtonBlocks['action_mini_block'] === 0)
        {
            var action = new ACTION("Действие", null, "open_url", "https://example.com");
            buttonELEMENT.data.action = action;
            color = '#e9e7fd';
            payload = `
            <div class='blockModal' style="background-color: ${color}; color: black;">
            <p class="box-content-header">${buttonELEMENT.data.action.id}</p>
            <div>Тип действия, которое будет выполнено при нажатии на виджет.</div>
            <select id="typeACTION">
                <option value="open_url" ${buttonELEMENT.data.action.type == 'open_url' ? `selected="selected"` : ``}>Открыть ссылку</option>
                <option value="open_mini_app" ${buttonELEMENT.data.action.type == 'open_mini_app' ? `selected="selected"` : ``}>Запустить мини-приложение</option>
                <option value="open_game" ${buttonELEMENT.data.action.type == 'open_game' ? `selected="selected"` : ``}>Запустить игру</option>
            </select>
            <br>
            <br>
            <div>Введите ссылку или id приложения</div>
            <input id="value" value="${buttonELEMENT.data.action.data}" type="text" size="40"></input>
            </div>`;
            var newModel = document.createElement('li');
            newModel.innerHTML = payload;
            newModel.setAttribute('class','bloks__itemMenu Modal');
            newModel.setAttribute('draggable','true');
            newModel.setAttribute('id', 'action_mini_block');
            newModel.setAttribute('data-index',buttonELEMENT.index);
            const sp2 = document.getElementById("childElement");
            sp2.appendChild(newModel);

            
            buttonELEMENT.index++;
        }else
        {
            alert('Максимально возможное кол-во мини-блоков данного типа: ' + availableButtonBlocks[type_add_block])
        }
    } else if (type_add_block === 'style_mini_block')
    {
        var mini_bloks_list = document.getElementById('childElement').getElementsByTagName("li");
        for (let item of mini_bloks_list) {
            current_ButtonBlocks[item.id] += 1;

        }

        if (current_ButtonBlocks['style_mini_block'] === 0)
        {
            var style = new BUTTON_STYLE('Стиль кнопки', null, 'outline', 'center');
            buttonELEMENT.data.style = style;
            color = '#c8f7dc';
            payload = `
            <div class='blockModal' style="background-color: ${color}; color: black;">
            <p class="box-content-header">${buttonELEMENT.data.style.id}</p>
            <div>Этот блок описывает стили, применимые к базовому элементу BUTTON.</div>
            <select name="type" id="styleButtonType">
                <option value="outline" ${buttonELEMENT.data.style.type == 'outline' ? `selected="selected"` : ``}>outline</option>
                <option value="primary" ${buttonELEMENT.data.style.type == 'primary' ? `selected="selected"` : ``}>primary</option>
                <option value="secondary" ${buttonELEMENT.data.style.type == 'secondary' ? `selected="selected"` : ``}>secondary</option>
                <option value="tertiary" ${buttonELEMENT.data.style.type == 'tertiary' ? `selected="selected"` : ``}>tertiary</option>
            </select>
            <div>Выравнивание базового элемента по горизонтали</div>
            <select name="align" id="styleButtonAlign">
                <option value="left" ${buttonELEMENT.data.style.align == 'left' ? `selected="selected"` : ``}>По левому</option>
                <option value="center" ${buttonELEMENT.data.style.align == 'center' ? `selected="selected"` : ``}>По центру</option>
                <option value="right" ${buttonELEMENT.data.style.align == 'right' ? `selected="selected"` : ``}>По правому</option>
            </select>
            </div>`;
            var newModel = document.createElement('li');
            newModel.innerHTML = payload;
            newModel.setAttribute('class','bloks__itemMenu Modal');
            newModel.setAttribute('draggable','true');
            newModel.setAttribute('id', 'style_mini_block');
            newModel.setAttribute('data-index',buttonELEMENT.index);
            const sp2 = document.getElementById("childElement");
            sp2.appendChild(newModel);

            
            buttonELEMENT.index++;
        }else
        {
            alert('Максимально возможное кол-во мини-блоков данного типа: ' + availableButtonBlocks[type_add_block])
        }
    } else if (type_add_block === 'icon_mini_block')
    {
        var mini_bloks_list = document.getElementById('childElement').getElementsByTagName("li");
        for (let item of mini_bloks_list) {
            current_ButtonBlocks[item.id] += 1;

        }

        if (current_ButtonBlocks['icon_mini_block'] <= 10)
        {
            var image = new IMAGE_ITEM("Иконка виджета", null, [{
                "image_id": 451939019,
                "height": 30,
                "width": 30
              }]);
            var icon = new ICON('Иконка', null, image, {
                "vertical_align": "center",
                "align": "center"
            });
            if (buttonELEMENT.data.icon === null)
            {
                buttonELEMENT.data.icon = icon;
            }
            else
            {
                console.log(buttonELEMENT.data.icon.items.data);
                buttonELEMENT.data.icon.items.data.push({
                    "image_id": 451939019,
                    "height": 30,
                    "width": 30
                  })
            }
            console.log(buttonELEMENT.data.icon);
            color = '#fee4cb';
            for (var j in Object.keys(buttonELEMENT.data.icon.items.data))
            {
                payload = `
                    <div class='blockModal' style="background-color: ${color}; color: black;">
                    <p class="box-content-header">${buttonELEMENT.data.icon.id}</p>
                    <div>Введите индитификатор иконки <a href='#!'>Как узнать?</a></div>
                    <input id="image_id_${j}" value="${buttonELEMENT.data.icon.items.data[j].image_id}" type="text" size="40" required placeholder="451939019"></input>
                    <div>Введите высоту иконки</div>
                    <input id="height_${j}" value="${buttonELEMENT.data.icon.items.data[j].height}" type="text" size="40" placeholder="30"></input>
                    <div>Введите ширину иконки</div>
                    <input id="width_${j}" value="${buttonELEMENT.data.icon.items.data[j].width}" type="text" size="40" placeholder="30"></input>
                    </div>`;
            }
            var newModel = document.createElement('li');
            newModel.innerHTML = payload;
            newModel.setAttribute('class','bloks__itemMenu Modal');
            newModel.setAttribute('draggable','true');
            newModel.setAttribute('id', 'icon_mini_block');
            newModel.setAttribute('data-index',buttonELEMENT.index);
            const sp2 = document.getElementById("childElement");
            sp2.appendChild(newModel);
            
            buttonELEMENT.index++;
        }else
        {
            alert('Максимально возможное кол-во мини-блоков данного типа: ' + availableButtonBlocks[type_add_block])
        }
    }
}



// Удаление блоков из модального окна
function removeModalBlock(currentElement) {
    currentElement.parentNode.removeChild(currentElement);
    console.log(header_iconELEMENT.header_icon.data);
    delete header_iconELEMENT.header_icon.data[currentElement.dataset.index];
    console.log(header_iconELEMENT.header_icon.data);

    //header_iconELEMENT.reSave(header_iconELEMENT.header_icon.data);
}

const check_settings = () => {
    var debug_mode_bool = (localStorage.debug_mode === 'true');

    if (debug_mode_bool)
    {
        var panel = document.querySelector('.projects-section').querySelector('.bloks__list');
        let i = 0;
        while (i < 4) { // выводит 0, затем 1, затем 2
            var newModel = document.createElement('li');
            newModel.setAttribute("draggable", "true");
            newModel.className = "bloks__item";
            newModel.innerHTML = `Empty`;
            panel.appendChild(newModel);
            i++;
        }

        //Create a new stylesheet
        const sheet = new CSSStyleSheet();
        //Add some CSS to the stylesheet
        sheet.replaceSync(':root {--debug-color: #b2d9d0; !important;}');
        // Apply the stylesheet to a document:
        document.adoptedStyleSheets = [sheet];

        var panel = document.querySelector('.messages').querySelectorAll('.bloks')[1].querySelector('.bloks__list2');
        var newModel = document.createElement('li');
        newModel.setAttribute("id", "test");
        newModel.setAttribute("draggable", "true");
        newModel.setAttribute("data-obj", "");
        newModel.className = "bloks__itemMenu";
        newModel.innerHTML = `<div class="project-box-wrapper">
        <div class="project-box">
            <div class="project-box-header">
                <span>Тестовый блок</span>
                <div class="more-wrapper">
                    <button class="project-btn-more" onclick="show_list(get_parent(this).id)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="pointer-events: none;"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                    </button>
                    <div id="test_id" class="courses">
                        <ul style="list-style-type: none;">
                            <li><a href="#!" onclick="javasctipt: reopenBlocksData(this)">Изменить</a></li>
                            <li><a href="#!" onclick="javasctipt: removeBlocksData(this)">Удалить</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="project-box-content-header">
                <p class="box-content-header">Блок испытаний</p>
                <p class="box-content-subheader">Данный блок является тестовым, для проведения различных испытаний при разработке сайта</p>
            </div>
        </div>
    </div>`;
        panel.appendChild(newModel);

    }
}