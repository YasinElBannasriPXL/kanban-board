import Task from "./Task";

export default class Column {
    name: string;
    tasks: Task[] = [];

    constructor(name: string) {
        this.name = name;
    }
}