const audio = new Audio('./medias/song.mp3')
const frierenClip = document.getElementById('frieren-clip')
const mainContainer = document.getElementById('main-container')
const loadingContainer = document.getElementById('loading-container')
const errorContainer = document.getElementById('error-container')
const playButton = document.getElementById('play-button')

let audioReady = false
let clipReady = false

playButton.onclick = () => {
    play()
    playButton.style.display = 'none'
}

function checkCanPlay() {
    if (audioReady && clipReady) {
        mainContainer.style.display = 'flex'
        loadingContainer.style.display = 'none'
    }
}

function play() {
    frierenClip.play()
    audio.play()
    audio.loop = true
}

frierenClip.addEventListener('canplaythrough', () => {
    clipReady = true
    checkCanPlay()
})

audio.addEventListener('canplaythrough', () => {
    audioReady = true
    checkCanPlay()
})

frierenClip.addEventListener('error', () => {
    errorContainer.style.display = 'flex'
    loadingContainer.style.display = 'none'
})