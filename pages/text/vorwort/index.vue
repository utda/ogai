<script setup lang="ts">
import "splitpanes/dist/splitpanes.css";
import { loadXml } from "~/utils/common";

import { Pane } from "~/types/common";

const { xmlString, xmlDoc, panes, url, color } = useSettings();

const publicRuntimeConfig = useRuntimeConfig().public;

const manifest =
  "https://iiif.dl.itc.u-tokyo.ac.jp/repo/iiif/d99de8a4-5abf-92ef-8efb-6770cce89e22/manifest";
const canvas =
  "https://iiif.dl.itc.u-tokyo.ac.jp/repo/iiif/d99de8a4-5abf-92ef-8efb-6770cce89e22/canvas/p3";

const xmlUrl = `${publicRuntimeConfig.baseURL}/data/xml/vorwort.xml`;
url.value = xmlUrl;

color.value = "#00008b";

onMounted(async () => {
  const [xmlDoc_, xmlString_] = await loadXml(xmlUrl);
  xmlDoc.value = xmlDoc_;
  xmlString.value = xmlString_;
});

const defaultPanes: Pane[] = [
  {
    size: 30,
    items: [
      {
        id: "0-0",
        label: "書誌情報",
        componentKey: "PanePartMenu",
        size: 100,
      },
    ],
  },
  {
    size: 40,
    items: [
      {
        id: "1-0",
        label: "本文",
        componentKey: "PanePartText",
        size: 100,
      },
    ],
  },
  {
    size: 30,
    items: [
      {
        id: "2-0",
        label: "画像",
        componentKey: "PanePartImage",
        props: {
          manifest: manifest,
          canvas: canvas,
        },
        size: 100,
      },
    ],
  },
];

panes.value = defaultPanes;
</script>
<template>
  <ClientOnly>
    <PaneCommon></PaneCommon>
  </ClientOnly>
</template>
