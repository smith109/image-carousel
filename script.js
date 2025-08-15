const createSlideShow = (carousel) => {
  const navCircles = carousel.querySelectorAll('.navigation-circles > span');
  const slidesContainer = carousel.querySelector('.slides-container');
  const slidesNodeList = carousel.querySelectorAll('.slide');
  const totalSlides = slidesNodeList.length;
  let currentIndex = 0;

  const setActiveNavCircle = (index) => {
    const activeNavCircle = carousel.querySelector('.active');
    activeNavCircle.classList.remove('active');
    navCircles[index].classList.add('active');
  };

  const goToSlide = (index) => {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  };

  const updateCarousel = (index) => {
    setActiveNavCircle(index);
    goToSlide(index);
    currentIndex = index;
  };

  const getNextSlide = () => {
    let nextIndex = currentIndex + 1 >= totalSlides ? 0 : currentIndex + 1;
    updateCarousel(nextIndex);
  };

  return { updateCarousel, getNextSlide };
};
