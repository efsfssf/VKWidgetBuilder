/*function build(content) {
    console.log(titleELEMENT.data)
    var temp = {}
    temp[`${titleELEMENT.id}`] = JSON.parse(content)
    const obj = {"type": "Widget",
    "payload": {
        
    },
    "layout_name": "universal_placeholder"}
    JsonView(obj);
}
*/
function merge(...arr){
    return arr.reduce((acc, val) => {    
      return { ...acc, ...val  };
    }, {});
  }

function update(content)
{
    var obj2 = {}
    console.log('Обновляем JSON');

    for (let i = 0; i < content.children.length; i++) {
        if (content.children[i].id !== "") {
            //var temp_obj = JSON.parse();
            var temp = {}
            temp[`${content.children[i].id}`] = JSON.parse(content.children[i].dataset.obj);
            obj2 = merge(obj2,  temp);
            console.log(obj2);
        }
    }
    console.log(obj2);
    console.log(JSON.stringify(obj2, undefined, 4));
    const obj = {"type": "Widget",
    "payload": obj2,
    "layout_name": "universal_placeholder"}
    JsonView(obj);
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