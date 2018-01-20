import unicodeWords from './.internal/unicodeWords.js'

// regexObj.exec(string) 等同于 RegExp.prototype.exec.bind(regexObj)(string)

// "-/:-@[-`{-"
const asciiWords = RegExp.prototype.exec.bind(
  /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g
)
// 检查是否有特殊字符

const hasUnicodeWord = RegExp.prototype.test.bind(
  /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
)

/**
 * Splits `string` into an array of its words.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern) {

  if (pattern === undefined) {
    // 是否存在特殊字符hasUnicodeWord(string)
    const result = hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string)
    return result || []
  }
  // 传pattern参的时候，本质就是调用string.match
  return string.match(pattern) || []
}

export default words
