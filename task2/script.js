class Slider {
    constructor(container, isHorizontal = true) {
        this.container = container;
        this.slides = [];
        this.currentIndex = 0;
        this.isHorizontal = isHorizontal;

        this.initSlider();
    }

    initSlider() {
        this.container.style.overflow = 'hidden';
        this.container.style.position = 'relative';
    }

    addSlide(slideContent) {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.width = this.isHorizontal ? '100%' : 'auto';
        slide.style.height = this.isHorizontal ? 'auto' : '100%';
        slide.style.position = 'absolute';
        slide.innerHTML = slideContent;

        this.slides.push(slide);
        this.container.appendChild(slide);

        this.arrangeSlides();
    }

    moveToSlide(index) {
        if (index < 0 || index >= this.slides.length || index === this.currentIndex) {
            return;
        }

        const distance = -100 * index;
        if (this.isHorizontal) {
            this.container.style.transform = `translateX(${distance}%)`;
        } else {
            this.container.style.transform = `translateY(${distance}%)`;
        }

        this.currentIndex = index;
    }

    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.slides.length;
        this.moveToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.moveToSlide(prevIndex);
    }

    arrangeSlides() {
        this.slides.forEach((slide, index) => {
            if (this.isHorizontal) {
                slide.style.left = `${index * 100}%`;
            } else {
                slide.style.top = `${index * 100}%`;
            }
        });
    }
}

// Приклад використання:
const sliderContainer = document.getElementById('slider-container'); // Ваш контейнер для слайдера
const mySlider = new Slider(sliderContainer, true); // Ініціалізація слайдера

// Додавання слайдів
mySlider.addSlide('<img src="slide1.jpg" alt="Slide 1">');
mySlider.addSlide('<img src="slide2.jpg" alt="Slide 2">');
mySlider.addSlide('<img src="slide3.jpg" alt="Slide 3">');

// Переміщення наступного слайда
mySlider.nextSlide();

// Переміщення попереднього слайда
mySlider.prevSlide();

// Переміщення до конкретного слайда
mySlider.moveToSlide(2);
