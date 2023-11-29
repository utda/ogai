<script setup lang="ts">
const { xmlDoc } = useSettings();
const xmlDoc_ = xmlDoc.value?.cloneNode(true) as Document;
const teiHeader = xmlDoc_.querySelector("tei-teiheader");

const biblStruct = teiHeader?.querySelector("tei-biblStruct");
if (biblStruct) {
  biblStruct.remove();
}

const nodes = teiHeader?.childNodes[0].childNodes;
</script>
<template>
  <div class="pa-4">
    <TeiNodes :nodes="nodes" />
  </div>
</template>
