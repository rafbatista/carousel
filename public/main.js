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
  .then(() => drawSlide())
  .then(() => updateProgress())

const drawSlide = () => {
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
  drawSlide()
  updateProgress()
}, 3000)

const $prevButton = document.querySelector('.fa-arrow-left')
$prevButton.addEventListener('click', () => {
  if (carousel.current === 0) return
  carousel.current--
  drawSlide()
  updateProgress()
})

const $nextButton = document.querySelector('.fa-arrow-right')
$nextButton.addEventListener('click', () => {
  if (carousel.current === carousel.slides.length - 1) return
  carousel.current++
  drawSlide()
  updateProgress()
})

const progress = () => {
  const $steps = carousel.slides.map((slide, index) => {
    const $step = document.createElement('li')

    if (index === carousel.current) {
      $step.className = 'fa fa-circle'
    }
    else {
      $step.className = 'fa fa-circle-o'
    }
    return $step
  })

  return $steps.reduce((parent, child) => {
    parent.appendChild(child)
    return parent
  }, document.createElement('ul'))
}

const updateProgress = () => {
  const $progress = document.querySelector('.progress')
  $progress.innerHTML = ''
  $progress.appendChild(progress())
}
