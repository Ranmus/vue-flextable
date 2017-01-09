/**
 * Filter array of objects by defining search text and keys of objects to filter
 * @param  {Array} array
 * @param  {String} search
 * @param  {Array} keys
 * @return {Array}
 */

 // TODO: Need to refactor for recursive filter literal objects (+ implement filter paths)
export default function (array, search, keys) {
  const text = String(search).toLowerCase();

  return array.filter(item =>
    keys.some((key) => {
      if (Reflect.has(item, key)) {
        if (typeof item[key] === 'object') {
          return Object.keys(item[key]).some((subKey) => {
            const value = String(item[key][subKey]);
            return value.toLowerCase().indexOf(text) !== -1;
          });
        }
        return String(item[key]).toLowerCase().indexOf(text) !== -1;
      }
      return false;
    }),
  );
}
