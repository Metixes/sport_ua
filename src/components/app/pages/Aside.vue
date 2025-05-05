<template>
  <aside class="aside">
    <div class="aside-news">
      <h2 class="aside-news-title">Главные новости</h2>
      <RouterLink to="#" class="aside-news-link">
        <IconArrowRight class="aside-news-link-icon" />
        Артем ФРАНКОВ: «Я не сторонник перехода на систему весна-осень»
      </RouterLink>
      <RouterLink to="#" class="aside-news-link">
        <IconArrowRight class="aside-news-link-icon" />
        Welcome to the team! Макгрегор поприветствовал Пакьяо в своей команде
      </RouterLink>
      <RouterLink to="#" class="aside-news-link">
        <IconArrowRight class="aside-news-link-icon" />
        КАРИКАТУРА ДНЯ. Сэйв столетия от Бэнкса после удара Пеле
      </RouterLink>
      <RouterLink to="#" class="aside-news-link">
        <IconArrowRight class="aside-news-link-icon" />
        Лунин стал игроком месяца в Овьедо
      </RouterLink>
      <RouterLink to="#" class="aside-news-link">
        <IconArrowRight class="aside-news-link-icon" />
        Welcome to the team! Макгрегор поприветствовал Пакьяо в своей команде
      </RouterLink>
    </div>
    <div class="aside-trends">
      <h2 class="aside-trends-title">Тренды</h2>
      <div class="aside-trends-links">
        <RouterLink to="#" class="aside-trends-link">
          <IconLightning class="aside-trends-link-icon" />
          Коронавирус
        </RouterLink>
        <RouterLink to="#" class="aside-trends-link">
          <IconLightning class="aside-trends-link-icon" />
          Трансферы лета
        </RouterLink>
        <RouterLink to="#" class="aside-trends-link">
          <IconLightning class="aside-trends-link-icon" />
          Рейтинг клубов
        </RouterLink>
        <RouterLink to="#" class="aside-trends-link">
          <IconLightning class="aside-trends-link-icon" />
          Барселона
        </RouterLink>
      </div>
    </div>
    <div class="aside-video">
      <h2 class="aside-video-title">
        Видео
        <IconVideoFill class="aside-video-title-icon" />
      </h2>
      <div class="aside-video-wrapper">
        <div class="aside-video-cards">
          <RouterLink to="/" class="aside-video-card">
            <img class="aside-video-card-bg" src="@/assets/images/football_bg.jpg" alt="Футбол" />
            <div class="aside-video-card-header">
              <span class="aside-video-card-category">Футбол</span>
              <span class="aside-video-card-video-icon-wrapper">
                <IconVideo />
              </span>
            </div>
            <h4 class="aside-video-card-title">
              Руслан КОСТЫШИН: «Футболисты выступили с инициативой сократить зарплаты»
            </h4>
            <div class="aside-video-card-footer">
              <span class="aside-video-card-footer-date">28 октября 2020</span>
              <span class="aside-video-card-footer-views">
                <IconMessage class="aside-video-card-footer-views-icon" />
                999
              </span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import IconVideo from '@/components/icons/IconVideo.vue'
import IconVideoFill from '@/components/icons/IconVideoFill.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconLightning from '@/components/icons/IconLightning.vue'
import IconMessage from '@/components/icons/IconMessage.vue'
</script>

<style src="@/assets/styles/components/app/pages/aside.scss" lang="scss" scoped></style>
