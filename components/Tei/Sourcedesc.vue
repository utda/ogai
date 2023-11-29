<script setup lang="ts">
interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});

// タイトル
const sourceDesc = props.node;
</script>

<template>
  <div>
    <TeiNodes :nodes="sourceDesc?.childNodes" />
  </div>
</template>
