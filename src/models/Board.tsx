import { v4 as uuidv4 } from 'uuid';
import Column from './Column';

export default class Board {
    id: string;
    name: string;
    columns: Column[] = [];

    constructor(name: string) {
        this.id = uuidv4();
        this.name = name;
    }
}