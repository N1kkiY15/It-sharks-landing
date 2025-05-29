<template>
  <div class="card-content" aria-label="Сравнение точек А и B">
    <div class="card-content__description">
      <span class="card-content__heading">Точка А:</span>
      <p class="card-content__text">{{ startText }}</p>
    </div>

    <div class="card-content__description">
      <span class="card-content__heading">Точка B:</span>
      <p class="card-content__text">{{ endText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  startText: string
  endText: string
}>()

</script>

<style scoped lang="scss">
.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &__description {
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (min-width: $breakpoint-md) {
      gap: 10px;
    }
  }

  &__heading {
    color: #F4F4F4B2;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: -1%;

    @media (min-width: $breakpoint-sm) {
      font-size: 14px;
    }

    @media (min-width: $breakpoint-md) {
      font-size: 16px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 20px;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: -1%;
    min-width: auto;

    @media (min-width: $breakpoint-sm) {
      font-size: 14px;
    }

    @media (min-width: $breakpoint-md) {
      font-size: 16px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 20px;
    }
  }
}

</style>