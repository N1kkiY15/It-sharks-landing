<template>
  <section class="grade">
    <p class="grade__header">кому подойдет</p>
    <div class="grade__container">
      <GradesCard
          v-for="(item, index) in grades"
          :key="index"
          :card="item"
      />
    </div>
  </section>

</template>

<script setup lang="ts">
import GradesCard from "@components/grades/GradesCard.vue";
import type {gradesArray} from "@/types";

const grades: gradesArray[] = [
  {
    grade: `Новичок`,
    description: `Для тех, кто только отучился на курсах/в универе
        или получил свой первый опыт в сфере IT. Нет понимания,
        в каком направлении двигаться дальше.`
  },
  {
    grade: `Опытный`,
    description: `Для тех, у кого уже есть большой опыт,
    но вдруг решил сменить направление, повысить свой грейд
    или выбить достойный оффер.`
  }
]
</script>

<style scoped lang="scss">
.grade {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--text-color);

  @media (min-width: $breakpoint-sm) {
    gap: 40px;
  }

  @media (min-width: $breakpoint-lg) {
    gap: 50px;
  }

  &__header {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: -1%;

    @media (min-width: $breakpoint-sm) {
      font-size: 14px;
    }

    @media (min-width: $breakpoint-md) {
      font-size: 16px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 20px;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: $breakpoint-sm) {
      flex-direction: row;
    }

    @media (min-width: $breakpoint-xxl) {
      gap: 30px;
    }
  }
}
</style>