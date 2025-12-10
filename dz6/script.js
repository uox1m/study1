document.addEventListener('DOMContentLoaded', function() {
    // Элементы слайдера
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Функция для показа слайда
    function showSlide(slideIndex) {
        // Скрываем все слайды
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Убираем активный класс со всех точек
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Показываем текущий слайд
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
    }
    
    // Функция для перехода к следующему слайду
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }
    
    // Функция для перехода к предыдущему слайду
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        showSlide(currentSlide);
    }
    
    // Автоматическое перелистывание
    let slideInterval = setInterval(nextSlide, 3000);
    
    // Сброс интервала при взаимодействии
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    }
    
    // Обработчики событий для кнопок
    nextBtn.addEventListener('click', function() {
        nextSlide();
        resetInterval();
    });
    
    prevBtn.addEventListener('click', function() {
        prevSlide();
        resetInterval();
    });
    
    // Обработчики событий для точек
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
            resetInterval();
        });
    });
    
    // Обработчики событий для клавиатуры
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevSlide();
            resetInterval();
        } else if (event.key === 'ArrowRight') {
            nextSlide();
            resetInterval();
        }
    });
    
    // Инициализация слайдера
    showSlide(currentSlide);
});