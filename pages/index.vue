<template>
  <div class="cover">
    <div class="cover__heading">
      <div class="cover__title" aria-label="ONE TO ONE">
        <span class="cover__title-span" aria-hidden="true">
            ONE
        </span>
        <RightArrow aria-hidden="true"/>
        <span class="cover__title-span" aria-hidden="true">
            TO
        </span>
        <RightArrow aria-hidden="true"/>
        <span class="cover__title-span" aria-hidden="true">
            ONE
        </span>
      </div>
      <div class="cover__socials">
        <EmailButton />
        <TelegramButton />
      </div>
    </div>

    <h1 class="cover__header">
      <span class="cover__header-line">личное обучение</span>
      <span class="cover__header-line">менторы</span>
      <NuxtImg
          class="cover__image"
          src="/images/Shark.png"
          alt=""
          role="presentation"
      />
    </h1>


    <div class="cover__details">
      <RoundedContainer>
        <div class="cover__details-container">
          <p>Экспертиза</p>
          <RightArrowSmall/>
        </div>
      </RoundedContainer>

      <RoundedContainer>
        <div class="cover__details-container">
          <p>c 2019г.</p>
        </div>
      </RoundedContainer>
    </div>

    <h3 class="cover__exclusive">exclusive .</h3>


    <p class="cover__info">Python разработка, Mobile dev, Frontend, Golang, Product manager, ML</p>

    <nav class="cover__buttons">
      <div class="cover__buttons-more">
        <p class="cover__buttons-text">читать дальше</p>
        <RoundEl :style="{ 'width': '100px', 'height': '100px' }">
          <DoubleArrow/>
        </RoundEl>
      </div>

      <RoundedContainer class="cover__buttons-link">
        <button class="cover__details-container">
          <p class="cover__buttons-question">Кому подойдет ?</p>
          <LongArrow/>
        </button>
      </RoundedContainer>

    </nav>
  </div>

  <div class="about">

  </div>
</template>

<script setup lang="ts">
import TelegramIcon from "@assets/svg/TelegramIcon.vue";
import MailIcon from "@assets/svg/MailIcon.vue";
import RightArrow from "@assets/svg/RightArrow.vue";
import RightArrowSmall from "@assets/svg/RightArrowSmall.vue";
import DoubleArrow from "@assets/svg/DoubleArrow.vue";
import LongArrow from "@assets/svg/LongArrow.vue";
import EmailButton from "@components/EmailButton.vue";
import TelegramButton from "@components/TelegramButton.vue";


</script>

<style scoped lang="scss">
.cover {
  position: relative;
  margin-bottom: 100px;

  &__heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__title {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;

    &-span {
      font-weight: 400;
      font-size: 96px;
      line-height: 100%;
      letter-spacing: -2%;
      color: #F4F4F466;

    }
  }

  &__socials {
    display: flex;
    flex-direction: row;
    gap: 20px
  }

  &__header {
    position: relative;
    width: 100%;
    font-weight: 400;
    font-size: 126px;
    line-height: 100%;
    letter-spacing: -2%;
    color: var(--text-color);
    text-transform: uppercase;
    text-align: right;
    margin-bottom: 10px;

    &-line {
      display: block;
      width: 100%;

      &:first-child {
        position: relative;
        z-index: 2;
      }
    }
  }

  &__image {
    position: absolute;
    width: 502px;
    height: 397px;
    top: -20px;
    left: 304px;
  }

  &__info {
    color: #F4F4F4B2;
    max-width: 384px;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -1%;
    text-align: right;
    margin-left: auto;
    margin-bottom: 100px;
  }

  &__details {
    position: absolute;
    top: 300px;
    left: 0;
    display: flex;
    flex-direction: row;
    gap: 10px;

    &-container {
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: center;
      padding: 20px 30px;
    }
  }

  &__exclusive {
    position: absolute;
    left: 0;
    top: 380px;
    color: var(--text-color);
    font-weight: 500;
    font-size: 36px;
    line-height: 150%;
    letter-spacing: -1%;

  }

  &__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    &-more {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
    }

    &-text {
      color: var(--text-color);
      font-weight: 400;
      font-size: 20px;
      line-height: 140%;
      letter-spacing: -1%;
      max-width: 76px;
    }

    &-link {
      align-self: flex-end;

    }

    &-question {
      color: var(--accent-color);
      font-weight: 400;
      font-size: 20px;
      line-height: 100%;
      //padding: 20px 0px 20px 30px;
    }
  }

  @media (max-width: $breakpoint-xl) {
    &__title {
      &-span {
        font-size: 96px;
      }
    }

    &__header {
      font-size: 110px;
    }

    &__image {
      left: 270px;
    }

  }

  @media (max-width: $breakpoint-lg) {
    &__title {
      &-span {
        font-size: 80px;
      }
    }

    &__header {
      font-size: 94px;
    }

    &__image {
      left: 214px;
      width: 355px;
      height: 280.75px;
    }
  }

  @media (max-width: $breakpoint-md) {
    &__title {
      &-span {
        font-size: 64px;
      }
    }

    &__header {
      font-size: 64px;
    }

    &__image {
      left: 224px;
      width: 247px;
      height: 195px;
    }

    &__info {
      max-width: 308px;
      font-size: 16px;
      text-align: left;
    }

    &__buttons {
      &-text {
        font-size: 16px;
      }

      &-question {
        font-size: 16px;
      }
    }
  }

}
</style>