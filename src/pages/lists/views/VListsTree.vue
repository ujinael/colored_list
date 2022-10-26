<template>
<div class="page_component">
    <ul class="lists">
        <VList
        v-for="list in lists" :key="list.name"
         :list="list"/>
    </ul>
</div>
</template>
<script setup lang="ts">
import type { List } from "@/stores/models";
import VList  from "../components/VList.vue"
defineProps<{
    lists:List[]
}>()
</script>
<style scoped lang="scss">

</style>