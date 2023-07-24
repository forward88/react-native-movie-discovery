import {faker} from '@faker-js/faker';

export const mockedResult = Array.from({length: 20}).map(() => {
  return {
    id: faker.number.int(),
    adult: faker.datatype.boolean(),
    backdrop_path: faker.word.sample(),
    genre_ids: [faker.number.int(), faker.number.int()],
    original_language: faker.word.sample(),
    original_title: faker.word.sample(),
    overview: faker.word.sample(),
    popularity: faker.number.int(),
    poster_path: faker.word.sample(),
    release_date: faker.word.sample(),
    title: faker.word.sample(),
    video: faker.datatype.boolean(),
    vote_average: faker.number.int(),
    vote_count: faker.number.int(),
  };
});
