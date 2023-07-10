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
  'Сохраняю на память',
  'Доброе утро',
  'Просто на память',
  'Мое лучшее фото',
  'Я на пляже',
  'Отличные выходные',
];

const LIKES_AMOUNT = {
  min: 15,
  max: 200
};

const PHOTOS_AMOUNT = {
  min: 1,
  max: 25
};

const COMMENTS_AMOUNT = {
  min: 0,
  max: 30
};

const AVATAR_AMOUNT = {
  min: 1,
  max: 6
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = (id) => ({
  id: ++id,
  avatar: `img/avatar-${getRandomInteger(AVATAR_AMOUNT.min, AVATAR_AMOUNT.max)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (id) => ({
  id: ++id,
  url: `/photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_AMOUNT.min, LIKES_AMOUNT.max),
  comments: createComment(getRandomInteger(COMMENTS_AMOUNT.min, COMMENTS_AMOUNT.max))
});

const PhotosArray = () => Array.from({length:PHOTOS_AMOUNT.max}, (_, index)=>createPhoto(index));
PhotosArray();
