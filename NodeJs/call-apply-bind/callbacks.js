function downloadSong(playSong) {
  console.log("downloading started.....");
  console.log("downloading completed.....");

  playSong("Excuses");
}
function playSong(songName) {
  console.log("playing song started..... ", songName);

  pauseSong(songName);
}
function pauseSong(songName) {
  console.log("Song is paused..... ", songName);
}

function song() {
  downloadSong(playSong);
}

song();
