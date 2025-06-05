<template>
  <section class="faq-section">
    <h3 class="faq-section__header">FAQ</h3>
    <div>
      <FAQCard
        v-for="(question, index) in questions"
        :key="index"
        :question="question"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { FaqCard } from '@/types'

  const questions: FaqCard[] = [
    {
      id: 0,
      question: `Сколько занимает путь до первого оффера?`,
      answer: `от 1 до 7 месяцев, все зависит от имеющегося бэкграунда и количества выделяемого времени`,
    },
    {
      id: 1,
      question: `Как часто будут проводиться созвоны?`,
      answer: `от 1 до 7 месяцев, все зависит от имеющегося бэкграунда и количества выделяемого времени`,
    },
    {
      id: 2,
      question: `Будет ли поддержка в течение испытательного срока?`,
      answer: `от 1 до 7 месяцев, все зависит от имеющегося бэкграунда и количества выделяемого времени`,
    },
    {
      id: 3,
      question: `Можно ли корректировать тех задание?`,
      answer: `от 1 до 7 месяцев, все зависит от имеющегося бэкграунда и количества выделяемого времени`,
    },
    {
      id: 4,
      question: `Будут ли проводиться лекции?`,
      answer: `от 1 до 7 месяцев, все зависит от имеющегося бэкграунда и количества выделяемого времени`,
    },
    {
      id: 5,
      question: `Есть ли общие чаты?`,
      answer: `от 1 до 7 месяцев, все зависит от имеющегося бэкграунда и количества выделяемого времени`,
    },
  ]
</script>

<style scoped lang="scss">
  .faq-section {
    display: flex;
    flex-direction: column;
    gap: 26px;

    @media (min-width: $breakpoint-sm) {
      gap: 26px;
    }

    @media (min-width: $breakpoint-md) {
      gap: 40px;
    }

    @media (min-width: $breakpoint-lg) {
      gap: 50px;
    }

    &__header {
      color: var(--accent-color);
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -1%;
      text-transform: uppercase;

      @media (min-width: $breakpoint-sm) {
        font-size: 20px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 36px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 48px;
      }
    }
  }
</style>