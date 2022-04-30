import { IMagicWordHeader } from "../../app-types/MagicWordHeader";
import { useMagicWordCollection } from "./useMagic-word-collection";
interface Headers {
  item: Array<IMagicWordHeader>;
}

export const MagicWordCollection = (headers: Headers) => {
  const { ClickHandlerSlideDown } = useMagicWordCollection();
  const headerCollection = headers.item.map((header: IMagicWordHeader) => (
    <div className="collection-container" key={header.id}>
      <div
        onClick={ClickHandlerSlideDown}
        className="collection-name"
        id={header.id.toString()}
      >
        <p>{header.name}</p>
      </div>
      <div className="action-panel">action panel</div>
    </div>
  ));
  return <div>{headerCollection}</div>;
};
