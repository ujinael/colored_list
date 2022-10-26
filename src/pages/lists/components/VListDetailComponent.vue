<template>
<div class="list__detail_component">
<div class="list__header">
<span class="list__title">{{list.name}}</span>
<button @click="toggleState" class="list__state_btn">{{buttonTitle}}</button>
</div>
<VListDetailContent
 v-if="list.open"
 :items="getSelectedItems"
:is-sorted="isSorted"
/>

</div>
</template>
<script setup lang="ts">
import type { List } from '@/stores/models';
import { computed, ref } from 'vue';
import VListDetailContent from './VListDetailContent.vue';

const props = defineProps<{
    list:List
}>()
const isSorted = ref(true)

const buttonTitle = computed(()=>{
   return isSorted.value ? "Перемешать" : "Сортировать"
})
const toggleState = ()=>{
    isSorted.value = !isSorted.value
}
const getSelectedItems = computed(()=>{
    return props.list.items.filter(item=>item.selected)
})
</script>
<style scoped lang="scss">
.list{
 

&__detail_component{
    border: 1px solid black;
    padding: .5rem;
}
&__header{
display: flex;
justify-content: space-between;
}
&__state_btn{
    border: 1px solid #09d;
    background-color: #09d;
    border-radius: 5px;
    color: white;
}
&__state_btn:hover{
background-color: #e1f8f7;
color:#09d;
}
}
</style>