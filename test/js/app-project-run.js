function initBasket() {
  const element = document.querySelector('.basket');
  if (element) {
    const getChangeInput = document.querySelector('.basket__input-simple-input');
    if (getChangeInput) {
      getChangeInput.focus();
    }
  }
}

initBasket();


function initAddAddress() {
  const element = document.querySelector('.add-address');
  if (element) {
    // Получение всех элементов .add-address__input-text
    const inputElements = document.querySelectorAll('.add-address__input-text');

    // Перебор каждого элемента .add-address__input-text
    inputElements.forEach((inputElement) => {
      // Обработчик события клика на .add-address__input-text
      inputElement.addEventListener('click', () => {
        // Поиск ближайшего родителя .add-address__row
        const rowElement = inputElement.closest('.add-address__row');

        // Поиск элементов .add-address__label и .add-address__input-text-wrapper внутри родителя
        const labelElement = rowElement.querySelector('.add-address__label');
        const inputWrapperElement = rowElement.querySelector('.add-address__input-text-wrapper');

        // Добавление классов к найденным элементам
        labelElement.classList.add('add-address__label--small');
        inputWrapperElement.classList.add('add-address__input-text-wrapper--active');
      });
    });

    // Получение всех элементов .add-address__btn--close
    const closeButtonElements = document.querySelectorAll('.add-address__btn--close');

    // Перебор каждого элемента .add-address__btn--close
    closeButtonElements.forEach((closeButtonElement) => {
      // Обработчик события клика на .add-address__btn--close
      closeButtonElement.addEventListener('click', () => {
        // Поиск ближайшего родителя .add-address__row
        const rowElement = closeButtonElement.closest('.add-address__row');

        // Поиск элементов .add-address__label и .add-address__input-text-wrapper внутри родителя
        const labelElement = rowElement.querySelector('.add-address__label');
        const inputWrapperElement = rowElement.querySelector('.add-address__input-text-wrapper');
        const inputElement = inputWrapperElement.querySelector('.add-address__input-text');

        // Удаление классов у найденных элементов
        labelElement.classList.remove('add-address__label--small');
        inputWrapperElement.classList.remove('add-address__input-text-wrapper--active');

        // Обнуление значения инпута
        inputElement.value = '';
      });
    });
  }
}

initAddAddress();

function initBasketProduct() {
  const element = document.querySelector('.basket-product');
  if (element) {
    const basketProducts = document.querySelectorAll('.basket-product');

    basketProducts.forEach((product) => {
      const productId = product.dataset.productBasketId;

      let counter = 1;
      const counterElement = product.querySelector('.basket-product__controls-counter');
      const priceElement = product.querySelector('.basket-product__price');
      const priceDiscountElement = product.querySelector('.basket-product__price-item--new');

      if (counterElement) {
        counterElement.textContent = counter;
      }

      const removeButton = product.querySelector('.basket-product__controls-col--remove-product');
      const addButton = product.querySelector('.basket-product__controls-col--add-product');
      const removeProductButton = product.querySelector('.basket-product__btn--remove');

      const updatePrice = () => {
        const price = parseFloat(priceElement.dataset.price);
        const sum = counter * price;

        if (product.classList.contains('basket-product--discount')) {
          priceDiscountElement.textContent = formatPrice(sum);
        } else {
          priceElement.textContent = formatPrice(sum);
        }
      };

      const formatPrice = (amount) => {
        return amount.toLocaleString('ru-RU') + ' ₽';
      };

      const removeProduct = () => {
        product.remove();
      };

      if (counterElement) {

        removeButton.addEventListener('click', () => {
          if (counter > 0) {
            counter--;
            counterElement.textContent = counter;
          }
          if (counter === 0) {
            removeButton.classList.remove('basket-product__controls-col--active');
          }
          updatePrice();
        });

        addButton.addEventListener('click', () => {
          counter++;
          counterElement.textContent = counter;
          removeButton.classList.add('basket-product__controls-col--active');
          updatePrice();
        });

        removeProductButton.addEventListener('click', () => {
          removeProduct();
        });

        updatePrice();
      }
    });
  }
}
initBasketProduct();

