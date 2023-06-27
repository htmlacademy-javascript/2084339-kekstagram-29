const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Аня',
  'Ваня',
  'Маша',
  'Саша',
  'Юра',
  'Юля',
];

const DESCRIPTIONS = [
  'Сохраняю в альбом',
  'Доброе утро',
  'Просто на память',
  'Мое лучшее фото',
  'Как вам мой лук?',
  'Отличные выходные',
];

const photoIdNumber = 25;

const likes = {
  min: 15,
  max: 200
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createPhoto = () => {
  const randomPhotoID = getRandomInteger(0, photoIdNumber.length - 1);
  return {
    id: getRandomArrayElement(randomPhotoID),
    url: '',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomArrayElement(likes),
    comments: '',
  };
};

const createComment = () => {
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  return {
    id: getRandomArrayElement(randomNameIndex),
    avatar: '',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const similarPhotos = Array.from({length: 25}, createPhoto);

console.log(similarPhotos);
