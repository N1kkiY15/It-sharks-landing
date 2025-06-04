<template>
  <div :id="`team-${card.id}`" class="team-card">
    <h3 class="team-card__header">{{ card.header }}</h3>
    <div class="team-card__authors">
      <div v-for="(author, index) in card.authors" :key="index" class="team-card__author">
        <h4 class="team-card__name">{{ author.name }}</h4>
        <p class="team-card__description">{{ author.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {TeamCard} from '@/types'

defineProps<{
  card: TeamCard;
}>();
</script>

<style scoped lang="scss">
.team-card {
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;
  flex: auto 0 0;
  max-width: 245px;
  border: 3px solid var(--card-color);
  color: var(--text-color);
  border-radius: 20px;
  padding: 20px;

  @media (min-width: $breakpoint-sm) {
    padding: 30px;
    max-width: 297px;
  }

  @media (min-width: $breakpoint-md) {
    padding: 30px 20px;
    max-width: initial;
    width: 100%;
    height: 100%;
  }

  @media (min-width: $breakpoint-lg) {
    padding: 20px;
  }

  @media (min-width: $breakpoint-xl) {
    padding: 30px;
  }


  &__header {
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    margin-bottom: 15px;

    @media (min-width: $breakpoint-lg) {
      font-size: 24px;
      margin-bottom: 40px;
    }
  }

  &__authors {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: $breakpoint-sm) {
      gap: 20px;
    }
  }

  &-author {
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (min-width: $breakpoint-md) {
      max-width: 230px;
    }

    @media (min-width: $breakpoint-lg) {
      max-width: 100%;
    }
  }

  &__name {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;

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

  &__description {
    color: var(--text-color-secondary);
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
}
</style>