import type { Selectable } from "@/composition";

export class Item implements Selectable{
    constructor(
public name:string,
public count:number,
public color:string,
public selected:boolean = false
    ){

    }
}