import { Column } from "./column.models";

export class Board{
    constructor(public name: string, public columns: Column[]){}
}