<template>
  <button :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

type ButtonVariant = "primary" | "secondary";
// type ButtonSize = "xl" | "l" | "m";

interface Props {
  variant: ButtonVariant;
  // size?: ButtonSize;
}

const props = defineProps<Props>();

const buttonClasses = computed(() => ({
  primary: props.variant === "primary",
  secondary: props.variant === "secondary",
  // special: props.variant === "special",
  // "button__size-xl": props.size === "xl",
  // "button__size-l": props.size === "l",
  // "button__size-m": props.size === "m",
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