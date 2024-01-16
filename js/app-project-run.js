function initCover() {
  const element = document.querySelector('.cover');
  if (element) {
    let typeSplit = new SplitType('[animate]', {
      types: 'lines, words, chars',
      tagName: 'span'
    })

    gsap.from('[animate] .line', {
      y: '100%',
      opacity: 0,
      duration: 0.4,
      ease: 'power1.out',
      stagger: 0.1,
    });

    let cover = document.querySelector('.cover__btn');

    cover.classList.add('cover__btn--active');
  }
}

initCover();

// Вызываем функцию setScrollableUnitHeightMobile при изменении размера области просмотра браузера
window.addEventListener('resize', initCover);
window.addEventListener('orientationchange', initCover);

function initCareers() {
  const element = document.querySelector('.careers');
  if (element) {
    // Табы
    const controlElements = document.querySelectorAll('[data-control]');

    for (const controlElement of controlElements) {
      controlElement.addEventListener('click', function() {
        const tabsValue = this.getAttribute('data-tabs');

        const controlItems = document.querySelectorAll('.careers__tabs-controls-item');
        for (const controlItem of controlItems) {
          controlItem.classList.remove('careers__tabs-controls-item--active');
        }

        const matchingControlItem = document.querySelector(`.careers__tabs-controls-item[data-tabs="${tabsValue}"]`);
        if (matchingControlItem) {
          matchingControlItem.classList.add('careers__tabs-controls-item--active');
        }

        const contentItems = document.querySelectorAll('.careers__tabs-content-item');
        for (const contentItem of contentItems) {
          contentItem.classList.remove('careers__tabs-content-item--active');
        }

        const matchingContentItem = document.querySelector(`.careers__tabs-content-item[data-tabs="${tabsValue}"]`);
        if (matchingContentItem) {
          matchingContentItem.classList.add('careers__tabs-content-item--active');
        }

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Селект
    $('.careers__select').select2({
      minimumResultsForSearch: -1,
      allowClear: true
    });

    const selectedText = $('.careers__select').find(':selected').text();
    $('.careers__input-text--vacancy').val(selectedText);

    $('.careers__select').on('change', function() {
      const selectedValue = $(this).val();
      const selectedText = $(this).find(':selected').text();
      const vacancyItems = document.querySelectorAll('.careers__vacancies-item');

      vacancyItems.forEach(item => {
        item.classList.remove('careers__vacancies-item--active');
      });

      $('[data-vacancy="' + selectedValue + '"]').addClass('careers__vacancies-item--active');

      $('.careers__input-text--vacancy').val(selectedText);
    });

    // Сообщение (увеличение высоты элемента при заполнении поля)
    const textarea = document.querySelector('.careers__textarea');

    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto';
      textarea.style.height = (textarea.scrollHeight + 2) + "px";
    });

    // Маска для года рождения
    const yearInput = document.querySelector('.careers__input-text--year');

    const yearMaskOptions = {
      mask: Number,
      scale: 0,
      signed: false,
      thousandsSeparator: '',
      padFractionalZeros: false,
      normalizeZeros: true
    };

    const yearMask = IMask(yearInput, yearMaskOptions);

    // Обработка файлового инпута
    const inputFile = document.getElementById('fileFF');
    const formLabelText = document.querySelector('.careers__form-label-text');

    inputFile.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const fileName = file ? file.name : 'Файл не выбран';
      formLabelText.textContent = fileName;
    });

    // Проверка формы
    const inputs = document.querySelectorAll('.careers__input-text, .careers__input-file, .careers__textarea');

    inputs.forEach((input) => {
      const warning = input.nextElementSibling;
      input.addEventListener('focus', () => {
        if (input.value === '') {
          warning.classList.add('careers__warning--active');
        }
      });
      input.addEventListener('blur', () => {
        if (input.value === '') {
          warning.classList.add('careers__warning--active');
        } else {
          warning.classList.remove('careers__warning--active');
        }
      });
      input.addEventListener('input', () => {
        const button = document.querySelector('.careers__btn--send');
        const isAllFilled = Array.from(inputs).every((input) => input.value !== '');
        if (isAllFilled) {
          button.removeAttribute('disabled');
        } else {
          button.setAttribute('disabled', 'disabled');
        }
      });
    });

    document.getElementById('feedback-form').addEventListener('submit', function(evt){
      let http = new XMLHttpRequest(), f = this;
      evt.preventDefault();
      http.open("POST", "careers.php", true);
      http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
          console.log('success');
          $('.careers__btn--success').removeClass('careers__btn--hidden');
          $('.careers__btn--send').addClass('careers__btn--hidden');
          const form = document.querySelector('#feedback-form');
          const fields = form.querySelectorAll('input, textarea');
          fields.forEach(field => {
            field.value = "";
          });
        }
      }
      http.onerror = function() {
        $('.careers__response').text('Извините, данные не были переданы. Перезагрузите страницу и попробуйте еще раз.')
      }
      http.send(new FormData(f));
    }, false);
  }
}

