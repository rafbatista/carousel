const $slideshow = document.querySelector('.slideshow')

const renderImg = (image) => {
  const $slideImg = document.createElement('img')
  $slideImg.setAttribute('class', 'slide-img')
  $slideImg.setAttribute('src', image.imgSrc)
  $slideImg.setAttribute('alt', image.altImgName)

  return $slideImg
}

const fetchImgs = () => {
  fetch('http://localhost:3000/slides')
    .then(res => res.json())
    .then(images => {
      images
        .map(renderImg)
        .forEach($image => $slideshow.appendChild($image))
    })
}

fetchImgs()
