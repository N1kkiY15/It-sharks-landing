<template>
  <div class="header-mobile">
    <div class="header-mobile__container">
      <EmailButton
        class="header-mobile__icon"
        tag="a"
        href="mailto:timmyya999@gmail.com"
      />
      <TelegramButton
        class="header-mobile__icon"
        tag="a"
        href="https://t.me/+K-gGhf8lGYQ1NThi"
      />
    </div>
    <button class="header-mobile__button" @click="$emit('toggle-dropdown')">
      <MenuIcon />
    </button>
  </div>
</template>

<script setup lang="ts">
  import MenuIcon from '@assets/svg/socials/MenuIcon.vue'

  defineEmits<{
    (e: 'toggle-dropdown'): void
  }>()
</script>



<style scoped lang="scss">
  .header-mobile {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    @media (min-width: $breakpoint-sm) {
      display: flex;
    }

    &__container {
      display: flex;
      gap: 10px;

      @media (min-width: $breakpoint-sm) {
        display: none;
      }
    }

    &__icon {
      padding: 5px;
      max-width: 25px;
      max-height: 25px;
    }

    @media (min-width: $breakpoint-md) {
      display: none;
    }

    &__button {
      display: flex;
      align-items: center;
      height: 25px;
    }
  }
</style>