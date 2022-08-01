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



function get_parent(elem) {
    /*** For Class ***/
    // var x = elem.closest(".parent").className;
    /*** For Name ***/
    var x = elem.closest(".bloks__itemMenu")/*.attributes["name"].value*/;
    return x;
}

function addModalBlock() {
    var payload = `
    <a href="#!" title="Close" class="modal-close" onClick="header_iconELEMENT.save(); closeBlocksData()">Close</a>
    <h1>${this.header_icon.id.toUpperCase()}</h1>
    <div>Иконка заголовка виджета</div>
    <br>
    <div class='blockModal'>
        <div>Введите индитификатор иконки <a href='#!'>Как узнать?</a></div>
        <input id="image_id" value="${this.header_icon.data.image_id}" type="text" size="40"></input>
        <div>Введите высоту иконки</div>
        <input id="height" value="${this.header_icon.data.height}" type="text" size="40"></input>
        <div>Введите ширину иконки</div>
        <input id="width" value="${this.header_icon.data.width}" type="text" size="40"></input>
    </div>
    <input id="save" value="Добавить" type="button" onclick="addModalBlock()"></input>
    <br>
    <br>
    <input id="save" value="Сохранить" type="button" onclick="header_iconELEMENT.save()"></input>`;
    
    var getListModalBlock = document.querySelector('.blockModal');
    var newModel = document.createElement('div');
    newModel.innerHTML = payload;
    getListModalBlock.appendChild(newModel);
}
