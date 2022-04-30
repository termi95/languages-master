export const useMagicWordCollection = () => {
  const ClickHandlerSlideDown = async (e: any) => {
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

  return {
    ClickHandlerSlideDown,
  };
};
