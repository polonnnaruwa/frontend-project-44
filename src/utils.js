export default function getRandomNumber(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.round(Math.random() * (newMax - newMin)) + newMin;
}
