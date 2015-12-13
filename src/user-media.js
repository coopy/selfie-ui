function findGetMediaImplementation() {
  return navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
}

export function clientIsSupported() {
  return findGetMediaImplementation();
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
