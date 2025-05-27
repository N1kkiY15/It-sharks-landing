<template>
  <div class="team-menu" aria-label="Команда менторов">
    <article
        v-for="(item, index) in cards"
        :key="index"
        :id="`card-${index}`"
        class="team-menu__card"
        role="article"
      >

      <h3 class="team-menu__card-header">{{ item.header }}</h3>

      <div class="team-menu__card-authors" aria-label="Список менторов">
        <div
            v-for="(author, authorIndex) in item.authors"
            :key="authorIndex"
            role="listitem"
            :id="`card-${index}`"
        >

          <div class="team-menu__card-author">
            <h4 class="team-menu__card-name">{{ author.name }}</h4>
            <p class="team-menu__card-description">{{ author.description }}</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">

interface Author {
  name: string;
  description: string;
}

interface Card {
  header: string;
  authors: Author[];
}

const cards: Card[] = [
  {
    header: "Python разработка",
    authors: [
      {
        name: "Тимур",
        description: "Senior Python-разработчик с 6 годами опыта"
      },
      {
        name: "Алексей",
        description: "Senior python dev с 7 летним опытом, 2.5 года менторства"
      }
    ]
  },
  {
    header: "Mobile dev",
    authors: [
      {
        name: "Александр",
        description: "Kotlin senior разработчик с 5 летним опытом в разных областях, 1 год\n" +
            "          менторства"
      },
      {
        name: "Мария",
        description: "Flutter dev из Яндекса, 4 года опыта"
      }
    ]
  },
  {
    header: "Frontend",
    authors: [
      {
        name: "Иван",
        description: "Senior разработчик с 6 летним опытом, 2 года менторства, обучае \n" +
            "все самые популярные фреймворки, был опыт валютных удаленок и многоработничества"
      },
    ]
  },
  {
    header: "Golang",
    authors: [
      {
        name: "Матвей",
        description: "7 лет опыта, многоработничество, валютные удаленки до 1 млн. рублей на\n" +
            "руки, работал в крупных российских банках, 3 года менторства"
      },
    ]
  },
  {
    header: "Продакт менеджмент",
    authors: [
      {
        name: "Егор",
        description: "ПМ из Ozon, работал и в других бигтех компаниях"
      },
    ]
  },
  {
    header: "ML",
    authors: [
      {
        name: "Алексей",
        description: "ML senior инженер, большой опыт работы в крупных российских банках\n" +
            "          и e-com"
      },
    ]
  },

]
</script>


<style scoped lang="scss">
.team-menu {
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
  }

  @media (min-width: $breakpoint-lg) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 350px);
  }

  @media (min-width: $breakpoint-xl) {
    gap: 30px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &__card {
    display: flex;
    flex-direction: column;
    scroll-snap-align: center;
    flex: auto 0 0;
    max-width: 245px;
    border: 3px solid var(--card-color);
    color: var(--text-color);
    border-radius: 20px;
    padding: 20px;

    @media (min-width: $breakpoint-sm) {
      padding: 30px;
      max-width: 297px;
    }

    @media (min-width: $breakpoint-md) {
      padding: 30px 20px;
      max-width: initial;
      width: 100%;
      height: 100%;
    }

    @media (min-width: $breakpoint-lg) {
      padding: 20px;
    }

    @media (min-width: $breakpoint-xl) {
      padding: 30px;
    }


    &-header {
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      margin-bottom: 15px;

      @media (min-width: $breakpoint-lg) {
        font-size: 24px;
        margin-bottom: 40px;
      }
    }

    &-authors {
      display: flex;
      flex-direction: column;
      gap: 30px;

      @media (min-width: $breakpoint-sm) {
        gap: 20px;
      }
    }

    &-author {
      display: flex;
      flex-direction: column;
      gap: 5px;

      @media (min-width: $breakpoint-md) {
        max-width: 230px;
      }

      @media (min-width: $breakpoint-lg) {
        max-width: 100%;
      }
    }

    &-name {
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 20px;
      }
    }

    &-description {
      color: var(--text-color-secondary);
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      letter-spacing: -1%;

      @media (min-width: $breakpoint-sm) {
        font-size: 14px;
      }

      @media (min-width: $breakpoint-md) {
        font-size: 16px;
      }

      @media (min-width: $breakpoint-lg) {
        font-size: 20px;
      }
    }
  }

}

</style>