initCareers();

function initHeader() {
  const element = document.querySelector('.header');
  if (element) {
    // Показать/скрыть меню
    const headerBtn = document.querySelector('.header__btn');
    const nav = document.querySelector('.nav');
    const navItems = document.querySelectorAll('.nav__item');

    headerBtn.addEventListener('click', function() {
      headerBtn.classList.toggle('header__btn--active');
      nav.classList.toggle('nav--active');
      navItems.forEach(item => {
        item.classList.toggle('nav__item--animate');
      });
      document.body.classList.toggle('scroll-disable');
    });
  }
}

initHeader();

function initLogo() {
  const element = document.querySelector('.logo');
  if (element) {
    element.classList.add('logo--active');
  }
}

initLogo();

function initAdvantages() {
  const element = document.querySelector('.advantages');
  if (element) {
  }
}

initAdvantages();

function initDownloadApp() {
  const element = document.querySelector('.download-app__bg-item--first');
  if (element) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.download-app__bg-item--first', {
      scrollTrigger: {
        trigger: '.download-app__bg',
        start: 'top 0%',
        end: 'bottom 0%',
        scrub: 1
      },
      y: 320,
    });

    gsap.to('.download-app__bg-item--second', {
      scrollTrigger: {
        trigger: '.download-app__bg',
        start: 'top 0%',
        end: 'bottom 0%',
        scrub: 2
      },
      y: 11,
    });

    gsap.to('.download-app__bg-item--third', {
      scrollTrigger: {
        trigger: '.download-app__bg',
        start: 'top 0%',
        end: 'bottom 0%',
        scrub: 1.1
      },
      y: 50,
    });

    gsap.to('.download-app__bg-item--fourth', {
      scrollTrigger: {
        trigger: '.download-app__bg',
        start: 'top 0%',
        end: 'bottom 0%',
        scrub: 2
      },
      y: 30,
    });

    gsap.to('.download-app__bg-item--fifth', {
      scrollTrigger: {
        trigger: '.download-app__bg',
        start: 'top 0%',
        end: 'bottom 0%',
        scrub: 1
      },
      y: 51,
    });

    gsap.to('.download-app__bg-item--sixth', {
      scrollTrigger: {
        trigger: '.download-app__bg',
        start: 'top 0%',
        end: 'bottom 0%',
        scrub: 1.1
      },
      y: -100,
    });

    gsap.to('.download-app__bg-item--seventh', {
      scrollTrigger: {
        trigger: '.download-app__bg',
        start: 'top 0%',
        end: 'bottom 0%',
        scrub: 2
      },
      y: 200,
    });

    gsap.to('.download-app__bg-item--eighth', {
      scrollTrigger: {
        trigger: '.download-app__bg',
        start: 'top 0%',
        end: 'bottom 0%',
        scrub: 1
      },
      y: 89,
    });
  }
}

