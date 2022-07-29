class Test {
    constructor(id, value, style) {
        this.id = id;
        this.value = value;
        this.style = style;
    }

    getPayload() {
        return `
            <div>
                <a href="#!" title="Close" class="modal-close" onClick="closeBlocksData()">Close</a>
                <h1>${this.id.toUpperCase()}</h1>
                <div>Введите текст виджета</div>
                <input id="value" value="${this.value}" type="text" size="40"></input>
                <br>
                <br>
                <div>Стиль</div>
                <small>Этот объект описывает стили, применимые к базовому элементу TEXT, который вы ввели выше</small>
                <div>
                </div>
                
            </div>`;
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
            let test = new Test("Текст", "Вы можете поменять этот текст", "");
            buildBlocksData(test.getPayload());
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