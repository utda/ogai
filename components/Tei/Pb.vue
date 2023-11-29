<script setup lang="ts">
interface PropType {
  node: Element | null;
}

withDefaults(defineProps<PropType>(), {
  node: null,
});
</script>

<template>
  <template v-if="node && node.getAttribute('n')">
    <div class="text-grey">[{{ node.getAttribute("n") }}]</div>
  </template>
</template>
