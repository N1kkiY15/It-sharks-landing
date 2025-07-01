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
  import type { buttonVariant } from '~/types'

  type ButtonTag = 'button' | 'a';

  interface Props {
    variant: buttonVariant;
    tag?: ButtonTag;
    href?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    tag: 'button',
  })

  const buttonClasses = computed(() => ({
    primary: props.variant === 'primary',
    secondary: props.variant === 'secondary',
    tertiary: props.variant === 'tertiary',
  }))

  const link = computed(() => {
    return props.tag === 'a' ? props.href : undefined
  })

</script>

<style scoped lang="scss">

  @mixin button-base {
    padding: 7px 15px;
    border-radius: 500px;
    transition: background-color 0.2s, color 0.2s;

    @media (min-width: $breakpoint-md) {
      padding: 15px 20px;
    }

    @media (min-width: $breakpoint-lg) {
      padding: 20px 30px;
    }
  }

  .primary {
    @include button-base;
    background-color: var(--el-bg-color);
    color: var(--accent-color);

    &:hover {
      background-color: var(--hover-el-bg-cover);

      &:deep(svg) {
        color: var(--accent-color-hover);
      }
    }

    &:active {
      background-color: var(--accent-color);
      color: var(--bg-color);

      :deep(svg) {
        color: var(--bg-color);
      }
    }
  }

  .secondary {
    @include button-base;
    background-color: var(--accent-color);
    color: var(--bg-color);

    &:hover {
      background-color: var(--hover-accent-color);
      color: var(--text-color);

      &:deep(svg) {
        color: var(--text-color);
      }
    }

    &:active {
      background-color: var(--text-color);
      color: var(--bg-color);

      :deep(svg) {
        color: var(--bg-color);
      }
    }
  }

  .tertiary {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--el-bg-color);
    color: var(--accent-color);
    height: 70px;
    width: 70px;
    border-radius: 50%;

    &:hover {
      background-color: var(--hover-el-bg-cover);
    }

    &:active {
      background-color: var(--el-bg-color);

      &:deep(svg) {
        color: var(--text-color);
      }
    }
  }
</style>