import { useEffect, useState } from "react";
import { api } from "../../api/api.config";
import { IMagicWordHeader } from "../../app-types/MagicWordHeader";

const initialWordsCollection: IMagicWordHeader[] = [];
export const useMagicWord = () => {
  const [wordsCollection, setWordsCollection] = useState(
    initialWordsCollection
  );
  const [name, setName] = useState("");

  useEffect(() => {
    getUserWordsCollection();
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
          setName("");
          setWordsCollection([...wordsCollection, res.data]);
        }
      })
      .catch((error) => {});
  };

  return {
    clickHandler,
    handleChange,
    wordsCollection,
    name,
  };
};
