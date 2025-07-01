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
      answer: `От 1 до 7 месяцев, все зависит от имеющегося бэкграунда и количества выделяемого времени`,
    },
    {
      id: 1,
      question: `Как часто будут проводиться созвоны?`,
      answer: `Ограничений нет, по согласованию`,
    },
    {
      id: 2,
      question: `Будет ли поддержка в течение испытательного срока?`,
      answer: `Да, сюда входят как советы о том, как вести себя на встречах, так и помощь с рабочими задачами.`,
    },
    {
      id: 3,
      question: `Можно ли корректировать техническое задание?`,
      answer: `Да, в этом плане менторы гибки, если есть что-то вас интересующее`,
    },
    {
      id: 4,
      question: `Будут ли проводиться лекции?`,
      answer: `Как правило, менторы дают задания и прикладывают к нему теорию, в случае если что-то все-таки непонятно - всегда можно обратиться к ментору с вопросом`,
    },
    {
      id: 5,
      question: `Есть ли общие чаты?`,
      answer: `Да, есть. Там мы делимся информацией, офферами, также есть сливы собесов`,
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