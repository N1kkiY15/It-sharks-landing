export function useDisplay(breakpoint: number) {

  const EnoughWidthToShow = ref<boolean>(false)

  const checkScreenSize = () => {
    EnoughWidthToShow.value = window.innerWidth < breakpoint
  }

  onMounted(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize)
  })

  return {
    EnoughWidthToShow
  }
}