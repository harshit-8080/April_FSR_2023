let video = document.querySelector("video");
let recordBtn = document.querySelector(".record-btn");

//! Get video and audio Access
let x = navigator.mediaDevices.getUserMedia({ video: true, audio: true });

let recorder;
let recorderFlag = false;
let videoInChunk = [];

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
    let videoData = new Blob(videoInChunk, { type: "video/mp4" });
    let videoURL = URL.createObjectURL(videoData);

    // Code to Download the Recorded Video..
    let a = document.createElement("a");
    a.href = videoURL;
    a.download = `live_streaming_record_${new Date()}.mp4`;
    a.click();
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
