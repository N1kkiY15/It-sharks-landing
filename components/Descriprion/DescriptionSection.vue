<template>
  <section class="description">
    <h2 class="description__header">
      <span class="description__header-line">на обучении</span>
      <p>
        ты получишь востребованный навык, поддержку на каждом
        этапе и результат, который оправдает ожидания.
      </p>
    </h2>
    <ReadMore @click="scrollToEl('tariffs')" class="description__button"/>
    <img class="description__decoration" src="/images/glass.png" loading="lazy" aria-hidden="true">
  </section>
</template>

<script setup lang="ts">
  import ReadMore from '@components/ReadMore.vue'
  import { scrollToSection } from '~/composables/useScrollTo'

  const { scrollToEl } = scrollToSection()

</script>

<style scoped lang="scss">
  .description {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 45px;

    @media (min-width: $breakpoint-sm) {
      gap: 70px;
    }

    @media (min-width: $breakpoint-md) {
      gap: 133px;
    }

    @media (min-width: $breakpoint-lg) {
      gap: 150px;
    }

    @media (min-width: $breakpoint-xxl) {
      gap: 155px;
    }

    &__header {
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -1%;
      text-transform: uppercase;
      color: var(--text-color);

      @media (min-width: $breakpoint-sm) {
        font-size: 20px;
        max-width: 450px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 32px;
        max-width: initial;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 36px;
      }

      @media (min-width: $breakpoint-xl) {
        font-size: 48px;
      }

      &-line {
        margin-left: 170px;

        @media (min-width: $breakpoint-sm) {
          margin-left: 230px;
        }

        @media (min-width: $breakpoint-md) {
          margin-left: 375px;
        }

        @media (min-width: $breakpoint-lg) {
          margin-left: 470px;
        }

        @media (min-width: $breakpoint-xl) {
          margin-left: 600px;
        }
      }
    }

    &__button {
      :deep(.icon-path) {
        fill: var(--decorative-color);
      }

      &:active :deep(.icon-path) {
        fill: var(--text-color);
      }
    }

    &__decoration {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 85px;
      width: 100px;

      @media (min-width: $breakpoint-sm) {
        height: 130px;
        width: 153px;
      }

      @media (min-width: $breakpoint-md) {
        height: 173px;
        width: 202px;
      }

      @media (min-width: $breakpoint-lg) {
        height: 251px;
        width: 293px;
      }

      @media (min-width: $breakpoint-xl) {
        right: 40px;
        bottom: -32px;
        height: 300px;
        width: 350px;
      }

      @media (min-width: $breakpoint-xxl) {
        bottom: -110px;
        height: 364px;
        width: 424px;
      }

      @media (min-width: $breakpoint-xxxl) {
        bottom: -69px;
      }
    }
  }
</style>