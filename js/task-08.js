// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

//--------------------------------------------------------------------------------------

const inputEl = document.querySelector('input');
const renderBtnEl = document.querySelector('button[data-action="render"]');
const destroyBtnEl = document.querySelector('button[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

let amount = 0;

inputEl.addEventListener('input', onChangeInput);
renderBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

function onChangeInput(event) {
    amount = event.currentTarget.value;
}

function createBoxes() {
    for (let i = 0; i < amount; i += 1) {
        makeSingleBox(i);
     }
}

function makeSingleBox(rangeOfDiv) {
    const divEl = document.createElement('div');
    divEl.style.width = 30 + 10 * rangeOfDiv + 'px';
    divEl.style.height = 30 + 10 * rangeOfDiv + 'px';
    divEl.style.marginTop = 5 + 'px';
    let r = colorGenerate();
    let g = colorGenerate();
    let b = colorGenerate();
    divEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    boxesEl.appendChild(divEl);
}

function colorGenerate() {
    return Math.random() * (255 - 1) + 1; 
}

function destroyBoxes() {
    boxesEl.innerHTML = '';
}

