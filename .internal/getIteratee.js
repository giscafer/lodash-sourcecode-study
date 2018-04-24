import result from '../result.js';

/**
  * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
  * this function returns the custom method, otherwise it returns `baseIteratee`.
  * If arguments are provided, the chosen function is invoked with them and
  * its result is returned.
  *
  * @private
  * @param {*} [value] The value to convert to an iteratee.
  * @param {number} [arity] The arity of the created iteratee.
  * @returns {Function} Returns the chosen function or its result.
  */
function getIteratee(iteratee,value) {
    var result = lodash.iteratee || iteratee;
    result = result === iteratee ? baseIteratee : result;
    return arguments.length ? result(arguments[0], arguments[1]) : result;
}

export default getIteratee;