const imgMain = document.querySelector('.img__large img')
const listImg = document.querySelectorAll('.img__item img')
const prev = document.querySelector('.prev i')
const next = document.querySelector('.next i')
const listImgWrap = document.querySelectorAll('.img__item')

let currentIndex = 0

function updateImageByIndex(index) {
  currentIndex = index
  imgMain.src = listImg[index].getAttribute('src')

  listImgWrap.forEach(item => {
    item.classList.remove('active')
  })
  listImgWrap[index].classList.add('active')
}


listImg.forEach((imgElement, index) => {
  imgElement.addEventListener('click', (e) => {
    imgMain.style.opacity = '0'
    setTimeout(() =>{
      updateImageByIndex(index)
      imgMain.style.opacity = '1'
    }, 400)
  })
})

next.addEventListener('click', (e) => {
  if(currentIndex === listImg.length -1 ){
    currentIndex = 0
  }
  else{
    currentIndex++
  }
  
  imgMain.style.animation = ''
  setTimeout(() =>{
    updateImageByIndex(currentIndex)
    imgMain.style.animation = 'slideRight 1s ease-in-out'
  }, 100)
})

prev.addEventListener('click', (e) => {

  if(currentIndex === 0 ){
    currentIndex = listImg.length - 1
  }
  else{
    currentIndex--
  }
  
  imgMain.style.animation = ''
  setTimeout(() =>{
    updateImageByIndex(currentIndex)
    imgMain.style.animation = 'slideLeft 1s ease-in-out'
  }, 100)
})


updateImageByIndex(0)