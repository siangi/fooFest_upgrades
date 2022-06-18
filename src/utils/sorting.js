export default function sortingTimes(a, b) {
  if (a.startN < b.startN) {
    return -1;
  }
  if (a.startN > b.startN) {
    return 1;
  }
  return 0;
}
