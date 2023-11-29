<script setup lang="ts">
interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});
</script>

<template>
  <p>
    <template v-for="node in props.node?.childNodes">
      <TeiNode :node="(node as Element)" />
    </template>
  </p>
</template>
