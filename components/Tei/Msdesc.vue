<script setup lang="ts">
interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});

// タイトル
const msDesc = props.node;

const institution = msDesc?.querySelector("tei-institution");

const idno = msDesc?.querySelector("tei-idno");

const objectDesc = msDesc?.querySelector("tei-objectDesc");

const extents = objectDesc?.querySelectorAll("tei-extent");
</script>

<template>
  <v-card variant="outlined">
    <v-card-text>
      <h4>{{ $t("institution") }}</h4>
      <p class="mt-2">
        {{ institution?.textContent }}
      </p>

      <h4 class="mt-5">{{ $t("idno") }}</h4>
      <p class="mt-2">
        {{ idno?.textContent }}
      </p>

      <!-- bibl-->
      <h4 class="mt-5">{{ $t("objectDesc") }}</h4>
      <p class="mt-2" v-for="extent in extents">
        <TeiNode :node="extent" />
      </p>
    </v-card-text>
  </v-card>
</template>
