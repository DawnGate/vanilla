const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];

const searchBox = document.querySelector(".searchBox");
const categories = document.querySelector(".cats");
const rangeInput = document.querySelector(".rangeMoney");
const rangeValue = document.querySelector(".priceValue");
const products = document.querySelector(".products");

const showProducts = (sortedListProducts) => {
  products.innerHTML = sortedListProducts
    .map((item, index) => {
      return `
        <div class="product">
        <img
          src="${item.img}"
          alt="${item.name}"
        />
        <span class="productName">${item.name}</span>
        <span class="productValue">$${item.price}</span>
      </div>`;
    })
    .join("");
};

showProducts(data);

searchBox.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase();
  const sortedProducts = data.filter(
    (item) => item.name.toLowerCase().indexOf(searchInput) !== -1
  );
  showProducts(sortedProducts);
});

const showCategories = () => {
  const dataCats = data.map((item) => item.cat);
  const distinctCats = [
    "All",
    ...dataCats.filter((item, index) => dataCats.indexOf(item) === index),
  ];
  categories.innerHTML = distinctCats
    .map((item) => {
      return `<span class="cat">${item}</span>`;
    })
    .join("");

  categories.addEventListener("click", (e) => {
    const textContent = e.target.textContent;
    if (textContent === "All") {
      showProducts(data);
    } else {
      showProducts(data.filter((item) => item.cat === textContent));
    }
  });
};

showCategories();
