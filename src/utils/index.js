/**
 *
 * @param {any} val
 */
export function isArray(val) {
  return Object.prototype.toString.call(val) === "[object Array]"
}

/**
 *
 * @param {any} val
 */
export function isObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]"
}