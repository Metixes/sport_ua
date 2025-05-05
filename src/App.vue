<script setup lang="ts">
import Header from './components/app/header/Header.vue'
import PageNav from '@/components/PageNav.vue'

import { RouterView } from 'vue-router'
import { BreadcrumbLinks, PageNavLinks } from '@/data/mockData'
</script>

<template>
  <Header />
  <PageNav :breadcrumb="BreadcrumbLinks" :links="PageNavLinks" />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped></style>
