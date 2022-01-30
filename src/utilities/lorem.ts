import { LoremIpsum } from "lorem-ipsum";

export const Lorem = (wordsNumber: number) => {
  const lorem = new LoremIpsum();

  return lorem.generateWords(wordsNumber);
};

