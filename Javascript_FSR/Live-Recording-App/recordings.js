setTimeout(() => {
  if (database) {
    let transaction = database.transaction("video", "readonly");
    let videoStore = transaction.objectStore("video");

    let videoRequest = videoStore.getAll();

    // console.log(videoRequest);

    videoRequest.addEventListener("success", () => {
      let videoResult = videoRequest.result;
      console.log(videoResult);

      videoResult.forEach((videoObj) => {
        let videoContiner = document.createElement("div");
        videoContiner.classList.add("video-continer");

        let video = document.createElement("video");
        video.classList.add("video");
        video.src = URL.createObjectURL(videoObj.videoData);

        videoContiner.appendChild(video);

        let galleryContainer = document.querySelector(".gallery-container");
        galleryContainer.appendChild(videoContiner);

        video.addEventListener("mouseover", () => {
          video.play();
        });

        video.addEventListener("mouseout", () => {
          video.pause();
        });
      });
    });
  }
}, 1000);
