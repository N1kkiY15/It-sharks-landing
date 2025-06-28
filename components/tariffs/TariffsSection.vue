<template>
  <section class="tariffs" id="tariffs">

    <TariffTitle
      @previous-card="() => carousel?.prev()"
      @next-card="() => carousel?.next()"
    />

    <Carousel
      v-if="breakpointMd"
      class="tariffs__carousel"
      ref="carousel"
      items-to-show="auto"
      :wrap-around="true"
      :snap-align="'center'"
      :gap="10"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <Slide v-for="(tariff, index) in tariffs" :key="index">
        <TariffsCard :tariff="tariff" :key="index" class="tariffs__carousel-item" />
      </Slide>
    </Carousel>

    <div v-else class="tariffs__cards">
      <TariffsCard v-for="(tariff, index) in tariffs" :key="index" :tariff="tariff" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { TariffCard } from '@/types'
  import { useDisplay } from '@/composables/useDisplay'
  import TariffTitle from '@components/tariffs/TariffTitle.vue'
  import TelegramIcon from '@assets/svg/socials/TelegramIcon.vue'
  import { useHorizontalSwipeBlock } from '@/composables/useHorizontalSwipeBlock'

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
        type: `primary`,
        link: `https://t.me/yaparovty`,
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
        type: `secondary`,
        link: `https://t.me/yaparovty`,
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
        type: `secondary`,
        link: `https://t.me/yaparovty`,
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
        type: `secondary`,
        link: `https://t.me/yaparovty`,
      },
    },
  ]
  const carousel = ref()

  const BREAKPOINT_MD = 768
  const { enoughWidthToShow: breakpointMd } = useDisplay(BREAKPOINT_MD)

  const { onTouchStart, onTouchMove, onTouchEnd } = useHorizontalSwipeBlock()
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

    &__carousel {
      overflow-x: hidden;
      width: calc(100% + 2 * 15px);
      margin-left: calc(-1 * 15px);
      padding: 0 30px;

      @media (min-width: $breakpoint-sm) {
        width: calc(100% + 2 * 15px);
        margin-left: calc(-1 * 15px);
        padding: 0;
      }

      :deep(.carousel__viewport) {
        overflow: visible;
      }

      &-item {
        min-height: 303px;
        max-width: 330px;

        @media (min-width: $breakpoint-sm) {
          height: 100%;
          max-width: 380px;
        }

        @media (min-width: $breakpoint-md) {
          min-height: 306px;
        }
      }
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
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      min-height: 234px;

      @media (min-width: $breakpoint-xxl) {
        gap: 30px;
      }
    }
  }
</style>
