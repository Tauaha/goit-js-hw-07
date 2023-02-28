
const categoryEl = document.querySelector( '#categories');
const categoriesList = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesList.length);

categoriesList.forEach((element) => {
    console.log('Categore:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
 
});