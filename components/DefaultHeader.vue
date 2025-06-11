<template>
  <div class="header">
    <h1 class="header__heading">
      <a href="#">
        IT Sharks
      </a>
    </h1>
    <nav class="header__navigation" aria-label="Основная навигация">
      <div class="header__navigation-container">
        <button
          class="header__navigation-link"
          aria-label="Перейти к разделу программа"
          @click="scrollToEl('program')"
        >
          Программа
        </button>
        <button
          class="header__navigation-link"
          aria-label="Перейти к разделу кейсы"
          @click="scrollToEl('story')"
        >
          Кейсы
        </button>
        <button
          class="header__navigation-link"
          aria-label="Перейти к разделу отзывы"
          @click="scrollToEl('reviews')"
        >
          Отзывы
        </button>
      </div>

      <ButtonComponent
        variant="primary"
        class="header__navigation-button"
        @click="scrollToEl('tariffs')"
      >
        Выбрать тариф
      </ButtonComponent>
    </nav>
    <div class="header__mobile">
      <div class="header__mobile-container">
        <EmailButton
          class="header__mobile-icon"
          tag="a"
          href="mailto:timmyya999@gmail.com"
        />
        <TelegramButton
          class="header__mobile-icon"
          tag="a"
          href="https://t.me/+K-gGhf8lGYQ1NThi"
        />
      </div>
      <button @click="toggleDropdown">
        <MenuIcon />
      </button>
    </div>

    <div
      class="page-blur"
      :class="{ 'page-blur--active': isOpen }"
      @click="toggleDropdown"
    />

    <HeaderMobileMenu
      v-if="breakpointMd"
      :openMenu="isOpen"
      @toggle-dropdown="toggleDropdown"
    />
  </div>
</template>

<script setup lang="ts">
  import MenuIcon from '@assets/svg/socials/MenuIcon.vue'
  import { useDisplay } from '~/composables/useDisplay'
  import { scrollToSection } from '~/composables/useScrollTo'

  const isOpen = ref(false)

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
    toggleBodyScroll()
  }

  const toggleBodyScroll = () => {
    if (process.client) {
      if (isOpen.value) {
        document.body.style.overflow = 'hidden'
        document.body.style.touchAction = 'none'
      } else {
        document.body.style.overflow = ''
        document.body.style.touchAction = ''
      }
    }
  }

  const BREAKPOINT_MD = 768
  const { enoughWidthToShow: breakpointMd } = useDisplay(BREAKPOINT_MD)
  const { scrollToEl } = scrollToSection()


</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 100;
    padding: 20px 15px 10px;
    margin-bottom: 40px;
    background-color: var(--bg-color);

    @media (min-width: $breakpoint-sm) {
      padding: 20px 15px;
      margin-bottom: 42px;
    }

    @media (min-width: $breakpoint-md) {
      position: relative;
      padding: 0;
      margin-bottom: 90px;
    }

    @media (min-width: $breakpoint-xl) {
      margin-bottom: 75px;
    }

    &::after {
      content: '';
      position: absolute;
      height: 2px;
      background-color: var(--text-color);
      z-index: 2;
      left: 0;
      bottom: 0;
      width: 100%;
      transform: none;

      @media (min-width: $breakpoint-md) {
        left: 50%;
        transform: translateX(-50%);
        width: 100vw;
        bottom: -34px;
        height: 5px;
      }

      @media (min-width: $breakpoint-lg) {
        bottom: -20px;
      }

      @media (min-width: $breakpoint-xxl) {
        bottom: -20px;
      }

      @media (min-width: $breakpoint-xxxl) {
        bottom: -40px;
      }
    }

    &__heading {
      color: var(--text-color);
      font-size: 20px;
      font-weight: 600;
      line-height: 100%;

      @media (min-width: $breakpoint-md) {
        font-size: 24px;
      }
    }

    &__navigation {
      display: none;
      flex-direction: row;
      gap: 10px;

      @media (min-width: $breakpoint-md) {
        display: flex;
      }

      &-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--el-bg-color);
        border-radius: 500px;
        color: var(--text-color);
      }

      &-link {
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

      &-button {
        background-color: var(--decorative-color);
        color: var(--bg-color);
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;

        &:hover {
          background-color: var(--hover-decorative-color);
          color: var(--text-color);
        }

        &:active {
          background-color: var(--text-color);
          color: var(--bg-color);
        }

        @media (min-width: $breakpoint-lg) {
          font-size: 20px;
        }
      }
    }

    &__mobile {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      @media (min-width: $breakpoint-sm) {
        display: flex;
      }

      &-container {
        display: flex;
        gap: 5px;

        @media (min-width: $breakpoint-sm) {
          display: none;
          gap: 5px;
        }
      }

      &-icon {
        padding: 5px;
        width: 21px;
        height: 21px;
      }

      @media (min-width: $breakpoint-md) {
        display: none;
      }
    }
  }

  .page-blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;

    &--active {
      opacity: 1;
      pointer-events: auto;
    }
  }
</style>
