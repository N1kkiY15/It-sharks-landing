<template>
  <section class="review" id="reviews">

    <ReviewsTitle
      @previous-card="() => carousel?.prev()"
      @next-card="() => carousel?.next()"
    />

    <Carousel
      v-if="breakpointXl"
      class="review__carousel"
      ref="carousel"
      items-to-show="auto"
      :wrap-around="true"
      :snap-align="'center'"
      :gap="10"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <Slide v-for="(review, index) in reviews" :key="index">
        <ReviewsCard :review="review" :key="index" class="tariffs__carousel-item" />
      </Slide>
    </Carousel>

    <div v-else class="review__cards">
      <ReviewsCard v-for="(review, index) in reviews" :key="index" :review="review" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import ReviewsTitle from '@components/reviews/ReviewsTitle.vue'
  import type { ReviewCard } from '@/types'
  import { useDisplay } from '~/composables/useDisplay'
  import { useHorizontalSwipeBlock } from '@/composables/useHorizontalSwipeBlock'

  const reviews: ReviewCard[] = [
    {
      id: 0,
      text: `<p>Когда я пришёл к Тимуру, у меня было 10 месяцев опыта в Python-разработке, но всё казалось сырым: резюме не работало, в продакшене чувствовал себя неуверенно, история о себе была слабо выстроена. Хотел найти удалённую работу за границей, чтобы быть свободным в выборе страны. Мы начали с фундамента: разобрали, где у меня пробелы, составили чёткий план, созванивались регулярно. Вместо общих советов — конкретные шаги. Полностью переработали резюме и легенду, натренировали ответы на собеседования и live-кодинг.</p>
<p>И уже через неделю после начала откликов я получил приглашение в финтех-компанию. Тимур даже сам прошёл собес до меня, чтобы понять, на чём стоит сделать акцент. В итоге — оффер на 5000  $и полная удалёнка.
Огромная благодарность за этот путь. Без его поддержки и системного подхода я бы вряд ли смог так.</p>`,
      name: 'Марат',
      nickname: '@marat_k',
    },
    {
      id: 1,
      text: `<p>Огромное спасибо Тимуру!
С его помощью я прошёл путь от полного новичка до двух офферов — на 300 т. р. и 240 т.р. рублей.
Тимур — очень сильный разработчик и ментор. Он умеет объяснять сложные вещи простым языком и сразу включает в практику: мы не зубрили теорию, а разбирали реальные кейсы на проекте.
Он всегда был на связи — отвечал на любые вопросы, поддерживал в процессе обучения и после.</p>
<p>Что мне особенно понравилось:
— индивидуальный подход — подстраивался под мой ритм и цели
— акцент на практику — всё обучение было максимально приближено к боевым условиям
Без Тимура я бы точно не дошёл до таких результатов. Очень рад, что выбрал именно его.</p>`,
      name: 'Никита',
      nickname: '@nikita10421',
    },
    {
      id: 2,
      text: `<p>Пришёл к Тимуру с целью прокачаться в Python-разработке. Опыт у меня был небольшой и сначала сомневался, смогу ли выйти на серьёзный уровень. Но Тимур сразу замотивировал: объяснил, что с правильным подходом всё реально.
И результат не заставил себя ждать — уже через месяц его менторства я получил отличный оффер! Устроился на 350 к. на руки с 6 месяцами опыта.</p>
<p>Он не просто ментор, а настоящий наставник: проводит разборы один на один, следит за прогрессом и всегда помогает в чатах комьюнити.\n  — Тимур организовал для меня мок-собеседования, которые сразу показали слабые места. Это помогло быстро подтянуть ключевые навыки.\n  — Даёт чёткие роадмапы и ресурсы под конкретные цели, даже если у тебя специфический интерес в Python-разработке.</p>`,
      name: `Александр`,
      nickname: '@lexyyy23',
    },
  ]
  const carousel = ref()

  const BREAKPOINT_XL = 1280
  const { enoughWidthToShow: breakpointXl } = useDisplay(BREAKPOINT_XL)

  const { onTouchStart, onTouchMove, onTouchEnd } = useHorizontalSwipeBlock()
</script>

<style scoped lang="scss">
  .review {
    font-family: 'Clash Display', arial, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;

    @media (min-width: $breakpoint-sm) {
      gap: 40px;
    }

    @media (min-width: $breakpoint-md) {
      gap: 50px;
    }

    @media (min-width: $breakpoint-lg) {
      gap: 100px;
    }

    &__carousel {
      overflow-x: hidden;
      width: calc(100% + 2 * 15px);
      margin-left: calc(-1 * 15px);
      padding: 0 30px;

      @media (min-width: $breakpoint-sm) {
        padding: 0;
      }

      :deep(.carousel__viewport) {
        overflow: visible;
      }
    }

    &__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      min-height: 234px;
      gap: 30px;
    }
  }
</style>
