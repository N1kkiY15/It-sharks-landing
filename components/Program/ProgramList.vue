<template>
  <div class="program-list" role="list">
    <div class="program-list__card" role="listitem" aria-labelledby="step-1">
      <p id="step-1" class="program-list__card-text">
        На первом созвоне мы разберём твой опыт, цели и все вопросы по обучению.
        После согласования условий оформляем договор, ты вносишь оплату — и начинаем работу:
      </p>
      <div class="program-list__card-decorate card-decorate">
        <div class="card-decorate__step" aria-hidden="true">
          <div class="card-decorate__step-figure">
              <span class="card-decorate__step-digit">
                1
              </span>
          </div>
          <span class="card-decorate__text">этап</span>
        </div>
        <StarType1 class="card-decorate__star" aria-hidden="true" focusable="false"/>
      </div>
    </div>

    <div class="program-list__card" role="listitem" aria-labelledby="step-2">
      <p id="step-2" class="program-list__card-text">
        Далее создаём пет-проект: я ревьюю твой код, помогаю с реализацией и отвечаю на все вопросы.
        Параллельно закрываем пробелы в знаниях и разбираем рабочие процессы — постановку задач,
        work-flow, взаимодействие с командой и работу с Git.
      </p>
      <div class="program-list__card-decorate card-decorate">
        <div class="card-decorate__step" aria-hidden="true">
          <div class="card-decorate__step-figure">
              <span class="card-decorate__step-digit">
                2
              </span>
          </div>
          <span class="card-decorate__text">этап</span>
        </div>
        <StarType2 class="card-decorate__star" aria-hidden="true" focusable="false"/>
      </div>
    </div>

    <div class="program-list__card" role="listitem" aria-labelledby="step-3">
      <p id="step-3" class="program-list__card-text">
        Я предоставлю все необходимые материалы, шпаргалки и доп. ресурсы,
        чтобы ты быстрее разобрался в стеке, уверенно чувствовал себя на собеседованиях
        и смог показать реальные знания на практике.
      </p>
      <div class="program-list__card-decorate card-decorate">
        <div class="card-decorate__step" aria-hidden="true">
          <div class="card-decorate__step-figure">
              <span class="card-decorate__step-digit">
                3
              </span>
          </div>
          <span class="card-decorate__text">этап</span>
        </div>
        <StarType3 class="card-decorate__star" aria-hidden="true" focusable="false"/>
      </div>
    </div>

    <div class="program-list__card" role="listitem" aria-labelledby="step-4">
      <p id="step-4" class="program-list__card-text">
        Совместно составляем резюме и придумываем легенду для собесов.
        Параллельно проводим необходимое количество мок — собесов.
        (Для отработки легенды и технической части)
      </p>
      <div class="program-list__card-decorate card-decorate">
        <div class="card-decorate__step" aria-hidden="true">
          <div class="card-decorate__step-figure">
              <span class="card-decorate__step-digit">
                4
              </span>
          </div>
          <span class="card-decorate__text">этап</span>
        </div>
        <StarType4 class="card-decorate__star" aria-hidden="true" focusable="false"/>
      </div>
    </div>

    <div class="program-list__card" role="listitem" aria-labelledby="step-5">
      <p id="step-5" class="program-list__card-text">
        Идём на реальные собеседования, в процессе отрабатываем и их.
        После твоего трудоустройства я всегда на связи, помогу адаптироваться
        на новом месте и пройти испытательный срок.
      </p>
      <div class="program-list__card-decorate card-decorate">
        <div class="card-decorate__step" aria-hidden="true">
          <div class="card-decorate__step-figure">
              <span class="card-decorate__step-digit">
                5
              </span>
          </div>
          <span class="card-decorate__text">этап</span>
        </div>
        <StarType5 class="card-decorate__star" aria-hidden="true" focusable="false"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import StarType3 from "@assets/svg/StarType3.vue";
import StarType4 from "@assets/svg/StarType4.vue";
import StarType5 from "@assets/svg/StarType5.vue";
import StarType1 from "@assets/svg/StarType1.vue";
import StarType2 from "@assets/svg/StarType2.vue";
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
    background-color: #F4F4F40D;

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

.card-decorate {
  &__step {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;

    @media (min-width: $breakpoint-md) {
      gap: 10px;
    }

    &-figure {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #F4F4F41A;
      width: 25px;
      height: 25px;
      border-radius: 50%;

      @media (min-width: $breakpoint-md) {
        width: 35px;
        height: 35px;
      }

      @media (min-width: $breakpoint-lg) {
        width: 50px;
        height: 50px;
      }
    }

    &-digit {
      color: var(--accent-color);
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -1%;

      @media (min-width: $breakpoint-md) {
        font-size: 24px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 36px;
      }
    }
  }

  &__text {
    color: var(--text-color);
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: -1%;

    @media (min-width: $breakpoint-lg) {
      font-size: 36px;
    }
  }

  &__star {
    width: 25px;
    height: 25px;

    @media (min-width: $breakpoint-md) {
      width: 50px;
      height: 50px;
    }
  }
}
</style>