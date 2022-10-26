<template>
<li class="item">
   <VCheckBox :state="itemStatus" @click.stop="store.clickOnItemCheckBox(item)"/>
 <span class="item__name">{{item.name}}</span>   
<input type="number" min="0" class="item__count" v-model="item.count">
<VColorPicker v-model="item.color" />
</li>
</template>
<script setup lang="ts">
import VCheckBox from '@/components/VCheckBox.vue';
import VColorPicker from '@/components/VColorPicker.vue';
import type { Item } from '@/stores/models';
import { useListsStore } from '@/stores/modules';
import { computed } from 'vue';

const props = defineProps<{
    item:Item
}>()
const store = useListsStore()
const itemStatus = computed<"checked"|"unchecked">(()=>{
    return props.item.selected ? "checked":"unchecked"
})

</script>
<style scoped lang="scss">
.item{
    display: flex;
    gap: .5rem;
    align-content: center;
    align-items: center;
&__name{
    flex: 1 1;
}
&__count{
    flex: 0 1 1rem;
 min-width: 1.6rem;
 padding: 0;
 margin: 0;
 line-height: 1em;
 display: inline-block;
 border: 1px solid transparent;
}
&__count:focus{
outline: none;
border: 1px solid black;

}
&__count::-webkit-outer-spin-button,
&__count::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: textfield;
appearance: none;
  margin: 0;
}

}
.v-checkbox{
    flex: 0 1 1rem;
}

</style>