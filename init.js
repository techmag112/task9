
//window.onload = function()
// Меняю т.к. не вижу смысла ждать загрузки внешних ресурсов (картинок и стилей, нет у меня их)
// Жду только пока построится ДОМ
'use strict';
window.addEventListener('DOMContentLoaded', function() {

    // Запоминаем селектор оболочки-слоя кнопок
    const btn = document.querySelector('.card-counter');

    updateCard();

    // Добавляем на него общий обработчик по клику
    btn.addEventListener('click', (event) => {
      if (event.target.classList.contains('btn_next')) { 
        updateCard();
      } 
      if (event.target.classList.contains('btn_reset')) { 
        clearCard();
      } 
    }); 
   
  function updateCard() {
      const initPerson = personGenerator.getPerson(),
          month = {
            1: 'января',
            2: 'февраля',
            3: 'марта',
            4: 'апреля',
            5: 'мая',
            6: 'июня',
            7: 'июля',
            8: 'августа',
            9: 'сентября',
            10: 'октября',
            11: 'ноября',
            12: 'декабря'
        };
        document.getElementById('firstNameOutput').innerText = initPerson.firstName;
        document.getElementById('surnameOutput').innerText = initPerson.surname;
        document.getElementById('midnameOutput').innerText = initPerson.midname;
        document.getElementById('genderOutput').innerText = `Пол: ${initPerson.gender}`;
        document.getElementById('birthYearOutput').innerText = `Дата рождения: ${initPerson.day} ${month[initPerson.month]} ${initPerson.year} года`;
        document.getElementById('professionOutput').innerText = `Профессия: ${initPerson.profession}`;
    }

  function clearCard() {
    document.getElementById('firstNameOutput').innerText = 'Генерация фамилии';
    document.getElementById('surnameOutput').innerText = 'Генерация имени';
    document.getElementById('midnameOutput').innerText = 'Генерация отчества';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('birthYearOutput').innerText = 'Генерация даты рождения';
    document.getElementById('professionOutput').innerText = 'Генерация профессии';
  }  

});

