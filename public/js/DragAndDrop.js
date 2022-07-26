

var windowOnloadAdd = function (event) {
    if ( window.onload ){
       window.onload = window.onload + event;
    } else {
       window.onload = event;
    };
 };

 windowOnloadAdd(function() {
    const tasksListElement = document.getElementsByClassName('tasks__list')[1];
    
    const taskElements = tasksListElement.querySelectorAll(`.tasks__item`);

    // Перебираем все элементы списка и присваиваем нужное значение
    for (const task of taskElements) {
        task.draggable = true;
    }

    tasksListElement.addEventListener(`dragstart`, (evt) => {
        evt.target.classList.add(`selected`);
    })
    
    tasksListElement.addEventListener(`dragend`, (evt) => {
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

    tasksListElement.addEventListener(`dragover`, (evt) => {
    // Разрешаем сбрасывать элементы в эту область
    evt.preventDefault();
    
    // Находим перемещаемый элемент
    const activeElement = tasksListElement.querySelector(`.selected`);
    // Находим элемент, над которым в данный момент находится курсор
    const currentElement = evt.target;
    // Проверяем, что событие сработало:
    // 1. не на том элементе, который мы перемещаем,
    // 2. именно на элементе списка
    const isMoveable = activeElement !== currentElement &&
        currentElement.classList.contains(`tasks__item`);
    
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
    tasksListElement.insertBefore(activeElement, nextElement);
    });
 });