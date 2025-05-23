<template>
  <button class="rounded-el" :style="customStyle">
    <slot/>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  style?: Record<string, string>;
}>();

const customStyle = computed(() => ({
  ...props.style
}));
</script>

<style scoped lang="scss">
.rounded-el {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: color-mix(in srgb, var(--text-color) 10%, transparent);
  height: 70px;
  width: 70px;
  border-radius: 50%;
}
</style>