import type { Item } from "./item.entity";

export class List{
    
    constructor(
        public name:string = '',
        public open = false,
        public items:Item[] = []
        ){}
}