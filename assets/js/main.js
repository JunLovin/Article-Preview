const shareBtn = document.getElementById('share')
const shareOptions = document.getElementById('share-options')

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('hidden')
})