const container = document.querySelector('.container')
const previousBtn = document.querySelector('#prev')
const playBtn = document.querySelector('#play')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

const songs = ['Wizkid -- Joro', 'Tems -- Free Mind', 'Youngboy -- Lonely Child']

let songsIndex = 0

loadSong(songs[songsIndex])

function loadSong(songs){
    title.innerText =  songs
    audio.src = `music/${songs}.mp3`
    cover.src = `image/${songs}.png`
}

function playSong(){
container.classList.add('play')
playBtn.querySelector('#pla').classList.remove('pl-play')
playBtn.querySelector('#pla').classList.add('pl-pause')

audio.play()

}

function pauseSong(){

}
previousBtn.addEventListener('click', previousSong)
nextBtn.addEventListener('click', nextSong)


function previousSong(){
songsIndex --


if (songsIndex < 0){
    songsIndex = songs.length - 1
}

loadSong(songs[songsIndex])
playSong()
}
function nextSong(){
    songsIndex ++


    if (songsIndex > songs.length - 1){
        songsIndex = 0
    }
    
    loadSong(songs[songsIndex])
    playSong()
}
audio.addEventListener('timeUpdate',  updateProgress)

function updateProgress(e){
 const {duration, currentTime} = e.srcElement
 const progressPercent = (currentTime / duration) * 100
 progress.style.width = `${progressPercent}%`
}

playBtn = addEventListener('click', () =>{
    const isPlaying = container.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
} )




