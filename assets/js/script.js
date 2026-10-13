document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let activeIndex = 0;
  // Динамически берем реальное количество слайдов из HTML, чтобы избежать undefined
  const totalSlides = slides.length; 
  let autoPlayTimer;

  // Функция переключения слайдов
  function changeSlide(targetIndex) {
    // Безопасная проверка: если слайдов вообще нет на странице, выходим
    if (totalSlides === 0) return;

    // Скрываем текущий слайд и точку, ТОЛЬКО если они существуют
    if (slides[activeIndex] && dots[activeIndex]) {
      slides[activeIndex].classList.remove('active');
      dots[activeIndex].classList.remove('active');
    }

    // Правильная и гибкая проверка границ
    if (targetIndex >= totalSlides) {
      activeIndex = 0; // После последнего возвращаемся на 1-й
    } else if (targetIndex < 0) {
      activeIndex = totalSlides - 1; // Если идем назад с 1-го — прыгаем на самый последний
    } else {
      activeIndex = targetIndex;
    }

    // Показываем новый слайд и точку
    if (slides[activeIndex] && dots[activeIndex]) {
      slides[activeIndex].classList.add('active');
      dots[activeIndex].classList.add('active');
    }
  }

  // Запуск автопрокрутки (5000 мс = 5 секунд)
  function startAutoPlay() {
    autoPlayTimer = setInterval(() => {
      changeSlide(activeIndex + 1);
    }, 5000);
  }

  // Сброс таймера при ручном нажатии
  function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    startAutoPlay();
  }

  // Клики по кнопкам управления
  nextBtn.addEventListener('click', () => {
    changeSlide(activeIndex + 1);
    resetAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    changeSlide(activeIndex - 1);
    resetAutoPlay();
  });

  // Клики по точкам-индикаторам
  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const clickedIndex = parseInt(e.target.getAttribute('data-index'));
      // Проверка на NaN, если вдруг data-index забыли указать в HTML
      if (!isNaN(clickedIndex)) {
        changeSlide(clickedIndex);
        resetAutoPlay();
      }
    });
  });

  // ХИТРОСТЬ: Принудительно включаем самый первый слайд (индекс 0) при старте,
  // чтобы он точно отобразился и у него добавился класс active
  changeSlide(0);

  // И только потом запускаем автоматику
  startAutoPlay();
});









