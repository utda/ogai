<script setup lang="ts">
interface PropType {
  node?: Element | null; // Node;
}

withDefaults(defineProps<PropType>(), {
  node: null, // () => initialNode,
});
</script>

<template>
  <v-list-item>
    <TeiNodes :nodes="node?.childNodes" />
  </v-list-item>
</template>
