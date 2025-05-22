<template>
  <div class="header">
    <h1 class="header__heading">IT Sharks</h1>
    <div class="header__buttons">

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__heading {
    color: var(--text-color);
    font-size: 24px;
    font-weight: 600;
  }
}
</style>