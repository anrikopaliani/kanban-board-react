import { useState } from "react";
import Column from "./Column";
import { DEFAULT_CARDS } from "../config/data";
import BurnBarrel from "./BurnBarrel";

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
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
