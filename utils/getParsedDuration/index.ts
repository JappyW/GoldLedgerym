//get duration in seconds and transform into human readable time
export const getParsedDuration = (duration: number) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor(duration / 60) % 60;
  const seconds = duration % 60;
  return `${hours}:${minutes}:${seconds}`;
};
