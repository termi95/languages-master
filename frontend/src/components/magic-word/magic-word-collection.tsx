import trashBin from "../../assets/trash-bin.png";
import { IMagicWordHeader } from "../../app-types/MagicWordHeader";
import { useMagicWordActionBar } from "./useMagicWord/useMagic-word-collection";
import { useHeader } from "./MagicWordProvider";

type Props = {
  headers: IMagicWordHeader[];
};

export const MagicWordCollection = ({ headers }: Props) => {
  const { clickHandlerSlideDown } = useMagicWordActionBar();
  const { deleteHandler } = useHeader();
  return (
    <div>
      {headers.map((header: IMagicWordHeader) => (
        <div className="collection-container" key={header.id}>
          <div onClick={clickHandlerSlideDown} className="collection-name">
            <p>{header.name}</p>
          </div>
          <div className="action-panel">
            <img
              onClick={() => deleteHandler(header)}
              id="trash-bin"
              src={trashBin}
              alt="trash bin"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
