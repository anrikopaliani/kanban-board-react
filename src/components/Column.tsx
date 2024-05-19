import { Dispatch, SetStateAction, useState } from "react";
import Card from "./Card";
import DropIndicator from "./DropIndicator";
import AddCard from "./AddCard";

interface Props {
  title: string;
  headingColor: string;
  column: string;
  cards: {
    title: string;
    id: string;
    column: string;
  }[];
  setCards: Dispatch<
    SetStateAction<
      {
        title: string;
        id: string;
        column: string;
      }[]
    >
  >;
}

const Column = ({ title, headingColor, column, cards, setCards }: Props) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    card: { title: string; id: string; column: string }
  ) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const filteredCards = cards.filter((card) => card.column === column);
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((card) => (
          <Card key={card.id} {...card} handleDragStart={handleDragStart} />
        ))}
        <DropIndicator beforeId="-1" column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

export default Column;
