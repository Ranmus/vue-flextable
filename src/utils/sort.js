export default function (array, key, options) {
  let smaller = -1;
  let bigger = 1;

  if (options.reverse) {
    smaller = 1;
    bigger = -1;
  }

  return array.sort((a, b) => {
    if (a[key] < b[key]) return smaller;
    if (a[key] > b[key]) return bigger;
    return 0;
  });
}
