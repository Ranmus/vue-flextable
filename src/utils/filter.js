/**
 * Filter array of objects by defining search text and keys of objects to filter
 * @param  {Array} array
 * @param  {String} search
 * @param  {Array} keys
 * @return {Array}
 */
export default function (array, search, keys) {
  const text = String(search).toLowerCase();

  return array.filter(item =>
    keys.some((key) => {
      if (Reflect.has(item, key)) {
        return String(item[key]).toLowerCase().indexOf(text) !== -1;
      }
      return false;
    }),
  );
}
