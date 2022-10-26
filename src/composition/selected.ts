export interface Selectable{
    selected:boolean
}

export const useSelected = ()=>{
const isSeletedAll = (items:Array<Selectable>):boolean=>{
const notSelectedItems = items.filter(item=>!item.selected)
if(!notSelectedItems.length)return true
    return false
}
const partialSelected = (items:Array<Selectable>)=>{
if(isSeletedAll(items))return false
if(items.find(item=>item.selected))return true
return false
}
const toggleSelection = (item:Selectable)=>{
item.selected = !item.selected
}
const selectAll = (items:Array<Selectable>)=>{
items.forEach(item=>item.selected = true)
}
const deSelectAll = (items:Array<Selectable>)=>{
    items.forEach(item=>item.selected = false)

}
return {isSeletedAll,partialSelected,toggleSelection,selectAll,deSelectAll}
}