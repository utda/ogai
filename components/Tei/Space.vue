<script setup lang="ts">
interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});
const quantity = props.node && props.node.getAttribute("quantity")
  ? Number(props.node.getAttribute("quantity"))
  : 1;
</script>

<template>
  <span>
    <template v-for="n in quantity">&nbsp;</template>
  </span>
</template>
