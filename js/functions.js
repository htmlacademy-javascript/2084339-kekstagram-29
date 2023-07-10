const checkStringLength = (string, length) => string.length <= length;

checkStringLength('проверяемая строка', 20);

const checkStringPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

checkStringPalindrome('топот');
