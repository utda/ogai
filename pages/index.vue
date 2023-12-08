<script setup lang="ts">
const items = [
  /*
  {
    name: "text-vorwort",
    en: "Vorwort : Was wir wollen (Von West nach Ost)",
    ja: "序文 : 我らが欲するもの(『東漸新誌』)",
  },
  */
  {
    name: "text-theater",
    en: "Über die Theaterfrage",
    ja: "演劇問題に就いて",
  },
];

const localePath = useLocalePath();
</script>
<template>
  <v-container>
    <v-row>
      <v-col v-for="item in items">
        <v-card variant="outlined">
          <v-card-text>
            <v-chip label class="mb-2" size="small">英語</v-chip>
            <h2 class="mb-10">{{ item.en }}</h2>

            <v-chip label class="mb-2" size="small">日本語</v-chip>
            <h2 class="mb-10">{{ item.ja }}</h2>

            <v-btn variant="flat" color="primary" :to="localePath({ name: item.name })">閲覧する</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
