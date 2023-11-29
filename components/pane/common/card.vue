<script setup lang="ts">
import { resolveDynamicComponent } from "vue";
import { PaneItem } from "~/types/common";

interface PropType {
  item: PaneItem;
  height: number;
}

const props = withDefaults(defineProps<PropType>(), {
  item: () => ({
    id: "", // デフォルト値を設定
    componentKey: "", // デフォルト値を設定
    size: 0, // デフォルト値を設定
  }),
  height: 0,
});

let barHeight = 32;

const pane_height = computed(() => {
  return props.height - barHeight;
});

const isComponentExist = computed(() => {
  if (!props.item.componentKey) return false;
  const isComponent =
    typeof resolveDynamicComponent(props.item.componentKey) !== "string";
  return isComponent;
});
</script>
<template>
  <div style="height: 100%">
    <v-layout :style="`height: ${barHeight}px`">
      <v-system-bar window>
        <span>{{ $t(item.label || "") }}</span>
        <v-spacer></v-spacer>
      </v-system-bar>
    </v-layout>
    <v-card
      variant="flat"
      rounded="0"
      :style="`height: ${pane_height}px;`"
      style="overflow-y: auto"
    >
      <template v-if="isComponentExist">
        <component
          :height="pane_height"
          :key="item.id"
          :id="item.id"
          :is="resolveComponent(item.componentKey)"
          v-bind="item.props"
        ></component>
      </template>
      <template v-else>
        <v-alert
          type="warning"
          class="ma-2"
          text="適切なコンポーネントが設定されていません。"
        ></v-alert>
      </template>
    </v-card>
  </div>
</template>
