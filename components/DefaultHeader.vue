<template>
  <div class="header">
    <h1 class="header__heading">IT Sharks</h1>
    <nav class="header__navigation" aria-label="Основная навигация">
      <div class="header__navigation-container">
        <a class="header__navigation-link" href="#" aria-label="Перейти к разделу программа"
          >Программа</a
        >
        <a class="header__navigation-link" href="#" aria-label="Перейти к разделу кейсы">Кейсы</a>
        <a class="header__navigation-link" href="#" aria-label="Перейти к разделу отзывы"
          >Отзывы
        </a>
      </div>

      <ButtonComponent variant="primary" class="header__navigation-button">
        <a class="header__navigation-order" href="#" aria-label="Перейти к выбору тарифа"
          >Выбрать тариф</a
        >
      </ButtonComponent>
    </nav>
    <div class="header__mobile">
      <div class="header__mobile-container">
        <EmailButton class="header__mobile-icon" />
        <TelegramButton class="header__mobile-icon" />
      </div>
      <MenuIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
  import MenuIcon from '@assets/svg/socials/MenuIcon.vue'
</script>

<style scoped lang="scss">
  .header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media (min-width: $breakpoint-sm) {
      margin-bottom: 42px;
    }

    @media (min-width: $breakpoint-md) {
      margin-bottom: 90px;
    }

    @media (min-width: $breakpoint-xl) {
      margin-bottom: 75px;
    }

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -10px;
      transform: translateX(-50%);
      width: 100vw;
      height: 2px;
      background-color: var(--text-color);
      z-index: 1;

      @media (min-width: $breakpoint-sm) {
        bottom: -20px;
      }

      @media (min-width: $breakpoint-md) {
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
        gap: 20px;
        background-color: var(--el-bg-color);
        border-radius: 500px;
        color: var(--text-color);

        @media (min-width: $breakpoint-lg) {
          gap: 30px;
        }
      }

      &-link {
        font-weight: 400;
        font-size: 16px;
        padding: 15px 0;
        line-height: 100%;
        letter-spacing: 1px;
        color: inherit;

        &:first-child {
          padding-left: 20px;

          @media (min-width: $breakpoint-lg) {
            padding-left: 30px;
          }
        }

        &:last-child {
          padding-right: 20px;

          @media (min-width: $breakpoint-lg) {
            padding-right: 30px;
          }
        }

        @media (min-width: $breakpoint-lg) {
          padding: 20px 0;
          font-size: 20px;
        }
      }

      &-button {
        background-color: var(--decorative-color);
        color: var(--color-text);
      }

      &-order {
        color: var(--bg-color);
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;

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
</style>
