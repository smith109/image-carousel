const imageCarousel = document.querySelector('.carousel');
const navCircles = document.querySelector('.navigation-circles');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');

const createSlideShow = (carousel) => {
  const navCircles = carousel.querySelectorAll('.navigation-circles > span');
  const slidesContainer = carousel.querySelector('.slides-container');
  const slidesNodeList = carousel.querySelectorAll('.slide');
  const totalSlides = slidesNodeList.length;
  let autoSlideInterval;
  let currentIndex = 0;

  const setActiveNavCircle = (index) => {
    carousel.querySelector('.active').classList.remove('active');
    navCircles[index].classList.add('active');
  };

  const changeSlide = (index) => {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  };

  const updateCarousel = (index) => {
    setActiveNavCircle(index);
    changeSlide(index);
    currentIndex = index;
  };

  const getNextSlide = () => {
    let nextIndex = currentIndex + 1 >= totalSlides ? 0 : currentIndex + 1;
    updateCarousel(nextIndex);
  };

  const getPreviousSlide = () => {
    const endSlideIndex = totalSlides - 1;
    let previousIndex = currentIndex - 1 < 0 ? endSlideIndex : currentIndex - 1;
    updateCarousel(previousIndex);
  };

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(getNextSlide, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  };

  return {
    updateCarousel,
    getNextSlide,
    getPreviousSlide,
    startAutoSlide,
    resetAutoSlide,
  };
};

const slideShow = createSlideShow(imageCarousel);

navCircles.addEventListener('click', (e) => {
  slide = Number(e.target.dataset.slide);
  slideShow.updateCarousel(slide);
  slideShow.resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  slideShow.getNextSlide();
  slideShow.resetAutoSlide();
});

previousBtn.addEventListener('click', () => {
  slideShow.getPreviousSlide();
  slideShow.resetAutoSlide();
});

slideShow.startAutoSlide();
