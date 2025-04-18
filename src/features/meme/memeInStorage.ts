import { Meme } from '@/utils/types/meme';
import { Dispatch } from 'react';

const initialMemes: Meme[] = [
  {
    id: 1,
    title: 'OOPS',
    imgURL:
      'https://preview.redd.it/real-men-dont-do-backups-they-cry-v0-qlxhghrqjfve1.png?width=640&crop=smart&auto=webp&s=31df2aa6ac1f0856ba87373437d2dd48021f906c',
    likes: 50,
  },
  {
    id: 2,
    title: 'What you gonna do then?',
    imgURL:
      'https://preview.redd.it/memes-from-5-plus-years-ago-deleting-off-my-phone-figured-i-v0-8ep2gk0b29oe1.jpg?width=640&crop=smart&auto=webp&s=69c19bae6bc2e220eee11e480f8537340b35fe59',
    likes: 50,
  },
  {
    id: 3,
    title: 'Huh, classic',
    imgURL:
      'https://preview.redd.it/memes-from-5-plus-years-ago-deleting-off-my-phone-figured-i-v0-dm6vbt2b29oe1.png?width=1080&crop=smart&auto=webp&s=b16c234a0224c51ed7332b5a0e5ff0193d661ef5',
    likes: 50,
  },
  {
    id: 4,
    title: 'Make an original username',
    imgURL:
      'https://preview.redd.it/memes-from-5-plus-years-ago-deleting-off-my-phone-figured-i-v0-136m0m5b29oe1.jpg?width=320&crop=smart&auto=webp&s=c33cde199e0babccb284146c5f7582d131b12d8f',
    likes: 50,
  },
  {
    id: 5,
    title: 'SUS link',
    imgURL:
      'https://preview.redd.it/memes-from-5-plus-years-ago-part-2-v0-b0mpns5f29oe1.jpg?width=320&crop=smart&auto=webp&s=130eaea77d6293850b411d2b447f7672388a9fc5',
    likes: 50,
  },
  {
    id: 6,
    title: 'Good old recursion',
    imgURL:
      'https://preview.redd.it/memes-from-5-plus-years-ago-part-2-v0-ckpj1kbf29oe1.png?width=320&crop=smart&auto=webp&s=dc1688e5eb5b37d30c3864b47806d7e1b861d0f6',
    likes: 50,
  },
  {
    id: 7,
    title:
      'Guys be like using only one good photo they had 15 years ago for the rest of their life',
    imgURL:
      'https://preview.redd.it/ageism-is-a-thing-particularly-in-it-v0-toijqmkh7ine1.png?width=320&crop=smart&auto=webp&s=8e337b0d256cc65d34f3dd4844e844dc3a52191f',
    likes: 50,
  },
  {
    id: 8,
    title: 'Just rip them off',
    imgURL:
      'https://preview.redd.it/only-the-strong-survive-v0-ip50iffzazke1.jpeg?width=1080&crop=smart&auto=webp&s=184b1b6afc1de05efda6fde56216fd7d4836080e',
    likes: 50,
  },
  {
    id: 9,
    title: 'If AI learns to use git properly - we are doomed',
    imgURL:
      'https://preview.redd.it/the-struggle-is-real-v0-kwo6y1ojwsie1.jpeg?width=640&crop=smart&auto=webp&s=9214d191a1de345cc4bd6e5be24cb35244644981',
    likes: 50,
  },
  {
    id: 10,
    title:
      'Open this link only at your own risk: https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imgURL:
      'https://preview.redd.it/true-story-v0-f0hqcpbr775e1.jpeg?width=640&crop=smart&auto=webp&s=7bc67911a7ab59670fd8ef109be58fa1147464d0',
    likes: 50,
  },
];

export function checkMemesInStorage(
  setMemes: Dispatch<React.SetStateAction<Meme[]>>
) {
  const storedMemes = localStorage.getItem('memes');
  const currentMemes = storedMemes ? JSON.parse(storedMemes) : null;

  if (!currentMemes) {
    const memesWithRandomLikes = initialMemes.map((item) => ({
      ...item,
      likes: Math.trunc(Math.random() * 99),
    }));

    localStorage.setItem('memes', JSON.stringify(memesWithRandomLikes));
    setMemes(memesWithRandomLikes);
  } else {
    setMemes(currentMemes);
  }
}

export function updateMemesInStorage(
  setMemes: Dispatch<React.SetStateAction<Meme[]>>,
  newMemes: Meme[]
) {
  localStorage.setItem('memes', JSON.stringify(newMemes));
  setMemes(newMemes);
}
