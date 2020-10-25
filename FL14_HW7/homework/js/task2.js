let word = prompt('Enter a word'),
  wlen = word.length;
const devider = 2,
  remainder = 1,
  zero = 0;
if (word.length !== zero && word.trim().length !== zero) {
  if (wlen % devider) {
    alert(word[Math.trunc(wlen / devider)]);
  } else if (word[Math.trunc(wlen / devider - remainder)] === word[Math.trunc(wlen / devider)]) {
    alert('Middle characters are the same');
  } else {
    alert(word[Math.trunc(wlen / devider - remainder)] + word[Math.trunc(wlen / devider)]);
  }
} else {
  alert('Invalid value');
}