<template>
  <div class="team">
    <TeamTitle @previous-card="handlePreviousCard" @next-card="handleNextCard"/>
    <TeamMenu/>
  </div>
</template>

<script setup lang="ts">
const currentCardIndex = ref<number>(0);
const CARDS_ID_IN_ARRAY = 5;

const handlePreviousCard = (): void => {
  if (currentCardIndex.value !== 0)
    currentCardIndex.value--;
  scrollToCard();
};

const handleNextCard = (): void => {
  if (currentCardIndex.value !== CARDS_ID_IN_ARRAY)
    currentCardIndex.value++;
  scrollToCard();
};

const scrollToCard = (): void => {
  const cardElement = document.getElementById(`card-${currentCardIndex.value}`);
  if (cardElement) {
    cardElement.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
};
</script>

<style scoped lang="scss">
.team {
  font-family: "Clash Display", arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;

  @media (min-width: $breakpoint-sm) {
    gap: 40px;
  }

  @media (min-width: $breakpoint-md) {
    gap: 50px;
  }

  @media (min-width: $breakpoint-lg) {
    gap: 100px;
  }
}
</style>