function initContent() {
  const element = document.querySelector('.content');
  if (element) {
    const headerElement = document.querySelector('.content__row--header');

    if (headerElement) {
      // Функция для проверки ширины области просмотра
      function checkViewportWidth() {
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (viewportWidth < 1040) {
          // Инициализируем плагин с опцией добавления класса
          const stickyElement = new Sticky('.content__row--header', {
            stickyClass: 'sticky'
          });
        }
      }

      // Вызываем функцию при загрузке страницы
      checkViewportWidth();

      // Добавляем слушатель события изменения размера окна
      window.addEventListener('resize', checkViewportWidth);
    }
  }
}

initContent();

function initConfirmAddress() {
  const element = document.querySelector('.confirm-address');
  if (element) {
    // Находим кнопку и блок с классом ".confirm-address"
    const button = document.querySelector('.button--gray');
    const confirmAddress = document.querySelector('.confirm-address');

    // Добавляем обработчик события на клик кнопки
    button.addEventListener('click', () => {
      // Удаляем класс ".confirm-address--active" у блока ".confirm-address"
      confirmAddress.classList.remove('confirm-address--active');
    });
  }
}

initConfirmAddress();

function initFAQ() {
  const element = document.querySelector('.promo');
  if (element) {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        faqItems.forEach(faqItem => {
          faqItem.classList.remove('faq__item--active');
        });
        item.classList.add('faq__item--active');
      });
    });
  }
}

initFAQ();


function initHeader() {
  const element = document.querySelector('.header');
  if (element) {
  }
}

initHeader();

// function initLogo() {
//   const element = document.querySelector('.logo');
//   if (element) {
//   }
// }
//
// initLogo();

function initNav() {
  const element = document.querySelector('.nav');
  if (element) {
    const navItems = document.querySelectorAll('.nav__item');
    const submenus = document.querySelectorAll('.nav__submenu');

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const isActive = item.classList.contains('nav__item--active');

        // удаляем активный класс у всех пунктов меню
        navItems.forEach(navItem => {
          navItem.classList.remove('nav__item--active');
        });

        // удаляем активный класс у всех подменю
        submenus.forEach(submenu => {
          submenu.classList.remove('nav__submenu--active');
        });

        if (!isActive) {
          item.classList.add('nav__item--active');
          const nextSubmenu = item.nextElementSibling;
          if (nextSubmenu.classList.contains('nav__submenu')) {
            nextSubmenu.classList.add('nav__submenu--active');
          }
        }
      });
    });
  }
}

initNav();


