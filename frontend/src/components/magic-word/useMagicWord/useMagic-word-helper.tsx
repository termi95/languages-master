import { useRef, useState } from "react";

export const useMagicWordActionBar = () => {
  const [editVisibility, setEditVisibility] = useState(false);
  const [editedName, setEditedName] = useState("");

  const clickHandlerSlideDown = async (e: any) => {
    const listOfAllPanels = e.currentTarget.parentNode.parentNode.childNodes;
    const actionPanel = e.currentTarget.parentNode.childNodes[1];
    if (actionPanel.classList.contains("open")) {
      await actionPanel.classList.remove("open");
    } else {
      listOfAllPanels.forEach((element: any) => {
        if (element.childNodes[1].classList.contains("open")) {
          element.childNodes[1].classList.remove("open");
        }
      });
      await actionPanel.classList.add("open");
    }
  };

  const toglleVisibility = () => {
    setEditVisibility((pev) => !pev);
  };

  const handleClickOutside = (visibility :boolean) => {
    setEditVisibility(visibility);
  };

  const handleChange = (e: HTMLInputElement) => {
    setEditedName(e.value);
  };

  return {
    clickHandlerSlideDown,
    toglleVisibility,
    handleClickOutside,
    handleChange,
    editVisibility,
    editedName,
  };
};
