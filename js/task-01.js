const categoriesList = document.querySelector('#categories').children;
console.log(`В списке ${categoriesList.length} категории`);
console.log('--------------------------------------');

const itemList = document.querySelectorAll('.item');
itemList.forEach(elm => {
    console.log(` Категория: ${elm.firstElementChild.textContent}`);
    console.log(` Количество элементов: ${elm.querySelectorAll('li').length}`);
    console.log('--------------------------------------');
});


