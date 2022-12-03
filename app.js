let prodElementCount = document.getElementById("product-count");
let addToCartBtns = document.querySelectorAll(".ad_cart_btn");
for (let i = 0; i < addToCartBtns.length; i += 1) {
  addToCartBtns[i].addEventListener("click", function () {
    prodElementCount.textContent = +prodElementCount.textContent + 1;
  });
}

let moreDetailsBtns = document.querySelectorAll(".more_btn");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

window.addEventListener("scroll", openModalScroll);

function openModalScroll() {
  /*let scrollClientHeight;*/
  if (window.pageYOffset > document.body.scrollHeight / 2) {
    modal.classList.add("show");
    modal.classList.remove("hide");
    window.removeEventListener("scroll", openModalScroll);
  }
}

/* поява модального вікна при натисканні на кнопку More Details*/
moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

btnClose.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

let wishBtn = document.querySelectorAll(".wish_list");
let wishImg = document.querySelectorAll(".wish_list_img");

for (let i = 0; i < wishBtn.length; i += 1) {
  wishBtn[i].addEventListener("click", function () {
    let src = wishImg[i].getAttribute("src");

    if (src === "images/icon_5.png") {
      wishImg[i].setAttribute("src", "images/icon_7.png");
      wishBtn[i].classList.add("wish-list-liked");
    } else {
      wishImg[i].setAttribute("src", "images/icon_5.png");
      wishBtn[i].classList.remove("wish-list-liked");
    }
  });
}

// add slider
$(".slider-block").slick({
  dots: true,
});

// AOS.init();

let delItemBtns = document.querySelectorAll(".del-btn");
let addItemBtns = document.querySelectorAll(".add-btn");
let inputQuantity = document.querySelectorAll(".input-quantity");

/*
console.log(delItemBtns);
console.log(addItemBtns);
console.log(inputQuantity);
*/

/* перший варіант */
/*
addItemBtns.forEach((item, i) => {
  item.addEventListener("click", function () {
    let currentCount = +inputQuantity[i].value;
    inputQuantity[i].value = currentCount + 1;
  });
});

delItemBtns.forEach((item, i) => {
  item.addEventListener("click", function () {
    let currentCount = +inputQuantity[i].value;
    inputQuantity[i].value = currentCount - 1;
  });
});
*/
/* другий варіант */

function Counter(
  addItemBtns,
  delItemBtns,
  inputQuantity,
  minCount = 1,
  maxCount = 10
) {
  this.domRefs = {
    addItemBtns,
    delItemBtns,
    inputQuantity,
  };

  this.toggleButtonState = function () {
    let count = this.domRefs.inputQuantity.value;
    this.domRefs.delItemBtns.disabled = count <= minCount;
    this.domRefs.addItemBtns.disabled = count >= maxCount;
  };
  this.toggleButtonState();
  
  this.increment = function () {
    this.domRefs.inputQuantity.value = +this.domRefs.inputQuantity.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inputQuantity.value = +this.domRefs.inputQuantity.value - 1;
    this.toggleButtonState();
  };
  console.log(this.domRefs.inputQuantity.value);
  this.domRefs.addItemBtns.addEventListener("click", this.increment.bind(this));
  this.domRefs.delItemBtns.addEventListener("click", this.decrement.bind(this));
}

//let counter1 = new Counter(addItemBtns[0], delItemBtns[0], inputQuantity[0]);

const counters = [];

inputQuantity.forEach(
  (countItem, i) =>
    (counters[i] = new Counter(
      addItemBtns[i],
      delItemBtns[i],
      inputQuantity[i]
    ))
);

/*
function hi(surname) {
  console.log(this);
  console.log(this.name + surname);
}
hi();
const jack = {
  name: "Jack",
};

const pablo = {
  name: "Pablo",
};

// call, apply, bind

hi.call(jack, " Call");
hi.call(pablo, " Call");

hi.apply(jack, [" Apply"]);
hi.apply(pablo, [" Apply"]);

let test = hi.bind(jack, " Bind");
test();
*/
