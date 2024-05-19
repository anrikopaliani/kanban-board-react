import DropIndicator from "./DropIndicator";

interface Props {
  title: string;
  id: string;
  column: string;
  handleDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    card: {
      title: string;
      id: string;
      column: string;
    }
  ) => void;
}

const Card = ({ column, id, title, handleDragStart }: Props) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <div
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </div>
    </>
  );
};

export default Card;
