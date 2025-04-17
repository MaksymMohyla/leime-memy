import { createContext, Dispatch, SetStateAction } from 'react';
import { Meme } from '../../utils/types/meme';

type MemeContext = {
  memeList: Meme[];
  setMemeList: Dispatch<SetStateAction<Meme[]>>;
  selectedMemeId: number;
  setSelectedMemeId: Dispatch<SetStateAction<number>>;
};

export const MemeContext = createContext<MemeContext>({
  memeList: [],
  setMemeList: () => {},
  selectedMemeId: 0,
  setSelectedMemeId: () => {},
});
