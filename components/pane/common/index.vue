<script setup lang="ts">
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import { Pane as Pane_ } from "~/types/common";

const { panes } = useSettings();

const items = ref<Pane_[]>(panes.value);

const setSize = () => {
  for (const item of items.value) {
    if (!item.size) {
      item.size = 100 / items.value.length;
    }

    for (const item2 of item.items) {
      if (!item2.size) {
        item2.size = 100 / item.items.length;
      }
    }
  }
};
setSize();

const windowHeight = ref(window.innerHeight);
const windowWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener("resize", () => {
    windowHeight.value = window.innerHeight;
    windowWidth.value = window.innerWidth;
  });
});

const barHeight = 48;

const resizeV = (e: any, c: number) => {
  for (let i = 0; i < e.length; i++) {
    items.value[c].items[i].size = e[i].size;
  }
};

const resizeH = (e: any) => {
  for (let i = 0; i < e.length; i++) {
    items.value[i].size = e[i].size;
  }
};
</script>
<template>
  <div>
    <splitpanes
      @resize="resizeH($event)"
      :style="`height: ${windowHeight - barHeight}px`"
    >
      <pane :size="item.size" v-for="(item, c) in items">
        <splitpanes horizontal @resize="resizeV($event, c)">
          <pane :size="e.size" v-for="e in item.items">
            <pane-common-card
              :item="e"
              :height="((windowHeight - barHeight) * e.size) / 100"
            ></pane-common-card>
          </pane>
        </splitpanes>
      </pane>
    </splitpanes>
  </div>
</template>
<style>
.splitpanes {
  background-color: #f8f8f8;
}

.splitpanes__splitter {
  background-color: #ccc;
  position: relative;
}
.splitpanes__splitter:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.4s;
  background-color: rgba(255, 0, 0, 0.3);
  opacity: 0;
  z-index: 1;
}
.splitpanes__splitter:hover:before {
  opacity: 1;
}
.splitpanes--vertical > .splitpanes__splitter:before {
  left: 0px;
  /* right: -30px; */
  right: -8px;
  height: 100%;
}
.splitpanes--horizontal > .splitpanes__splitter:before {
  top: 0px;
  /* bottom: -30px; */
  bottom: -8px;
  width: 100%;
}
</style>
