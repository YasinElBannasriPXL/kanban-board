import Task from "./Task";

export default class Column {
    name: string;
    boardId: number;
    tasks: Task[] = [];

    constructor(name: string, boardId: number) {
        this.boardId = boardId;
        this.name = name;
    }
}