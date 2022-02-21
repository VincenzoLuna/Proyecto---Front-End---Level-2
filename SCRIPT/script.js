
let track_list = [
  {
    name : "Heat Waves",
    artist : "Glass Animals",
    path : "music/Heat-waves.mp3",
    image: "images/Heat-waves.jfif",


  },
  {
    name : "STAY(with Justin Bieber)",
    artist:"The Kid LAROI,Justin Bieber",
    path : "music/Stay.mp3",
    image :"images/Stay.jpg",
  },
  {
    name : "abcdefu",
    artist : "GAYLE",
    path : "music/abcdefu.mp3",
    image: "images/abcdefu.png",
  },
  {
    name : "Enemy (with JID) - from the series...",
    artist : "Imagine Dragons, JID, Arcane, League...",
    path : "music/Enemy.mp3",
    image : "images/enemy.jfif",
  },
  {
    name : "MAMIII",
    artist : "Becky G, KAROL G",
    path : "music/Mamiii.mp3",
    image : "images/mamiii.png",
  },
  {
    name : "Cold Heart - PNAU Remix",
    artist :"Elton John, Dua Lipa, PNAU",
    path : "music/Cold-heart.mp3",
    image: "images/cold-heart.jpg",
  },
  {
    name : "INDUSTRY BABY",
    artist : "Lil Nas X, Jack Harlow",
    path : "music/Industry.mp3",
    image : "images/industry-baby.jpg",
  },
  {
    name : "Desesperados",
    artist : "Rauw Alejandro, Chencho Corleone",
    path : "music/Desesperados.mp3",
    image : "images/desesperados.jpeg",
  },
  {
    name : "We Don't Talk About Bruno",
    artist : "Carolina Gaitán - La Gaita, Mauro...",
    path : "music/Wedonttalkaboutbruno.mp3",
    image : "images/We-dont-talk-about-bruno.jfif",
  },
  {
    name : "Shivers",
    artist : "Ed Sheeran",
    path : "music/Shivers.mp3",
    image: "images/Shivers.jpg",
  },
  {
    name : "Pepas",
    artist:"Farruko",
    path : "music/Pepas.mp3",
    image :"images/Pepas.jfif",
  },
  {
    name : "Infinity",
    artist : "Jaymes Young",
    path : "music/Infinity.mp3",
    image: "images/Infinity.jfif",
  },
  {
    name : "THATS WHAT I WANT",
    artist : "Lil Nas X",
    path : "music/Thatswhatiwant.mp3",
    image : "images/thats-what-i-want.jpg",
  },
  {
    name : "Ghost",
    artist :"Justin Bieber",
    path : "music/Ghost.mp3",
    image: "images/Ghost.jfif",
  },
  {
    name : "Woman",
    artist : "Doja Cat",
    path : "music/Woman.mp3",
    image : "images/Woman.jfif",
  },
  {
    name : "Boyfriend",
    artist : "Dove Cameron",
    path : "music/Boyfriend.mp3",
    image : "images/Boyfriend.jfif",
  },
  {
    name : "Bad Habits",
    artist : "Ed Sheeran",
    path : "music/BadHabits.mp3",
    image : "images/Bad-Habits.jpg",
  },
  {
    name : "Do It To It",
    artist : "Rauw Alejandro, Chencho Corleone",
    path : "music/DoitToit.mp3",
    image : "images/Do-it-to-it.jfif",
  },
  {
    name : "Where Are You Now",
    artist : "Lost Frequencies, Calum Scott",
    path : "music/Whereareyounow.mp3",
    image : "images/Where-are-you-now.jfif",
  },
  {
    name : "My Universe",
    artist : "Coldplay, BTS",
    path : "music/Myuniverse.mp3",
    image : "images/My-universe.jfif",
  },
  {
    name : "Lo Siento BB:/ (with Bad Bunny & Julieta...",
    artist : "Tainy, Bad Bunny, Julieta Venegas",
    path : "music/Losientobb.mp3",
    image : "images/Lo-siento-BB.jfif",
  },
  {
    name : "Still D.R.E.",
    artist : "Dr.Dre, Snoop Dogg",
    path : "music/Stilldre.mp3",
    image : "images/Still-DRE.jfif",
  },
];

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let back_btn = document.querySelector(".back-track");
let playpause_btn_2 = document.querySelector("#cont-play");

let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let track_index = -1;
let isPlaying = false;

let curr_track = document.createElement("audio");

function loadTrack(track_index) {
  curr_track.src = track_list[track_index].path;
  curr_track.load(); 

  track_art.style.backgroundImage = "url("+track_list[track_index].image+")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
}


function playpauseTrack(){
  if(!isPlaying){
    playTrack();
  }
  else {
    pauseTrack();
  }
}


function playTrack(){
  curr_track.play();
  isPlaying=true;
  playpause_btn.innerHTML = '<i  id = "play" style = "color:white" class="fa-solid fa-circle-pause"></i>';
  playpause_btn_2.innerHTML = '<i  id = "play-green"  class="fa-solid fa-circle-pause"></i>';
}
function pauseTrack(){
  curr_track.pause();
  isPlaying=false;
  playpause_btn.innerHTML = '<i  id = "play" style = "color:white" class="fa-solid fa-circle-play"></i>';
  playpause_btn_2.innerHTML = '<i  id = "play-green" class="fa-solid fa-circle-play"></i>';
}
function nextTrack(){
  if (track_index < track_list.length-1){
  track_index+=1;
  }
  else{
    track_index = 0;
  } 
  loadTrack(track_index);
  playTrack();
}
function prevTrack(){
  if (track_index>0){
  track_index-=1;
  }
  else{
    track_index = track_list.length-1;
  } 
  loadTrack(track_index);
  playTrack();
}


