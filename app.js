let currentMusic = 0;

const music = document.querySelector('#audio');
const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const disk = document.querySelector('.disk')
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-button');
const backwardBtn = document.querySelector('.backward-button');

console.log("Hello and yeah, I'm working, don't worry");

playBtn.addEventListener('click', ()=> {
    if(playBtn.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})

const setMusic = (i) => {
    seekBar.valuec=0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;

    currentTime.innerHTML = '00:00';

    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
}

setMusic(0);


const formatTime= (time) => {
    let min = Math.floor(time/60);
    if(min<10){
        min =`0${min}`;
    }
    let sec = Math.floor(time%60);
    if(sec<10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

console.log("everything is still working");

//to make the seekbar moving, do this my man
//seek bar

setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
    if(Math.floor(music.currentTime)==Math.floor(seekBar.max)){
        forwardBtn.click();
    }
},500);

//change  seekbar so that it can jump in song

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

//function to always play the song after the transition

const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play');
}

//forward button and backward button working with this way

forwardBtn.addEventListener('click', ()=>{
    if(currentMusic >= songs.length -1){
        currentMusic = 0;
    }else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
})

backwardBtn.addEventListener('click', () => {
    if(currentMusic <= 0){
        currentMusic = songs.length -1;
    }else{
        currentMusic --;
    }
    setMusic(currentMusic);
    playMusic();
})

console.log("I know you don't give 2 fucks but ok");