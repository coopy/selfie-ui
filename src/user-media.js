import log from "./logger";

function findGetMediaImplementation() {
  return navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
}

export function clientIsSupported() {
  return findGetMediaImplementation();
}

export function urlFromStream() {
  // const vendorUrl = window.URL || window.webkitURL;
  // return vendorUrl.createObjectURL.bind(vendorUrl);
}

export function capturePhoto(videoEl, canvasEl) {
  const { height, width } = videoEl;
  const context = canvasEl.getContext("2d");

  canvasEl.width = width;
  canvasEl.height = height;

  context.drawImage(videoEl, 0, 0, width, height);
  const data = canvasEl.toDataURL("image/png");

  return data;
}

export function requestUserVideo(width, height) {
  const getUserMedia = findGetMediaImplementation().bind(navigator);
  return new Promise((resolve, reject) => {
    const options = { audio: false, video: { width, height }};

    getUserMedia(
      options,
      (mediaStream) => resolve(mediaStream),
      (err) => reject(err)
    );
  });
}
