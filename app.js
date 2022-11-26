let prodElementCount = document.getElementById("product-count");
console.log(prodElementCount);
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

function openModalScroll () {
    let scrollClientHeight;
    if (window.pageYOffset > document.body.scrollHeight/2) {
        modal.classList.add("show");
        modal.classList.remove("hide");
        window.removeEventListener("scroll", openModalNew);
    }
    console.log(window.pageYOffset);

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
    if(e.target === modal) {
      closeModal();
    }
  });



