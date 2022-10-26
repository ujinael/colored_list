import { useSelected } from "@/composition";
import { useRandom } from "@/composition/random";
import { defineStore } from "pinia";
import { Item } from "./entities/item.entity";
import { List } from "./entities/list.entity";
interface ListsState{
    lists:List[]
}
export const useListsStore = defineStore("lists",{
state():ListsState {
    return{
lists:[]
    }
},

actions:{
setItemsForList(count:number,list:List){
    const {getRandomColor,getRandomNumber} = useRandom()
list.items =  [...new Array(count).keys()].map(i=>{
    return new Item(`Item ${i+1}`,getRandomNumber(1,40),getRandomColor())
})
},
createOneList(index:number):List{
    const {getRandomNumber} = useRandom()

    const list = new List(`List ${index+1}`)
    this.setItemsForList(getRandomNumber(4,10),list)
    return list
},
createLists(count:number):List[]{

const lists = [...new Array(count).keys()].map(this.createOneList)

return lists
},
fetchLists(){
this.lists = this.createLists(5)
},
clickOnList(list:List){
    const {isSeletedAll, partialSelected,selectAll,deSelectAll} = useSelected()
    if(isSeletedAll(list.items)){        
        deSelectAll(list.items)
    return
    }
    if(partialSelected(list.items))return;
selectAll(list.items)

},
clickOnItemCheckBox(item:Item){
const {toggleSelection} = useSelected()
toggleSelection(item)
}, 
getColors(item:Item){
    return [...Array(item.count).keys()].map((i) => ({ value: item.color }))
 },
decreaseItemCount(item:Item){
if(item.count-1 <0)return
item.count--   
}
},


})