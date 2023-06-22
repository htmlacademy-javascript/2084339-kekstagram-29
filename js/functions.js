function stringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
}

stringLength('проверяемая строка', 20);

function stringPalindrome(string) {
  const normalizedString = string.replaceAll(' ','').toLowerCase();
  let newString = '';

  for (let i = normalizedString.length - 1; i >= 0; i = i - 1) {
    newString += normalizedString.at(i).toLowerCase();
  }

  if (newString === normalizedString) {
    return true;
  }
}

stringPalindrome('Лёша на полке клопа нашёл ');
