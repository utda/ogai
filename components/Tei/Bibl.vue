<script setup lang="ts">
interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});

const source = props.node
  ? props.node.getAttribute("source")?.replace("#", "")
  : null;

const { xmlDoc } = useSettings();

let note: Element | null = null;

if (source) {
  note = xmlDoc.value?.querySelector(`[xml\\:id="${source}"]`) || null;
}
</script>

<template>
  <i class="text-primary">
    <template v-if="note">
      <v-menu offset-y>
        <template v-slot:activator="{ props }">
          <span v-bind="props" class="clickable">
            <TeiNodes :nodes="node?.childNodes" />
          </span>
        </template>
        <v-card width="500">
          <div class="pa-4">
            <TeiNodes :nodes="note.childNodes" />
          </div>
        </v-card>
      </v-menu>
    </template>
    <template v-else>
      <TeiNodes :nodes="node?.childNodes" />
    </template>
  </i>
</template>
