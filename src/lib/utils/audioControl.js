export const playSound = (audioRef, audioFile) => {
  if (audioRef.current) {
    audioRef.current.src = audioFile;
    audioRef.current.play();
  }
};