function initPreviewProducts() {
  const element = document.querySelector('.preview-product');
  if (element) {
    document.addEventListener('DOMContentLoaded', function () {
      // Счетчик
      let productCounters = new Map();

      const removeProductButton = document.querySelectorAll('.preview-product__col--remove-product');
      const addProductButton = document.querySelectorAll('.preview-product__col--add-product');
      let productQuantity = document.querySelector('.preview-product__quantity');
      let productsQuantity = document.querySelectorAll('.preview-product__quantity');

      if (removeProductButton && addProductButton && productQuantity) {
        // Remove product
        removeProductButton.forEach((button) => {
          button.addEventListener('click', (event) => {
            productQuantity = event.target.closest('.preview-product').querySelector('.preview-product__quantity');
            const productCard = event.target.closest('.preview-product');
            const productId = productCard.dataset.productId;

            // Получаем текущее значение счетчика для данной карточки товара или устанавливаем значение по умолчанию, если такового нет
            let counter = productCounters.get(productId) || 0;

            // Увеличиваем значение счетчика
            counter--;

            // Обновляем значение счетчика в Map
            productCounters.set(productId, counter);

            if (counter > 0) {
              counter--;
              productQuantity.textContent = counter;
            }

            if (counter === 0) {
              event.target.closest('.preview-product').querySelector('.preview-product__col--remove-product').classList.remove('preview-product__col--active');
              productQuantity.classList.remove('preview-product__quantity--active');
            }
          });
        });

        // Add product
        addProductButton.forEach((button) => {
          button.addEventListener('click', (event) => {
            productQuantity = event.target.closest('.preview-product').querySelector('.preview-product__quantity');
            const productCard = event.target.closest('.preview-product');
            const productId = productCard.dataset.productId;

            // Получаем текущее значение счетчика для данной карточки товара или устанавливаем значение по умолчанию, если такового нет
            let counter = productCounters.get(productId) || 0;

            // Увеличиваем значение счетчика
            counter++;

            // Обновляем значение счетчика в Map
            productCounters.set(productId, counter);

            productQuantity.textContent = counter;
            if (counter > 0) {
              const removeProductButton = event.target.closest('.preview-product').querySelector('.preview-product__col--remove-product');
              removeProductButton.classList.add('preview-product__col--active');
              productQuantity.classList.add('preview-product__quantity--active');
            }
          });
        });
      } else {
        console.log('Отсутствует один или несколько необходимых элементов.');
      }
    });

    // В мобильной версии проходимся по всем .preview-product__price, находим наибольшую его ширину и присваиваем всем
    // При условии, что область просмотра браузера меньше 1040
    const observeWidthChanges = () => {
      const prices = document.querySelectorAll(".preview-product__price");
      prices.forEach((price) => {
        new ResizeObserver(() => {
          if (window.innerWidth < 1040) {
            console.log("window.innerWidth < 1040")
            maxWidth = getMaxWidth();
            console.log(maxWidth)
            setMaxWidth();
          }
        }).observe(price);
      });
    };

    observeWidthChanges();

    // Функция для выбора наибольшего значения width
    const getMaxWidth = () => {
      let maxWidth = 0;
      const prices = document.querySelectorAll(".preview-product__price");
      // const imgs = document.querySelectorAll('.preview-product__row--image')
      prices.forEach((price) => {
        const width = price.offsetWidth;
        maxWidth = Math.max(maxWidth, width);
      });
      return maxWidth;
    };

    let maxWidth = getMaxWidth();

    // Присваиваем наибольшее значение width всем ".preview-product__price"
    const setMaxWidth = () => {
      // const images = document.querySelectorAll(".preview-product__row--image");
      const prices = document.querySelectorAll(".preview-product__price");
      prices.forEach((price) => {
        price.style.minWidth = `${maxWidth}px`;
      });
    };

    // Отслеживаем изменение размеров области просмотра браузера
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1040) {
        console.log("resize window.innerWidth < 1040")
        maxWidth = getMaxWidth();
        setMaxWidth();
      }
    });
  }
}

initPreviewProducts();

