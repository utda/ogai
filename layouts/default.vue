<script setup lang="ts">
const { url } = useSettings();
</script>
<template>
  <LayoutsApp>
    <LayoutsHeader :url="url"> </LayoutsHeader>

    <v-main>
      <slot />
    </v-main>
  </LayoutsApp>
</template>