initDownloadApp();

function initGeneralInfo() {
  const element = document.querySelector('.general-info');
  if (element) {
    // Маска для номера телефона
    const elementPhone = document.querySelector('.general-info__input-text--phone');
    const maskOptionsPhone = {
      mask: '+{7} (000) 000-00-00'
    };
    const maskPhone = IMask(elementPhone, maskOptionsPhone);

    // Маска для email
    const emailInput = document.querySelector('.general-info__input-text--email');

    const emailMaskOptions = {
      mask: /^[^\u0400-\u04FF]+$/,
      lazy: false
    };

    // const emailMask = IMask(emailInput, emailMaskOptions);

    // Сообщение (увеличение высоты элемента при заполнении поля)
    const textarea = document.querySelector('.general-info__textarea');

    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto';
      textarea.style.height = (textarea.scrollHeight + 2) + "px";
    });

    // Обработка файлового инпута
    const inputFile = document.getElementById('fileFF');
    const formLabelText = document.querySelector('.general-info__form-label-text');

    inputFile.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const fileName = file ? file.name : 'Файл не выбран';
      formLabelText.textContent = fileName;
    });

    // Проверка формы
    const inputs = document.querySelectorAll('.general-info__input-text, .general-info__input-file, .general-info__textarea');

    inputs.forEach((input) => {
      const warning = input.nextElementSibling;
      input.addEventListener('focus', () => {
        if (input.value === '') {
          warning.classList.add('general-info__warning--active');
        }
      });
      input.addEventListener('blur', () => {
        if (input.value === '') {
          warning.classList.add('general-info__warning--active');
        } else {
          warning.classList.remove('general-info__warning--active');
        }
      });
      input.addEventListener('input', () => {
        const button = document.querySelector('.general-info__btn--send');
        const isAllFilled = Array.from(inputs).every((input) => input.value !== '');
        if (isAllFilled) {
          button.removeAttribute('disabled');
        } else {
          button.setAttribute('disabled', 'disabled');
        }
      });
    });

    document.getElementById('feedback-form').addEventListener('submit', function(evt){
      let http = new XMLHttpRequest(), f = this;
      evt.preventDefault();
      http.open("POST", "general-info.php", true);
      http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
          console.log('success');
          $('.general-info__btn--success').removeClass('general-info__btn--hidden');
          $('.general-info__btn--send').addClass('general-info__btn--hidden');
          $('.general-info__response').text('');
          const form = document.querySelector('#feedback-form');
          const fields = form.querySelectorAll('input, textarea');
          fields.forEach(field => {
            field.value = "";
          });
        }
      }
      http.onerror = function() {
        $('.general-info__response').text('Извините, данные не были переданы. Перезагрузите страницу и попробуйте еще раз.')
      }
      http.send(new FormData(f));
    }, false);
  }
}

initGeneralInfo();

function initNav() {
  const element = document.querySelector('.nav');
  if (element) {
    // Анимация появления элементов навигации после загрузки (десктоп)
    element.classList.add('nav--animate');

    const navItems = document.querySelectorAll('[data-nav]');
    const sectionItems = document.querySelectorAll('[data-section]');
    const headerBtn = document.querySelector('.header__btn');
    const nav = document.querySelector('.nav');
    const navItemAll = document.querySelectorAll('.nav__item');

    // Переход к главной и скролл до указанного блока
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        const selectedValue = this.getAttribute('data-nav');
        sectionItems.forEach(item => {
          if (item.getAttribute('data-section') === selectedValue) {
            item.scrollIntoView({ behavior: 'smooth' });
            headerBtn.classList.remove('header__btn--active');
            nav.classList.remove('nav--active');
            document.body.classList.remove('scroll-disable');
          }
        });
      });
    });
  }
}

initNav();
