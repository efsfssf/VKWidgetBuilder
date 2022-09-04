document.addEventListener('DOMContentLoaded', function () {

    if (localStorage.dark_mode === 'true') switch_theme();

    var modeSwitch_dark = document.getElementById('dark_block');
  
    modeSwitch_dark.addEventListener('click', function () {
        switch_theme();
    });

    var modeSwitch = document.getElementById('while_block');
  
    modeSwitch.addEventListener('click', function () {
        switch_theme();
    });

});

const switch_theme = () => {
    document.documentElement.classList.toggle('dark');
}

var windowOnloadAdd = function (event) {
    if (window.onload) {
        window.onload = window.onload + event;
    } else {
        window.onload = event;
    };
};

windowOnloadAdd(function () {
    debug_section();
    document.querySelector('.top-part').addEventListener('click', () => window.location.replace("/home"));

})

const debug_section = () => {
    var checkbox = document.querySelector("input[name=debug_mode_checkbox]");
    var debug_mode_bool = (localStorage.debug_mode === 'true');
    console.log(debug_mode_bool);
    document.getElementById("debug_mode_checkbox").checked = debug_mode_bool;

    checkbox.addEventListener('click', function () {
        localStorage.debug_mode = this.checked;
    });
}

const clear_localStorage = () => {
    delete localStorage.debug_mode;
}


function openMenu(item) {
    const menuBlocks = document.getElementsByClassName('action-list')[0];
    for (let i = 0; i < menuBlocks.children.length; i++) {
        menuBlocks.children[i].classList.remove('active');
    }
    for (let i = 0; i < menuBlocks.children.length; i++) {
        if (i == item - 1)
            menuBlocks.children[i].classList.add('active');
    }

    const pages = document.querySelector('.pages');
    for (let i = 0; i < pages.children.length; i++) {
        pages.children[i].classList.remove('active_page');
    }
    if (Number(pages.children[item-1].dataset.page) === item)
    {
        pages.children[item-1].classList.add('active_page');
    }
}