import { useEffect, useState } from 'react';
import { MemeContext } from './MemeContext';
import { Meme } from '../../utils/types/meme';
import { checkMemesInStorage } from './memeInStorage';

type Props = {
  children: React.ReactNode;
};

export const MemeProvider: React.FC<Props> = ({ children }) => {
  const [memeList, setMemeList] = useState<Meme[]>([]);
  const [selectedMemeId, setSelectedMemeId] = useState(0);

  useEffect(() => {
    checkMemesInStorage(setMemeList);
  }, []);

  return (
    <MemeContext.Provider
      value={{
        memeList,
        setMemeList,
        selectedMemeId,
        setSelectedMemeId,
      }}
    >
      {children}
    </MemeContext.Provider>
  );
};