function initPopup() {
  const element = document.querySelector('.popup');
  if (element) {
    // Получаем все ссылки на открытие попапов
    const popupLinks = document.querySelectorAll('[data-link]');

    // Получаем все попапы
    const popups = document.querySelectorAll('.popup');
    const body = document.querySelector('body');

    // Перебираем все ссылки и для каждой добавляем обработчик события клика
    popupLinks.forEach(link => {
      link.addEventListener('click', () => {
        const popupName = link.getAttribute('data-link');
        const targetPopup = document.querySelector(`.popup[data-popup="${popupName}"]`);

        if (targetPopup) {
          targetPopup.classList.add('popup--active');
          body.classList.add('hidden-scroll');
        }
      });
    });

    // Добавляем обработчики события клика на кнопки закрытия и на оверлей
    popups.forEach(popup => {
      const closeBtn = popup.querySelector('.popup__btn--close, .map__btn--close, .product__btn--close');
      const overlay = popup.querySelector('.popup__overlay');

      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          popup.classList.remove('popup--active');
          body.classList.remove('hidden-scroll');
        });
      }

      overlay.addEventListener('click', () => {
        popup.classList.remove('popup--active');
        body.classList.remove('hidden-scroll');
      });
    });

    // Проверяем наличие элемента .popup__container перед взаимодействием с ним
    if (document.querySelector('.popup__container')) {
      const popupContainer = document.querySelector('.popup__container');

      // Проверяем наличие элемента .popup__row--gradient-top-to-bottom перед взаимодействием с ним
      if (document.querySelector('.popup__row--gradient-top-to-bottom')) {
        const gradientTopToBottom = document.querySelector('.popup__row--gradient-top-to-bottom');

        // Отслеживаем скролл элемента .popup__container
        popupContainer.addEventListener('scroll', () => {
          const scrollPosition = popupContainer.scrollTop;

          // Взаимодействуем с элементом .popup__row--gradient-top-to-bottom
          if (scrollPosition > 0) {
            gradientTopToBottom.classList.add('popup__row--gradient-visible');
          } else {
            gradientTopToBottom.classList.remove('popup__row--gradient-visible');
          }
        });
      }

      // Проверяем наличие элемента .popup__row--gradient-bottom-to-top перед взаимодействием с ним
      if (document.querySelector('.popup__row--gradient-bottom-to-top')) {
        const gradientBottomToTop = document.querySelector('.popup__row--gradient-bottom-to-top');

        // Отслеживаем скролл элемента .popup__container
        popupContainer.addEventListener('scroll', () => {
          const maxScrollPosition = popupContainer.scrollHeight - popupContainer.offsetHeight;
          const scrollPosition = popupContainer.scrollTop;

          // Взаимодействуем с элементом .popup__row--gradient-bottom-to-top
          if (scrollPosition < maxScrollPosition) {
            gradientBottomToTop.classList.add('popup__row--gradient-visible');
          } else {
            gradientBottomToTop.classList.remove('popup__row--gradient-visible');
          }
        });
      }

      // Проверяем наличие элемента .basket__offer-container--gradient-bottom-to-top перед взаимодействием с ним
      if (document.querySelector('.basket__offer-container--gradient-bottom-to-top')) {
        const gradientBottomToTop = document.querySelector('.basket__offer-container--gradient-bottom-to-top');

        // Отслеживаем скролл элемента .popup__container
        popupContainer.addEventListener('scroll', () => {
          const maxScrollPosition = popupContainer.scrollHeight - popupContainer.offsetHeight;
          const scrollPosition = popupContainer.scrollTop;

          // Взаимодействуем с элементом .popup__row--gradient-bottom-to-top
          if (scrollPosition < maxScrollPosition) {
            gradientBottomToTop.classList.add('basket__offer-container--gradient-visible');
          } else {
            gradientBottomToTop.classList.remove('basket__offer-container--gradient-visible');
          }
        });
      }
    }
  }
}

initPopup();

function initProfile() {
  const element = document.querySelector('.profile');
  if (element) {
    let contactUs = document.querySelector('.profile--contact-us');

    if (contactUs) {
      let phoneInput = document.getElementById('profile-phone-number');
      const sendInSupportButton = document.getElementById('send-in-support');

      // Создаем маску для номера телефона
      let phoneMask = IMask(phoneInput, {
        mask: '+{7} (000) 000-00-00'
      });

      // Проверка заполнения номера телефона. Разблокировка кнопки
      phoneInput.addEventListener('input', function () {
        if (phoneMask.unmaskedValue && phoneMask.unmaskedValue.length === 11) {
          sendInSupportButton.removeAttribute('disabled');
        } else {
          sendInSupportButton.setAttribute('disabled', 'disabled');
        }
      });
    }
  }
  let simpleInput = document.querySelector('.profile__input-simple-input');

  if (simpleInput) {
    simpleInput.focus();
  }
}

initProfile();

function initPromo() {
  const element = document.querySelector('.promo');
  if (element) {
    // (data-flickity='{"freeScroll": true, "wrapAround": true , "pageDots": false}')
    const promoGallery = new Flickity('.promo__carousel', {
      freeScroll: true,
      wrapAround: true,
      pageDots: false,
      responsive: [
        {
          breakpoint: 1040,
          settings: {
            pageDots: false,
            wrapAround: false
          }
        }
      ]
    });

    // // Полноэкранная галерея товаров в галерее
    // const productGallery = new Flickity('.product__gallery', {
    //   asNavFor: '.product__carousel',
    //   cellAlign: 'left',
    //   contain: true,
    //   pageDots: false,
    //   prevNextButtons: true,
    //   initialIndex: 0,
    //   fullscreen: true,
    // });
  }


}

initPromo();

