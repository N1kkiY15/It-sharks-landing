import {ref} from 'vue';

export function useCardNavigation(totalCards: number, cardTypePrefix: string) {
    const currentCardIndex = ref(0);

    const scrollToCard = (): void => {
        const cardElement = document.getElementById(`${cardTypePrefix}-${currentCardIndex.value}`);
        if (cardElement) {
            cardElement.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    };

    const handlePreviousCard = (): void => {
        if (currentCardIndex.value !== 0) {
            currentCardIndex.value--;
            scrollToCard();
        }
        console.log("12:", 12)
    };

    const handleNextCard = (): void => {
        if (currentCardIndex.value !== totalCards) {
            currentCardIndex.value++;
            scrollToCard();
        }
        console.log("13:", 13)
    };

    return {
        handlePreviousCard,
        handleNextCard
    };
}