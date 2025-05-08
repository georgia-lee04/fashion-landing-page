const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.loop = true;
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
