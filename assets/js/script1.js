let products = {
  data: [
    {
      productName: "Oil",
      category: "Jacket",
      price: "100",
      image: "assets/img/maslo.png",
    },
    {
      productName: "Tires",
      category: "Jacket",
      price: "10 000",
      image: "assets/img/shini.jpg",
    },
    {
      productName: "Odor Perfum",
      category: "accessories",
      price: "180",
      image: "assets/img/perf.jpg",
    },
    {
      productName: "Bumper",
      category: "Jacket",
      price: "8 000",
      image: "assets/img/bamper.jpg",
    },
    {
      productName: "Brake Pads",
      category: "Jacket",
      price: "5 000",
      image: "assets/img/tormaza.jpg",
    },
    {
      productName: "exhaust",
      category: "Jacket",
      price: "7 500",
      image: "assets/img/gaz.png",
    },
    {
      productName: "Filter",
      category: "Jacket",
      price: "300",
      image: "assets/img/filter.jpg",
    },
    {
      productName: "Сar cover",
      category: "accessories",
      price: "4 500",
      image: "assets/img/chehol.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText =  i.price+"руб";
  container.appendChild(price);
//btn
  let tone = document.createElement('button');
  tone.classList.add("btn-price");
  tone.textContent = 'В корзину';
  tone.setAttribute('type', 'button');
 
  container.appendChild(tone);
  tone.addEventListener('click', () => {
  alert('ДОБАВЛЕНО В КОРЗИНУ.')
});





  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};