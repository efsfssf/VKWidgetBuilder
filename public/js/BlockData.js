// Список блоков
let test;
class Test {
    constructor(id, object, value, style) {
        this.id = id;
        this.object = object;
        this.value = value;
        this.style = style;
    }

    getPayload() {
        return `
            <div>
                <a href="#!" title="Close" class="modal-close" onClick="closeBlocksData()">Close</a>
                <h1>${this.id.toUpperCase()}</h1>
                <div>Заголовок виджета</div>
                <br>
                <div>Введите текст виджета</div>
                <input id="value" value="${this.value}" type="text" size="40"></input>
                <br>
                <br>
                <div>Стиль</div>
                <small>Этот объект описывает стили, применимые к базовому элементу TEXT, который вы ввели выше</small>
                <div>Начертание шрифта</div>
                <select name="weight" id="styleWeight">
                    <option value="regular" selected="selected">Обычный</option>
                    <option value="medium">Полужирный</option>
                </select>
                <div>Выравнивание базового элемента по горизонтали</div>
                <select name="align" id="styleAlign">
                    <option value="left">По левому</option>
                    <option value="center" selected="selected">По центру</option>
                    <option value="right">По правому</option>
                </select>
                <br>
                <br>
                <input id="save" value="Сохранить" type="button" onclick="test.save()"></input>
            </div>`;
    }

    save() {
        this.value = document.getElementById('value').value;
        var weight = document.getElementById('styleWeight').value;
        var align = document.getElementById('styleAlign').value;



        var obj = {
            "type": "Widget",
            "payload": {
                "title": {
                    "value": `${this.value}`,
                    "style": {
                        "weight": `${weight}`,
                        "align": `${align}`
                    }
                }
            },
            "layout_name": "universal_placeholder"
        };

        this.style = JSON.stringify(obj, undefined, 4);

        console.log(this.style);
        build(this.style);

    }
}

function getData(content) {
    for (let i = 0; i < content.children.length; i++) {
        if (content.children[i].id !== "") {
            var block = document.getElementById(content.children[i].id);
            console.clear();
            for (var data of Object.keys(block.dataset)) {
                console.log(data);
            }
            /*
                  article.dataset.columns // "3"
                  article.dataset.indexNumber // "12314"
                  article.dataset.parent // "cars"
                  */
        }
    }
}



function openBlocksData(data) {
    switch (data.id) {
        case "test":
            test = new Test("Текст", null, "Вы можете поменять этот текст", "");
            test.object = buildBlocksData(test.getPayload());
            break;
    }
}

function reopenBlocksData(data) {
    openBlocksData(get_parent(data));
}

function buildBlocksData(payload) {
    var panel = document.querySelector(".app-container");
    var newModel = document.createElement('div');
    newModel.setAttribute("id", "open-modal");
    newModel.className = "modal-window overlayDiv";
    newModel.innerHTML = payload;
    panel.appendChild(newModel);
    //panel.innerHTML += payload;
    return newModel;
}

function closeBlocksData() {
    var panel = document.querySelector(".app-container");
    var child = document.getElementById("open-modal");
    panel.removeChild(child);
}

function removeBlocksData(data) {
    const one = document.querySelector('.messages-section .messages .bloks__list2');
    one.insertAdjacentElement('beforeEnd', get_parent(data));
}


function BlocksList(content) {
    //console.clear();
    for (let i = 0; i < content.children.length; i++) {
        if (content.children[i].id !== "")
            console.log(content.children[i].id)
    }
}