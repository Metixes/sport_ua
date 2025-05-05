<template>
  <div class="match-result">
    <div v-for="(result, index) in results" :key="index" :class="['result-box', result]">
      <component class="result-icon" :is="symbol(result)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconCheck from '@/components/icons/IconCheck.vue'
import IconCancel from '@/components/icons/IconCancel.vue'
import IconEquals from '@/components/icons/IconEquals.vue'

interface ITeamFormStatusProps {
  results: string[]
}

const { results } = defineProps<ITeamFormStatusProps>()

const symbol = (res: string) => {
  switch (res) {
    case 'W':
      return IconCheck
    case 'L':
      return IconCancel
    case 'D':
      return IconEquals
  }
}
</script>

<style src="@/assets/styles/components/ui/team-form-status.scss" lang="scss" scoped></style>
