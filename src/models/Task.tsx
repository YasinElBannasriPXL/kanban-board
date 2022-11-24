import { v4 as uuidv4 } from 'uuid';

export default class Task {
    name: string;
    description: string;
    id: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.id = uuidv4();
    }
}
