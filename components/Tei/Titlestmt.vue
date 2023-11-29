<script setup lang="ts">
import { mdiOpenInNew } from "@mdi/js";

interface PropType {
  node: Element | null;
}

const props = withDefaults(defineProps<PropType>(), {
  node: null,
});

// タイトル
const titleStmt = props.node;
const titles = titleStmt?.querySelectorAll("tei-title") || [];

const authors = titleStmt?.querySelectorAll("tei-author") || [];

const fix = (element: Element) => {
  return element.querySelector("tei-persName") || element;
};

const hasIdno = (author: Element) => {
  const idno = author.querySelector("tei-idno");
  if (idno) {
    return true;
  } else {
    return false;
  }
};
</script>

<template>
  <v-card variant="outlined">
    <v-card-text>
      <h3>{{ $t("title") }}</h3>
      <p class="mt-2" v-for="title in titles">
        <v-chip label class="ma-1">{{
          $t(title.getAttribute("xml:lang") || "")
        }}</v-chip>
        {{ title.textContent }}
      </p>

      <h3 class="mt-5">{{ $t("author") }}</h3>
      <p class="mt-2" v-for="author in authors">
        <v-chip label class="ma-1">{{
          $t(author.getAttribute("xml:lang") || "")
        }}</v-chip>
        {{ fix(author).textContent }}

        <template v-if="author.getAttribute('corresp')">
          <a
            :href="`https://viaf.org/viaf/${
              author.getAttribute('corresp')?.split('#viaf')[1]
            }/`"
            target="_blank"
            >VIAF <v-icon class="mb-1">{{ mdiOpenInNew }}</v-icon></a
          >
        </template>

        <template v-if="hasIdno(author)">
          <a
            :href="`https://viaf.org/viaf/${
              author.querySelector('tei-idno')?.textContent
            }/`"
            target="_blank"
            >VIAF <v-icon class="mb-1">{{ mdiOpenInNew }}</v-icon></a
          >
        </template>
      </p>
    </v-card-text>
  </v-card>
</template>
