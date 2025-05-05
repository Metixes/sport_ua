<template>
  <section class="page-content">
    <section class="league-content">
      <header class="league-content-header">
        <section class="league-content-header-info">
          <img
            class="league-content-header-logo"
            src="@/assets/images/ua_league.png"
            alt="UA League"
          />
          <div class="league-content-header-info-wrapper">
            <h1 class="league-content-header-info-title">Украинская Премьер-Лига</h1>
            <span class="league-content-header-info-season">Сезон 2019/2020 32-й тур</span>
          </div>
        </section>
        <Tabs class="league-content-header-nav" value="Таблица">
          <TabList>
            <Tab v-for="tab in tabsPage" :key="tab.label" :value="tab.label">
              <span>{{ tab.label }}</span>
            </Tab>
          </TabList>
        </Tabs>
      </header>
      <div class="table-header">
        <h3 class="table-header-title">Турнирная таблица</h3>
        <div class="table-header-tabs">
          <button
            v-for="tab in tabsTable"
            :key="tab"
            :class="['table-header-tabs-tab', { 'table-header-tab-active': activeTab === tab }]"
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>
      </div>
      <DataTable
        :value="teams"
        :sortField="'points'"
        :sortOrder="-1"
        class="table"
        v-for="(teams, group) in teams"
        :key="group"
      >
        <Column class="table-row" :header="'Група ' + group">
          <template #body="{ data, index }">
            <div class="table-row-info">
              <span
                v-tooltip.bottom="'Лига чемпионов'"
                :class="[
                  'table-row-info-position',
                  { [`table-row-info-position--${index}`]: index <= 2 },
                ]"
                placeholder="Bottom"
                >{{ index + 1 }}</span
              >
              <img
                class="table-row-img"
                :src="data.logo"
                width="24"
                :alt="data.name"
                :onerror="(e) => (e.target.src = getImage())"
              />
              <p class="table-row-name">{{ data.name }}</p>
            </div>
          </template>
        </Column>
        <Column field="games" header="Игры" class="games" />
        <Column field="wins" header="В" class="wins" />
        <Column field="draws" header="Н" class="draws" />
        <Column field="loses" header="П" class="loses" />
        <Column header="З - П" class="scored-conceded">
          <template #body="{ data }">{{ `${data.scored} - ${data.conceded}` }}</template>
        </Column>
        <Column header="Форма" class="form">
          <template #body="{ data }">
            <TeamFormStatus :results="data.form" />
          </template>
        </Column>
        <Column field="points" header="Очки" class="points" />
      </DataTable>
      <section class="key-guide-wrapper-desktop">
        <KeyGuide title="Квалификация" :items="guideLeague" type="dots" />
        <KeyGuide title="Сокращения" :items="guideAbbreviation" type="abbr" />
        <KeyGuide title="Форма" :items="guideTeamForm" type="abbr" />
      </section>
      <section class="key-guide-wrapper-mobile">
        <KeyGuide title="Квалификация" :items="mobileGuideLeague" type="dots" />
        <div class="key-guide-wrapper-mobile-items">
          <KeyGuide title="Сокращения" :items="mobileGuideAbbreviation" type="abbr" />
          <KeyGuide
            class="key-guide-wrapper-mobile-item"
            :items="mobileGuideTeamForm"
            type="abbr"
          />
        </div>
      </section>
    </section>
    <Aside />
  </section>
</template>

<script setup lang="ts">
import type { ITeams } from '@/types/types'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import TeamFormStatus from '@/components/ui/TeamFormStatus.vue'
import Aside from '@/components/app/pages/Aside.vue'
import KeyGuide from '@/components/ui/KeyGuide.vue'
import Tabs from 'primevue/tabs'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import { ref, computed, onMounted } from 'vue'
import { useTeamsRequest } from '@/stores/teamsRequest'
import {
  tabsTable,
  tabsPage,
  guideLeague,
  guideAbbreviation,
  guideTeamForm,
  mobileGuideLeague,
  mobileGuideAbbreviation,
  mobileGuideTeamForm,
} from '@/data/mockData'

const teamsRequest = useTeamsRequest()
const activeTab = ref(tabsTable[0])

const teams = computed<Record<string, ITeams[]>>(() => {
  const teamsCopy = JSON.parse(JSON.stringify(teamsRequest.teams))
  const formattedTeams: Record<string, ITeams[]> = {}

  if (activeTab.value === 'Дома' || activeTab.value === 'В гостях') {
    teamsCopy.forEach((team: ITeams) => {
      team.games = Math.floor(Math.random() * 5) + 1
      team.points = Math.floor(Math.random() * 5) + 1
    })
  }

  teamsCopy.forEach((team: ITeams) => {
    const group = team.group
    if (!formattedTeams[group]) {
      formattedTeams[group] = []
    }
    formattedTeams[group].push(team)
  })

  return formattedTeams
})

const getImage = () => {
  return new URL('@/assets/images/logo-error.webp', import.meta.url)
}

onMounted(() => {
  teamsRequest.getTeams()
})
</script>

<style src="@/assets/styles/pages/home.scss" lang="scss" scoped></style>
