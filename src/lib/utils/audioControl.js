export const playSound = (audioRef, audioUrl) => {
  audioRef.current.src = audioUrl;
  audioRef.current.play();
};
