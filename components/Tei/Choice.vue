<script setup lang="ts">
interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});

const orig = props.node ? props.node.querySelector("tei-orig") : null;
const reg = props.node ? props.node.querySelector("tei-reg") : null;
</script>

<template>
  <template v-if="orig && reg">
    <v-menu offset-y>
      <template v-slot:activator="{ props }">
        <span v-bind="props" class="clickable text-error">
          <TeiNodes :nodes="(orig.childNodes)" />
        </span>
      </template>
      <v-card>
        <div class="pa-4">
          <TeiNodes :nodes="reg.childNodes" />
        </div>
      </v-card>
    </v-menu>
  </template>
  <template v-else>
    <TeiNodes :tei-nodes="node?.childNodes" />
  </template>
</template>
