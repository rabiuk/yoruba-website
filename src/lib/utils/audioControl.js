export const playSound = (audioRef, audioUrl) => {
  if (audioRef.current) {
    audioRef.current.src = audioUrl;
    audioRef.current.play();
  }
};
