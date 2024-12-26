const shareBtn = document.getElementById('share')
const shareOptions = document.getElementById('share-options')
const shareContainer = document.getElementById('share-container')
const paragraph = document.getElementById('paragraph')
const authorContainer = document.getElementById('author')

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('hidden')
    shareBtn.classList.toggle('active')
    paragraph.classList.toggle('absolute')
    authorContainer.classList.toggle('margin')
    shareContainer.classList.toggle('fullwidth')
})