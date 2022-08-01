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
        <div>Введите индитификатор иконки <a href='#!'>Как узнать?</a></div>
        <input id="image_id_${header_iconELEMENT.index}" value="" type="text" size="40" required placeholder="451939019"></input>
        <div>Введите высоту иконки</div>
        <input id="height_${header_iconELEMENT.index}" value="" type="text" size="40" placeholder="30"></input>
        <div>Введите ширину иконки</div>
        <input id="width_${header_iconELEMENT.index}" value="" type="text" size="40" placeholder="30"></input>`;
    
    var getListModalBlock = document.querySelector('.blockModal').parentNode;
    var newModel = document.createElement('div');
    newModel.innerHTML = payload;
    newModel.className = 'blockModal';
    const sp2 = document.getElementById("childElement");
    getListModalBlock.insertBefore(newModel, sp2.nextSibling);

    header_iconELEMENT.header_icon.data.push(
        {
            "image_id": 451939019,
            "height": 60,
            "width": 60
        }
    );

    header_iconELEMENT.index += 1;
    console.log(header_iconELEMENT.header_icon);
}
