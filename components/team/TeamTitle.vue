<template>
  <div class="team-title">
    <div class="team-title__container">
      <span class="team-title__heading">Команда</span>

      <div class="team-title__description">
        <p class="team-title__description-text"> За все время суммарного обучения мы с командой «вкатили» более 80
          учеников —
          с моей личной поддержкой.
        </p>

        <nav class="team-title__nav" aria-label="Навигация по команде">
          <ButtonComponent
              variant="primary"
              class="team-title__nav-button team-title__nav-button--left"
              @click="previousCard"
              aria-label="Предыдущая карточка"
          >
            <ArrowAccent aria-hidden="true"/>
          </ButtonComponent>

          <ButtonComponent
              variant="primary"
              class="team-title__nav-button"
              @click="nextCard"
              aria-label="Следующая карточка"
          >
            <ArrowAccent aria-hidden="true"/>
          </ButtonComponent>
        </nav>
      </div>
    </div>
    <StarType1 class="team-title__star" aria-hidden="true"/>
  </div>
</template>

<script setup lang="ts">
import ArrowAccent from "@assets/svg/ArrowAccent.vue";
import StarType1 from "@assets/svg/Stars/StarType1.vue";

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
.team-title {
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (min-width: $breakpoint-md) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (min-width: $breakpoint-md) {
      gap: 10px;
    }

    @media (min-width: $breakpoint-lg) {
      gap: 20px;
    }
  }


  &__heading {
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: var(--text-color);
    text-transform: uppercase;
    align-self: start;

    @media (min-width: $breakpoint-md) {
      font-size: 36px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 48px;
    }
  }

  &__description {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &-text {
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      max-width: 195px;
      color: var(--text-color-secondary);

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
        max-width: 311px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
        max-width: 484px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 20px;
        max-width: 610px;
      }
    }
  }

  &__nav {
    display: flex;
    flex-direction: row;
    gap: 5px;

    @media (min-width: $breakpoint-md) {
      display: none;
    }

    &-button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      height: 40px;
      width: 40px;

      &--left {
        transform: rotate(180deg);
      }
    }
  }

  &__star {
    display: none;

    @media (min-width: $breakpoint-md) {
      display: block;
      width: 100px;
      height: 100px;
    }
  }
}
</style>