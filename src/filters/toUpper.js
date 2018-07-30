export function uperCaseFirstLetter(string) {
  return string.replace(/^\w/, c => c.toUpperCase());
}

export function uperCaseEachWords(string) {
  return string
    .split(" ")
    .map(word => word.substr(0, 1).toUpperCase() + word.substr(1, word.length))
    .join(" ");
}

export function upperCase(string) {
  return string.toUpperCase();
}
