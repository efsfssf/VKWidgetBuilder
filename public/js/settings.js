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