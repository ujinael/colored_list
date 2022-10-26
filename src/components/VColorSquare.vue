<template>
    <div class="v-color-square" :style="styles">
        
    </div>
    </template>
    <script setup lang="ts">
    import { computed } from 'vue';
    
    const props = defineProps<{
    color:string
    }>()
    const styles = computed(()=>{
      return{ "background-color":props.color}
    }) 
    
    </script>
    <style scoped lang="scss">
    .v-color-square{
        height: .8rem;
        width: .8rem;
    }
    .v-color-square:hover{
      cursor: pointer;
      opacity: .7;
    }
  
    </style>