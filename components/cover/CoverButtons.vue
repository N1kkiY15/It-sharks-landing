<template>
  <nav class="cover-buttons">
    <div class="cover-buttons__more">
      <p class="cover-buttons__text">читать дальше</p>
      <ButtonComponent
        variant="secondary"
        class="cover-buttons__arrow"
        @click="scrollToEl('about')"
      >
        <DoubleArrow class="cover-buttons__arrow--double" />
      </ButtonComponent>
    </div>

    <ButtonComponent
      variant="primary"
      class="cover-buttons__link"
      @click="scrollToEl('grades')"
    >
      <p class="cover-buttons__question">Кому подойдет ?</p>
      <RightArrowS class="cover-buttons__icon cover-buttons__icon--xs" />
      <RightArrowM class="cover-buttons__icon cover-buttons__icon--sm" />
      <RightArrowL class="cover-buttons__icon cover-buttons__icon--md" />
      <RightArrowXl class="cover-buttons__icon cover-buttons__icon--lg" />
    </ButtonComponent>
  </nav>
</template>

<script setup lang="ts">
  import RightArrowL from '@assets/svg/arrows/RightArrowL.vue'
  import RightArrowS from '@assets/svg/arrows/RightArrowS.vue'
  import DoubleArrow from '@assets/svg/arrows/DoubleArrow.vue'
  import RightArrowM from '@assets/svg/arrows/RightArrowM.vue'
  import RightArrowXl from '@assets/svg/arrows/RightArrowXL.vue'
  import { scrollToSection } from '~/composables/useScrollTo'

  const { scrollToEl } = scrollToSection()

</script>

<style scoped lang="scss">
  .cover-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__more {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
    }

    &__text {
      color: var(--text-color);
      font-weight: 400;
      font-size: 12px;
      letter-spacing: -1%;
      max-width: 53px;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
        max-width: 76px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 20px;
      }
    }

    &__link {
      display: flex;
      flex-direction: row;
      gap: 15px;
      align-items: center;

      @media (min-width: $breakpoint-md) {
        align-self: flex-end;
        gap: 20px;
      }
    }

    &__question {
      color: var(--accent-color);
      max-width: 76px;
      text-align: left;
      font-weight: 400;
      font-size: 12px;
      line-height: 100%;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
        max-width: initial;
      }

      @media (min-width: $breakpoint-xl) {
        font-size: 20px;
      }
    }

    &__arrow {
      width: 40px;
      height: 40px;

      @media (min-width: $breakpoint-md) {
        width: 60px;
        height: 60px;
      }

      @media (min-width: $breakpoint-lg) {
        width: 100px;
        height: 100px;
      }

      &--double {
        height: 12px;
        width: 12px;

        @media (min-width: $breakpoint-md) {
          height: 17px;
          width: 17px;
        }

        @media (min-width: $breakpoint-lg) {
          height: 27px;
          width: 27px;
        }
      }
    }

    &__icon {
      &--double {
        height: 12px;
        width: 12px;

        @media (min-width: $breakpoint-md) {
          height: 17px;
          width: 17px;
        }

        @media (min-width: $breakpoint-lg) {
          height: 27px;
          width: 27px;
        }
      }

      &--xs {
        height: 12px;
        width: 15px;

        @media (min-width: $breakpoint-sm) {
          display: none;
        }
      }

      &--sm {
        display: none;
        height: 12px;
        width: 25px;

        @media (min-width: $breakpoint-sm) {
          display: block;
        }

        @media (min-width: $breakpoint-md) {
          display: none;
        }
      }

      &--md {
        display: none;
        height: 12px;
        width: 50px;

        @media (min-width: $breakpoint-md) {
          display: block;
        }

        @media (min-width: $breakpoint-lg) {
          display: none;
        }
      }

      &--lg {
        display: none;
        height: 12px;
        width: 100px;

        @media (min-width: $breakpoint-lg) {
          display: block;
        }
      }
    }
  }
</style>
