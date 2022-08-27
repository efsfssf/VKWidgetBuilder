//#region СПИСОК ЭЛЕМЕНТОВ
let titleELEMENT;
let subtitleELEMENT;
let header_titleELEMENT;
let header_iconELEMENT;
let actionELEMENT;
let buttonELEMENT;
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

class ACTION {
    constructor(id, object, type, data) {
        this.id = id;
        this.object = object;
        this.type = type;
        this.data = data;
    }
}

class BUTTON {
    constructor(id, object, action, title, icon, style) {
        this.id = id;
        this.object = object;
        this.action = action;
        this.title = title;
        this.icon = icon;
        this.style = style;
    }
}

class ICON {
    constructor(id, object, items, style) {
        this.id = id;
        this.object = object;
        this.items = items;
        this.style = style;
    }
}

class BUTTON_STYLE {
    constructor(id, object, type, align) {
        this.id = id;
        this.object = object;
        this.type = type;
        this.align = align;
    }
}
//#endregion

function setData(content, id, obj) {
    console.log('Установка свойств блока');
    console.log(id);
    const el = document.getElementById(id);
    console.log(el);
    console.log(obj);
    el.dataset.obj = obj;
}

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
            console.log(this.index);
            if (typeof i !== 'undefined')
            {
                temp += `<li class="bloks__itemMenu Modal" data-index="${this.index}">
                    <div class='blockModal'>
                    <div>Введите индитификатор иконки <a href='#!'>Как узнать?</a></div>
                    <input id="image_id_${this.index}" value="${i.image_id}" type="text" size="40" required placeholder="451939019"></input>
                    <div>Введите высоту иконки</div>
                    <input id="height_${this.index}" value="${i.height}" type="text" size="40" placeholder="30"></input>
                    <div>Введите ширину иконки</div>
                    <input id="width_${this.index}" value="${i.width}" type="text" size="40" placeholder="30"></input>
                    </div>
                </li>`;
            }
            
            this.index++;
        }
        return `
            <div>
                <a href="#!" title="Close" class="modal-close" onClick="header_iconELEMENT.save(); closeBlocksData()">Close</a>
                <h1>${this.header_icon.id.toUpperCase()}</h1>
                <div>Иконка заголовка виджета</div>
                <br>
                <button class="add-btn" title="Add Block" onClick='addModalBlock("${this.header_icon.id.toUpperCase()}")'>
                    <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <section class="bloks" style="height: 700px;overflow-y: overlay;">
                    <ul class="bloks__listModal" id='childElement'>
                        ${temp}
                    </ul>
                </selection>
                <br>
                <br>
                <input id="save" value="Сохранить" type="button" onclick="header_iconELEMENT.save()"></input>
            </div>
            
            `;
    }

    save() {
        
        this.index = 0;
        console.log('Сохрнение');
        var objheader_icon = [];
        var index = 0;

        console.log(this.header_icon.data);
        for (const val of this.header_icon.data)
        {
            console.log(this.header_icon.data);
            if (typeof val !== 'undefined')
            {
                console.log(Object.keys(this.header_icon.data)[index])
                val.image_id = Number(document.getElementById(`image_id_${index}`).value);
                val.height = Number(document.getElementById(`height_${index}`).value);
                val.width = Number(document.getElementById(`width_${index}`).value);

                objheader_icon.push({
                    "image_id": val.image_id,
                    "height": val.height,
                    "width": val.width
                })
            }
            index++;
                
        }
        

        

        this.data = objheader_icon;
        //build(JSON.stringify(objheader_icon, undefined, 4));
        setData(document.querySelector('.projects-section .bloks__list'), this.id, JSON.stringify(objheader_icon));
        
        update(document.querySelector('.projects-section .bloks__list'));
    }
}

class ACTION_BLOCK {
    constructor(id, object, data) {
        this.id = id;
        this.object = object;
        this.data = data;
    }
    data = null;
    getPayload() {
        console.log(this.data);
        return `
            <div>
                <a href="#!" title="Close" class="modal-close" onClick="actionELEMENT.save(); closeBlocksData()">Close</a>
                <h1>${this.data.id.toUpperCase()}</h1>
                <div>Объект ACTION — вспомогательный. Он описывает действие, которое будет выполнено при нажатии на виджет или базовый элемент</div>
                <br>
                <div>Тип действия, которое будет выполнено при нажатии на виджет.</div>
                <select id="type">
                    <option value="open_url" ${this.data.type == 'open_url' ? `selected="selected"` : ``}>Открыть ссылку</option>
                    <option value="open_mini_app" ${this.data.type == 'open_mini_app' ? `selected="selected"` : ``}>Запустить мини-приложение</option>
                    <option value="open_game" ${this.data.type == 'open_game' ? `selected="selected"` : ``}>Запустить игру</option>
                </select>
                <br>
                <br>
                <div>Введите ссылку или id приложения</div>
                <input id="value" value="${this.data.data}" type="text" size="40"></input>
                <input id="save" value="Сохранить" type="button" onclick="actionELEMENT.save()"></input>
                
                <br>
                <br>
            </div>`;
    }

