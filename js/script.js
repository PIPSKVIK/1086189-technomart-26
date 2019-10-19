    

/*Первая мадалка index.html Регистрация...*/

var registration = document.querySelector(".registration");
var popup = document.querySelector(".popup-feedback");
var close = document.querySelector(".closed");


registration.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по ссылке");
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Закрыть модальное окно");
  popup.classList.remove("modal-show");
})

/*Первая мадалка index.html Регистрация!!!*/