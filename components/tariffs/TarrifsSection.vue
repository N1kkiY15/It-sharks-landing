<template>
  <section class="tariffs">
    <TariffTitle @previous-card="handlePreviousCard" @next-card="handleNextCard" />
    <div class="tariffs__cards">
      <TariffsCard v-for="(tariff, index) in tariffs" :key="index" :tariff="tariff" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { TariffCard } from '@/types'
  import { useCardNavigation } from '@/composables/useScrollToCard'
  import TariffTitle from '@components/tariffs/TariffTitle.vue'
  import TelegramIcon from '@assets/svg/socials/TelegramIcon.vue'

  const tariffs: TariffCard[] = [
    {
      id: 0,
      subtitle: `Первичная консультация`,
      title: `БЕСПЛАТНО`,
      description: `
      <p>Провожу первичную консультацию, где мы подробно разбираем твой текущий
      уровень, определяем цели, составляем предварительный план развития.</p>
    `,
      button: {
        title: `Записаться на консультацию`,
        color: `#F4F4F41A`,
        textcolor: `var(--accent-color)`,
        link: `link`,
      },
      component: TelegramIcon,
    },
    {
      id: 1,
      subtitle: `Повторная консультация`,
      title: `4000 ₽`,
      description: `
      <p>Повторная консультация позволяет оценить твой прогресс, разобрать места,
      где ты проседаешь, над чем стоит усиленно поработать и как быстрее выйти
      на нужный результат.</p>
    `,
      button: {
        title: `Купить консультацию`,
        color: `var(--accent-color)`,
        textcolor: `var(--bg-color)`,
        link: `link`,
      },
    },
    {
      id: 2,
      subtitle: `Тариф №1`,
      title: `10 000 ₽ + 50% от зп 4 месяца`,
      description: `
      <ul>
        <li>✔ Безлимит на звонки</li>
        <li>✔ Пет. проект</li>
        <li>✔ Учебные материалы и шпаргалки</li>
        <li>✔ Составление резюме и легенды</li>
        <li>✔ Мок-собесы</li>
        <li>✔ Отработка ошибок с реальных собеседований</li>
        <li>✔ Поддержка на испыталке</li>
      </ul>
    `,
      button: {
        title: `Купить тариф №1`,
        color: `var(--accent-color)`,
        textcolor: `var(--bg-color)`,
        link: `link`,
      },
    },
    {
      id: 3,
      subtitle: `Тариф №2`,
      title: `40 000 ₽ + 50% от зп 2 месяца`,
      description: `
      <ul>
        <li>✔ Безлимит на звонки</li>
        <li>✔ Пет. проект</li>
        <li>✔ Учебные материалы и шпаргалки</li>
        <li>✔ Составление резюме и легенды</li>
        <li>✔ Мок-собесы</li>
        <li>✔ Отработка ошибок с реальных собеседований</li>
        <li>✔ Поддержка на испыталке</li>
      </ul>
    `,
      button: {
        title: `Купить тариф №2`,
        color: `var(--accent-color)`,
        textcolor: `var(--bg-color)`,
        link: `link`,
      },
    },
  ]

  const CARDS_IN_ARRAY = tariffs.length - 1
  const { handlePreviousCard, handleNextCard } = useCardNavigation(CARDS_IN_ARRAY, 'tariff')
</script>

<style scoped lang="scss">
  .tariffs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--text-color);

    @media (min-width: $breakpoint-sm) {
      gap: 40px;
    }

    @media (min-width: $breakpoint-md) {
      gap: 50px;
    }

    &__card {
      &-title {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      &-subheader {
        color: var(--decorative-color);
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: -1%;
      }

      &-header {
        font-weight: 600;
        font-size: 24px;
        line-height: 140%;
        letter-spacing: -1%;
        text-transform: uppercase;
      }

      &-description {
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: -1%;
      }
    }

    &__cards {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      gap: 10px;
      width: calc(100% + 2 * 15px);
      margin-left: calc(-1 * 15px);
      padding: 0 15px;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      min-height: 234px;

      @media (min-width: $breakpoint-md) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: initial;
        margin-left: initial;
        padding: 0;
      }

      @media (min-width: $breakpoint-xxl) {
        gap: 30px;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>
