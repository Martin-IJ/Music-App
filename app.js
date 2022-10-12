const musicImg = document.querySelector(".music-img")
const musicTitle = document.querySelector(".music-title")
const musician = document.querySelector(".musician")
const prev = document.querySelector(".prev")
const play = document.querySelector(".play")
const playCont = document.querySelector(".player")
const next = document.querySelector(".next")
const pause = document.getElementById("pause");
const audioTag = document.createElement('audio')

let currentPosition = 0;

let isPlaying = false;

function loadPlaylist(p) {
   musicImg.src = musicList[p].image;
   musicTitle.innerHTML = musicList[p].title;
   musician.innerHTML = musicList[p].name
    audioTag.src = musicList[p].audio;
    audioTag.load();
    audioTag.addEventListener("ended", nextBtn)
    
}

loadPlaylist(currentPosition)
playCont.addEventListener('click',()=>{
    isPlaying ? noPlay(): showPlay();
    
})
function  showPlay() {
    isPlaying = true
   playCont.innerHTML = `  
   <i class="fa-solid fa-pause play"></i>`;
   audioTag.play()
}
function  noPlay() {
    isPlaying = false
   playCont.innerHTML = `  
   <i class="fa-solid fa-play play"></i>`;
   audioTag.pause()
}
function nextBtn() {
    if (currentPosition < musicList.length - 1) {
        currentPosition += 1;   
    } else{
        currentPosition = 0
    }
    loadPlaylist(currentPosition)
    showPlay() 
}
function prevBtn() {
    currentPosition > 0 ? currentPosition -= 1: currentPosition = musicList.length -1;      
    loadPlaylist(currentPosition)
    showPlay() 
}
next.addEventListener('click', nextBtn)
prev.addEventListener('click', prevBtn)