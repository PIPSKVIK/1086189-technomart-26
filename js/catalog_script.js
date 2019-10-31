
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

       /*закрываем корзину кнопкой esc*/
       window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          if (popupBasket.classList.contains("popup-item-basket-show")) {
            evt.preventDefault();
            popupBasket.classList.remove("popup-item-basket-show");
            console.log("закрываем окно esc");
          }
        }
       });