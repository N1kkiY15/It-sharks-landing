<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    gap: 5px;
    background-color: var(--el-bg-color);
    border-radius: 500px;

    @media (min-width: $breakpoint-md) {
      padding: 10px 20px;
    }
  }
</style>
