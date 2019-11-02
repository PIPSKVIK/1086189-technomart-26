/*КНОПКА РЕГИСТРАЦИИ В HEADER*/
var registration = document.querySelector(".button-navigation-info");
var popup = document.querySelector(".popup-feedback");
var close = document.querySelector(".closed");
var login = popup.querySelector("[id=name]");
var form = popup.querySelector(".form-feedback");
var email = popup.querySelector("[id=email]");
var textLetter = popup.querySelector("[id=text-letter]");

registration.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по ссылке");
  popup.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Закрыть модальное окно");
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(login.value);
  console.log(email.value);
  console.log(textLetter.value);
  if (!login.value || email.value || textLetter.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      console.log("Нажали esc, чтобы закрыть окно popup");
    }
  }
});

/*БОЛЬШАЯ КАРТА*/
var link = document.querySelector(".map-location"); 
var popupBigMap = document.querySelector(".popup-map");
var closeBigMap = document.querySelector(".closing-map");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
    console.log("Клик по кнопке, Напишите нам!");
  popupBigMap.classList.add("popup-map-show");
});

closeBigMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Закрыть модальное большой карты");
  popupBigMap.classList.remove("popup-map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupBigMap.classList.contains("popup-map-show")) {
      evt.preventDefault();
      popupBigMap.classList.remove("popup-map-show");
      console.log("нажили esc, чтобы закрыть карту");
    }
  }
});

/*КУПИТЬ, ТОВАР ДОБАВЛЕН В КОРЗИНУ!*/
var catalogBuyList = document.querySelectorAll(".catalog-buy");
var popupBasket = document.querySelector(".popup-item-basket");
var closeItem = document.querySelector(".closing-form-item");

for (var i = 0; i < catalogBuyList.length; i++) {
  catalogBuyList[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("Клик по кнопке КУПИТЬ");
    popupBasket.classList.add("popup-item-basket-show");
  });
}

closeItem.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Закрыть окно, Товар добавлен в корзину");
  popupBasket.classList.remove("popup-item-basket-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupBasket.classList.contains("popup-item-basket-show")) {
      evt.preventDefault();
      popupBasket.classList.remove("popup-item-basket-show");
      console.log("закрываем окно esc");
    }
  }
});