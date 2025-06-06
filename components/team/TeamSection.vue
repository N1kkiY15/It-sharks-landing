<template>
  <section class="team">

    <TeamTitle
      @previous-card="() => carousel?.prev()"
      @next-card="() => carousel?.next()"
    />

    <Carousel
      v-if="isMobileScreen"
      class="team__carousel"
      ref="carousel"
      items-to-show="auto"
      :wrap-around="true"
      :snap-align="'center'"
      :gap="15"
    >
      <Slide v-for="(card, index) in cards" :key="index">
        <TeamCard :card="card" class="team__carousel-item" />
      </Slide>
    </Carousel>

    <div v-else class="team__cards">
      <TeamCard
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { TeamCard } from '@/types'
  import { useCardNavigation } from '@/composables/useScrollToCard'

  const carousel = ref()
  const cards: TeamCard[] = [
    {
      id: 0,
      header: 'Python разработка',
      authors: [
        {
          name: 'Тимур',
          description: `Senior Python-разработчик с 6 годами опыта`,
        },
        {
          name: 'Алексей',
          description: `Senior python dev с 7 летним опытом, 2.5 года менторства`,
        },
      ],
    },
    {
      id: 1,
      header: 'Mobile dev',
      authors: [
        {
          name: 'Александр',
          description: `Kotlin senior разработчик с 5 летним опытом в разных областях, 1 год +
                      менторства`,
        },
        {
          name: 'Мария',
          description: `Flutter dev из Яндекса, 4 года опыта `,
        },
      ],
    },
    {
      id: 2,
      header: 'Frontend',
      authors: [
        {
          name: 'Иван',
          description: `Senior разработчик с 6 летним опытом, 2 года менторства, обучает
            все самые популярные фреймворки, был опыт валютных удаленок и многоработничества`,
        },
      ],
    },
    {
      id: 3,
      header: 'Golang',
      authors: [
        {
          name: 'Матвей',
          description: `7 лет опыта, многоработничество, валютные удаленки до 1 млн. рублей на
            руки, работал в крупных российских банках, 3 года менторства`,
        },
      ],
    },
    {
      id: 4,
      header: 'Продакт менеджмент',
      authors: [
        {
          name: 'Егор',
          description: `ПМ из Ozon, работал и в других бигтех компаниях`,
        },
      ],
    },
    {
      id: 5,
      header: 'ML',
      authors: [
        {
          name: 'Алексей',
          description: `ML senior инженер, большой опыт работы в крупных российских банках
                      и e-com`,
        },
      ],
    },

  ]
  const isMobileScreen = ref<boolean>(false)
  const BREAKPOINT_MD = 768

  const checkScreenSize = () => {
    isMobileScreen.value = window.innerWidth < BREAKPOINT_MD
  }

  onMounted(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize)

    if (process.client) {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  })

</script>

<style scoped lang="scss">
  .team {
    font-family: "Clash Display", arial, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    @media (min-width: $breakpoint-sm) {
      gap: 40px;
    }
    @media (min-width: $breakpoint-md) {
      gap: 50px;
    }
    @media (min-width: $breakpoint-lg) {
      gap: 100px;
    }

    &__carousel {
      overflow-x: hidden;
      width: calc(100% + 2 * 15px);
      margin-left: calc(-1 * 15px);
      padding: 0 30px;


      @media (min-width: $breakpoint-sm) {
        width: calc(100% + 2 * 15px);
        margin-left: calc(-1 * 15px);
        padding: 0;
      }

      :deep(.carousel__viewport) {
        overflow: visible;
      }

      &-item {
        min-height: 207px;

        @media (min-width: $breakpoint-sm) {
          min-height: 256px;
        }
      }
    }

    &__cards {
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: calc(100% + 2 * 15px);
      margin-left: calc(-1 * 15px);
      padding: 0 15px;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;

      @media (min-width: $breakpoint-md) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 284px);
        width: 100%;
        padding: 0;
        margin-left: 0;
      }

      @media (min-width: $breakpoint-lg) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, minmax(350px, auto));
      }

      @media (min-width: $breakpoint-xl) {
        gap: 30px;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>