/* eslint-disable no-plusplus */
export default function (object, path) {
  const length = path.length;
  let index = 0;

  while (object !== undefined && index < length) {
    object = object[path[index++]];
  }

  return object;
}
