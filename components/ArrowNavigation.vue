<template>
  <nav class="navigation" aria-label="Навигация по команде">
    <ButtonComponent
      variant="primary"
      class="navigation__button navigation__button--left"
      aria-label="Предыдущая карточка"
      @click="previousCard"
    >
      <ArrowAccent class="navigation__arrow" aria-hidden="true" />
    </ButtonComponent>

    <ButtonComponent
      variant="primary"
      class="navigation__button"
      @click="nextCard"
      aria-label="Следующая карточка"
    >
      <ArrowAccent class="navigation__arrow" aria-hidden="true" />
    </ButtonComponent>
  </nav>
</template>

<script setup lang="ts">
  import ArrowAccent from '@assets/svg/arrows/ArrowAccent.vue'

  const emit = defineEmits<{
    (e: 'previous-card'): void
    (e: 'next-card'): void
  }>()

  const previousCard = () => {
    emit('previous-card')
  }

  const nextCard = () => {
    emit('next-card')
  }
</script>

<style scoped lang="scss">
  .navigation {
    display: flex;
    flex-direction: row;
    gap: 5px;

    @media (min-width: $breakpoint-md) {
      gap: 15px;
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      height: 40px;
      width: 40px;

      @media (min-width: $breakpoint-md) {
        height: 60px;
        width: 60px;
        padding: 17px;
      }

      &--left {
        transform: rotate(180deg);
      }
    }

    &__arrow {
      @media (min-width: $breakpoint-md) {
        height: 60px;
        width: 35px;
      }
    }
  }
</style>
