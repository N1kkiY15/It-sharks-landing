<template>
  <div class="container">
    <DefaultHeader />
    <div class="default__container-page">
      <slot />
    </div>
    <DefautFooter />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  background-color: var(--bg-color);
  width: 100%;
  height: 100%;
  padding: 20px 330px 100px;
  font-family: 'Clash Display', arial, sans-serif;
}

</style>