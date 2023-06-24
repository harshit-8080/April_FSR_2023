function downloadSong(songName, callback) {
  console.log("Downloading Started ......");

  setTimeout(function () {
    let song = songName + ".mp3";
    console.log("Downloading Completed song --> ", song);
    callback(song);
  }, 2000);
}

function writeTofile(song, callback) {
  console.log("Writing to file started....");

  setTimeout(function () {
    let songFileName = song + ".txt";
    console.log("Writing to file completed --> ", songFileName);
    callback(songFileName);
  }, 1000);
}

function uploadFileToDrive(songFileName, callback) {
  console.log("Uploading to drive  started....");

  setTimeout(function () {
    let url = "https://www.drive.com/harshit71/" + songFileName;
    console.log("Uploading to drive completed url --> ", url);
    callback();
  }, 3000);
}

function a(callback) {
  callback();
}
function b(callback) {
  callback();
}
function c(callback) {}

downloadSong("excuses", function (song) {
  writeTofile(song, function (songFileName) {
    uploadFileToDrive(songFileName, function () {
      a(function () {
        b(function () {
          c(function () {});
        });
      });
    });
  });
});
