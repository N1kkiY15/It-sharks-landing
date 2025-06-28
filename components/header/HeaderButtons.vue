<template>
  <div class="header-buttons">
    <button
      class="header-buttons__link"
      aria-label="Перейти к разделу программа"
      @click="scrollToEl('program')"
    >
      Программа
    </button>
    <button
      class="header-buttons__link"
      aria-label="Перейти к разделу кейсы"
      @click="scrollToEl('story')"
    >
      Кейсы
    </button>
    <button
      class="header-buttons__link"
      aria-label="Перейти к разделу отзывы"
      @click="scrollToEl('reviews')"
    >
      Отзывы
    </button>
  </div>
</template>

<script setup lang="ts">
  import { scrollToSection } from '~/composables/useScrollTo'

  const { scrollToEl } = scrollToSection()
</script>

<style scoped lang="scss">
  .header-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--el-bg-color);
    border-radius: 500px;
    color: var(--text-color);

    &__link {
      font-weight: 400;
      font-size: 16px;
      padding: 15px 20px;
      line-height: 100%;
      letter-spacing: 1px;
      color: inherit;
      position: relative;
      border-radius: 500px;
      transition: background-color 0.3s ease;

      &:first-child {
        padding-left: 30px;
        padding-right: 30px;
      }

      &:last-child {
        padding-right: 30px;
        padding-left: 30px;
      }

      &:hover {
        background-color: var(--hover-header-container-color);
      }

      &:active {
        background-color: var(--text-color);
        color: var(--bg-color);
      }

      @media (min-width: $breakpoint-lg) {
        padding: 20px 15px;
        font-size: 20px;
      }
    }
  }
</style>