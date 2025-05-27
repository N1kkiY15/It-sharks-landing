<template>
  <a :class="linkClasses">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">

type linkVariant = "primary" | "secondary";

interface Props {
  variant: linkVariant;
}

const props = defineProps<Props>();

const linkClasses = computed(() => ({
  primary: props.variant === "primary",
  secondary: props.variant === "secondary",
}));

</script>

<style scoped lang="scss">
.primary {
  padding: 7px 15px;
  background-color: color-mix(in srgb, var(--text-color) 10%, transparent);
  border-radius: 500px;

  @media (min-width: $breakpoint-md) {
    padding: 15px 20px;
  }

  @media (min-width: $breakpoint-lg) {
    padding: 20px 30px;
  }
}

.secondary {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: color-mix(in srgb, var(--text-color) 10%, transparent);
  height: 70px;
  width: 70px;
  border-radius: 50%;
}
</style>