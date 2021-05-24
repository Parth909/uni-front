const ALPHABET = "KMGTPEZY".split("");
const THRESHOLD = 1e3;

export default function (n, fn) {
  n = Math.abs(n);
  var index = 0;
  while (n >= THRESHOLD && ++index < ALPHABET.length) {
    n /= THRESHOLD;
  }
  if (fn) n = fn(n);
  return index === 0 ? n : n + ALPHABET[index - 1];
}
