<template>
  <div class="about-description">
    <div class="about-description__title">
      <p class="about-description__box">обо мне</p>
      <p class="about-description__text"> Меня зовут Тимур. Я Senior Python-разработчик с 6 годами опыта и доходом
        750000₽.</p>
    </div>

    <p class="about-description__text">Работал в крипте, рекламе, аутсорсе и продуктах, лидил команды и менторил.
      Помогаю
      новичкам выйти на доход
      от 200000₽ и прокачиваю специалистов любого уровня.</p>
  </div>
</template>

<style scoped lang="scss">
.about-description {
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
}

</style>