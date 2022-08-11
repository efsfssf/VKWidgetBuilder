function ModalWindowBlock()
{
    const bloksListElement = document.querySelector('.bloks__listModal');
    
    const taskElements = bloksListElement.querySelectorAll(`.bloks__itemMenu.Modal`);

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
        const activeElement = bloksListElement.querySelector(`.selected`) || bloksListElementMenuTwo.querySelector(`.selected`) || bloksListElementMenuOne.querySelector(`.selected`);
        // Находим элемент, над которым в данный момент находится курсор
        const currentElement = evt.target;
        // Проверяем, что событие сработало:
        // 1. не на том элементе, который мы перемещаем,
        // 2. именно на элементе списка
        const isMoveable = activeElement !== currentElement &&
            currentElement.classList.contains(`Modal`);
        
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

    var deletepool = document.querySelector('.overlayDiv');
    var avaibleDelete = false;
    deletepool.addEventListener("dragenter", (event) => {
        // highlight potential drop target when the draggable element enters it
        const currentElement = event.target;
        if (currentElement === deletepool){
            setColor(currentElement, '#ef393954');
            avaibleDelete = true;    
        }
    });
    
    deletepool.addEventListener("dragleave", (event) => {
        // reset background of potential drop target when the draggable element leaves it
        const currentElement = event.target;
        if (currentElement === deletepool){
            setColor(currentElement, '#ffffff40');
            avaibleDelete = false;
        }
    });

    deletepool.addEventListener("dragend", (event) => {
        // reset background of potential drop target when the draggable element leaves it
        setColor(deletepool, '#ffffff40');
        const currentElement = event.target;
        if (avaibleDelete == true)
            removeModalBlock(currentElement);
    });

    deletepool.addEventListener(`dragover`, (evt) => {
        // Разрешаем сбрасывать элементы в эту область
        evt.preventDefault();

        const activeElement = bloksListElement.querySelector(`.selected`) || bloksListElementMenuTwo.querySelector(`.selected`) || bloksListElementMenuOne.querySelector(`.selected`);

        // Находим элемент, над которым в данный момент находится курсор
        const currentElement = evt.target;

        // Проверяем, что событие сработало:
        // 1. не на том элементе, который мы перемещаем,
        // 2. именно на элементе списка
        const isMoveable = activeElement !== currentElement &&
            currentElement.classList.contains(`modal-window`);
        
        // Если нет, прерываем выполнение функции
        if (!isMoveable) {
            return;
        }

        //setColor(currentElement, '#ef393954');
    });
}


function setColor(element, color)
{
    element.style.backgroundColor = color;
}

