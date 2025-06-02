<template>
  <div class="program-list" role="list">
    <div v-for="(step, index) in steps" :key="index" class="program-list__card" role="listitem">
      <p class="program-list__card-text">
        {{ step.text }}
      </p>
      <ProgramCardDecor
        :index="index"
        :starComponent="step.starComponent"
        class="program-list__card-decorate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import StarType3 from '@assets/svg/stars/StarType3.vue'
  import StarType4 from '@assets/svg/stars/StarType4.vue'
  import StarType5 from '@assets/svg/stars/StarType5.vue'
  import StarType1 from '@assets/svg/stars/StarType1.vue'
  import StarType2 from '@assets/svg/stars/StarType2.vue'
  import ProgramCardDecor from '@components/program/ProgramCardDecor.vue'

  type StarComponentType =
    | typeof StarType1
    | typeof StarType2
    | typeof StarType3
    | typeof StarType4
    | typeof StarType5

  interface ProgramStep {
    text: string
    starComponent: StarComponentType
  }

  const steps: ProgramStep[] = [
    {
      text: 'На первом созвоне мы разберём твой опыт, цели и все вопросы по обучению. После согласования условий оформляем договор, ты вносишь оплату — и начинаем работу:',
      starComponent: StarType1,
    },
    {
      text: 'Далее создаём пет-проект: я ревьюю твой код, помогаю с реализацией и отвечаю на все вопросы. Параллельно закрываем пробелы в знаниях и разбираем рабочие процессы — постановку задач, work-flow, взаимодействие с командой и работу с Git.',
      starComponent: StarType2,
    },
    {
      text: 'Я предоставлю все необходимые материалы, шпаргалки и доп. ресурсы, чтобы ты быстрее разобрался в стеке, уверенно чувствовал себя на собеседованиях и смог показать реальные знания на практике.',
      starComponent: StarType3,
    },
    {
      text: 'Совместно составляем резюме и придумываем легенду для собесов. Параллельно проводим необходимое количество мок — собесов. (Для отработки легенды и технической части)',
      starComponent: StarType4,
    },
    {
      text: 'Идём на реальные собеседования, в процессе отрабатываем и их. После твоего трудоустройства я всегда на связи, помогу адаптироваться на новом месте и пройти испытательный срок.',
      starComponent: StarType5,
    },
  ]
</script>

<style scoped lang="scss">
  .program-list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__card {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;
      width: 100%;
      border-radius: 20px;
      background-color: var(--card-bg-color);

      @media (min-width: $breakpoint-md) {
        padding: 30px;
        gap: 20px;
      }

      &-text {
        color: var(--text-color);
        font-size: 12px;
        max-width: 277px;

        @media (min-width: $breakpoint-sm) {
          font-size: 14px;
          max-width: 350px;
        }

        @media (min-width: $breakpoint-md) {
          font-size: 16px;
          max-width: 500px;
        }

        @media (min-width: $breakpoint-lg) {
          font-size: 20px;
          max-width: 630px;
        }
      }

      &-decorate {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>
