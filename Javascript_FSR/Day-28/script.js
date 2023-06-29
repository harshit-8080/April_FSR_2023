//! Background Images Array For Each Song
const bgc = [
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://plus.unsplash.com/premium_photo-1681738777245-6fb34243e769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
];

let playlist = document.getElementById("playlist");
let playlistList = document.getElementsByTagName("li");
let audioPlayer = document.getElementById("audioPlayer");
let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");

let currentSong = 0;

for (let i = 0; i < playlistList.length; i++) {
  playlistList[i].addEventListener("click", function () {
    currentSong = Array.prototype.indexOf.call(playlistList, this); //! playlistList.indexOf(this)
    playSong(currentSong);
    document.body.style.backgroundImage = `url(${bgc[currentSong]})`;
  });
}

//! Function to play Song ()
function playSong(currentSong) {
  let songUrl = playlistList[currentSong].getAttribute("data-src");
  audioPlayer.src = songUrl;
  audioPlayer.play();
  setActiveSong(currentSong); //! --->
  playPause();
}

/**
 * function to play next song
 * 1. Increase currentSong by 1
 * 2. Call playSong(currentSong)
 */
nextButton.addEventListener("click", function () {
  currentSong = currentSong + 1;
  playSong(currentSong);
  document.body.style.backgroundImage = `url(${bgc[currentSong]})`;
});

//! Function to play Prev Song
prevButton.addEventListener("click", function () {
  currentSong = currentSong - 1;
  playSong(currentSong);
  document.body.style.backgroundImage = `url(${bgc[currentSong]})`;
});

//! Add a Active Song Black DT
function setActiveSong(currentSong) {
  for (let i = 0; i < playlistList.length; i++) {
    if (i == currentSong) {
      playlistList[i].classList.add("active");
    } else {
      playlistList[i].classList.remove("active");
    }
  }
}

//! Function for handling Play-Pause Feature
let playButton = document.getElementById("playButton");
playButton.addEventListener("click", function () {
  playPause();
});
function playPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.innerText = "Pause";
  } else {
    audioPlayer.pause();
    playButton.innerText = "Play";
  }
}

////! Handling Popup for Fav Songs And Add to LocalStorage
let fav = document.querySelectorAll(".fav");
// console.log("line 71 ==> ", fav);
fav.forEach(function (button) {
  button.addEventListener("click", function () {
    let song = document.getElementById(`s${button.id}`);
    localStorage.setItem(song.id, song.innerText.trim());
  });
});

//! Get Songs From LocalStorage and Add to popup-content div
let popupBtn = document.getElementById("popup-btn");
let popupOverlay = document.getElementById("popup-overlay");
let popupContent = document.getElementById("popup-content");

popupBtn.addEventListener("click", function () {
  popupOverlay.style.display = "flex";
  let keys = Object.keys(localStorage);
  // console.log(keys);

  keys.forEach((key) => {
    let songName = localStorage.getItem(key);
    console.log(songName);

    let p = document.createElement("p");
    p.innerText = songName;
    popupContent.appendChild(p); //TODO: Students WIll FIX IT......
  });
});

let popupClose = document.getElementById("popup-close");
popupClose.addEventListener("click", function () {
  popupOverlay.style.display = "none";
});

// Download Song ---> https://samplelib.com/sample-mp3.html
