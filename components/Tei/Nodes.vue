<script setup lang="ts">
interface PropType {
  nodes: NodeListOf<ChildNode> | null
}

withDefaults(defineProps<PropType>(), {
  nodes: null,
});
</script>
<template>
  <template v-for="node in nodes">
    <TeiNode :node="(node as Element)" />
  </template>
</template>