function initProduct() {
  const element = document.querySelector('.product');
  if (element) {
    // Базовая галерея товаров в карточке товара
    const productCarousel = new Flickity('.product__carousel', {
      cellAlign: 'left',
      contain: true,
      pageDots: true,
      prevNextButtons: true,
      initialIndex: 0,
      responsive: [
        {
          breakpoint: 1040,
          settings: {
            pageDots: false
          }
        }
      ]
    });

    // Полноэкранная галерея товаров в галерее
    const productGallery = new Flickity('.product__gallery', {
      asNavFor: '.product__carousel',
      cellAlign: 'left',
      contain: true,
      pageDots: false,
      prevNextButtons: true,
      initialIndex: 0,
      fullscreen: true,
    });

    // Превью-галерея товаров в галерее
    const productGalleryNav = new Flickity('.product__gallery-nav', {
      asNavFor: '.product__gallery',
      contain: true,
      pageDots: false,
      prevNextButtons: false
    });

    // Показать скрытый текст
    const sectionText = document.querySelector('.product__section-text');

    sectionText.addEventListener('click', () => {
      sectionText.classList.remove('product__section-text--hidden');
    });

    // Счетчик товаров
    // Счетчик товаров
    const price = document.querySelector('.product__btn--calc').getAttribute('data-price');
    const productBtnText = document.querySelector('.product__btn-text');
    let productCounter = 0;

    document.querySelector('.product__btn-ctrl--plus').addEventListener('click', () => {
      productCounter++;
      if (productCounter > 0 && productCounter < 2) {
        document.querySelector('.product__btn--calc').classList.add('product__btn--active');
      }
      productBtnText.textContent = `${productCounter} x ${price} ₽`;
    });

    document.querySelector('.product__btn-ctrl--minus').addEventListener('click', () => {
      if (productCounter >= 1) {
        productCounter--;
        if (productCounter < 1) {
          document.querySelector('.product__btn--calc').classList.remove('product__btn--active');
          productBtnText.textContent = `${price} ₽`;
        }
        else {
          productBtnText.textContent = `${productCounter} x ${price} ₽`;
        }
      }
    });
  }
}

initProduct();

function initSearch() {
  const element = document.querySelector('.search');
  if (element) {
    const input = document.querySelector('.search__input-text');
    const closeButton = document.querySelector('.search__btn--close');

    // Показываем кнопку "Очистить" (крестик)
    input.addEventListener('input', () => {
      if (input.value.length > 0) {
        closeButton.classList.add('search__btn--active');
      } else {
        closeButton.classList.remove('search__btn--active');
      }
    });

    // Очищаем инпут при клике на кнопку "Очистить" (крестик)
    closeButton.addEventListener('click', () => {
      input.value = '';
      closeButton.classList.remove('search__btn--active');
    });
  }
}

initSearch();

function initSidebar() {
  const element = document.querySelector('.sidebar');
  if (element) {
    // Презентация работы правого сайдбара
    document.querySelectorAll('.button[data-sidebar="map"]').forEach(button => {
      button.addEventListener('click', () => {
        // Убираем класс ".sidebar__container--active" у всех ".sidebar__container"
        document.querySelectorAll('.sidebar__container').forEach(container => {
          container.classList.remove('sidebar__container--active');
        });

        // Получаем значение data-sidebar у кликнутой кнопки
        const targetValue = button.getAttribute('data-sidebar');

        // Находим на странице ".sidebar__container" с таким же значением data-sidebar и добавляем к нему "sidebar__container--active"
        document.querySelectorAll(`.sidebar__container[data-sidebar="${targetValue}"]`).forEach(container => {
          container.classList.add('sidebar__container--active');
        });
      });
    });

    // document.querySelectorAll('.button[data-sidebar="map-full"]').forEach(button => {
    //   button.addEventListener('click', () => {
    //     // Убираем класс ".sidebar__container--active" у всех ".sidebar__container"
    //     document.querySelectorAll('.sidebar__container').forEach(container => {
    //       container.classList.remove('sidebar__container--active');
    //     });
    //
    //     // Получаем значение data-sidebar у кликнутой кнопки
    //     const targetValue = button.getAttribute('data-sidebar');
    //
    //     // Находим на странице ".sidebar__container" с таким же значением data-sidebar и добавляем к нему "sidebar__container--active"
    //     document.querySelectorAll(`.sidebar__container[data-sidebar="${targetValue}"]`).forEach(container => {
    //       container.classList.add('sidebar__container--active');
    //     });
    //   });
    // });
  }
}

