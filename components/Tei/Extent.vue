<script setup lang="ts">
interface PropType {
  node: Element | null;
}

withDefaults(defineProps<PropType>(), {
  node: null,
});
</script>

<template>
  <span>
    <TeiNodes :nodes="node?.childNodes" />
  </span>
</template>
