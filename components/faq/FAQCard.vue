<template>
  <div v-if="question" class="faq-item" :style="{ paddingBottom: toggleAnswer ? '16px' : '0' }">
    <div class="faq-item__heading" @click="showAnswer">
      <p class="faq-item__question">{{ question.question }}</p>
      <button aria-label="Открыть ответ">
        <PlusIcon v-if="!toggleAnswer" class="faq-item__heading-icon" />
        <MinusIcon v-else class="faq-item__heading-icon" />
      </button>
    </div>

    <div class="answer-wrapper" :style="{ height: toggleAnswer ? answerHeight : '0' }">
      <p ref="answerEl" class="faq-item__answer">
        {{ question.answer }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import MinusIcon from '@assets/svg/elements/MinusIcon.vue'
  import PlusIcon from '@assets/svg/elements/PlusIcon.vue'
  import type { FaqCard } from '@/types'

  defineProps<{
    question: FaqCard,
  }>()

  const toggleAnswer = ref(false)
  const answerEl = ref<HTMLElement | null>(null)
  const answerHeight = ref('0px')

  const showAnswer = async () => {
    toggleAnswer.value = !toggleAnswer.value
    await nextTick()
    if (answerEl.value) {
      answerHeight.value = `${answerEl.value.scrollHeight}px`
    }
  }

  watch(toggleAnswer, async (newVal) => {
    await nextTick()
    if (answerEl.value) {
      answerHeight.value = newVal ? `${answerEl.value.scrollHeight}px` : '0px'
    }
  })
</script>

<style scoped lang="scss">
  .faq-item {
    border-bottom: 1px solid var(--text-color);
    transition: padding-bottom 0.3s ease;
    overflow: hidden;

    &__heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 48px;
      padding: 12px 0;
      cursor: pointer;

      &-icon {
        width: 20px;
        height: 20px;
        transition: transform 0.3s ease;

        @media (min-width: $breakpoint-md) {
          width: 30px;
          height: 30px;
        }
      }
    }

    &__question {
      max-width: 233px;
      color: var(--text-color);
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.01em;

      @media (min-width: $breakpoint-sm) {
        max-width: 344px;
        font-size: 20px;
      }

      @media (min-width: $breakpoint-md) {
        max-width: 540px;
        font-size: 24px;
      }

      @media (min-width: $breakpoint-lg) {
        max-width: 692px;
        font-size: 36px;
      }

      @media (min-width: $breakpoint-xl) {
        max-width: initial;
      }
    }

    &__answer {
      color: var(--text-color-secondary);
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      letter-spacing: -0.01em;
      max-width: 250px;

      @media (min-width: $breakpoint-sm) {
        max-width: 327px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
        max-width: 522px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 20px;
        max-width: 670px;
      }

      @media (min-width: $breakpoint-xl) {
        max-width: 962px;
      }
    }
  }

  .answer-wrapper {
    transition: height 0.3s ease;
    overflow: hidden;
  }
</style>