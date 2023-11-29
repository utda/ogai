<script setup lang="ts">
interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});

const dataLevel = props.node?.getAttribute("data-level") || 1;

const head = "h" + dataLevel;
</script>

<template>
  <component :is="head">
    <template v-for="node_ in node?.childNodes">
      <TeiNode :node="(node_ as Element)"/>
    </template>
  </component>
</template>
