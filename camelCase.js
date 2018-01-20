import capitalize from './capitalize.js'
import words from './words.js'

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 * 将字符串转为驼峰格式
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @see lowerCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
const camelCase = (string) => (
  /**
   * 1、去掉string中所有的,
   * 2、使用 words 来将字符串转为数组
   * 3、reduce 来将每个字符小写
   * 4、如果不是数组第一个元素，使用capitalize来将首字母大写再拼接
   */
  // 1、2
  words(`${string}`.replace(/['\u2019]/g, '')).reduce((result, word, index) => {
    // 3
    word = word.toLowerCase();
    // 4
    return result + (index ? capitalize(word) : word)
  }, '')// result的初始值为'';
)

export default camelCase
