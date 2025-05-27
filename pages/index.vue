<template>
  <Cover/>

  <div class="about">
    <div class="about__description">
      <div class="about__title">
        <p class="about__box">обо мне</p>
        <p class="about__text"> Меня зовут Тимур. Я Senior Python-разработчик с 6 годами опыта и доходом
          750000₽.</p>
      </div>

      <p class="about__text">Работал в крипте, рекламе, аутсорсе и продуктах, лидил команды и менторил. Помогаю
        новичкам выйти на доход
        от 200000₽ и прокачиваю специалистов любого уровня.</p>
    </div>

    <div class="about__us">
      <p class="about__us-text">
        У меня есть своя команда опытных менторов,
        с которыми мы работаем вместе уже не первый год. Мы сопровождаем
        наших учеников до выхода на работу и успешного прохождения
        испытательного срока.
      </p>
      <img class="about__us-image" src="/images/image.png" alt="">

      <DefaultButton class="about__us-button" variant="primary">
        <p class="about__us-link">Наш телеграм-канал</p>
        <TelegramIcon color="var(--bg-color)" class="about__us-icon"/>
      </DefaultButton>
    </div>
  </div>


  <Program />
</template>

<script setup lang="ts">
import TelegramIcon from "@assets/svg/TelegramIcon.vue";
import Program from "@components/Program/Program.vue";
</script>

<style scoped lang="scss">
.about {
  color: var(--text-color);

  &__description {
    width: 100%;
    margin-bottom: 40px;

    @media (min-width: $breakpoint-sm) {
      margin-bottom: 44px;
    }

    @media (min-width: $breakpoint-md) {
      margin-bottom: 70px;
    }

    @media (min-width: $breakpoint-xl) {
      max-width: 1043px;
    }
  }

  &__title {
    display: flex;
    flex-direction: row;
    max-width: 100%;
  }

  &__box {
    flex: auto 0 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: -1%;
    margin-right: 28px;
    margin-bottom: 55px;

    @media (min-width: $breakpoint-sm) {
      margin-bottom: 70px;
      font-size: 14px;
    }

    @media (min-width: $breakpoint-md) {
      font-size: 16px;
      margin-right: 60px;
      margin-bottom: 32px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 20px;
    }

    @media (min-width: $breakpoint-xl) {

    }
  }

  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -1%;

    @media (min-width: $breakpoint-sm) {
      font-size: 20px;
    }

    @media (min-width: $breakpoint-md) {
      font-size: 24px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 32px;
    }

    @media (min-width: $breakpoint-xl) {
      font-size: 36px;
    }

  }

  &__us {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 10px;

    @media (min-width: $breakpoint-sm) {
      grid-template-columns: 208px 172px;
      column-gap: 70px;
    }

    @media (min-width: $breakpoint-md) {
      grid-template-columns: 291px 239px;
      margin-left: 125px;
      column-gap: 83px;
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: 362px 303px;
      margin-left: 157px;
      column-gap: 108px;
    }

    @media (min-width: $breakpoint-xl) {
      grid-template-columns: 465px 290px;
      margin-left: 300px;
      column-gap: 35px;
    }

    @media (min-width: $breakpoint-xxl) {
      grid-template-columns: 445px 290px;
      margin-left: 324px;
      column-gap: 92px;
    }

    &-text {
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -1%;
      font-size: 12px;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
        max-width: 286px;
        justify-self: right;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 20px;
        max-width: 362px;
      }

      @media (min-width: $breakpoint-xl) {
        font-size: 20px;
        max-width: 100%;
      }

    }

    &-button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      grid-column: span 2;
      align-self: start;
      background-color: var(--accent-color);

      @media (min-width: $breakpoint-sm) {
        grid-column: 1;
        grid-row: 2;
      }

      @media (min-width: $breakpoint-md) {
        max-width: 238px;
        max-height: 50px;
        align-self: end;
      }

      @media (min-width: $breakpoint-lg) {
        max-width: 304px;
        max-height: initial;
        gap: 20px;
      }
    }

    &-image {
      width: 161px;
      height: 211px;

      @media (min-width: $breakpoint-sm) {
        width: 172px;
        height: 227px;
        grid-row: span 2;
      }

      @media (min-width: $breakpoint-md) {
        width: 239px;
        height: 315px;
      }

      @media (min-width: $breakpoint-lg) {
        width: 303px;
        height: 400px;
      }

      @media (min-width: $breakpoint-xl) {
        width: 290px;
      }
    }

    &-link {
      font-family: "Clash Display", arial, sans-serif;
      padding: 3px 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
      }

      @media (min-width: $breakpoint-lg) {
        padding: 0;
        font-size: 20px;
      }
    }

    &-icon {
      width: 17px;
      height: 15px;

      @media (min-width: $breakpoint-md) {
        width: 23px;
        height: 20px;
      }
    }
  }

}

</style>