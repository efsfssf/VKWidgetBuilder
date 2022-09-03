

var windowOnloadAdd = function (event) {
    if ( window.onload ){
       window.onload = window.onload + event;
    } else {
       window.onload = event;
    };
 };

 windowOnloadAdd(function() {
    menuItems();
    check_settings();
    const bloksListElement = document.getElementsByClassName('bloks__list')[1];
    
    const taskElements = bloksListElement.querySelectorAll(`.bloks__item`);

    // Перебираем все элементы списка и присваиваем нужное значение
    for (const task of taskElements) {
        task.draggable = true;
    }

    bloksListElement.addEventListener(`dragstart`, (evt) => {
        evt.target.classList.add(`selected`);
    })
    
    bloksListElement.addEventListener(`dragend`, (evt) => {
        evt.target.classList.remove(`selected`);
        openBlocksData(evt.target);
    });

    const getNextElement = (cursorPosition, currentElement) => {
        const currentElementCoord = currentElement.getBoundingClientRect();
        const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
    
        const nextElement = (cursorPosition < currentElementCenter) ?
        currentElement :
        currentElement.nextElementSibling;
    
        return nextElement;
    };

    bloksListElement.addEventListener(`dragover`, (evt) => {
        // Разрешаем сбрасывать элементы в эту область
        evt.preventDefault();
        
        // Находим перемещаемый элемент
        const activeElement = bloksListElement.querySelector(`.selected`) || bloksListElementMenuTwo.querySelector(`.selected`) || bloksListElementMenuOne.querySelector(`.selected`);
        // Находим элемент, над которым в данный момент находится курсор
        const currentElement = evt.target;
        // Проверяем, что событие сработало:
        // 1. не на том элементе, который мы перемещаем,
        // 2. именно на элементе списка
        const isMoveable = activeElement !== currentElement &&
            currentElement.classList.contains(`bloks__item`) || currentElement.classList.contains(`bloks__itemMenu`);
        
        // Если нет, прерываем выполнение функции
        if (!isMoveable) {
            return;
        }
        
        // Находим элемент, перед которым будем вставлять
        const nextElement = getNextElement(evt.clientY, currentElement);

        if (
            nextElement && 
            activeElement === nextElement.previousElementSibling ||
            activeElement === nextElement
        ) {
            return;
        }
        // Вставляем activeElement перед nextElement
        bloksListElement.insertBefore(activeElement, nextElement);
        BlocksList(bloksListElement);
    });



    // МЕНЮ
    const bloksListElementMenuOne = document.getElementsByClassName('bloks__list')[0];
    const bloksListElementMenuTwo = document.getElementsByClassName('bloks__list2')[0];
    const taskElementsMenuOne = bloksListElementMenuOne.querySelectorAll(`.bloks__itemMenu`);
    const taskElementsMenuTwo = bloksListElementMenuTwo.querySelectorAll(`.bloks__itemMenu`)

    // Перебираем все элементы списка и присваиваем нужное значение
    for (const task of taskElementsMenuOne) {
        task.draggable = true;
    }
    for (const task of taskElementsMenuTwo) {
        task.draggable = true;
    }
    //var clone;
    bloksListElementMenuOne.addEventListener(`dragstart`, (evt) => {
        
        /*clone=evt.target.cloneNode(true);
        clone.setAttribute("class", "bloks__itemMenu action");
        clone.setAttribute("id", "");
        console.log(clone);
        var ul = document.querySelector(".bloks__list");
        console.log(ul);
        ul.insertBefore(clone, ul.children[2]);
*/
        evt.target.classList.add(`selected`);
    })
    
    bloksListElementMenuOne.addEventListener(`dragend`, (evt) => {
      /*  var ul = document.querySelector(".bloks__list");
        ul.removeChild(clone);*/
        evt.target.classList.remove(`selected`);

    });
    bloksListElementMenuTwo.addEventListener(`dragstart`, (evt) => {
        evt.target.classList.add(`selected`);
    })
    
    bloksListElementMenuTwo.addEventListener(`dragend`, (evt) => {
        evt.target.classList.remove(`selected`);
    });

    
 });