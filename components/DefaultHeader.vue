<template>
  <div class="header">
    <h1 class="header__heading">IT Sharks</h1>
    <nav class="header__navigation" aria-label="Основная навигация">
      <RoundedContainer>
        <a class="header__navigation-link" href="#" aria-label="Перейти к разделу программа">Программа</a>
        <a class="header__navigation-link" href="#" aria-label="Перейти к разделу кейсы">Кейсы</a>
        <a class="header__navigation-link" href="#" aria-label="Перейти к разделу отзывы">Отзывы </a>
      </RoundedContainer>

      <RoundedContainer :style="{ 'background-color': 'var(--decorative-color)', 'color': 'var(--color-text)' }">
        <a class="header__navigation-link" href="#" aria-label="Перейти к выбору тарифа">Выбрать тариф</a>
      </RoundedContainer>
    </nav>
    <div class="header__mobile">
      <EmailButton :style="{ 'width': '21px', 'height': '21px' }"/>
      <TelegramButton />
      <MenuIcon/>
    </div>

  </div>
</template>

<script setup lang="ts">
import MenuIcon from "@assets/svg/MenuIcon.vue";
import { provide } from 'vue';

// Динамические размеры для разных брейкпоинтов
const iconSizes = {
  base: { width: 35, height: 30 },
  sm: { width: 25, height: 21 },
  md: { width: 40, height: 34 }
};

provide('iconSizes', iconSizes);
</script>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 75px;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -40px;
    transform: translateX(-50%);
    width: 100vw;
    height: 5px;
    background-color: var(--text-color);
    z-index: 1;
  }

  &__heading {
    color: var(--text-color);
    font-size: 24px;
    font-weight: 600;
  }

  &__navigation {
    display: flex;
    flex-direction: row;
    gap: 10px;

    &-link {
      font-weight: 400;
      font-size: 20px;
      padding: 20px 0;
      line-height: 100%;
      letter-spacing: 1px;
      color: inherit;

      &:first-child {
        padding-left: 30px;
      }

      &:last-child {
        padding-right: 30px;
      }
    }
  }

  &__mobile {
    display: none;
    flex-direction: row;
    gap: 10px;
    height: 15px;
  }

  @media (max-width: $breakpoint-xxl) {
    &::after {
      bottom: -20px;
    }
  }

  @media (max-width: $breakpoint-md) {

    &::after {
      bottom: -40px;
    }

    &__navigation {
      display: flex;
      flex-direction: row;
      gap: 10px;

      &-link {
        font-size: 16px;
        padding: 15px 0;
        line-height: 100%;
        letter-spacing: 1px;
        color: inherit;

        &:first-child {
          padding-left: 20px;
        }

        &:last-child {
          padding-right: 20px;
        }
      }
    }
  }

  @media (max-width: $breakpoint-sm) {
    &::after {
      bottom: -20px;
      height: 2px;
    }

    &__heading {
      font-size: 20px;
    }

    &__navigation {
      display: none;
    }

    &__mobile {
      display: flex;
    }
  }
}
</style>