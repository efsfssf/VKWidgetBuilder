//#region СПИСОК ЭЛЕМЕНТОВ
let titleELEMENT;
let subtitleELEMENT;
let header_titleELEMENT;
let header_iconELEMENT;
//#endregion

//#region ОПИСАНИЕ ЭЛЕМЕНТОВ
class Text {
    constructor(id, object, value, style) {
        this.id = id;
        this.object = object;
        this.value = value;
        this.style = style;
    }
}

class IMAGE_ITEM {
    constructor(id, object, data) {
        this.id = id;
        this.object = object;
        this.data = data;
    }
}
//#endregion

function setData(content, id, obj) {
    console.log(id);
    const el = document.getElementById(id);
    console.log(el);
    el.dataset.obj = obj;
}

// ОПИСАНИЕ БЛОКОВ

//#region ОПИСАНИЕ БЛОКОВ
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
        //build(JSON.stringify(objTitle, undefined, 4));
        setData(document.querySelector('.projects-section .bloks__list'), this.id, JSON.stringify(objTitle));
        
        update(document.querySelector('.projects-section .bloks__list'));
    }
}

class Subtitle {
    constructor(id, object, subtitle) {
        this.id = id;
        this.object = object;
        this.subtitle = subtitle;
    }
    data = null;
    getPayload() {
        console.log(this.subtitle);
        return `
            <div>
                <a href="#!" title="Close" class="modal-close" onClick="subtitleELEMENT.save(); closeBlocksData()">Close</a>
                <h1>${this.subtitle.id.toUpperCase()}</h1>
                <div>Подтекст виджета</div>
                <br>
                <div>Введите подтекст виджета</div>
                <input id="value" value="${this.subtitle.value}" type="text" size="40"></input>
                <br>
                <br>
                <div>Стиль</div>
                <small>Этот объект описывает стили, применимые к базовому элементу TEXT, который вы ввели выше</small>
                <div>Начертание шрифта</div>
                <select name="weight" id="styleWeight">
                    <option value="regular" ${JSON.parse(JSON.stringify(this.subtitle.style))['weight'] == 'regular' ? `selected="selected"` : ``}>Обычный</option>
                    <option value="medium" ${JSON.parse(JSON.stringify(this.subtitle.style))['weight'] == 'medium' ? `selected="selected"` : ``}>Полужирный</option>
                </select>
                <div>Выравнивание базового элемента по горизонтали</div>
                <select name="align" id="styleAlign">
                    <option value="left" ${JSON.parse(JSON.stringify(this.subtitle.style))['align'] == 'left' ? `selected="selected"` : ``}>По левому</option>
                    <option value="center" ${JSON.parse(JSON.stringify(this.subtitle.style))['align'] == 'center' ? `selected="selected"` : ``}>По центру</option>
                    <option value="right" ${JSON.parse(JSON.stringify(this.subtitle.style))['align'] == 'right' ? `selected="selected"` : ``}>По правому</option>
                </select>
                <br>
                <br>
                <input id="save" value="Сохранить" type="button" onclick="subtitleELEMENT.save()"></input>
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

        var objSubtitle = {
                    "value": `${this.value}`,
                    "style": styleBlock
                };

        this.style = objSubtitle;

        this.subtitle.value = objSubtitle['value'];
        this.subtitle.style = styleBlock;

        this.data = objSubtitle;
        //build(JSON.stringify(objSubtitle, undefined, 4));
        setData(document.querySelector('.projects-section .bloks__list'), this.id, JSON.stringify(objSubtitle));
        
        update(document.querySelector('.projects-section .bloks__list'));
    }
}

class Header_title {
    constructor(id, object, header_title) {
        this.id = id;
        this.object = object;
        this.header_title = header_title;
    }
    data = null;
    getPayload() {
        console.log(this.header_title);
        return `
            <div>
                <a href="#!" title="Close" class="modal-close" onClick="header_titleELEMENT.save(); closeBlocksData()">Close</a>
                <h1>${this.header_title.id.toUpperCase()}</h1>
                <div>Заголовок виджета</div>
                <br>
                <div>Введите заголовок виджета</div>
                <input id="value" value="${this.header_title.value}" type="text" size="40"></input>
                <br>
                <br>
                <input id="save" value="Сохранить" type="button" onclick="header_titleELEMENT.save()"></input>
            </div>`;
    }

    save() {
        console.log('Сохрнение');
        this.value = document.getElementById('value').value;

        var objheader_title = {
            "value": `${this.value}`
        };
        this.header_title.value = objheader_title['value'];

        this.data = objheader_title;
        //build(JSON.stringify(objheader_title, undefined, 4));
        setData(document.querySelector('.projects-section .bloks__list'), this.id, JSON.stringify(objheader_title));
        
        update(document.querySelector('.projects-section .bloks__list'));
    }
}

class Header_icon {
    constructor(id, object, header_icon) {
        this.id = id;
        this.object = object;
        this.header_icon = header_icon;
    }
    data = null;
    index = 0;
    getPayload() {
        console.log(this.header_icon);
        var temp = "";
        for (var i of this.header_icon.data)
        {
            temp += `<div class='blockModal'>
            <div>Введите индитификатор иконки <a href='#!'>Как узнать?</a></div>
            <input id="image_id_${this.index}" value="${i.image_id}" type="text" size="40" required placeholder="451939019"></input>
            <div>Введите высоту иконки</div>
            <input id="height_${this.index}" value="${i.height}" type="text" size="40" placeholder="30"></input>
            <div>Введите ширину иконки</div>
            <input id="width_${this.index}" value="${i.width}" type="text" size="40" placeholder="30"></input>
            </div>`;
            this.index++;
        }
        return `
            <div>
                <a href="#!" title="Close" class="modal-close" onClick="header_iconELEMENT.save(); closeBlocksData()">Close</a>
                <h1>${this.header_icon.id.toUpperCase()}</h1>
                <div>Иконка заголовка виджета</div>
                <br id='childElement'>${temp}
                <input id="save" value="Добавить" type="button" onclick="addModalBlock()"></input>
                <br>
                <br>
                <input id="save" value="Сохранить" type="button" onclick="header_iconELEMENT.save()"></input>
            </div>`;
    }

    save() {
        console.log('Сохрнение');
        var objheader_icon = [];
        var index = 0;
        for (var i of this.header_icon.data)
        {
            console.log(document.getElementById(`image_id_${index}`));
            i.image_id = document.getElementById(`image_id_${index}`).value;
            i.height = document.getElementById(`height_${index}`).value;
            i.width = document.getElementById(`width_${index}`).value;

            objheader_icon.push({
                "image_id": `${i.image_id}`,
                "height": `${i.height}`,
                "width": `${i.width}`
            })
            index++;
        }
        

        

        this.data = objheader_icon;
        //build(JSON.stringify(objheader_icon, undefined, 4));
        setData(document.querySelector('.projects-section .bloks__list'), this.id, JSON.stringify(objheader_icon));
        
        update(document.querySelector('.projects-section .bloks__list'));
    }
}
//#endregion

function openBlocksData(data) {
    switch (data.id) {
        case "title":
            if (typeof titleELEMENT === 'undefined'){
                console.log('Создаем блок');
                var textTitle = new Text("Заголовок", null, "Вы можете поменять этот текст", {
                    "weight": "regular",
                    "align": "center"
                });
                titleELEMENT = new Title(data.id,  null, null);
                titleELEMENT.title = textTitle;
                
            }
            
            titleELEMENT.object = buildBlocksData(titleELEMENT.getPayload());
            
            console.log(titleELEMENT.title);
            break;
        case "subtitle":
            if (typeof subtitleELEMENT === 'undefined'){
                console.log('Создаем блок');
                var textTitle = new Text("Подтекст", null, "Вы можете поменять этот текст", {
                    "weight": "regular",
                    "align": "center"
                });
                subtitleELEMENT = new Subtitle(data.id,  null, null);
                subtitleELEMENT.subtitle = textTitle;
                
            }
            
            subtitleELEMENT.object = buildBlocksData(subtitleELEMENT.getPayload());
            
            console.log(subtitleELEMENT.subtitle);
            break;
        case "header_title":
            if (typeof header_titleELEMENT === 'undefined'){
                console.log('Создаем блок');
                var textTitle = new Text("Заголовок виджета", null, "Вы можете поменять этот текст", null);
                header_titleELEMENT = new Header_title(data.id,  null, null);
                header_titleELEMENT.header_title = textTitle;
                
            }
            
            header_titleELEMENT.object = buildBlocksData(header_titleELEMENT.getPayload());
            
            console.log(header_titleELEMENT.header_title);
            break;
        case "header_icon":
            if (typeof header_iconELEMENT === 'undefined'){
                console.log('Создаем блок');
                var imageTitle = new IMAGE_ITEM("Изображение виджета", null, [{
                    "image_id": 451939019,
                    "height": 30,
                    "width": 30
                  },{
                    "image_id": 551939019,
                    "height": 40,
                    "width": 40
                  }]);
                header_iconELEMENT = new Header_icon(data.id,  null, null);
                header_iconELEMENT.header_icon = imageTitle;
                
            }
            
            header_iconELEMENT.object = buildBlocksData(header_iconELEMENT.getPayload());
            
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