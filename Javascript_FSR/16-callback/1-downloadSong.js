function downloadSong(song, writeToFile) {
  console.log("Song downloading started......");

  console.log("Song Download Completed.....");

  console.log("Your Song ==> ", song);

  isSongDownloaded = true;

  if (isSongDownloaded) {
    writeToFile(song);
  } else {
    console.log("Some problem while writing to file....");
  }
}

downloadSong("nato.mp3", function writeToFile(song) {
  console.log("Writing to file started......");

  console.log("Writing  Completed.....");

  let songFileName = song + ".txt";
  console.log("Your file ==> ", songFileName);

  let isFileRead = true;

  if (isFileRead) {
    uploadToDrive();
  } else {
    console.log("uploading can't done");
  }

  function uploadToDrive() {
    console.log("Uploading to drive started......");

    console.log("Uploading  Completed.....");

    let uploadLink = "https//wwww.abc.com/link/" + songFileName;

    console.log("Uploaded Link => ", uploadLink);
  }
});
