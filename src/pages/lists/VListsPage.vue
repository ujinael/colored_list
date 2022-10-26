<template>
<div class="page">
   <VListsTree :lists="store.lists"/>
   <VListsDetail :lists="store.lists"/> 
</div>
</template>
<script setup lang="ts">
import { useListsStore } from '@/stores/modules/lists/useListsStore';
import { onMounted } from 'vue';
import VListsDetail from './views/VListsDetail.vue';
import VListsTree from './views/VListsTree.vue';
const store = useListsStore()
onMounted(()=>{
   store.fetchLists()
})

</script>
<style scoped lang="scss">
@import "./styles/lists-page.styles.scss";
</style>