/**
 * Fisher-Yates algorithmに基づいたシャッフル関数
 * 30-seconds-of-codeの実装例より
 * @see https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/shuffle.md
 */
const shuffle = ([...arr]) => {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}
​
const speaker = [
  'uruha',
  'Tomomi ❤ Imura',
  'toshi-toma',
  'tom-256',
  'yu_kgr',
]
​
console.log(shuffle(speaker))
