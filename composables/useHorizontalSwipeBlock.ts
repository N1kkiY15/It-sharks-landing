import { ref } from 'vue'

export function useHorizontalSwipeBlock() {
  const startX = ref(0)
  const startY = ref(0)
  const isHorizontal = ref(false)

  function onTouchStart(e: TouchEvent) {
    const touch = e.touches[0]
    startX.value = touch.clientX
    startY.value = touch.clientY
    isHorizontal.value = false
  }

  function onTouchMove(e: TouchEvent) {
    if (e.touches.length > 1) return
    const touch = e.touches[0]
    const dx = Math.abs(touch.clientX - startX.value)
    const dy = Math.abs(touch.clientY - startY.value)
    if (!isHorizontal.value && (dx > 5 || dy > 5)) {
      isHorizontal.value = dx > dy
    }
    if (isHorizontal.value) {
      e.preventDefault()
    }
  }

  function onTouchEnd() {
    isHorizontal.value = false
  }

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  }
} 