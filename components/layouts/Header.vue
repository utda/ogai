<script setup lang="ts">
import { useDisplay } from "vuetify";

import { Menu } from "@/types/common";
import { mdiOpenInNew } from "@mdi/js";

interface PropType {
  url?: string;
}

withDefaults(defineProps<PropType>(), {
  url: () => "",
});

const localePath = useLocalePath();

const runtimeConfig = useRuntimeConfig();
const publicRuntimeConfig = runtimeConfig.public;

const appConfig = useAppConfig();
const colorMain = appConfig.color.main;

const { theme, color } = useSettings();

const app_name = publicRuntimeConfig.appURL;

const menus = appConfig.menus;

const menus_: Menu[] = menus;

const { sm, xs } = useDisplay();

watch(theme, () => {
  localStorage.setItem(`${app_name}-theme`, theme.value);
});

const isMobile = computed(() => {
  return sm.value || xs.value;
});
</script>

<template>
  <v-app-bar
    :color="color || colorMain"
    flat
    :absolute="true"
    density="compact"
  >
    <v-toolbar-title>
      {{ $t(publicRuntimeConfig.siteName) }}
    </v-toolbar-title>

    <ClientOnly>
      <template v-if="!isMobile">
        <v-btn :href="url" v-if="url"> TEI/XML </v-btn>

        <template v-for="menu in menus_">
          <v-btn
            class="mx-1"
            v-if="menu.header"
            :to="menu.to ? localePath(menu.to) : ''"
            :href="menu.href ? menu.href : ''"
            :target="menu.target ? menu.target : ''"
          >
            {{ $t(menu.title) }}

            <template v-if="menu.target">
              <v-icon>{{ mdiOpenInNew }}</v-icon>
            </template>
          </v-btn>
        </template>
      </template>
    </ClientOnly>
  </v-app-bar>
</template>
