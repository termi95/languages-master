import { createContext, ReactNode, useContext } from "react";
import { useMagicWord } from "./useMagicWord/useMagic-Word";

type HeaderProps = { children: ReactNode };
const HeaderContext = createContext<magicWordDataType | null>(null);

export const MagicWordProvider = ({ children }: HeaderProps) => {
  const header = useMagicWordSetting();
  return (
    <HeaderContext.Provider value={header}>{children}</HeaderContext.Provider>
  );
};

const useMagicWordSetting = () => {
  const {
    clickHandler,
    handleKeyDown,
    handleChange,
    deleteHandler,
    removeHeaderFromList,
    handleKeyDownEditName,
    editHeader,
    name,
    wordsCollection,
  } = useMagicWord();

  return {
    clickHandler,
    handleKeyDown,
    handleChange,
    deleteHandler,
    removeHeaderFromList,
    handleKeyDownEditName,
    editHeader,
    name,
    wordsCollection,
  };
};

type magicWordDataType = ReturnType<typeof useMagicWordSetting>;

export const useHeader = () => {
  const header = useContext(HeaderContext);
  if (!header) {
    throw new Error("useHeader must be used inside HeaderProvider");
  }
  return header;
};
