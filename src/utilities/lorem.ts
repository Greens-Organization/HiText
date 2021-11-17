import { LoremIpsum } from 'lorem-ipsum';

export function lorem(wordsNumber:number){
  const lorem = new LoremIpsum();

  return lorem.generateWords(wordsNumber)
}