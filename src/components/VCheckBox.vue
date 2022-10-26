<template>
<div class="v-checkbox" :class="classes">
  
</div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

type CheckBoxState = "checked"|"unchecked"|"partial"
const props = defineProps<{
state:CheckBoxState
}>()
const classes = computed(()=>{
    return{
        checked:props.state === "checked",
        partial:props.state === "partial"

    }
})
</script>
<style scoped lang="scss">
.v-checkbox{
    height: 1rem;
    width: 1rem;
    border: 1px solid black;
    position: relative;
}
.v-checkbox__content{
    color: black;
    height: inherit;
    width: inherit;
    position: relative;
}
.v-checkbox.checked::after{
 content: "\2713";  
 color: black;
 position: absolute;
 top: 50%;
 left: 50%; 
 line-height: .5rem;
 transform: translate(-50%,-50%);
 font-size: 1rem;
}
.v-checkbox.partial::after{
 content: "\025A0";  
 position: absolute;
 top: 50%;
 left: 50%; 
 line-height: .5rem;
 transform: translate(-50%,-50%);
 font-size: 1rem;
}
</style>