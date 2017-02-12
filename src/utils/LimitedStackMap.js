/* eslint-disable no-underscore-dangle */
const _limit = new WeakMap();
const _items = new WeakMap();

/**
 * Limited Stack map
 */
export default class LimitedStackMap {
  /**
   * Create instance
   * @param limit
   */
  constructor(limit = 0) {
    _limit.set(this, limit);
    _items.set(this, new Map());
  }

  /**
   * Get current limit
   * @returns {number}
   */
  getLimit() {
    return _limit.get(this);
  }

  /**
   * Get current limit
   * @returns {number}
   */
  get limit() {
    return this.getLimit();
  }

  /**
   * Set limit
   * @param {number} limit
   * @returns {Array} Removed items by limit
   */
  setLimit(limit) {
    const removed = [];

    if (this.length > this.limit) {
      while (this.length > this.limit) {
        removed.push(this.pop());
      }
    }

    _limit.set(this, limit);

    return removed;
  }

  /**
   * Set limit
   * @param {number} name
   */
  set limit(name) {
    this.setLimit(name);
  }

  /**
   * Get item
   * @param {string} key
   */
  get(key) {
    return _items.get(this).get(key);
  }

  /**
   * Has item
   * @param key
   */
  has(key) {
    return _items.get(this).has(key);
  }

  /**
   * Add item
   * @param {string} key
   * @param {*} value
   * @returns {Array}
   */
  add(key, value) {
    const items = _items.get(this);

    if (!items.has(key)) {
      return this.set(key, value);
    }

    return [];
  }

  /**
   * Set item
   * @param key
   * @param value
   * @returns {Array}
   */
  set(key, value) {
    const items = _items.get(this);
    const removed = [];

    if (this.length >= this.limit) {
      while (this.length >= this.limit) {
        removed.push(this.pop());
      }
    }

    items.set(key, value);

    return removed;
  }

  /**
   * Get items (with keys)
   * @returns {Array}
   */
  getItems() {
    return Array.from(_items.get(this)).map(data => ({
      key: data[0],
      value: data[1],
    }));
  }

  /**
   * Get items (with keys)
   * @returns {Array}
   */
  get items() {
    return this.getItems();
  }

  /**
   * Get position of item
   * @param {string} key
   * @returns {number}
   */
  getPosition(key) {
    const items = _items.get(this);
    const keys = Array.from(items.keys());

    return keys.indexOf(key);
  }

  /**
   * Pop last item
   * @returns {*}
   */
  pop() {
    const items = _items.get(this);
    const item = this.getItems().pop();

    if (item) {
      items.delete(item.key);
    }

    return item;
  }

  /**
   * Delete item
   * @param {string} key
   * @returns {*}
   */
  delete(key) {
    const item = this.get(key);

    _items.get(this).delete(key);

    return item;
  }

  /**
   * Get current length
   * @returns {Number}
   */
  getLength() {
    return Array.from(_items.get(this)).length;
  }

  /**
   * Get current length
   * @returns {Number}
   */
  get length() {
    return this.getLength();
  }
}
