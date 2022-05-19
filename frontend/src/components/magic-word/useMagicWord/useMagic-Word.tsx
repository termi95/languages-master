import { useEffect, useState } from "react";
import { api } from "../../../api/api.config";
import { IMagicWordHeader } from "../../../app-types/MagicWordHeader";

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
    setWordsCollection((prevState) =>
      prevState.filter((elem) => elem.id !== header.id)
    );
  };

  const deleteHandler = async (header: IMagicWordHeader) => {
    await api
      .delete("/magic-word/header/delete", { data: { ...header } })
      .then((res) => {
        if (res.status === 200) {
          removeHeaderFromList(header);
        }
      })
      .catch((error) => {});
  };

  const handleKeyDown = (keyPressed: string) => {
    if (keyPressed === "Enter" && name !== "") {
      createHeader();
    }
  };

  const editHeader = async (
    newHeaderName: string,
    header: IMagicWordHeader
  ): Promise<boolean> => {
    header.name = newHeaderName;
    let success = false;
    if (newHeaderName !== "") {
      const res = api
        .patch("/magic-word/header/edit", { ...header })
        .then((res) => res.status)
        .catch(() => {});
      if ((await res) === 200) {
        editElementInWordsCollection(header);
        success = true;
      }
    }

    return success;
  };

  const editElementInWordsCollection = (header: IMagicWordHeader) => {
    let wordsCollectionAfterCahnge = wordsCollection;
    const headerIndex = wordsCollection.findIndex(
      (obj) => obj.id === header.id
    );
    wordsCollectionAfterCahnge[headerIndex].name = header.name;
    setWordsCollection([...wordsCollectionAfterCahnge]);
  };

  const handleKeyDownEditName = async (
    keyPressed: string,
    newName: string,
    header: IMagicWordHeader
  ): Promise<boolean> => {
    if (keyPressed === "Enter" && newName !== "") {
      return await editHeader(newName, header);
    }
    return false;
  };

  return {
    clickHandler,
    handleChange,
    handleKeyDown,
    removeHeaderFromList,
    deleteHandler,
    handleKeyDownEditName,
    editHeader,
    wordsCollection,
    name,
  };
};
