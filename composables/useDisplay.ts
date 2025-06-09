export function useDisplay(breakpoint: number) {

  const enoughWidthToShow = ref<boolean>(false)

  const checkScreenSize = () => {
    enoughWidthToShow.value = window.innerWidth < breakpoint
  }

  onMounted(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize)
  })

  return {
    enoughWidthToShow
  }
}