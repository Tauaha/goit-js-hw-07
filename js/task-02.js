const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newIngredients = ingredients.map(item => {
  const listEl = document.createElement("li");
  listEl.classList = 'item';
  listEl.textContent = item;
  return listEl;
})

const newItemEl = document.querySelector('#ingredients');
newItemEl.append(...newIngredients);

