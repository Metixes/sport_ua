<template>
  <div class="key-guide">
    <h3 class="key-guide-title" v-if="title">{{ title }}</h3>
    <ul v-if="type === 'dots'" class="key-guide-list">
      <li class="key-guide-item" v-for="(item, index) in items" :key="index">
        <span :class="`key-guide-dot key-guide-dot--${index}`"></span>
        {{ item }}
      </li>
    </ul>

    <ul v-else-if="type === 'abbr'" class="key-guide-list">
      <li v-for="(item, index) in items" :key="index" class="key-guide-item">
        <component v-if="item.icon" :is="TeamFormStatus" :results="[item.key]" />
        <span v-else class="key-guide-abbr">{{ item.key }}</span>
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import TeamFormStatus from '@/components/ui/TeamFormStatus.vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  items: {
    type: [Array, Object],
    required: true,
  },
  type: {
    type: String,
    validator: (value) => ['dots', 'abbr'].includes(value),
    required: true,
  },
})
</script>

<style src="@/assets/styles/components/ui/key-guide.scss" lang="scss" scoped></style>