    save() {
        console.log('Сохрнение');
        this.data.data = document.getElementById('value').value;
        this.data.type = document.getElementById('type').value;

        if (this.data.type === 'open_url')
        {
            var obj =  {
                "type": `${this.data.type}`,
                "url": `${this.data.data}`
            } 
        }
        else{
            var obj =  {
                "type": `${this.data.type}`,
                "app_launch_params": {
                    "app_id": Number(this.data.data)
                }
            } 
        }

        this.data.object = obj;
        //build(JSON.stringify(objTitle, undefined, 4));
        setData(document.querySelector('.projects-section .bloks__list'), this.id, JSON.stringify(obj));
        
        update(document.querySelector('.projects-section .bloks__list'));
    }
}

class BUTTON_BLOCK {
    constructor(id, object, data) {
        this.id = id;
        this.object = object;
        this.data = data;
    }
    data = null;
    index = 0;
    getPayload() {
        console.log(this.data);
        var temp = '';
        var temp_data = {};
        if (this.data.action !== null)
        {
            temp_data.action = this.data.action;
        }
        if (this.data.icon !== null)
        {
            temp_data.icon = this.data.icon.items.data;
        }
        if (this.data.title !== null)
        {
            temp_data.title = this.data.title;
        }
        if (this.data.style !== null)
        {
            temp_data.style = this.data.style;
        }


        console.log(temp_data);
        for (var i of Object.keys(temp_data))
        {
            if (typeof i !== 'undefined')
            {
                var color = 'black';
                if (i == 'title'){
                    color = '#ffd3e2';
                    temp += `<li class="bloks__itemMenu Modal" data-index="${this.index}" id="title_mini_block">
                    <div class='blockModal' style="background-color: ${color}; color: black;">
                    <p class="box-content-header">${JSON.parse(JSON.stringify(temp_data[i])).id}</p>
                    <div>Введите текст виджета</div>
                    <input id="valueTITLE" value="${JSON.parse(JSON.stringify(temp_data[i])).value}" type="text" size="40"></input>
                    <br>
                    <br>
                    <div>Стиль</div>
                    <small>Этот объект описывает стили, применимые к базовому элементу TEXT, который вы ввели выше</small>
                    <div>Начертание шрифта</div>
                    <select name="weight" id="styleWeight">
                        <option value="regular" ${JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(temp_data[i])).style))['weight'] == 'regular' ? `selected="selected"` : ``}>Обычный</option>
                        <option value="medium" ${JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(temp_data[i])).style))['weight'] == 'medium' ? `selected="selected"` : ``}>Полужирный</option>
                    </select>
                    <div>Выравнивание базового элемента по горизонтали</div>
                    <select name="align" id="styleAlign">
                        <option value="left" ${JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(temp_data[i])).style))['align'] == 'left' ? `selected="selected"` : ``}>По левому</option>
                        <option value="center" ${JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(temp_data[i])).style))['align'] == 'center' ? `selected="selected"` : ``}>По центру</option>
                        <option value="right" ${JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(temp_data[i])).style))['align'] == 'right' ? `selected="selected"` : ``}>По правому</option>
                    </select>
                    </div>
                </li>`;
                }
                else if (i == 'action'){
                    color = '#e9e7fd';
                    temp += `<li class="bloks__itemMenu Modal" data-index="${this.index}" id="action_mini_block">
                    <div class='blockModal' style="background-color: ${color}; color: black;">
                    <p class="box-content-header">${JSON.parse(JSON.stringify(temp_data[i])).id}</p>
                    <div>Тип действия, которое будет выполнено при нажатии на виджет.</div>
                    <select id="typeACTION">
                        <option value="open_url" ${JSON.parse(JSON.stringify(temp_data[i])).type == 'open_url' ? `selected="selected"` : ``}>Открыть ссылку</option>
                        <option value="open_mini_app" ${JSON.parse(JSON.stringify(temp_data[i])).type == 'open_mini_app' ? `selected="selected"` : ``}>Запустить мини-приложение</option>
                        <option value="open_game" ${JSON.parse(JSON.stringify(temp_data[i])).type == 'open_game' ? `selected="selected"` : ``}>Запустить игру</option>
                    </select>
                    <br>
                    <br>
                    <div>Введите ссылку или id приложения</div>
                    <input id="value" value="${JSON.parse(JSON.stringify(temp_data[i])).data}" type="text" size="40"></input>
                    </div>
                </li>`;
                }
                else if (i == 'icon'){
                    color = '#fee4cb';
                    for (var j in Object.keys(JSON.parse(JSON.stringify(temp_data[i]))))
                    {
                        temp += `<li class="bloks__itemMenu Modal" data-index="${this.index}" id="icon_mini_block">
                    <div class='blockModal' style="background-color: ${color}; color: black;">
                    <p class="box-content-header">${JSON.parse(JSON.stringify(temp_data[i])).id}</p>
                    <div>Введите индитификатор иконки <a href='#!'>Как узнать?</a></div>
                    <input id="image_id_${j}" value="${JSON.parse(JSON.stringify(temp_data[i]))[j].image_id}" type="text" size="40" required placeholder="451939019"></input>
                    <div>Введите высоту иконки</div>
                    <input id="height_${j}" value="${JSON.parse(JSON.stringify(temp_data[i]))[j].height}" type="text" size="40" placeholder="30"></input>
                    <div>Введите ширину иконки</div>
                    <input id="width_${j}" value="${JSON.parse(JSON.stringify(temp_data[i]))[j].width}" type="text" size="40" placeholder="30"></input>
                    </div>
                </li>`;
                    this.index++;
                    }
                    
                }    
                else if (i == 'style'){
                    color = '#c8f7dc';
                    temp += `<li class="bloks__itemMenu Modal" data-index="${this.index}" id="style_mini_block">
                    <div class='blockModal' style="background-color: ${color}; color: black;">
                    <p class="box-content-header">${JSON.parse(JSON.stringify(temp_data[i])).id}</p>
                    <div>Этот блок описывает стили, применимые к базовому элементу BUTTON.</div>
                    <select name="type" id="styleButtonType">
                        <option value="outline" ${JSON.parse(JSON.stringify(temp_data[i]))['type'] == 'outline' ? `selected="selected"` : ``}>outline</option>
                        <option value="primary" ${JSON.parse(JSON.stringify(temp_data[i]))['type'] == 'primary' ? `selected="selected"` : ``}>primary</option>
                        <option value="secondary" ${JSON.parse(JSON.stringify(temp_data[i]))['type'] == 'secondary' ? `selected="selected"` : ``}>secondary</option>
                        <option value="tertiary" ${JSON.parse(JSON.stringify(temp_data[i]))['type'] == 'tertiary' ? `selected="selected"` : ``}>tertiary</option>
                    </select>
                    <div>Выравнивание базового элемента по горизонтали</div>
                    <select name="align" id="styleButtonAlign">
                        <option value="left" ${JSON.parse(JSON.stringify(temp_data[i]))['align'] == 'left' ? `selected="selected"` : ``}>По левому</option>
                        <option value="center" ${JSON.parse(JSON.stringify(temp_data[i]))['align'] == 'center' ? `selected="selected"` : ``}>По центру</option>
                        <option value="right" ${JSON.parse(JSON.stringify(temp_data[i]))['align'] == 'right' ? `selected="selected"` : ``}>По правому</option>
                    </select>
                    </div>
                </li>`;
                }
            }
            
            this.index++;
        }
        return `    
            <div>
                <a href="#!" title="Close" class="modal-close" onClick="buttonELEMENT.save(); closeBlocksData()">Close</a>
                <h1>${this.data.id.toUpperCase()}</h1>
                <div>Иконка заголовка виджета</div>
                <br>
                <button class="add-btn" title="Add Block" id="add-btn" onClick='show_list(this.id)'>
                    <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <div id="add-btn_id" class="courses">
                    <ul style="list-style-type: none;">
                        <li><a href="#!" style="background-color: #ffd3e2; color:black;" onclick="javascript: addModalBlock('title_mini_block')">Добавить заголовок</a></li>
                        <li><a href="#!" style="background-color: #fee4cb; color:black;" onclick="javascript: addModalBlock('icon_mini_block')">Добавить иконку</a></li>
                        <li><a href="#!" style="background-color: #c8f7dc; color:black;" onclick="javascript: addModalBlock('style_mini_block')">Добавить стиль</a></li>
                        <li><a href="#!" style="background-color: #e9e7fd; color:black;" onclick="javascript: addModalBlock('action_mini_block')">Добавить действие</a></li>
                    </ul>
                </div>
                <section class="bloks" style="height: 700px;overflow-y: overlay;">
                    <ul class="bloks__listModal" id='childElement'>
                        ${temp}
                    </ul>
                </selection>
                <br>
                <br>
                <input id="save" value="Сохранить" type="button" onclick="buttonELEMENT.save()"></input>
            </div>
            
            `;
    }

