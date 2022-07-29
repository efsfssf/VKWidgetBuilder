function build(content) {
    JsonView(content);
}

function JsonView(jsonContent) {
    const jsonBlock = document.getElementsByClassName('messages-section')[1];
    const json = jsonBlock.getElementsByClassName('messages')[0];


    json.innerHTML += `<pre class="prettyprint">${jsonContent}</pre>`;

}