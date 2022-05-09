import "./magic-word.css";
import Navbar from "../navbar";
import plus from "../../assets/plus.svg";
import { MagicWordCollection } from "./magic-word-collection";
import { useHeader } from "./MagicWordProvider";

const MagicWordHeader = () => {
  const { clickHandler, handleChange, handleKeyDown, wordsCollection, name } =
    useHeader();

  return (
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
              value={name}
              onKeyDown={(e) => handleKeyDown(e.key)}
            />
            <button onClick={clickHandler}>
              <img className="action-icon" src={plus} alt="Add new header" />
            </button>
          </div>
        </div>
        <MagicWordCollection headers={wordsCollection} />
      </section>
    </div>
  );
};

export default MagicWordHeader;
