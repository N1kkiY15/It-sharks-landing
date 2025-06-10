<template>
<component
    :is="tag"
    :class="buttonClasses"
    :href="link"
    target="_blank"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">

type buttonVariant = "primary" | "secondary";
type ButtonTag = "button" | "a";

interface Props {
  variant: buttonVariant;
  tag?: ButtonTag;
  href?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "button",
});

const buttonClasses = computed(() => ({
  primary: props.variant === "primary",
  secondary: props.variant === "secondary",
}));

const link = computed(() => {
  return props.tag === 'a' ? props.href : undefined
})

</script>

<style scoped lang="scss">
.primary {
  padding: 7px 15px;
  background-color: var(--button-bg-color, color-mix(in srgb, var(--text-color) 10%, transparent));
  color: var(--button-text-color, var(--text-color));
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