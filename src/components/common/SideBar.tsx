import { useEffect, useState } from "react";
import Board from "../../models/Board";
import "./SideBar.css";

export default function SideBar() {
  const [boards, setBoards] = useState([] as Board[]);

  let boardDivList = boards.map(board => <div className="board-item">{board.name}</div>);

  useEffect(() => {
    //TODO: BACKEND CALL TO GET KANBAN BOARDS
  }, [])

  return (
    <div id="sidebar-wrapper" className="gap-5 flex flex-col w-1/4 min-h-screen">
      <div>
        <h1 className="text-5xl">kanban</h1>
      </div>
      <div id="sidebar-boards" className="flex flex-col gap-2">
        <span id="board-counter" className="">
          all boards ({boards.length})
        </span>
        {boardDivList}
      </div>
      <div id="sidebar-create-button" className="cursor-pointer" onClick={addBoard}>
        <span>+ Create New Board</span>
      </div>
    </div>
  );

  function addBoard() {
    setBoards([...boards, new Board("New Board")]);
  }
}
