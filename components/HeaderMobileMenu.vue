<template>
  <transition name="slide">
    <div v-if="props.openMenu" class="header-menu">
      <button class="header-menu__button" @click="$emit('toggle-dropdown')">
        <MenuIcon />
      </button>
      <div class="header-menu__container">
        <button
          v-for="(button, index) in menuButtons"
          :key="index"
          class="header-menu__container-button"
          @click="scrollToSection(button.sectionId)"
        >
          {{ button.text }}
        </button>
      </div>
      <StarMenu class="header-menu__decoration" />
    </div>
  </transition>
</template>

<script setup lang="ts">
  import MenuIcon from '@assets/svg/socials/MenuIcon.vue'
  import StarMenu from '@assets/svg/stars/StarMenu.vue'
  import type { menuButton } from '@/types'

  interface Props {
    openMenu: boolean;
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{
    (e: 'toggle-dropdown'): void
  }>()

  const menuButtons: menuButton[] = [
    { text: 'Обо мне', sectionId: 'about' },
    { text: 'Команда', sectionId: 'team' },
    { text: 'Программа', sectionId: 'program' },
    { text: 'Кейсы', sectionId: 'cases' },
    { text: 'Кому подойдет', sectionId: 'suitable' },
    { text: 'Отзывы', sectionId: 'reviews' },
    { text: 'Выбрать тариф', sectionId: 'tariffs' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    emit('toggle-dropdown')
  }

</script>

<style scoped lang="scss">
  .header-menu {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 20px 16px 20px 10px;
    width: 176px;
    height: 100vh;
    background-color: var(--header-menu-color);
    z-index: 3;
    overflow-y: auto;

    @media (min-width: $breakpoint-sm) {
      width: 235px;
      padding-left: 20px;
    }

    &__button {
      align-self: end;
      margin-bottom: 20px;
    }

    &__container {
      display: flex;
      flex-direction: column;
      gap: 5px;

      @media (min-width: $breakpoint-sm) {
        gap: 10px;
      }

      :last-child {
        color: var(--bg-color);
        background-color: var(--decorative-color);
      }

      &-button {
        color: var(--text-color);
        background-color: var(--el-bg-color);
        border-radius: 500px;
        width: max-content;
        padding: 10px 20px;
        font-weight: 400;
        font-size: 12px;
        line-height: 100%;

        @media (min-width: $breakpoint-sm) {
          font-size: 14px;
        }
      }
    }

    &__decoration {
      width: 40px;
      height: 40px;
      align-self: end;
      margin-top: auto;
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100%);
  }
</style>