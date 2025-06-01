<template>
  <div class="card-decorate" aria-hidden="true">
    <div class="card-decorate__step">
      <div class="card-decorate__step-figure">
        <span class="card-decorate__step-digit">
          {{ props.index + 1 }}
        </span>
      </div>
      <span class="card-decorate__text">этап</span>
    </div>
    <component :is="props.starComponent" class="card-decorate__star" focusable="false" />
  </div>
</template>

<script setup lang="ts">
  interface Props {
    index: number
    starComponent: Component
  }

  const props = defineProps<Props>()
</script>

<style scoped lang="scss">
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
        background-color: var(--el-bg-color);
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
