import { useEffect, useState } from "react";
import Board from "../../models/Board";
import "./SideBar.css";
import { addBoard, removeBoard, boardsState} from "../../features/boardsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SideBar() {
  const dispatch = useDispatch()
  const boards = useSelector(boardsState);

  let boardDivList = boards.map(board => <Link to={`board/${board.id}`}>
    <div className="board-item" key={board.id}>{board.name}</div>
  </Link>);

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
      <div id="sidebar-create-button" className="cursor-pointer" onClick={() => dispatch(addBoard(new Board('New Board')))}>
      <span>+ Create New Board</span>
    </div>
    </div >
  );

  // function addBoard() {
  //   setBoards([...boards, new Board("New Board")]);
  // }
}
