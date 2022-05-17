import play from "../../assets/play.svg";
import plus from "../../assets/plus.svg";
import trashBin from "../../assets/trash-bin.svg";
import editSquer from "../../assets/edit-squer.svg";
import { IMagicWordHeader } from "../../app-types/MagicWordHeader";
import { useMagicWordActionBar } from "./useMagicWord/useMagic-word-helper";
import { useHeader } from "./MagicWordProvider";
import { useEffect, useRef } from "react";

type Props = {
  headers: IMagicWordHeader[];
};

export const MagicWordCollection = ({ headers }: Props) => {
  const {
    clickHandlerSlideDown,
    toglleVisibility,
    handleChange,
    handleClickOutside,
    resetName,
    editVisibility,
    editedName,
  } = useMagicWordActionBar();
  const { deleteHandler, handleKeyDownEditName, editHeader } = useHeader();
  const ref = useRef<any>();
  ref.current = [];

  const addToRefs = (el: any) => {
    if (el && !ref.current.includes(el) && el !== null) {
      ref.current.push(el);
    }
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (editVisibility && ref.current && !ref.current.includes(e.target)) {
        handleClickOutside(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [editVisibility, handleClickOutside]);

  const handleEdit = async (editedName: string, header: IMagicWordHeader) => {
    if (editedName !== "") {
      (await editHeader(editedName, header)) && resetName();
    }
  };

  const handleEditOnKeyDownEdit = async (
    key: any,
    editedName: string,
    header: IMagicWordHeader
  ) => {
    if (editedName !== "") {
      handleKeyDownEditName(key, editedName, header) && resetName();
    }
  };

  return (
    <div>
      {headers.map((header: IMagicWordHeader) => (
        <div className="collection-container" key={header.id}>
          <div onClick={clickHandlerSlideDown} className="collection-name">
            <p>{header.name}</p>
          </div>
          {editVisibility ? (
            <div ref={addToRefs} className="action-panel" id="edit-collection">
              <div ref={addToRefs} id="edit-collection-input">
                <input
                  ref={addToRefs}
                  type="text"
                  placeholder="Name"
                  onChange={(e) => handleChange(e.target)}
                  value={editedName}
                  onKeyDown={(e) =>
                    handleEditOnKeyDownEdit(e.key, editedName, header)
                  }
                />
                <button
                  ref={addToRefs}
                  onClick={() => handleEdit(editedName, header)}
                >
                  <img
                    ref={addToRefs}
                    className="action-icon"
                    src={plus}
                    alt="Edit header"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div className="action-panel">
              <img
                // onClick={() => editHandler(header)}
                className="action-icon "
                src={play}
                alt="start game"
              />
              <img
                // onClick={() => editHandler(header)}
                className="action-icon "
                src={plus}
                alt="add word"
              />
              <img
                onClick={toglleVisibility}
                className="action-icon "
                src={editSquer}
                alt="edit squer"
              />
              <img
                onClick={() => deleteHandler(header)}
                className="action-icon "
                src={trashBin}
                alt="trash bin"
                style={{ fill: "red" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
