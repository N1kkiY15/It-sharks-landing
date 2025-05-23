<template>
    <div class="container" :style="customStyle">
      <slot />
    </div>
</template>


<script lang="ts" setup >

const props = defineProps<{
  style?: Record<string, string>;
}>();

const customStyle = computed(() => ({
  ...props.style
}));
</script>

<style scoped lang="scss">
.container {
  display: inline-flex;
  flex-direction: row;
  gap: 30px;
  background-color: color-mix(in srgb, var(--text-color) 10%, transparent);
  border-radius: 500px;
  color: var(--text-color);
}
</style>