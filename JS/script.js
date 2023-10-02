let songindex = 0;
let elementsong = new Audio("songs/5.mp3");
let play = document.getElementById("play")
let seek = document.getElementById("seek")
let songitem = Array.from(document.getElementsByClassName("song"))
let songs = [
    { song: "israel-palacio", filepath: "songs/1.mp3", coverpath: "css/img/song-1.jpg" },
    { song: "silivan-munguarakarama", filepath: "songs/2.mp3", coverpath: "css/img/song-2.jpg" },
    { song: "jr-korpa-9XngoIpxcEo", filepath: "songs/3.mp3", coverpath: "css/img/song-3.jpg" },
    { song: "alexander-shatov", filepath: "songs/4.mp3", coverpath: "css/img/song-4.jpg" },
    { song: "jr-korpa", filepath: "songs/5.mp3", coverpath: "css/img/song-5.jpg" },
    { song: "alexander-shatov", filepath: "songs/6.mp3", coverpath: "css/img/song-6.jpg" },
    { song: "aditya-chinchure", filepath: "songs/7.mp3", coverpath: "css/img/song-7.jpg" },
    { song: "aleksandr-popov", filepath: "songs/8.mp3", coverpath: "css/img/song-8.jpg" },
    { song: "john-matychuk", filepath: "songs/9.mp3", coverpath: "css/img/song-9.jpg" },
    { song: "almas-salakhov", filepath: "songs/10.mp3", coverpath: "css/img/song-10.jpg" },
];

songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].song;
})

play.addEventListener("click", () => {
    if (elementsong.paused || elementsong.currentTime <= 0) {
        elementsong.play()
        play.classList.remove("fa-play-circle")
        play.classList.add("fa-pause-circle")
    } else {
        elementsong.pause();
        play.classList.remove("fa-pause-circle")
        play.classList.add("fa-play-circle")
    }
})
elementsong.addEventListener("timeupdate", () => {
    progress = parseInt((elementsong.currentTime / elementsong.duration) * 100)
    seek.value = progress;
})
seek.addEventListener("change", () => {
    elementsong.currentTime = seek.value * elementsong.duration / 100

})
let allplays = () => {
    Array.from(document.getElementsByClassName("playsongs")).forEach((element) => {
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
    })
}
Array.from(document.getElementsByClassName("playsongs")).forEach((element) => {
    element.addEventListener("click", (e) => {
        allplays()
        songindex = parseInt(e.target.id)
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        elementsong.src = `songs/${songindex + 1}.mp3`;
        elementsong.currentTime = 0;
        elementsong.play();
        play.classList.remove("fa-play-circle");
        play.classList.add("fa-pause-circle");
    })

})
document.getElementById("backward").addEventListener("click", () => {
    if (songindex <= 0) {
        songindex = 0
    } else {
        songindex -= 1

    }

    elementsong.src = `songs/${songindex + 1}.mp3`;
    elementsong.currentTime = 0;
    elementsong.play();
    play.classList.remove("fa-play-circle");
    play.classList.add("fa-pause-circle");
})
document.getElementById("forward").addEventListener("click", () => {

    if (songindex >= 9) {
        songindex = 0
    } else {
        songindex += 1;

    }

    elementsong.src = `songs/${songindex + 1}.mp3`;
    elementsong.currentTime = 0;
    elementsong.play();
    play.classList.remove("fa-play-circle");
    play.classList.add("fa-pause-circle");
})

