<template>
  <div class="list__content">
    <div class="list__sorted_colors" v-if="isSorted">
      <div class="list__item" v-for="item in items" :key="item.name">
        <VColorSquare @click="store.decreaseItemCount(item)"
          v-for="color,index in store.getColors(item)"
          :key="index"
          :color="color.value"
        />
      </div>
    </div>
    <div class="list__mixed_colors" v-else>
        <div class="list__item">
            <VColorSquare
          v-for="color,index in getMixedColors"
          :key="index"
          :color="color.value"
        />
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import VColorSquare from "@/components/VColorSquare.vue";
import type { Item } from "@/stores/models";
import { useListsStore } from "@/stores/modules";
import { computed } from "vue";

const props = defineProps<{
  isSorted: boolean;
  items: Item[];
}>();
const store = useListsStore()

const getMixedColors = computed(() => {
  const colorsArray = props.items.map(store.getColors).flat(1);
  return colorsArray.sort(() => Math.random() - 0.5);
});
</script>

<style scoped lang="scss">
.list {
  &__content {
    margin-top: 1rem;
    width: inherit;
  }
  &__sorted_colors {
    display: grid;
    gap: 0.4rem;
  }
  &__item {
    display: grid;
    gap: 0.2rem;
    grid-template-columns: repeat(auto-fit, 0.8rem);
  }
}
</style>
