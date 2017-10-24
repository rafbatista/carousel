const $slideshow = document.querySelector('.slideshow')

const renderImg = (image) => {
  const $slideImg = document.createElement('img')
  $slideImg.setAttribute('src', image.imgSrc)
  $slideImg.setAttribute('alt', image.altImgName)

  $slideshow.appendChild($slideImg)
  return $slideshow
}
