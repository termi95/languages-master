import { useEffect, useState } from "react";
import { api } from "../../api/api.config";
import { IMagicWordHeader } from "../../app-types/MagicWordHeader";

export const useMagicWord = () => {
  const [wordsCollection, setWordsCollection] = useState<IMagicWordHeader[]>(
    []
  );
  const [name, setName] = useState("");

  useEffect(() => {
    getUserWordsCollection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickHandler = () => {
    if (name !== "") {
      createHeader();
    }
  };

  const handleChange = (e: HTMLInputElement) => {
    setName(e.value);
  };

  const getUserWordsCollection = async () => {
    await api.get("/magic-word/header/get-user-headers").then((res) => {
      if (res.status === 200) {
        setWordsCollection([...wordsCollection, ...res.data]);
      }
    });
  };

  const createHeader = async () => {
    const userId = Number(localStorage.getItem("userId"));
    await api
      .post("/magic-word/header/create", { name, userId })
      .then((res) => {
        if (res.status === 201) {
          setName(() => "");
          setWordsCollection([...wordsCollection, res.data]);
        }
      })
      .catch((error) => {});
  };

  const removeHeaderFromList = (header: IMagicWordHeader) => {
    //let collection = [...wordsCollection];
    //collection = collection.filter((elem) => elem.id !== header.id);
    // collection.splice(collection.findIndex(item => item.id === header.id), 1)
    //console.log(wordsCollection.filter((elem) => elem.id !== header.id));
    //setWordsCollection((collection) => collection.filter((elem) => elem.id !== header.id))
    setWordsCollection((prevState) => prevState.filter((elem) => elem.id !== header.id));
  };

  const handleKeyDown = (keyPressed: string) => {
    if (keyPressed === "Enter" && name !== "") {
      createHeader();
    }
  };

  return {
    clickHandler,
    handleChange,
    handleKeyDown,
    wordsCollection,
    removeHeaderFromList,
    name,
  };
};
