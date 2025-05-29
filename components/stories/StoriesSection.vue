<template>
  <section class="story">

    <StoriesTitle @previous-card="handlePreviousCard" @next-card="handleNextCard"/>

    <div class="story__cards">
      <StoriesCard
          v-for="(card, index) in stories"
          :key="index"
          :card="card"
          :card-index="index"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCardNavigation } from '@/composables/useScrollToCard';
import StoriesTitle from "@components/stories/StoriesTitle.vue";

const stories = [
  {
    first: `Работал инженером конструктором на производстве, в какой‑то момент решил начать изучать Python, освоил базовый синтаксис`,
    second: `Спустя 4 месяца устроился на первую работу с окладом 220 т. р. в компанию, занимающуюся рекламой`,
    name: `Марат`,
    age: `35 лет`,
  },
  {
    first: `Бросил универ, занимался сам, был знаком базово с фреймворками и базами данных`,
    second: `Спустя 3 месяца получил оффер на 330 т. р. на руки на удаленку в крипто-платёжную систему`,
    name: `Никита`,
    age: `24 года`,
  },
  {
    first: `Студент 3 курса, неплохая база, работал с фреймворками, немного на фрилансе, откликался безуспешно`,
    second: `Принял сразу 2 оффера спустя 4 месяца обучения на 220 т.р. в финтех и 180 т.р. в вендинговую компании`,
    name: `Александр`,
    age: `20 лет`,
  },
]
const CARDS_IN_ARRAY = stories.length - 1;
const {handlePreviousCard, handleNextCard } = useCardNavigation(CARDS_IN_ARRAY, "story");
</script>

<style scoped lang="scss">
.story {
  font-family: "Clash Display", arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: $breakpoint-sm) {
    gap: 40px;
  }

  @media (min-width: $breakpoint-md) {
    gap: 50px;
  }

  @media (min-width: $breakpoint-lg) {
    gap: 100px;
  }

  &__cards {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: calc(100% + 2 * 15px);
    margin-left: calc(-1 * 15px);
    padding: 0 15px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    overflow-x: scroll;

    //@media (min-width: $breakpoint-md) {
    //  display: grid;
    //  grid-template-columns: 1fr 1fr;
    //  grid-template-rows: repeat(3, 284px);
    //  width: 100%;
    //}
    //
    //@media (min-width: $breakpoint-lg) {
    //  grid-template-columns: repeat(3, 1fr);
    //  grid-template-rows: repeat(2, minmax(350px, auto));
    //}
    //
    //@media (min-width: $breakpoint-xl) {
    //  gap: 30px;
    //}

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>