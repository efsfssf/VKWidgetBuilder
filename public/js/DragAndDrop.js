

var windowOnloadAdd = function (event) {
    if ( window.onload ){
       window.onload = window.onload + event;
    } else {
       window.onload = event;
    };
 };

 windowOnloadAdd(function() {
    menuItems();
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
        const activeElement = bloksListElement.querySelector(`.selected`) || bloksListElementMenu.querySelector(`.selected`);
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
        console.log(activeElement);
        console.log(nextElement);
        bloksListElement.insertBefore(activeElement, nextElement);
    });



    // МЕНЮ
    const bloksListElementMenu = document.getElementsByClassName('bloks__list')[0];
    
    const taskElementsMenu = bloksListElementMenu.querySelectorAll(`.bloks__itemMenu`);

    // Перебираем все элементы списка и присваиваем нужное значение
    for (const task of taskElementsMenu) {
        task.draggable = true;
    }

    bloksListElementMenu.addEventListener(`dragstart`, (evt) => {
        evt.target.classList.add(`selected`);
    })
    
    bloksListElementMenu.addEventListener(`dragend`, (evt) => {
        evt.target.classList.remove(`selected`);
    });

    
 });