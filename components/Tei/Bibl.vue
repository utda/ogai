<script setup lang="ts">
interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});
</script>

<template>
  <i class="text-primary">
    <template v-for="node in props.node?.childNodes">
      <TeiNode :node="(node as Element)" />
    </template>
  </i>
</template>
