<template>
<li class="list">
   <div class="list_header" @click="toggle" :class="{open:list.open}">
<VCheckBox :state="listStatus" @click.stop="store.clickOnList(list)"/>
    {{list.name}}
   </div>
   <ul class="items" v-if="list.open">
    <VItem 
    v-for="item in list.items" :key="item.name"
:item="item"
    />
   </ul>
</li>
</template>
<script setup lang="ts">
import VCheckBox from '@/components/VCheckBox.vue';
import type { List } from '@/stores/models';
import { computed } from 'vue';
import {useSelected} from "@/composition"
import VItem from './VItem.vue';
import { useListsStore } from '@/stores/modules';

const props = defineProps<{
    list:List
}>()
const store = useListsStore()
const toggle = ()=>{
props.list.open = !props.list.open
}
const {isSeletedAll,partialSelected} = useSelected()
const listStatus = computed<"checked"|"partial"|"unchecked">(()=>{
if(isSeletedAll(props.list.items))return "checked"
if(partialSelected(props.list.items)) return "partial"
return "unchecked"
})

</script>
<style scoped lang="scss">

.list_header{
display: flex;
align-content: center;
align-items: center;
gap:.3rem;
}
.list_header:hover{
    cursor: pointer;
    color: #09c;
}
.list_header::before{
    content:"\232A";
 display: inline-block;
 line-height: .8em;
 font-size: .8em;
}
.list_header.open::before{
    content:"\232A";
transform: rotate(90deg) translateX(25%);
}
.items{
   margin:0 2.4rem; 
}
</style>