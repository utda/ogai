<script setup lang="ts">
import { resolveDynamicComponent } from "vue";

interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});

const nodeName = computed(() => {
  return props.node?.nodeName.replace("#", "").toLowerCase() || "";
});

const attributes: any = computed(() => {
  const attributes = props.node?.attributes;
  if (!attributes) return {};
  const result: Record<string, string> = {};
  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes[i];
    result[attribute.name] = attribute.value;
  }
  return result;
});

const isComponentExist = computed(() => {
  const name = nodeName.value;
  const isComponent = typeof resolveDynamicComponent(name) !== "string";
  return isComponent;
});

const style = computed(() => {
  const style = props.node?.getAttribute("style");
  return style || "";
});
</script>

<template>
  <template v-if="nodeName === 'text'">
    {{ node?.nodeValue }}
  </template>
  <template v-else-if="!isComponentExist">
    <component :is="nodeName" v-bind="attributes" :style="style">
      <TeiNode
        v-for="childNode in node?.childNodes"
        :node="(childNode as Element)"
      />
    </component>
  </template>
  <template v-else>
    <component :is="resolveComponent(nodeName)" :node="node" :style="style">
      <TeiNode
        v-for="childNode in node?.childNodes"
        :node="(childNode as Element)"
      />
    </component>
  </template>
</template>
