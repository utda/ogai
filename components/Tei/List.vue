<script setup lang="ts">
interface PropType {
  node?: Element | null; // Node;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null // () => initialNode,
});

const childNodes = props.node?.childNodes;
const childNodes_: Node[] = [];
let head: Node | null = null;
if (childNodes) {
  for (const childNode of childNodes) {
    const nodeName = childNode.nodeName.toLowerCase();
    if (nodeName === "tei-item") {
      childNodes_.push(childNode);
    } else if (nodeName === "tei-head") {
      head = childNode;
    }
  }
}
</script>

<template>
  <v-list density="compact">
    <v-list-subheader v-if="head">
      <template v-for="node in head.childNodes">
        <TeiNode :node="(node as Element)" />
      </template>
    </v-list-subheader>
    <template v-for="node in childNodes_">
      <TeiNode :node="(node as Element)" />
    </template>
  </v-list>
</template>
