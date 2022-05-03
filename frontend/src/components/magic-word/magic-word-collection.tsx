import { useMagicWordCollection } from "./useMagic-word-collection";
import trashBin from "../../assets/trash-bin.png";
import { IMagicWordHeader } from "../../app-types/MagicWordHeader";

type Props = {
  headers: IMagicWordHeader[];
};

export const MagicWordCollection = ({ headers }: Props) => {
  const { clickHandlerSlideDown, deleteHandler } = useMagicWordCollection();
  const headerCollection = headers.map((header: IMagicWordHeader) => (
    <div className="collection-container" key={header.id}>
      <div
        onClick={clickHandlerSlideDown}
        className="collection-name"
        id={header.id.toString()}
      >
        <p>{header.name}</p>
      </div>
      <div className="action-panel">
        action panel{" "}
        <img
          onClick={deleteHandler}
          id="trash-bin"
          src={trashBin}
          alt="trash bin"
        />
      </div>
    </div>
  ));
  return <div>{headerCollection}</div>;
};
