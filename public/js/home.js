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