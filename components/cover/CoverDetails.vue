<template>
  <div class="cover-details">
    <RoundedContainer>
      <p class="cover-details__text">Экспертиза</p>
      <RightArrowS />
    </RoundedContainer>

    <RoundedContainer>
      <p class="cover-details__text">c 2019г.</p>
    </RoundedContainer>
  </div>
</template>

<script setup lang="ts">
  import RightArrowS from '@assets/svg/arrows/RightArrowS.vue'
</script>

<style scoped lang="scss">
  .cover-details {
    position: absolute;
    top: 183px;
    left: 0;
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media (min-width: $breakpoint-sm) {
      top: 200px;
    }

    @media (min-width: $breakpoint-md) {
      top: 168px;
    }

    @media (min-width: $breakpoint-lg) {
      top: 214px;
    }

    @media (min-width: $breakpoint-xl) {
      top: 246px;
    }

    @media (min-width: $breakpoint-xxl) {
      top: 264px;
    }

    &__text {
      color: var(--text-color);
      font-weight: 400;
      font-size: 12px;

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