initSidebar();

function initSignIn() {
  const element = document.querySelector('.sign-in');
  if (element) {
    // const stepFirst = document.querySelector('.sign-in__step[data-step="first"]');
    let stepSecond = document.querySelector('.sign-in__step[data-step="second"]');
    let stepThird = document.querySelector('.sign-in__step[data-step="third"]');

    if (stepSecond) {
      let phoneInput = document.getElementById('sign-in-phone');
      const signInButton = document.getElementById('sign-in-get-code');

      // Создаем маску для номера телефона
      let phoneMask = IMask(phoneInput, {
        mask: '+{7} (000) 000-00-00'
      });

      // Проверка заполнения номера телефона. Разблокировка кнопки
      phoneInput.addEventListener('input', function () {
        if (phoneMask.unmaskedValue && phoneMask.unmaskedValue.length === 11) {
          signInButton.removeAttribute('disabled');
        } else {
          signInButton.setAttribute('disabled', 'disabled');
        }
      });
    }

    if (stepThird) {
      const signInForm = document.querySelector('.sign-in');
      const numCodeInputs = Array.from(document.querySelectorAll('.sign-in__input-num-code'));
      const messageElement = document.querySelector('.sign-in__message');
      let timerInterval;

      // Функция проверки кода
      function checkCode() {
        const code = numCodeInputs.map(input => input.value).join('');

        if (code === '1234') {
          signInForm.classList.add('sign-in--success');
          messageElement.textContent = '';
          messageElement.classList.add('sign-in__message--hidden');
        } else {
          messageElement.textContent = 'Не тот код. Сверьтесь с смс';
          signInForm.classList.add('sign-in--error');
          messageElement.classList.remove('sign-in__message--hidden');
        }
      }

      // Функция обработки ввода в инпуты
      function handleInput(event, index) {
        if (event.target.value !== '') {
          if (index < numCodeInputs.length - 1) {
            numCodeInputs[index + 1].focus();
            signInForm.classList.remove('sign-in--error');
          } else {
            numCodeInputs[index].blur();
            checkCode();
            startTimer();
          }
        }
      }

      // Функция очистки инпутов
      function clearInputs() {
        numCodeInputs.forEach(input => {
          input.value = '';
        });
      }

      // Функция обратного отсчета
      function startTimer() {
        let seconds = 25;

        timerInterval = setInterval(() => {
          if (messageElement.textContent !== 'Не тот код. Сверьтесь с смс') {
            messageElement.textContent = `Получить новый код через ${seconds} секунд`;
          }

          if (seconds === 0) {
            clearInterval(timerInterval);
            messageElement.textContent = '';
            const getNewCodeButton = document.createElement('button');
            getNewCodeButton.textContent = 'Получить новый код';
            getNewCodeButton.classList.add('sign-in__message');
            messageElement.appendChild(getNewCodeButton);
          }

          seconds--;
        }, 1000);
      }

      // Слушатель события для инпутов
      numCodeInputs.forEach((input, index) => {
        input.addEventListener('input', (event) => {
          handleInput(event, index);
        });
      });

      // Слушатель события для кнопки "Получить новый код"
      messageElement.addEventListener('click', (event) => {
        if (event.target.tagName.toLowerCase() === 'button') {
          clearInterval(timerInterval);
          clearInputs();
          messageElement.textContent = 'Новый код был отправлен на ваш телефон';
          event.target.remove();
          resetTimer();
        }
      });

      // Функция сброса таймера
      function resetTimer() {
        setTimeout(() => {
          startTimer();
        }, 5000);
      }

      // Запуск таймера при загрузке страницы
      window.addEventListener('load', () => {
        startTimer();
      });
    }
  }
}

initSignIn();
