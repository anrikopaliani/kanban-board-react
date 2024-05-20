import { useEffect, useState } from "react";
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";

const Board = () => {
  const [cards, setCards] = useState<
    {
      title: string;
      id: string;
      column: string;
    }[]
  >([]);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    const cardData = localStorage.getItem("cards");

    setCards(cardData ? JSON.parse(cardData) : []);
    setHasChecked(true);
  }, []);

  return (
    <div className="flex h-full w-full gap-3 overflow-auto p-12">
      <Column
        cards={cards}
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        setCards={setCards}
      />
      <Column
        cards={cards}
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        setCards={setCards}
      />
      <Column
        cards={cards}
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        setCards={setCards}
      />
      <Column
        cards={cards}
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

export default Board;
