<template>
  <section class="page-nav">
    <div class="page-nav-info">
      <IconBall class="page-nav-info-icon" />
      <h5 class="page-nav-info-title">Футбол</h5>
    </div>
    <nav class="page-nav-links">
      <RouterLink
        class="page-nav-links-link"
        v-for="link in links"
        :key="link.label"
        :to="link.url"
      >
        {{ link.label }}
      </RouterLink>
    </nav>
  </section>
  <Breadcrumb :model="breadcrumb" class="breadcrumb-nav">
    <template #item="{ item }">
      <RouterLink v-if="item.url" :to="item.url" class="breadcrumb-nav-link">
        {{ item.label }}
      </RouterLink>
    </template>
  </Breadcrumb>
</template>

<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import IconBall from '@/components/icons/IconBall.vue'

import { RouterLink } from 'vue-router'
import { BreadcrumbLinks, PageNavLinks } from '@/data/mockData'
import type { INavigationLinks } from '@/types/types'

interface IPageNavProps {
  links: INavigationLinks[]
  breadcrumb: INavigationLinks[]
}

const { links, breadcrumb } = defineProps<IPageNavProps>()
</script>

<style src="@/assets/styles/components/app/pages/page-nav.scss" scoped></style>
