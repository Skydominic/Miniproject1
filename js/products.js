/////products

// const allproductsContainer = document.querySelector('.product-container');

productContainer(products);
seeDetails(products);

////added
const searchForm = document.querySelector('.search-form');
const prods = [...allproductsContainer.children];
console.log(prods);

const filterSearch = item => {
  prods
    .filter(p => !p.textContent.toLowerCase().includes(item))
    .forEach(p => p.classList.add('hidden'));

  prods
    .filter(p => p.textContent.toLocaleUpperCase().includes(item))
    .forEach(p => p.classList.remove('hidden'));
};

searchForm.addEventListener('keyup', e => {
  e.preventDefault();
  const item = searchForm.input.value.trim().toLowerCase();
  // filter(term);
  console.log(item);

  filterSearch(item);
});
