export default defineNuxtPlugin((nuxtApp) => {
  const XXXL_SCREEN_WIDTH = 1920
  const XXL_SCREEN_WIDTH = 1440
  const XL_SCREEN_WIDTH = 1024
  const LG_SCREEN_WIDTH = 960
  const MD_SCREEN_WIDTH = 768
  const SM_SCREEN_WIDTH = 480
  const xxl = ref(false);
  const xl = ref(false);
  const lg = ref(false);
  const md = ref(false);
  const sm = ref(false);

  const onResize = () => {
    xxl.value = window.innerWidth >= XXL_SCREEN_WIDTH
    xl.value = window.innerWidth >= XL_SCREEN_WIDTH
    lg.value = window.innerWidth >= LG_SCREEN_WIDTH
    md.value = window.innerWidth >= MD_SCREEN_WIDTH
    sm.value = window.innerWidth < SM_SCREEN_WIDTH
  }

    window.addEventListener('resize', onResize)

    onResize()

    const breakpoints = reactive({
      xxl,
      xl,
      lg,
      md,
      sm,
    })

    nuxtApp.provide('breakpoints', breakpoints)
  })
