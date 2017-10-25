const slides = () => {
  return fetch('/slides')
    .then(res => res.json())
}

const carousel = {
  slides: null,
  current: 0
}

slides()
  .then((images) => {
    carousel.slides = images
  })
  .then(() => changeSlide())

const changeSlide = () => {
  document
    .querySelector('.slide')
    .setAttribute('src', `${carousel.slides[carousel.current].imgSrc}`)
}

setInterval(() => {
  if (carousel.current < carousel.slides.length - 1) {
    carousel.current++
  }
  else {
    carousel.current = 0
  }
  changeSlide()
}, 3000)

const $prevButton = document.querySelector('.fa-arrow-left')

$prevButton.addEventListener('click', () => {
  if (carousel.current === 0) return
  carousel.current--
  changeSlide()
})

const $nextButton = document.querySelector('.fa-arrow-right')
$nextButton.addEventListener('click', () => {
  if (carousel.current === 2) return
  carousel.current++
  changeSlide()
})
