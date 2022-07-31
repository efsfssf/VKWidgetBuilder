function build(content) {
    console.log(titleELEMENT.data)
    const obj = {"type": "Widget",
    "payload": {
        "title": JSON.parse(content)
    },
    "layout_name": "universal_placeholder"}
    JsonView(obj);
}

function update(content)
{
    console.log('Обновляем JSON');
    for (let i = 0; i < content.children.length; i++) {
        if (content.children[i].id !== "") {
            console.log(content.children[i].id);
        }
    }
}

function JsonView(jsonContent) {
    const jsonBlock = document.getElementsByClassName('messages-section')[1];
    const json = jsonBlock.getElementsByClassName('messages')[0];


    json.innerHTML = `<pre class="prettyprint">${syntaxHighlight(jsonContent)}</pre>`;

}

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}