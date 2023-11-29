<script setup lang="ts">
interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});

// タイトル
const encodingDesc = props.node;
</script>

<template>
  <v-card variant="outlined" class="mt-5">
    <v-card-text>
      <TeiNodes :nodes="encodingDesc?.childNodes" />
    </v-card-text>
  </v-card>
</template>
