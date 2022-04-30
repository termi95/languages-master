import "./magic-word.css";
import Navbar from "../navbar";
import plus from "../../assets/plus-icon.png";
import { MagicWordCollection } from "./magic-word-collection";
import { useMagicWord } from "./useMagic-Word";

const MagicWordHeader = () => {
  const { clickHandler, handleChange, wordsCollection } = useMagicWord();
  return (
    <>
      <div className="grid-MagicWordHeader">
        <Navbar />
        <section id="word-section">
          <div>
            <p id="header-title">Magic word collection</p>
          </div>
          <div id="add-new-collection">
            <div id="collection-name-input">
              <label htmlFor="Name">Collection Name</label>
              <br />
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => handleChange(e.target)}
              />
              <button onClick={clickHandler}>
                <img src={plus} alt="plus" />
              </button>
            </div>
          </div>
          <MagicWordCollection item={wordsCollection} />
        </section>
      </div>
    </>
  );
};

export default MagicWordHeader;