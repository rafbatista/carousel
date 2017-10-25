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
    console.log(carousel.slides)
  })

setInterval(() => {
  document
    .querySelector('.slide')
    .setAttribute('src', `${carousel.slides[carousel.current].imgSrc}`)

  if (carousel.current < carousel.slides.length - 1) {
    carousel.current++
  }
  else {
    carousel.current = 0
  }
}, 3000)
