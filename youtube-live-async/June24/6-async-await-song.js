function downloadSong(songName) {
  console.log("Downloading Started ......");

  // creaet a promise...
  let p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
      let song = songName + ".mp3";
      console.log("Downloading Completed song --> ", song);
      resolve(song);
    }, 2000);
  });

  // returning a promise
  return p1;
}

function writeTofile(song) {
  console.log("Writing to file started....");

  let p2 = new Promise((resolve, reject) => {
    setTimeout(function () {
      let songFileName = song + ".txt";
      console.log("Writing to file completed --> ", songFileName);
      resolve(songFileName);
    }, 2000);
  });

  return p2;
}

function uploadFileToDrive(songFileName) {
  console.log("Uploading to drive  started....");

  let p3 = new Promise((resolve, reject) => {
    setTimeout(function () {
      let url = "https://www.drive.com/harshit71/" + songFileName;
      console.log("Uploading to drive completed url --> ", url);
      resolve(url);
    }, 3000);
  });

  return p3;
}

function a() {
  return new Promise(function (resolve, reject) {
    resolve("a");
  });
}
function b() {
  return new Promise(function (resolve, reject) {
    resolve("b");
  });
}
function c() {
  return new Promise(function (resolve, reject) {
    resolve("c");
  });
}

async function f1(songName) {
  let song = await downloadSong(songName);
  let songFileName = await writeTofile(song);
  let url = await uploadFileToDrive(songFileName);
  let a1 = await a();
  let b1 = await b();
  let c1 = await c();
}

f1("Excuses");
