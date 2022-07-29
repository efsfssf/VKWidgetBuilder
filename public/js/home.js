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