    save() {
        
        this.index = 0;
        console.log('Сохрнение');
        var obj = {};
        var obj_icon = [];
        var index = 0;

        // Получаем новые данные
        for (const val in this.data)
        {
            console.log(val);
            if (this.data[val] !== null && val != 'id')
            {
                if (val == 'title'){
                    obj.title = {
                        "value": document.getElementById(`valueTITLE`).value,
                        "style": {
                            "weight": document.getElementById(`styleWeight`).value,
                            "align": document.getElementById(`styleAlign`).value
                        }
                    };
                }
                else if (val == 'action'){
                    var data = document.getElementById('value').value;
                    var type = document.getElementById('typeACTION').value;

                    console.log(data);

                    if (type === 'open_url')
                    {
                        var objAction =  {
                            "type": `${type}`,
                            "url": `${data}`
                        } 
                    }
                    else{
                        var objAction =  {
                            "type": `${type}`,
                            "app_launch_params": {
                                "app_id": Number(data)
                            }
                        } 
                    }

                    obj.action = objAction;
                }
                else if (val == 'icon'){
                    for (const ico of this.data.icon.items.data)
                    {
                        if (typeof ico !== 'undefined')
                        {
                            ico.image_id = Number(document.getElementById(`image_id_${index}`).value);
                            ico.height = Number(document.getElementById(`height_${index}`).value);
                            ico.width = Number(document.getElementById(`width_${index}`).value);

                            obj_icon.push({
                                "image_id": ico.image_id,
                                "height": ico.height,
                                "width": ico.width
                            })
                        }
                        index++;
                            
                    }
                    obj.icon = obj_icon;

                    
                }    
                else if (val == 'style'){
                    obj.style = {
                        "type": document.getElementById(`styleButtonType`).value,
                        "align": document.getElementById(`styleButtonAlign`).value
                    }
                }
            }
                
        }
        
        // Сохраняем данные, что бы при редактировании они автоматически заполнились
        if(obj['title'] !== undefined){
            this.data.title.value = obj.title.value;
            this.data.title.style = obj.title.style
        }
        if(obj['style'] !== undefined){  
            this.data.style.type = obj.style.type;
            this.data.style.align = obj.style.align;
        }
        if(obj['action'] !== undefined){  
            this.data.action.type = obj.action.type;
            this.data.action.data = typeof obj.action.url !== 'undefined' ? obj.action.url : Number(obj.action.app_launch_params.app_id);
        }
        if(obj['icon'] !== undefined){  
            this.data.icon.items.data = obj.icon;
        }
        

        // Утановка данных div блока (в json)
        setData(document.querySelector('.projects-section .bloks__list'), this.id, JSON.stringify(obj));
        // Обновление результата json
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
                var subText = new Text("Подтекст", null, "Вы можете поменять этот текст", {
                    "weight": "regular",
                    "align": "center"
                });
                subtitleELEMENT = new Subtitle(data.id,  null, null);
                subtitleELEMENT.subtitle = subText;
                
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
                var imageTitle = new IMAGE_ITEM("Иконка виджета", null, [{
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
            
            // Что бы была возможность перемещать блоки
            ModalWindowBlock();
            break;
        case "action":
            if (typeof actionELEMENT === 'undefined'){
                console.log('Создаем блок');
                var action = new ACTION("Действие", null, "open_url", "https://example.com");
                actionELEMENT = new ACTION_BLOCK(data.id,  null, null);
                actionELEMENT.data = action;
                
            }
            
            actionELEMENT.object = buildBlocksData(actionELEMENT.getPayload());
            
            break;

        case "button":
            if (typeof buttonELEMENT === 'undefined'){
                console.log('Создаем блок');
                var action = new ACTION("Действие", null, "open_url", "https://example.com");
                var text = new Text("Заголовок", null, "Вы можете поменять этот текст", {
                    "weight": "regular",
                    "align": "center"
                });
                var image = new IMAGE_ITEM("Иконка виджета", null, [{
                    "image_id": 451939019,
                    "height": 30,
                    "width": 30
                  },{
                    "image_id": 551939019,
                    "height": 40,
                    "width": 40
                  }]);
                var icon = new ICON('Иконка', null, image, {
                    "vertical_align": "center",
                    "align": "center"
                })
                var style = new BUTTON_STYLE('Стиль кнопки', null, 'outline', 'center')
                var button = new BUTTON('Кнопка', null, null, null, null, null);
                buttonELEMENT = new BUTTON_BLOCK(data.id,  null, button);
                buttonELEMENT.data = button;
                
            }
            
            buttonELEMENT.object = buildBlocksData(buttonELEMENT.getPayload());
            
            // Что бы была возможность перемещать блоки
            ModalWindowBlock();
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