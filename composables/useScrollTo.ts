export const scrollToSection = () => {
const scrollToEl = (sectionId: string) => {

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView()
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return {
    scrollToEl,
    scrollToTop
  }
}
