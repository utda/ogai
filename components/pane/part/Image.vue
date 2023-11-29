<script setup lang="ts">
interface PropType {
  manifest: string;
  canvas: string;
}

const props = withDefaults(defineProps<PropType>(), {
  manifest: "",
  canvas: "",
});
const publicRuntimeConfig = useRuntimeConfig().public;
const url = `${publicRuntimeConfig.baseURL}/mirador/?manifest=${props.manifest}&canvas=${props.canvas}`;
</script>
<template>
  <div style="height: 100%; overflow-y: hidden">
    <iframe
      :src="url"
      width="100%"
      height="100%"
      allowfullscreen
      frameborder="0"
    ></iframe>
  </div>
</template>
