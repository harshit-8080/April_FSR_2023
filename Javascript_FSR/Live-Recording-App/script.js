let video = document.querySelector("video");
let recordBtn = document.querySelector(".record-btn");
let captureBtn = document.querySelector(".capture-btn");

//! Get video and audio Access
let x = navigator.mediaDevices.getUserMedia({ video: true, audio: true });

let recorder;
let recorderFlag = false;
let videoInChunk = [];
let filterColor = "transparent";

x.then((stream) => {
  //! Display The Video Streaming on Video Tag (On Screen)
  video.srcObject = stream;

  recorder = new MediaRecorder(stream);

  //! Event to handle when Recording Starts
  recorder.addEventListener("start", () => {
    videoInChunk = [];
  });

  //! Event to handle when data is available
  recorder.addEventListener("dataavailable", (chunk) => {
    videoInChunk.push(chunk.data);
  });

  //! Event to handle when recording is stopped
  recorder.addEventListener("stop", () => {
    let blob = new Blob(videoInChunk, { type: "video/mp4" });
    // let videoURL = URL.createObjectURL(videoData);

    // // Code to Download the Recorded Video..
    // let a = document.createElement("a");
    // a.href = videoURL;
    // a.download = `live_streaming_record_${new Date()}.mp4`;
    // a.click();

    /*
      1. Prepare a Transaction
      2. Apply Transaction to Object Store
      3. Add video to VideoStore
    */

    if (database) {
      let id = uuid.v4();

      let transaction = database.transaction("video", "readwrite");
      let videoStore = transaction.objectStore("video");

      let entry = {
        id: id,
        videoData: blob,
      };

      videoStore.add(entry);
    }
  });
});

//! Start Recording and Stop Recording
recordBtn.addEventListener("click", () => {
  recorderFlag = !recorderFlag;

  if (recorderFlag) {
    recorder.start();
    startTimer();
    recordBtn.classList.add("record-anm");
  } else {
    recorder.stop();
    stopTimer();
    recordBtn.classList.remove("record-anm");
  }
});

captureBtn.addEventListener("click", () => {
  captureBtn.classList.add("capture-anm");

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Apply Filter on Canvas
  ctx.fillStyle = filterColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Apply Filter on Canvas

  //Getting URL for Captured Image
  let screenShotURL = canvas.toDataURL();

  // Download The Image
  let a = document.createElement("a");
  a.href = screenShotURL;
  a.download = `screenshot_capture_${new Date()}.png`;
  a.click();

  setTimeout(() => {
    captureBtn.classList.remove("capture-anm");
  }, 1000);
});

//! Live Timer Code
let counter = 0;
let timer = document.querySelector(".timer");
let clear;

function startTimer() {
  clear = setInterval(() => {
    let totalSeconds = counter;

    let hour = Number.parseInt(totalSeconds / 3600);
    totalSeconds = totalSeconds % 3600;

    let min = Number.parseInt(totalSeconds / 60);
    totalSeconds = totalSeconds % 60;

    let sec = totalSeconds;

    hour = hour < 10 ? `0${hour}` : `${hour}`;
    min = min < 10 ? `0${min}` : `${min}`;
    sec = sec < 10 ? `0${sec}` : `${sec}`;

    timer.innerText = `${hour}:${min}:${sec}`;

    counter++;
  }, 1000);
}

function stopTimer() {
  clearInterval(clear);
  timer.innerText = "00:00:00";
}

// Change bgc of filter-layer onClick of filter classes...

let filterLayer = document.querySelector(".filter-layer");
let filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    let bgc = getComputedStyle(filter).getPropertyValue("background-color");
    filterLayer.style.backgroundColor = bgc;
    filterColor = bgc;
  });
});
