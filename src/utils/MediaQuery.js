const mediaQueryLists = new WeakMap();

/**
 * MediaQuery class
 * Manages media queries programatically
 */
export default class MediaQuery {
  constructor() {
    mediaQueryLists.set(this, []);
  }

  /**
   * Define callback on media query
   * @param {string} query
   * @param {Function} callback
   */
  on(query, callback) {
    const mql = global.matchMedia(query);

    mediaQueryLists.get(this).push({
      mql,
      callback,
    });

    mql.addListener((_mql) => {
      if (_mql.matches) {
        callback();
      }
    });
  }

  /**
   * Check media queries
   */
  check() {
    mediaQueryLists.get(this).forEach((item) => {
      if (item.mql.matches) {
        item.callback();
      }
    });
  }

  /**
   * Disable all media queries
   */
  off() {
    const mqls = mediaQueryLists.get(this);

    mqls.foreach((item) => {
      item.mql.removeListener(item.callback);
    });

    mqls.splice(0, mqls.length);
  }
}
