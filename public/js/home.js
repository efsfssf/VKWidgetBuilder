function menuItems() {
    const menu = document.getElementsByClassName('app-sidebar')[0];
    menu.onclick=function(e){
        for(let i = 0;i<menu.children.length;i++){
            menu.children[i].classList.remove('active');
        }
        e.target.classList.add('active');
        
      }
    //menu.addEventListener('click',e => e.target.classList.add("active"))
}

function openMenu(item)
{
    const menuBlocks = document.getElementsByClassName('messages')[0];
    for(let i = 0;i<menuBlocks.children.length;i++){
        menuBlocks.children[i].classList.remove('active');
    }
    for(let i = 0;i<menuBlocks.children.length;i++){
        if (i == item - 1)
            menuBlocks.children[i].classList.add('active');
    }
    console.log(item);
}

function JsonBuilder(content)
{
    
    for(let i = 0;i<content.children.length;i++){
        if (content.children[i].id !== "")
            console.log(content.children[i].id)
    }
}

function JsonView(jsonContent)
{
    const jsonBlock = document.getElementsByClassName('messages-section')[1];
    const json = jsonBlock.getElementsByClassName('messages')[0];

    
    json.innerHTML += `<pre class="prettyprint">${jsonContent}</pre>`;
    
}