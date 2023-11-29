<script setup lang="ts">
interface PropType {
  node?: Element | null; // Node;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null, // () => initialNode,
});

const height = props.node?.querySelector("tei-height");
const width = props.node?.querySelector("tei-width");
const unit = props.node?.getAttribute("unit");
</script>

<template>
  <span>
    <template v-if="height">{{ height.textContent }}</template>
    <span class="mx-2" v-if="height && width">x</span>
    <template v-if="width">{{ width.textContent }}</template>
    <span class="mx-2">
      {{ unit }}
    </span>
  </span>
</template>
