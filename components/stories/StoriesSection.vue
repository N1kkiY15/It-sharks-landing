<template>
  <section class="story" id="story">

    <StoriesTitle
      @previous-card="() => carousel?.prev()"
      @next-card="() => carousel?.next()"
    />

    <Carousel
      v-if="breakpointLg"
      class="story__carousel"
      ref="carousel"
      items-to-show="auto"
      :wrap-around="true"
      :snap-align="'center'"
      :gap="15"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <Slide v-for="(story, index) in stories" :key="index">
        <StoriesCard :story="story" class="story__carousel-item" />
      </Slide>
    </Carousel>

    <div v-else class="story__cards">
      <StoriesCard
          v-for="(story, index) in stories"
          :key="index"
          :story="story"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDisplay } from '@/composables/useDisplay'
import type { StoriesCard } from '@/types'
import { useHorizontalSwipeBlock } from '@/composables/useHorizontalSwipeBlock'

const stories: StoriesCard[] = [
  {
    id: 0,
    first: `Работал инженером конструктором на производстве, в какой‑то момент решил начать изучать Python, освоил базовый синтаксис`,
    second: `Спустя 4 месяца устроился на первую работу с окладом 220 т. р. в компанию, занимающуюся рекламой`,
    name: `Марат`,
    age: `35 лет`,
  },
  {
    id: 1,
    first: `Бросил универ, занимался сам, был знаком базово с фреймворками и базами данных`,
    second: `Спустя 3 месяца получил оффер на 330 т. р. на руки на удаленку в крипто-платёжную систему`,
    name: `Никита`,
    age: `24 года`,
  },
  {
    id: 2,
    first: `Студент 3 курса, неплохая база, работал с фреймворками, немного на фрилансе, откликался безуспешно`,
    second: `Принял сразу 2 оффера спустя 4 месяца обучения на 220 т.р. в финтех и 180 т.р. в вендинговую компании`,
    name: `Александр`,
    age: `20 лет`,
  },
]
const carousel = ref()

const BREAKPOINT_LG = 960
const { enoughWidthToShow: breakpointLg } = useDisplay(BREAKPOINT_LG)

const { onTouchStart, onTouchMove, onTouchEnd } = useHorizontalSwipeBlock()
</script>

<style scoped lang="scss">
.story {
  font-family: "Clash Display", arial, sans-serif;
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
      width: calc(100% + 2 * 15px);
      margin-left: calc(-1 * 15px);
      padding: 0;
    }

    :deep(.carousel__viewport) {
      overflow: visible;
    }

    &-item {
      min-height: 234px;

      @media (min-width: $breakpoint-sm) {
        min-height: 270px;
      }

      @media (min-width: $breakpoint-md) {
        min-height: 306px;
      }
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    min-height: 234px;
    gap: 25px;

    @media (min-width: $breakpoint-xl) {
      gap: 30px;
    }
  }
}
</style>