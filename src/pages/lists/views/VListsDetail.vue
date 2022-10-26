<template>
<div class="page_component">

<VListDetailComponent
v-for="list in lists" :key="list.name"
:list="list"
/>
</div>
</template>
<script setup lang="ts">
import type { List } from '@/stores/models';
import VListDetailComponent from '../components/VListDetailComponent.vue';

defineProps<{
lists:List[]
}>()
</script>
<style scoped lang="scss">
.page_component{
    display: grid;
    gap: 1rem;
    align-content: flex-start;
}
</style>