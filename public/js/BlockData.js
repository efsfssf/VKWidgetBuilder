let titleELEMENT;

// Список ЭЛЕМЕНТОВ
class Text {
    constructor(id, object, value, style) {
        this.id = id;
        this.object = object;
        this.value = value;
        this.style = style;
    }
}

function setData(content, id, obj) {
    id = "test";
    const el = document.getElementById(id);
    console.log(el);
    el.dataset.obj = obj;
}

// Список БЛОКОВ

class Title {
    constructor(id, object, title) {
        this.id = id;
        this.object = object;
        this.title = title;
    }
    data = null;
    getPayload() {
        console.log(this.title);
        return `
            <div>
                <a href="#!" title="Close" class="modal-close" onClick="titleELEMENT.save(); closeBlocksData()">Close</a>
                <h1>${this.title.id.toUpperCase()}</h1>
                <div>Заголовок виджета</div>
                <br>
                <div>Введите текст виджета</div>
                <input id="value" value="${this.title.value}" type="text" size="40"></input>
                <br>
                <br>
                <div>Стиль</div>
                <small>Этот объект описывает стили, применимые к базовому элементу TEXT, который вы ввели выше</small>
                <div>Начертание шрифта</div>
                <select name="weight" id="styleWeight">
                    <option value="regular" ${JSON.parse(JSON.stringify(this.title.style))['weight'] == 'regular' ? `selected="selected"` : ``}>Обычный</option>
                    <option value="medium" ${JSON.parse(JSON.stringify(this.title.style))['weight'] == 'medium' ? `selected="selected"` : ``}>Полужирный</option>
                </select>
                <div>Выравнивание базового элемента по горизонтали</div>
                <select name="align" id="styleAlign">
                    <option value="left" ${JSON.parse(JSON.stringify(this.title.style))['align'] == 'left' ? `selected="selected"` : ``}>По левому</option>
                    <option value="center" ${JSON.parse(JSON.stringify(this.title.style))['align'] == 'center' ? `selected="selected"` : ``}>По центру</option>
                    <option value="right" ${JSON.parse(JSON.stringify(this.title.style))['align'] == 'right' ? `selected="selected"` : ``}>По правому</option>
                </select>
                <br>
                <br>
                <input id="save" value="Сохранить" type="button" onclick="titleELEMENT.save()"></input>
            </div>`;
    }

    save() {
        console.log('Сохрнение');
        this.value = document.getElementById('value').value;
        var weight = document.getElementById('styleWeight').value;
        var align = document.getElementById('styleAlign').value;

        var styleBlock =  {
            "weight": `${weight}`,
            "align": `${align}`
        } 

        var objTitle = {
                    "value": `${this.value}`,
                    "style": styleBlock
                };

        this.style = objTitle;

        this.title.value = objTitle['value'];
        this.title.style = styleBlock;

        this.data = objTitle;
        build(JSON.stringify(objTitle, undefined, 4));
        setData(document.querySelector('.projects-section .bloks__list'), this.id, JSON.stringify(objTitle));
    }
}

function openBlocksData(data) {
    switch (data.id) {
        case "test":
            if (typeof titleELEMENT === 'undefined'){
                console.log('Создаем блок');
                var textTitle = new Text("Заголовок", null, "Вы можете поменять этот текст", {
                    "weight": "regular",
                    "align": "center"
                });
                titleELEMENT = new Title("Заголовок",  null, null);
                titleELEMENT.title = textTitle;
                
            }
            
            titleELEMENT.object = buildBlocksData(titleELEMENT.getPayload());
            
            console.log(titleELEMENT.title);
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

    // Перемещаем блок со схемы в список блоков
    const one = document.querySelector('.messages-section .messages .bloks__list2');
    one.insertAdjacentElement('beforeEnd', get_parent(data));

    // Обновляем JSON
    
    update(document.querySelector('.projects-section .bloks__list'));
}


function BlocksList(content) {
    //console.clear();
    for (let i = 0; i < content.children.length; i++) {
        if (content.children[i].id !== "")
            console.log(content.children[i].id)
    }
}