"use strict";


window.addEventListener('DOMContentLoaded', () => {
    //Табы
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent(i = 0) { // по стандарту ES6 выставляется значение по умолчанию
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    //Timer
    const deadline = '2022-05-20';
    function getTimeRemaining(endtime) {
        let days = 0, hours = 0, minutes = 0, seconds = 0;
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t > 0) {
            days = Math.floor(t / (1000 * 60 * 60 * 24)), //округление до ближайшего целого
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                minutes = Math.floor((t / (1000 * 60)) % 60),
                seconds = Math.floor((t / 1000) % 60);
        }else{
            days = 'TH', hours = 'AT', minutes = 'IS', seconds = 'ALL';
        }

        return {
            t, days, hours, minutes, seconds
            //или
            // 'total': t,
            // 'days': days,
            // 'hours': hours,
            // 'minutes': minutes,
            // 'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else { return num; }
    }
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.t <= 0) {
                clearInterval(timeInterval);
            }

        }
    }
    setClock('.timer', deadline);


    //Modal-window

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    //  modalTrigger.addEventListener('click', () => {
    //      modal.classList.add('show');
    //      modal.classList.remove('hide');
    //      document.body.style.overflow = 'hidden'; //не позволяет прокручивать страницу
    //  });

    //  modalCloseBtn.addEventListener('click', () => {
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     document.body.style.overflow = ''; //разрешаем прокрутку
    // });
    //или

    function closeModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }
    function openModal() {
        // modal.classList.toggle('show');
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; //не позволяет прокручивать страницу
        clearInterval(modalTimerId);
    }
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    modalCloseBtn.addEventListener('click', () => {
        closeModal();//разрешаем прокрутку
    });

    //закрытие по нажатию вне модалки
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    //нажатие Esc для выхода
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 15000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight
            >= document.documentElement.scrollHeight) { //если не работает то document.documentElement.scrollHeight - 1 напиши
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll); //{once:true} не поможет



    //Классы для карточек
    class MenuCard {
        constructor(src, alt, title, description, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.trasfer = 27;//примитивный  курс валют
            this.changeToUAH();//можно так сразу вызвать метод и сразу изменить курс
        }
        changeToUAH() {
            this.price = this.price * this.trasfer;
        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';//через свойства
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
          `;
            this.parent.append(element);
            //or
            //         const element = document.createElement('div');
            //         this.classes.forEach(className => element.classList.add(className));
            //         element.innerHTML = `
            //       <div class="menu__item">
            //         <img src=${this.src} alt=${this.alt}>
            //         <h3 class="menu__item-subtitle">${this.title}</h3>
            //         <div class="menu__item-descr">${this.description}</div>
            //         <div class="menu__item-divider"></div>
            //         <div class="menu__item-price">
            //           <div class="menu__item-cost">Цена:</div>
            //           <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            //         </div>
            //   </div>
            //       `;
            //         this.parent.append(element);
        }
    }
    //это похоже
    // const div = new MenuCard();
    // div.render();
    //но

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item',
        'big'
    ).render(); //когда нужно только 1 раз использовать
    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        24,
        '.menu .container',
        'menu__item'
    ).render(); //когда нужно только 1 раз использовать
    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        13,
        '.menu .container',
        'menu__item'
    ).render(); //когда нужно только 1 раз использовать

});



