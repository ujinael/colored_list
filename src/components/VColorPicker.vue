<template>
<div class="v-color-picker" :style="styles" @click="onPickerClick">
    <input ref="colorPicker" type="color" v-model="color">
</div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';


const props = defineProps<{
modelValue:string
}>()
const emit = defineEmits(['update:modelValue'])
const color = computed<string>({
get(){return props.modelValue},
set(v){emit('update:modelValue',v)}
})
const colorPicker = ref<HTMLInputElement>()
const onPickerClick = ()=>{
    if(!colorPicker.value)return
    colorPicker.value.click()
}
const styles = computed(()=>{
    
  return{ "background-color":color.value}
}) 

</script>
<style scoped lang="scss">
.v-color-picker{
    height: 1rem;
    width: 1rem;
    position: relative;
}
.v-color-picker:hover{
    cursor: pointer;
    opacity: .8;
}
input[type=color]{
    display:inline-block;
    height: 1px;
    width: 1px;
    visibility: hidden;
    top: 0;
    left:0
}
input[type=color]::after{
    position: absolute;
    top: 100%;
    left:0 
}
</style>