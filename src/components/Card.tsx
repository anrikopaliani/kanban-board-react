import DropIndicator from "./DropIndicator";

interface Props {
  title: string;
  id: string;
  column: string;
}

const Card = ({ column, id, title }: Props) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <div
        draggable="true"
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </div>
    </>
  );
};

export default Card;
