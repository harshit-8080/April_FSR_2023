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

function playSong(currentSong) {
  let songUrl = playlistList[currentSong].getAttribute("data-src");
  audioPlayer.src = songUrl;
  audioPlayer.play();
  setActiveSong(currentSong); //! --->
}

nextButton.addEventListener("click", function () {
  currentSong = currentSong + 1;
  playSong(currentSong);
  document.body.style.backgroundImage = `url(${bgc[currentSong]})`;
});

prevButton.addEventListener("click", function () {
  currentSong = currentSong - 1;
  playSong(currentSong);
  document.body.style.backgroundImage = `url(${bgc[currentSong]})`;
});

//! --->
function setActiveSong(currentSong) {
  for (let i = 0; i < playlistList.length; i++) {
    if (i == currentSong) {
      playlistList[i].classList.add("active");
    } else {
      playlistList[i].classList.remove("active");
    }
  }
}
