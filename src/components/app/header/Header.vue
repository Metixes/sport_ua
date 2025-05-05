<template>
  <header class="header">
    <div class="header-left">
      <div class="header-burger" @click="isOpenBurger = !isOpenBurger">
        <span
          :class="['header-burger-icon', isOpenBurger ? 'header-burger-icon-active' : '']"
        ></span>
        <span
          :class="['header-burger-icon', isOpenBurger ? 'header-burger-icon-active' : '']"
        ></span>
        <span
          :class="['header-burger-icon', isOpenBurger ? 'header-burger-icon-active' : '']"
        ></span>
      </div>
      <IconLogo class="header-logo" />
    </div>
    <nav class="header-nav"></nav>
    <div class="header-right">
      <div class="header-right-live-match">
        <IconLive class="header-right-icon" />
        Матчи
      </div>
      <OverlayBadge class="header-right-icon star-icon" severity="warn">
        <IconStar class="header-right-icon" />
      </OverlayBadge>
      <OverlayBadge class="header-right-icon bell-icon" value="2" severity="danger">
        <IconBell class="header-right-icon" />
      </OverlayBadge>
      <IconSearch class="header-right-icon search-icon" />
      <span class="header-user-profile"> D </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import OverlayBadge from 'primevue/overlaybadge'
import IconLogo from '@/components/icons/IconLogo.vue'
import IconStar from '@/components/icons/IconStar.vue'
import IconBell from '@/components/icons/IconBell.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconLive from '@/components/icons/IconLive.vue'

const isOpenBurger = ref(false)
</script>

<style src="@/assets/styles/components/app/header/header.scss" lang="scss" scoped></style>
