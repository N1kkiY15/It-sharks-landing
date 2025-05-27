<template>
  <div class="program-description" aria-label="Описание формата обучения">
    <RightArrowM
        color="#B99FFF"
        class="program-description__arrow program-description__arrow--m"
        aria-hidden="true"
        focusable="false"
    />
    <RightArrowL
        color="#B99FFF"
        class="program-description__arrow program-description__arrow--l"
        aria-hidden="true"
        focusable="false"
    />
    <RightArrowXL
        color="#B99FFF"
        class="program-description__arrow program-description__arrow--xl"
        aria-hidden="true"
        focusable="false"
    />
    <p class="program-description__text">
      По мере обучения мы будем проводить созвоны в удобном для тебя количестве и формате.
      Так же всегда доступен в тексте.
    </p>
  </div>
</template>

<script setup lang="ts">

import RightArrowXL from "@assets/svg/RightArrowXL.vue";
import RightArrowM from "@assets/svg/RightArrowM.vue";
import RightArrowL from "@assets/svg/RightArrowL.vue";
</script>

<style scoped lang="scss">
.program-description {
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 10px;

  &__arrow {
    margin-top: 5px;

    &--m {
      width: 25px;
      @media (min-width: $breakpoint-md) {
        display: none;
      }
    }

    &--l {
      display: none;
      @media (min-width: $breakpoint-md) {
        display: block;
      }

      @media (min-width: $breakpoint-lg) {
        display: none;
        width: 78px;
      }
    }

    &--xl {
      display: none;
      margin-top: 10px;

      @media (min-width: $breakpoint-lg) {
        display: block;
        width: 78px;
      }
    }
  }

  &__text {
    max-width: 182px;
    font-weight: 400;
    color: white;
    font-size: 12px;
    margin-bottom: 20px;
    line-height: 140%;
    letter-spacing: -1%;

    @media (min-width: $breakpoint-sm) {
      font-size: 14px;
      margin-bottom: 40px;
      max-width: 220px;
    }

    @media (min-width: $breakpoint-md) {
      font-size: 16px;
      margin-bottom: 50px;
      max-width: 356px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 20px;
      max-width: 419px;
    }
  }
}
</style>