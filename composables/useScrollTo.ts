export const scrollToSection = () => {

  const AOS_OFFSET = 120;

  const scrollToEl = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - AOS_OFFSET;

      window.scrollTo({
        top: offsetPosition,
      });
    }
  };

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
